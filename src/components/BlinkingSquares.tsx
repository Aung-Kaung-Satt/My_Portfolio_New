/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * React Bits Pro - Blinking Squares Background Component
 * A grid of sleek digital square cells that softly twinkle with randomized
 * oscillation phases, gentle glow, and mouse proximity interaction.
 */

import React, { useRef, useEffect, useState } from "react";

export interface BlinkingSquaresProps {
  squareSize?: number;
  gap?: number;
  twinkleSpeed?: number;
  minOpacity?: number;
  maxOpacity?: number;
  squareColor?: string;
  borderColor?: string;
  className?: string;
}

interface Cell {
  col: number;
  row: number;
  phase: number;
  speed: number;
  brightness: number;
}

export const BlinkingSquares: React.FC<BlinkingSquaresProps> = ({
  squareSize = 36,
  gap = 4,
  twinkleSpeed = 0.002,
  minOpacity = 0.05,
  maxOpacity = 0.65,
  squareColor = "rgba(129, 140, 248, 1)", // Indigo-400
  borderColor = "rgba(51, 65, 85, 0.35)",  // Slate-700
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let cells: Cell[] = [];
    const cellSize = squareSize + gap;

    const initCells = (width: number, height: number) => {
      const numCols = Math.ceil(width / cellSize) + 1;
      const numRows = Math.ceil(height / cellSize) + 1;
      const newCells: Cell[] = [];

      for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
          newCells.push({
            col: c,
            row: r,
            phase: Math.random() * Math.PI * 2,
            speed: 0.6 + Math.random() * 1.4,
            brightness: Math.random(),
          });
        }
      }
      cells = newCells;
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      initCells(window.innerWidth, window.innerHeight);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    let startTime = performance.now();

    const render = (currentTime: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const elapsed = currentTime - startTime;

      ctx.clearRect(0, 0, width, height);

      const mouse = mousePosRef.current;

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const x = cell.col * cellSize;
        const y = cell.row * cellSize;

        // Calculate twinkling oscillation
        let oscillation = 0.5;
        if (!prefersReducedMotion) {
          oscillation = 0.5 + 0.5 * Math.sin(elapsed * twinkleSpeed * cell.speed + cell.phase);
        }

        let alpha = minOpacity + (maxOpacity - minOpacity) * (oscillation * cell.brightness);

        // Distance to mouse pointer for interactive bloom
        if (mouse) {
          const dx = mouse.x - (x + squareSize / 2);
          const dy = mouse.y - (y + squareSize / 2);
          const dist = Math.hypot(dx, dy);
          if (dist < 180) {
            const proximityBoost = (1 - dist / 180) * 0.45;
            alpha = Math.min(1, alpha + proximityBoost);
          }
        }

        // Draw individual square background fill
        ctx.save();
        ctx.fillStyle = squareColor;
        ctx.globalAlpha = alpha;
        ctx.fillRect(x, y, squareSize, squareSize);

        // Draw square border outline
        ctx.strokeStyle = borderColor;
        ctx.globalAlpha = 0.4 + alpha * 0.4;
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, squareSize, squareSize);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [squareSize, gap, twinkleSpeed, minOpacity, maxOpacity, squareColor, borderColor, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
};

export default BlinkingSquares;
