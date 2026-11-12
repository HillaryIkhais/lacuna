"use strict";

import { Composition, Img, Sequence, interpolate } from "remotion";

const WIDTH = 1920;
const HEIGHT = 1080;
const FPS = 30;
const DURATION = 114;

const SCENES = [
  { id: "scene01", start: 0, end: 13.3 },
  { id: "scene02", start: 13.3, end: 24.7 },
  { id: "scene03", start: 24.7, end: 33.6 },
  { id: "scene04", start: 33.6, end: 57.8 },
  { id: "scene05", start: 57.8, end: 65.5 },
  { id: "scene06", start: 65.5, end: 78.3 },
  { id: "scene07", start: 78.3, end: 88.5 },
  { id: "scene08", start: 88.5, end: 117.9 },
];

export default function LACUNAComposition() {
  return (
    <Composition id="LacunaDemo" width={WIDTH} height={HEIGHT} fps={FPS} durationInFrames={DURATION * FPS}>
      {SCENES.map((scene, idx) => (
        <Sequence key={scene.id} from={scene.start * FPS} durationInFrames={(scene.end - scene.start) * FPS}>
          <Img src={`/scenes/scene0${idx + 1}.png`} style={{ position: "absolute", width: WIDTH, height: HEIGHT }} />
        </Sequence>
      ))}
    </Composition>
  );
}