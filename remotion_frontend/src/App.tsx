/* global alert, setTimeout */
import React, { useState, useCallback } from "react";
import { Controls } from "./Controls";
import { PreviewAndExport, VIDEO_DURATION_FRAMES, VIDEO_FPS } from "./PreviewAndExport";

const COLORS = {
  accent: "#FF4136",
  primary: "#0074D9",
  secondary: "#FFDC00",
  lightBg: "#fafbfc",
};

export const App: React.FC = () => {
  // Animation parameter state
  const [bounceHeight, setBounceHeight] = useState(250);
  const [bounceSpeed, setBounceSpeed] = useState(1.2);

  // Export status
  const [isExporting, setIsExporting] = useState(false);

  // Handler for video export
  const handleExport = useCallback(() => {
    // Export via Remotion CLI on the client is not possible (security/sandbox),
    // but can open a window with CLI instructions.
    setIsExporting(true);

    // Download settings as render script instructions
    const cliCmd = `npx remotion render src/BouncingBallExport.tsx BouncingBallExport out/bouncing-ball.mp4 --props='{\"bounceHeight\":${bounceHeight},\"bounceSpeed\":${bounceSpeed}}' --fps ${VIDEO_FPS} --duration-in-frames ${VIDEO_DURATION_FRAMES}`;
    const msg = `
Render the video with these parameters:

\`\`\`
${cliCmd}
\`\`\`
Paste this command in the terminal inside your project folder.
    `;
    alert(msg);

    // Simulate export delay.
    setTimeout(() => setIsExporting(false), 1000);
  }, [bounceHeight, bounceSpeed]);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "0",
        margin: "0",
        background: COLORS.lightBg,
        fontFamily:
          "Inter, SF Pro Text, Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "42px 12px 12px 12px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 42,
            fontWeight: 800,
            letterSpacing: -1,
            color: COLORS.primary,
            lineHeight: 1.1,
            marginBottom: 0,
            textShadow: "0 2px 12px #FFDC0011",
          }}
        >
          <span style={{ color: COLORS.accent }}>● </span>
          Bouncing Ball Animation
        </h1>
        <div style={{ fontSize: 20, marginTop: 8, color: "#444" }}>
          Adjust speed/height and preview/export your animated video.
        </div>
        <PreviewAndExport
          bounceHeight={bounceHeight}
          bounceSpeed={bounceSpeed}
          onExport={handleExport}
          exportDisabled={isExporting}
          accentColor={COLORS.accent}
        />
        <Controls
          bounceHeight={bounceHeight}
          bounceSpeed={bounceSpeed}
          onBounceHeightChange={setBounceHeight}
          onBounceSpeedChange={setBounceSpeed}
        />
        <div style={{ margin: "45px auto 0", color: "#bbb" }}>
          <hr style={{ margin: "30px auto 18px" }} />
          <span style={{ fontSize: 14 }}>
            Powered by&nbsp;
            <a
              href="https://remotion.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: COLORS.primary,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Remotion
            </a>
          </span>
          <div style={{ marginTop: 14 }}>
            <span style={{ color: COLORS.secondary }}>
              Primary: {COLORS.primary}
            </span>{" "}
            &nbsp;|&nbsp;
            <span style={{ color: COLORS.accent }}>
              Accent: {COLORS.accent}
            </span>{" "}
            &nbsp;|&nbsp;
            <span style={{ color: COLORS.secondary }}>
              Secondary: {COLORS.secondary}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
