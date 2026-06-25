export function Footer() {
  return (
    <footer className="bg-[#040403] border-t border-[var(--border)] px-6 lg:px-10 pt-16 pb-8">
      {/* If you're reading this, I respect your curiosity. Ping me at deewakarsinghraz@gmail.com — let's build something. */}
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="font-display font-semibold text-2xl mb-2 text-[var(--ink-light)]">
            DSR<span className="text-[var(--primary)]">_</span>
          </div>
          <p className="font-body text-sm text-[var(--muted)] max-w-xs leading-[1.7]">
            Building the future, one commit at a time. Jhapa-based, globally available.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-center font-ui text-sm text-[var(--muted)]">
          {["About", "Work", "Skills", "Experience", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-[var(--primary)] transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex lg:justify-end items-start gap-6">
          <div className="flex gap-4 font-mono text-xs text-[var(--muted)]">
            <a href="#" className="hover:text-[var(--primary)]">
              GH
            </a>
            <a href="#" className="hover:text-[var(--primary)]">
              IN
            </a>
            <a href="#" className="hover:text-[var(--primary)]">
              TW
            </a>
          </div>
          <a
            href="#top"
            className="font-ui text-xs px-4 py-2 rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row justify-between gap-3 font-mono text-[11px] text-[var(--muted)]">
        <div>© 2026 Diwakar Singh Rajbanshi · Jhapa, Nepal</div>
        <div>v.06.22 — handcrafted, no Framer templates harmed</div>
      </div>
    </footer>
  );
}
