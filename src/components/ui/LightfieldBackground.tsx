"use client";

import React, { useRef, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

// Parámetros de nubes
const CLOUD_COUNT = 7;
const CLOUD_MIN_WIDTH = 180;
const CLOUD_MAX_WIDTH = 340;
const CLOUD_MIN_HEIGHT = 60;
const CLOUD_MAX_HEIGHT = 120;
const CLOUD_MIN_OPACITY = 0.13;
const CLOUD_MAX_OPACITY = 0.22;
const CLOUD_MIN_SPEED = 0.08;
const CLOUD_MAX_SPEED = 0.18;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function createCloud(canvasWidth: number, canvasHeight: number) {
  return {
    x: Math.random() * canvasWidth,
    y: randomBetween(0.05, 0.55) * canvasHeight,
    width: randomBetween(CLOUD_MIN_WIDTH, CLOUD_MAX_WIDTH),
    height: randomBetween(CLOUD_MIN_HEIGHT, CLOUD_MAX_HEIGHT),
    opacity: randomBetween(CLOUD_MIN_OPACITY, CLOUD_MAX_OPACITY),
    speed: randomBetween(CLOUD_MIN_SPEED, CLOUD_MAX_SPEED),
    shape: Array.from({ length: 5 + Math.floor(Math.random() * 3) }, () => ({
      dx: randomBetween(-0.3, 0.3),
      dy: randomBetween(-0.2, 0.2),
      r: randomBetween(0.18, 0.38),
    })),
  };
}

export default function LightfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme !== "light") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId: number;
    let clouds: any[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      clouds = Array.from({ length: CLOUD_COUNT }, () => createCloud(canvas.width, canvas.height));
    }
    resize();
    window.addEventListener("resize", resize);

    function drawGradient() {
      if (!ctx || !canvas) return;
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, "#b3e0ff"); // top: azul celeste
      grad.addColorStop(1, "#eaf6ff"); // bottom: azul muy claro
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawCloud(cloud: any) {
      if (!ctx) return;
      ctx.save();
      ctx.globalAlpha = cloud.opacity;
      ctx.translate(cloud.x, cloud.y);
      ctx.scale(cloud.width, cloud.height);
      ctx.beginPath();
      for (let i = 0; i < cloud.shape.length; i++) {
        const { dx, dy, r } = cloud.shape[i];
        ctx.moveTo(dx, dy);
        ctx.arc(dx, dy, r, 0, 2 * Math.PI);
      }
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "#fff";
      ctx.shadowBlur = 32;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();
    }

    function draw() {
      if (!canvas) return;
      drawGradient();
      for (const cloud of clouds) {
        drawCloud(cloud);
        cloud.x += cloud.speed;
        if (cloud.x - cloud.width > canvas.width) {
          // Reaparece por la izquierda
          Object.assign(cloud, createCloud(canvas.width, canvas.height), { x: -cloud.width });
        }
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  if (theme !== "light") return null;
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
      tabIndex={-1}
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}
    />
  );
}
