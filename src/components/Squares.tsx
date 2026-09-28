/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * React Bits - Squares Background Component
 * Source reference: https://reactbits.dev/backgrounds/squares
 */

import React, { useRef, useEffect, useState } from "react";

export interface SquaresProps {
  direction?: "diagonal" | "up" | "right" | "down" | "left";
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  className?: string;
}

interface HoveredCell {
  col: number;
  row: number;
  alpha: number;
}

export const Squares: React.FC<SquaresProps> = ({
  direction = "right",
  speed = 0.5,
  borderColor = "#e2e8f0",
  squareSize = 40,
  hoverFillColor = "rgba(99, 102, 241, 0.15)",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredCellsRef = useRef<HoveredCell[]>([]);
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

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
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

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // Update grid movement offset if not reduced motion
      if (!prefersReducedMotion) {
        switch (direction) {
          case "right":
            gridOffset.current.x = (gridOffset.current.x + speed) % squareSize;
            break;
          case "left":
            gridOffset.current.x = (gridOffset.current.x - speed + squareSize) % squareSize;
            break;
          case "up":
            gridOffset.current.y = (gridOffset.current.y - speed + squareSize) % squareSize;
            break;
          case "down":
            gridOffset.current.y = (gridOffset.current.y + speed) % squareSize;
            break;
          case "diagonal":
            gridOffset.current.x = (gridOffset.current.x + speed) % squareSize;
            gridOffset.current.y = (gridOffset.current.y + speed) % squareSize;
            break;
        }
      }

      const offsetX = gridOffset.current.x;
      const offsetY = gridOffset.current.y;

      const numCols = Math.ceil(width / squareSize) + 2;
      const numRows = Math.ceil(height / squareSize) + 2;

      // Handle hover interactions
      if (mousePosRef.current) {
        const mouseX = mousePosRef.current.x;
        const mouseY = mousePosRef.current.y;

        const currentCol = Math.floor((mouseX - offsetX) / squareSize);
        const currentRow = Math.floor((mouseY - offsetY) / squareSize);

        // Add or refresh hovered cell
        const existingIdx = hoveredCellsRef.current.findIndex(
          (c) => c.col === currentCol && c.row === currentRow
        );

        if (existingIdx !== -1) {
          hoveredCellsRef.current[existingIdx].alpha = 1;
        } else {
          hoveredCellsRef.current.push({
            col: currentCol,
            row: currentRow,
            alpha: 1,
          });
        }
      }

      // Draw hovered highlighted cells with soft fade-out trail
      hoveredCellsRef.current = hoveredCellsRef.current
        .map((cell) => ({
          ...cell,
          alpha: cell.alpha - 0.02,
        }))
        .filter((cell) => cell.alpha > 0);

      hoveredCellsRef.current.forEach((cell) => {
        const cellX = cell.col * squareSize + offsetX;
        const cellY = cell.row * squareSize + offsetY;

        ctx.save();
        ctx.fillStyle = hoverFillColor;
        ctx.globalAlpha = Math.max(0, cell.alpha);
        ctx.fillRect(cellX, cellY, squareSize, squareSize);
        ctx.restore();
      });

      // Draw grid lines
      ctx.save();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let col = -1; col < numCols; col++) {
        const x = col * squareSize + offsetX;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let row = -1; row < numRows; row++) {
        const y = row * squareSize + offsetY;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [direction, speed, borderColor, squareSize, hoverFillColor, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
};

export default Squares;

