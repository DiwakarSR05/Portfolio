import { GridScan } from "../ui/GridScan";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <GridScan
        sensitivity={0.55}
        lineThickness={1}
        linesColor="#2F293A"
        gridScale={0.1}
        scanColor="#C8FF57" // Changed to match the portfolio's lime/primary color
        scanOpacity={0.4}
        enablePost
        bloomIntensity={0.6}
        chromaticAberration={0.002}
        noiseIntensity={0.01}
      />
      {/* Overlay to ensure legibility and depth */}
      <div
        className="absolute inset-0 bg-linear-to-b from-(--bg)/20 via-transparent to-(--bg)"
        style={{
          maskImage: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
        }}
      />
    </div>
  );
}
