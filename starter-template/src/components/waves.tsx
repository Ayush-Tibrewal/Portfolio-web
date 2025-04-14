"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  // Create the noise generator instance
  const noise = createNoise3D();
  // canvas dimensions, noise time counter, and animation frame id
  let w: number, h: number, nt: number, animationId: number;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Return the appropriate speed multiplier
  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  // Initialize the canvas and start the render loop.
  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    // Apply blur filter for modern browsers
    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    // Adjust canvas size on window resize
    window.onresize = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    // Use provided colors or default palette
    const waveColors = colors ?? [
      "#38bdf8",
      "#818cf8",
      "#c084fc",
      "#e879f9",
      "#22d3ee",
    ];

    // Draw the waves using simplex noise
    const drawWave = (n: number) => {
      nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        // Draw a smooth wave across the width of the canvas
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    // Render loop: first draw the full opaque background then the waves
    const render = () => {
      // Draw full opacity background
      ctx.globalAlpha = 1;
      ctx.fillStyle = backgroundFill || "black";
      ctx.fillRect(0, 0, w, h);

      // Draw waves with specified opacity so they appear above the background
      ctx.globalAlpha = waveOpacity;
      drawWave(5);

      animationId = requestAnimationFrame(render);
    };

    render();
  };

  // Initialize the canvas when component mounts and cleanup on unmount.
  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle Safari-specific style issues
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
