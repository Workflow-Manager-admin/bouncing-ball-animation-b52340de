import React from "react";

/**
 * PUBLIC_INTERFACE
 * ControlsProps
 * Props for bounce height and speed control UI.
 */
export interface ControlsProps {
  bounceHeight: number;
  onBounceHeightChange: (h: number) => void;
  bounceSpeed: number;
  onBounceSpeedChange: (v: number) => void;
  minBounceHeight?: number;
  maxBounceHeight?: number;
  minBounceSpeed?: number;
  maxBounceSpeed?: number;
}

/**
 * PUBLIC_INTERFACE
 * Controls
 * Renders UI controls for adjust bounce height and speed.
 */
export const Controls: React.FC<ControlsProps> = ({
  bounceHeight,
  onBounceHeightChange,
  bounceSpeed,
  onBounceSpeedChange,
  minBounceHeight = 50,
  maxBounceHeight = 500,
  minBounceSpeed = 0.5,
  maxBounceSpeed = 3.5,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 32,
        padding: "28px 32px",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 4px 24px #0074D911, 0 1.5px 6px #FFDC0032",
        margin: "40px auto 0 auto",
        maxWidth: 700,
      }}
    >
      <div style={{ flex: 1, minWidth: 260 }}>
        <label
          style={{
            display: "block",
            fontWeight: 600,
            color: "#0074D9",
            marginBottom: 8,
          }}
          htmlFor="bounce-height"
        >
          Bounce Height
        </label>
        <input
          id="bounce-height"
          type="range"
          min={minBounceHeight}
          max={maxBounceHeight}
          value={bounceHeight}
          step={1}
          onChange={(e) => onBounceHeightChange(Number(e.target.value))}
          style={{
            width: "100%",
            accentColor: "#FF4136",
            marginBottom: 9,
          }}
        />
        <div style={{ fontSize: 16, color: "#999" }}>
          {bounceHeight} px
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 260 }}>
        <label
          style={{
            display: "block",
            fontWeight: 600,
            color: "#0074D9",
            marginBottom: 8,
          }}
          htmlFor="bounce-speed"
        >
          Bounce Speed
        </label>
        <input
          id="bounce-speed"
          type="range"
          min={minBounceSpeed}
          max={maxBounceSpeed}
          value={bounceSpeed}
          step={0.01}
          onChange={(e) => onBounceSpeedChange(Number(e.target.value))}
          style={{
            width: "100%",
            accentColor: "#FF4136",
            marginBottom: 9,
          }}
        />
        <div style={{ fontSize: 16, color: "#999" }}>
          {bounceSpeed.toFixed(2)} bounces/sec
        </div>
      </div>
    </div>
  );
};
