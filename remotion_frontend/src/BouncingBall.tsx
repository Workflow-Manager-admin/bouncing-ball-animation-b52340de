import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

/**
 * PUBLIC_INTERFACE
 * BouncingBallProps
 * Props for controlling the ball's appearance and bounce animation.
 */
export interface BouncingBallProps {
  ballColor?: string;
  canvasBg?: string;
  groundColor?: string;
  bounceHeight?: number; // In pixels (from ground)
  bounceSpeed?: number; // Bounces per second
  ballRadius?: number;
}

/**
 * PUBLIC_INTERFACE
 * BouncingBall
 * Renders a ball that bounces up and down according to the props.
 */
export const BouncingBall: React.FC<BouncingBallProps> = ({
  ballColor = "#FF4136",
  canvasBg = "#fff",
  groundColor = "#FFDC00",
  bounceHeight = 350,
  bounceSpeed = 1.2,
  ballRadius = 75,
}) => {
  const frame = useCurrentFrame();
  const { height, fps, width } = useVideoConfig();

  // Compute time in seconds
  const t = frame / fps;

  // The lowest Y the ball can be (resting on ground)
  const groundY = height - 80 - ballRadius;

  // Bounce animation: simple sine, squared for "easing"
  // y = amplitude * abs(sin(omega * t)), omega = speed * PI (full bounce)
  const omega = bounceSpeed * Math.PI;
  const bounce =
    bounceHeight *
    Math.pow(Math.abs(Math.sin(omega * t)), 0.9); // 0.9 for sharper bounce

  const ballY = groundY - bounce;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: canvasBg,
        borderRadius: 20,
        boxShadow: "0 2px 24px #0002",
      }}
    >
      <svg
        width={width}
        height={height}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 1,
        }}
      >
        {/* Draw ground */}
        <rect
          x={0}
          y={height - 60}
          width={width}
          height={60}
          fill={groundColor}
        />
        {/* Drop subtle shadow */}
        <ellipse
          cx={width / 2}
          cy={groundY + ballRadius - 10}
          rx={ballRadius * 0.7}
          ry={16}
          fill="#0003"
        />
      </svg>
      {/* Ball */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          marginLeft: -ballRadius,
          top: ballY,
          width: ballRadius * 2,
          height: ballRadius * 2,
          borderRadius: "50%",
          background: `radial-gradient(circle at 35% 35%, #fff5, 35%, ${ballColor} 100%)`,
          boxShadow: `0px 4px 32px 0px #0002`,
          border: `6px solid #fff`,
          zIndex: 4,
        }}
      />
    </AbsoluteFill>
  );
};
