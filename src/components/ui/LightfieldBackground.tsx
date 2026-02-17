"use client";

import React, { useRef, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";


// Parámetros de "estrellas" diurnas (simétrico al modo oscuro)
const STAR_COUNT = 120;
const STAR_MIN_SIZE = 0.5;
const STAR_MAX_SIZE = 1.5;
const STAR_MIN_OPACITY = 0.18;
const STAR_MAX_OPACITY = 0.38;
const STAR_TWINKLE_SPEED = 0.015;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function createStar() {
  return {
    x: Math.random(),
    y: Math.random(),
    size: randomBetween(STAR_MIN_SIZE, STAR_MAX_SIZE),
    opacity: randomBetween(STAR_MIN_OPACITY, STAR_MAX_OPACITY),
    twinkle: Math.random() > 0.5 ? 1 : -1,
    speed: randomBetween(0.005, STAR_TWINKLE_SPEED),
    color: Math.random() > 0.5 ? '#b3e0ff' : '#fff',
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
    let stars: any[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: STAR_COUNT }, () => createStar());
    }
    resize();
    window.addEventListener("resize", resize);

    function drawGradient() {
      if (!ctx || !canvas) return;
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, "#fff"); // top: blanco
      grad.addColorStop(1, "#eaf6ff"); // bottom: azul muy claro
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
      if (!ctx || !canvas) return;
      drawGradient();
      for (const star of stars) {
        // Twinkle
        star.opacity += star.twinkle * star.speed;
        if (star.opacity > STAR_MAX_OPACITY) {
          star.opacity = STAR_MAX_OPACITY;
          star.twinkle = -1;
        } else if (star.opacity < STAR_MIN_OPACITY) {
          star.opacity = STAR_MIN_OPACITY;
          star.twinkle = 1;
          // Randomly move star to new position
          star.x = Math.random();
          star.y = Math.random();
        }
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(
          star.x * canvas.width,
          star.y * canvas.height,
          star.size,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;
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
