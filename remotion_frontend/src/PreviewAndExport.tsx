import React from "react";
import { Player } from "@remotion/player"; // Remotion's preview player

import { BouncingBall } from "./BouncingBall";

/**
 * PUBLIC_INTERFACE
 * PreviewAndExportProps
 * Renders Remotion Player for preview and triggers video download-render.
 */
export interface PreviewAndExportProps {
  bounceHeight: number;
  bounceSpeed: number;
  onExport: () => void;
  exportDisabled?: boolean;
  accentColor?: string;
}

export const VIDEO_DURATION_FRAMES = 180;
export const VIDEO_FPS = 30;

export const PreviewAndExport: React.FC<PreviewAndExportProps> = ({
  bounceHeight,
  bounceSpeed,
  onExport,
  exportDisabled,
  accentColor = "#FF4136",
}) => {
  return (
    <div style={{ textAlign: "center", margin: "24px 0 18px 0" }}>
      <Player
        component={BouncingBall}
        durationInFrames={VIDEO_DURATION_FRAMES}
        fps={VIDEO_FPS}
        compositionWidth={700}
        compositionHeight={480}
        controls
        loop
        autoPlay
        style={{
          borderRadius: 18,
          border: "3px solid #0074D955",
          background: "#fff",
          boxShadow: "0 4px 32px #0074D91c, 0 1.5px 6px #FFDC0032",
          margin: "0 auto"
        }}
        inputProps={{
          bounceHeight,
          bounceSpeed,
        }}
      />
      <button
        onClick={onExport}
        disabled={exportDisabled}
        style={{
          marginTop: 24,
          padding: "12px 36px",
          borderRadius: 24,
          fontWeight: 700,
          border: "none",
          background: accentColor,
          color: "#fff",
          fontSize: 20,
          letterSpacing: 1,
          cursor: exportDisabled ? "not-allowed" : "pointer",
          opacity: exportDisabled ? 0.6 : 1,
          boxShadow:
            "0 2px 12px #FF413633, 0 0.5px 3px #0074D933",
          transition: "background 0.18s",
        }}
      >
        Export Video
      </button>
    </div>
  );
};
