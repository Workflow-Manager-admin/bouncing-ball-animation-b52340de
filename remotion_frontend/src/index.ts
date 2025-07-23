// This is your entry file! Refer to it when you render:
// npx remotion render <entry-file> HelloWorld out/video.mp4

import { registerRoot } from "remotion";
import { App } from "./App";

// If running in Remotion Studio, show the App for controls, else export as normal video compositions:
registerRoot(App);
