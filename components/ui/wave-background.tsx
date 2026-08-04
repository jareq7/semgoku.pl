"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

/**
 * Animowane tło z falami (canvas). Czyta kolory z motywu (--primary itd.).
 * intensity="subtle" — stonowane, do użycia ZA treścią hero.
 */
export function WaveBackground({
  intensity = "subtle",
  className = "",
}: {
  intensity?: "full" | "medium" | "subtle";
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const lvl =
      intensity === "full"
        ? { amp: 1, opacity: 1, lineWidth: 2.5, shadow: 35, mouse: 70 }
        : intensity === "medium"
        ? { amp: 0.8, opacity: 0.92, lineWidth: 2.1, shadow: 30, mouse: 55 }
        : { amp: 0.55, opacity: 0.62, lineWidth: 1.6, shadow: 22, mouse: 40 };
    const ampScale = lvl.amp;
    const opacityScale = lvl.opacity;
    const lineWidth = lvl.lineWidth;
    const shadow = lvl.shadow;

    let animationId: number;
    let time = 0;

    const resolveColor = (variables: string[], alpha = 1) => {
      const rootStyles = getComputedStyle(document.documentElement);
      const tempEl = document.createElement("div");
      tempEl.style.cssText =
        "position:absolute;visibility:hidden;width:1px;height:1px";
      document.body.appendChild(tempEl);
      let color = `rgba(255,255,255,${alpha})`;
      for (const variable of variables) {
        const value = rootStyles.getPropertyValue(variable).trim();
        if (value) {
          tempEl.style.backgroundColor = `var(${variable})`;
          const computed = getComputedStyle(tempEl).backgroundColor;
          if (computed && computed !== "rgba(0, 0, 0, 0)") {
            const m = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            color = m ? `rgba(${m[1]},${m[2]},${m[3]},${alpha})` : computed;
            break;
          }
        }
      }
      document.body.removeChild(tempEl);
      return color;
    };

    let palette: WaveConfig[] = [];
    const buildPalette = () => {
      palette = [
        { offset: 0, amplitude: 70 * ampScale, frequency: 0.003, color: resolveColor(["--primary"], 0.8), opacity: 0.4 * opacityScale },
        { offset: Math.PI / 2, amplitude: 90 * ampScale, frequency: 0.0026, color: resolveColor(["--accent", "--primary"], 0.7), opacity: 0.32 * opacityScale },
        { offset: Math.PI, amplitude: 60 * ampScale, frequency: 0.0034, color: resolveColor(["--primary"], 0.5), opacity: 0.28 * opacityScale },
        { offset: Math.PI * 1.5, amplitude: 80 * ampScale, frequency: 0.0022, color: resolveColor(["--foreground"], 0.18), opacity: 0.2 * opacityScale },
      ];
    };
    buildPalette();

    const observer = new MutationObserver(buildPalette);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mouseInfluence = prefersReduced ? 6 : lvl.mouse;
    const influenceRadius = prefersReduced ? 160 : 320;
    const smoothing = prefersReduced ? 0.04 : 0.1;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    const recenter = () => {
      const c = { x: canvas.width / 2, y: canvas.height / 2 };
      mouseRef.current = c;
      targetMouseRef.current = c;
    };
    const onResize = () => {
      resize();
      recenter();
    };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      targetMouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    resize();
    recenter();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);

    const drawWave = (wave: WaveConfig) => {
      ctx.save();
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 4) {
        const dx = x - mouseRef.current.x;
        const dy = canvas.height / 2 - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / influenceRadius);
        const mouseEffect =
          influence * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset);
        const y =
          canvas.height / 2 +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45) +
          mouseEffect;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = wave.color;
      ctx.globalAlpha = wave.opacity;
      ctx.shadowBlur = shadow;
      ctx.shadowColor = wave.color;
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      time += 1;
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      palette.forEach(drawWave);
      animationId = window.requestAnimationFrame(animate);
    };
    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
