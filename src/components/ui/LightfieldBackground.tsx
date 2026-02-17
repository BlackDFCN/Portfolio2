"use client";
import React, { useRef, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function LightfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme !== "light") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId: number;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Draw a soft blue-white gradient background
    function drawGradient() {
      if (!ctx || !canvas) return;
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, "#eaf6ff"); // top: azul muy claro
      grad.addColorStop(1, "#ffffff"); // bottom: blanco
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Draw floating, soft, blurry circles ("bokeh")
    function drawBokeh() {
      if (!ctx || !canvas) return;
      const CIRCLE_COUNT = 24;
      for (let i = 0; i < CIRCLE_COUNT; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = 40 + Math.random() * 60;
        ctx.globalAlpha = 0.08 + Math.random() * 0.08;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = ["#b3e0ff", "#e0f7fa", "#fff", "#cce6ff"][Math.floor(Math.random()*4)];
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 24;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;
    }

    function draw() {
      drawGradient();
      drawBokeh();
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  // Solo renderiza el canvas en modo claro
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
