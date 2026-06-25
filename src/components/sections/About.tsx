import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import profilePic from "@/assets/profile-pic.png";

const philosophy = [
  {
    title: "Performance First",
    desc: "Bundles minimal. Queries indexed. Time-to-interactive measured in milliseconds, not seconds.",
  },
  {
    title: "Design-Aware",
    desc: "Engineering with typographic eye. Pixels matter as much as packets.",
  },
  {
    title: "Systems Thinker",
    desc: "Architecture choices outlive features. I build for the version six months from now.",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-[var(--bg-2)] py-32 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[0.42fr_0.58fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          className="relative"
        >
          <div className="bg-[var(--surface)] rounded-3xl clay-lg aspect-[4/5] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C8A96E] via-[#E5C896] to-[#F5F0E8] opacity-90" />
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 w-full h-full mix-blend-multiply opacity-30"
            >
              <defs>
                <pattern id="g" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#1A1611" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#g)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <img
                src={profilePic.url}
                alt="Diwakar Singh Rajbanshi"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-[var(--surface)] text-[var(--ink)] clay-md rounded-2xl px-4 py-2 font-mono text-xs">
            📍 Jhapa, Nepal
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[var(--surface)] text-[var(--ink)] clay-md rounded-2xl px-5 py-4">
            <div className="font-mono text-[10px] tracking-widest text-[var(--muted-ink)]">
              YEARS BUILDING
            </div>
            <div className="font-display font-bold text-3xl">01+</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          <div className="eyebrow mb-5">&lt;about.me /&gt;</div>
          <h2
            className="font-display font-bold leading-[1.05] mb-8 text-[var(--ink-light)]"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
          >
            More than code.
            <br />
            <span className="text-gradient-warm">A builder&apos;s mindset.</span>
          </h2>
          <div className="space-y-5 font-body font-light text-[17px] leading-[1.75] text-[var(--muted)] mb-10 max-w-[560px]">
            <p>
              I&apos;ve spent the last two years moving fluidly between the database and the design
              canvas — most engineers pick a side; I never could. The interesting problems live in
              the seams.
            </p>
            <p>
              My favourite work happens when a SQL query rewrite drops a dashboard from 4 seconds to
              80ms, and the same week I&apos;m tuning a button&apos;s easing curve until it feels
              right in the hand. Both matter. Both ship.
            </p>
            <p>
              When I&apos;m not building, I&apos;m reading. I read about design, engineering, and
              the human condition. I read to understand, and I read to get better at what I do.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 180, damping: 22 }}
                whileHover={{ y: -6 }}
                className="bg-[var(--surface)] text-[var(--ink)] clay-md rounded-2xl p-5 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--primary)] mb-4 flex items-center justify-center font-mono text-sm font-bold">
                  0{i + 1}
                </div>
                <div className="font-display font-semibold text-[15px] mb-2">{p.title}</div>
                <div className="font-body text-[13px] text-[var(--muted-ink)] leading-[1.6]">
                  {p.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
