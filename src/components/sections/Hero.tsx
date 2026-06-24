import { useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, Environment, useAnimations } from "@react-three/drei";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { ParticleCanvas } from "@/components/layout/ParticleCanvas";
import modelUrl from "@/assets/3d-model/hello-world.glb?url";

const ROLES = ["Full-Stack Developer", "Systems Thinker", "Interface Craftsman", "Problem Solver"];

const MARQUEE = [
  "DESIGN ENGINEER",
  "★",
  "SHIPS FAST",
  "★",
  "FROM SCHEMA TO PIXEL",
  "★",
  "OPEN TO WORK",
  "★",
  "JHAPA · NEPAL",
  "★",
];

function Scramble({ word }: { word: string }) {
  const [text, setText] = useState(word);
  useEffect(() => {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let frame = 0;
    let id = 0;
    const scramble = () => {
      const out = word
        .split("")
        .map((c, i) => (frame > i * 2 ? c : chars[Math.floor(Math.random() * chars.length)]))
        .join("");
      setText(out);
      frame++;
      if (frame < word.length * 2 + 4) id = window.setTimeout(scramble, 35);
    };
    scramble();
    return () => clearTimeout(id);
  }, [word]);
  return <>{text}</>;
}

function Model({ url }: { url: string }) {
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    // Play first animation if available
    const firstAction = Object.values(actions)[0];
    if (firstAction) {
      firstAction.fadeIn(0.5).play();
    }
  }, [actions]);

  // Subtle floating effect without rotation
  useFrame((state) => {
    if (scene) {
      scene.position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <primitive
      object={scene}
      scale={4.5}
      position={[0, -2.4, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i: number) => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kathmandu",
        }),
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-dvh pt-0 pb-24 px-6 lg:px-10 overflow-hidden">
      {/* Background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink-light) 1px, transparent 1px), linear-gradient(90deg, var(--ink-light) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-(--primary) opacity-[0.08] blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-accent opacity-[0.10] blur-[120px]" />

      <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: EASE_OUT_EXPO }}
            className="inline-flex items-center gap-3 mb-8 border border-(--border) rounded-full pl-2 pr-4 py-1.5 bg-(--bg-2)/60 backdrop-blur"
          >
            <span className="inline-flex items-center gap-1.5 bg-(--primary)/15 text-(--primary) text-[10px] font-mono uppercase tracking-[0.18em] px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-(--primary) pulse-dot" />
              {time}
            </span>
            <span className="font-mono text-[11px] text-muted uppercase tracking-[0.14em]">Jhapa · Nepal</span>
          </motion.div>

          <h1
            className="font-display font-bold text-(--ink-light) leading-[0.88] tracking-[-0.045em] mb-6"
            style={{ fontSize: "clamp(52px, 8vw, 132px)" }}
          >
            {["DIWAKAR", "RAJBANSHI"].map((line, li) => (
              <div key={line} className="flex flex-wrap">
                {line.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + li * 0.25 + i * 0.035, duration: 0.7, ease: EASE_OUT_EXPO }}
                    className={`inline-block ${li === 1 ? "text-gradient-lime" : ""}`}
                    style={{ transformOrigin: "50% 50% -20px" }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </div>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="font-mono text-[11px] text-muted uppercase tracking-[0.18em]">// role</span>
            <span
              className="font-display font-medium text-(--ink-light) flex items-center"
              style={{ fontSize: "clamp(18px, 2vw, 26px)" }}
            >
              <Scramble key={roleIdx} word={ROLES[roleIdx]} />
              <span className="text-(--primary) blink ml-1">_</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="font-body font-light text-[17px] text-muted max-w-[520px] leading-[1.75] mb-10"
          >
            I build high-performance web applications with obsessive attention to detail — from database schema to pixel-perfect UI. Currently open to full-time roles and selective freelance work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9, type: "spring", stiffness: 200, damping: 18 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a
              href="#work"
              data-cursor="link"
              className="group inline-flex items-center gap-2 bg-(--primary) text-(--ink) font-display font-medium text-[15px] px-6 py-3.5 rounded-2xl clay-md hover:translate-y-[-2px] transition-transform"
            >
              View My Work
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT — 3D Model */}
        <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center">
          <ParticleCanvas />

          <div className="absolute inset-0 z-10">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 45 }}>
              <Suspense fallback={null}>
                <PresentationControls
                  global
                  zoom={0.8}
                  snap
                  rotation={[0, 0, 0]}
                  polar={[-Math.PI / 3, Math.PI / 3]}
                  azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                >
                  <Stage environment="city" intensity={0.6} shadows="contact">
                    <Model url={modelUrl} />
                  </Stage>
                </PresentationControls>
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 right-0 z-20 flex items-center gap-3 bg-(--bg-2)/60 backdrop-blur border border-(--border) px-4 py-2 rounded-2xl"
          >
            <div className="w-2 h-2 rounded-full bg-(--primary) pulse-dot" />
            <span className="font-mono text-[10px] text-(--ink-light) uppercase tracking-[0.2em]">Interative 3D Experience</span>
          </motion.div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative mt-16 lg:mt-20 border-y border-(--border) overflow-hidden py-4">
        <div className="flex whitespace-nowrap marquee">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
            <span
              key={i}
              className={`font-display font-semibold text-2xl mx-6 ${w === "★" ? "text-(--primary)" : "text-(--ink-light)/70"}`}
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
