import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
}

export function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0,
      h = 0;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Build constellation as { } brackets
      const count = 160;
      particles = [];
      for (let i = 0; i < count; i++) {
        // Distribute on two bracket curves
        const side = i < count / 2 ? -1 : 1;
        const t = (i % (count / 2)) / (count / 2);
        const ang = (t - 0.5) * Math.PI * 1.1;
        const r = Math.min(w, h) * 0.35;
        const cx = w / 2 + side * w * 0.13;
        const cy = h / 2;
        const ox = cx + side * Math.cos(ang) * r * 0.45;
        const oy = cy + Math.sin(ang) * r;
        particles.push({
          x: ox + (Math.random() - 0.5) * 18,
          y: oy + (Math.random() - 0.5) * 18,
          ox,
          oy,
          vx: 0,
          vy: 0,
        });
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      // Update
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        const R = 130;
        if (d2 < R * R) {
          const d = Math.sqrt(d2) || 1;
          const force = ((R - d) / R) * 1.6;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
        }
        // spring back
        p.vx += (p.ox - p.x) * 0.012;
        p.vy += (p.oy - p.y) * 0.012;
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;
      }
      // Lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i],
            b = particles[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 80 * 80) {
            const alpha = (1 - Math.sqrt(d2) / 80) * 0.22;
            ctx.strokeStyle = `rgba(245,240,232,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // Points
      for (const p of particles) {
        const dx = p.x - p.ox,
          dy = p.y - p.oy;
        const disturbed = Math.min(1, Math.sqrt(dx * dx + dy * dy) / 30);
        ctx.fillStyle =
          disturbed > 0.4
            ? `rgba(200,255,87,${0.5 + disturbed * 0.4})`
            : `rgba(245,240,232,${0.55})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />;
}
