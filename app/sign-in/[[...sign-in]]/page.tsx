import { SignIn } from "@clerk/nextjs";
import { BrainCircuit, Globe, ScrollText } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    label: "AI Architecture Generation",
    desc: "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Globe,
    label: "Real-time Collaboration",
    desc: "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: ScrollText,
    label: "Instant Spec Generation",
    desc: "Export a complete Markdown technical spec directly from the canvas graph.",
  },
];

export default function SignInPage() {
  return (
    <div
      className="flex min-h-screen"
      style={{ background: "var(--bg-base)", fontFamily: "var(--font-geist-sans)" }}
    >
      {/* Left panel */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 border-r"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 10%, var(--accent-primary-dim) 0%, transparent 70%), var(--bg-surface)",
          borderColor: "var(--border-default)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="h-7 w-7 rounded-lg shrink-0"
            style={{ background: "var(--accent-primary)" }}
          />
          <span
            className="text-base font-semibold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Ghost AI
          </span>
        </div>

        {/* Headline + features */}
        <div>
          <h1
            className="text-4xl font-bold tracking-tight leading-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Design systems at the
            <br />
            speed of thought.
          </h1>
          <p className="text-base mb-10 max-w-sm" style={{ color: "var(--text-secondary)" }}>
            Describe your architecture in plain English. Ghost AI maps it to a
            shared canvas your whole team can refine in real time.
          </p>

          <ul className="space-y-6">
            {features.map(({ icon: Icon, label, desc }) => (
              <li key={label} className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "var(--accent-primary-dim)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "var(--accent-primary)" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-medium mb-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {label}
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom spacer */}
        <div />
      </div>

      {/* Right panel — Clerk form */}
      <div
        className="flex flex-1 items-center justify-center p-8"
        style={{ background: "var(--bg-base)" }}
      >
        <SignIn />
      </div>
    </div>
  );
}
