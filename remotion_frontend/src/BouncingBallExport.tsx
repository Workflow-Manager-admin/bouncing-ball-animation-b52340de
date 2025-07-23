import React from "react";
import { Composition } from "remotion";
import { BouncingBall } from "./BouncingBall";

/**
 * PUBLIC_INTERFACE
 * BouncingBallExport
 * Remotion composition for programmatic export via CLI.
 */
export const BouncingBallExport: React.FC<{
  bounceHeight: number;
  bounceSpeed: number;
}> = ({ bounceHeight, bounceSpeed }) => (
  <BouncingBall bounceHeight={bounceHeight} bounceSpeed={bounceSpeed} />
);

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="BouncingBallExport"
      component={BouncingBallExport}
      durationInFrames={180}
      fps={30}
      width={700}
      height={480}
      defaultProps={{
        bounceHeight: 250,
        bounceSpeed: 1.2,
      }}
    />
  </>
);
