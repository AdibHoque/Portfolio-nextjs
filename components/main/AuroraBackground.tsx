import React from "react";

// Ambient background: blurred violet aurora blobs + an animated faint grid.
// Fixed, behind everything, and non-interactive.
const AuroraBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Base canvas tint */}
      <div className="absolute inset-0 bg-bg" />

      {/* Aurora blobs with subtle pulse animation */}
      <div
        className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full blur-[120px] animate-blob"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.55), transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full blur-[130px] animate-blob animation-delay-2000"
        style={{
          background:
            "radial-gradient(circle at center, rgba(167,139,250,0.45), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full blur-[140px] animate-blob animation-delay-4000"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.4), transparent 70%)",
        }}
      />

      {/* Animated faint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 0%, black 40%, transparent 80%)",
          // Inline animation to scroll the grid vertically
          animation: "grid-scroll 20s linear infinite",
        }}
      />

      {/* Internal CSS for the animations to keep it self-contained */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes grid-scroll {
          0% { background-position: 0 0; }
          100% { background-position: 0 64px; } /* Must match backgroundSize Y */
        }
        @keyframes blob {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-blob {
          animation: blob 8s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}} />
    </div>
  );
};

export default AuroraBackground;
