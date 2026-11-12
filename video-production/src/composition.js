"use strict";

import {
  Composition,
  Video,
  useCurrentFrame,
  interpolate,
  spring,
} from "remotion";

// Typography constants
const TITLE_FONT = "Georgia, 'Times New Roman', serif";
const BODY_FONT = "Georgia, 'Times New Roman', serif";

// Scene timing (in seconds)
const SCENE_DURATIONS = [7, 12, 17, 21, 15, 25, 16];
const SCENE_OFFSETS = SCENE_DURATIONS.reduce(
  (acc, d) => [...acc, acc[acc.length - 1] + d],
  [0]
);
const TOTAL_DURATION = SCENE_OFFSETS[SCENE_OFFSETS.length - 1];

const WIDTH = 1920;
const HEIGHT = 1080;

function getSceneIndex(frame, fps) {
  const time = frame / fps;
  for (let i = SCENE_OFFSETS.length - 1; i >= 0; i--) {
    if (time >= SCENE_OFFSETS[i]) return i;
  }
  return 0;
}

function getSceneTime(frame, fps, sceneIndex) {
  const time = frame / fps;
  return time - SCENE_OFFSETS[sceneIndex];
}

function Background({ opacity = 1 }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "#05040a",
        opacity,
      }}
    />
  );
}

function GameplayVideo({ src, opacity = 1 }) {
  const videoWidth = 1200 * 1.35;
  const videoHeight = 800 * 1.35;
  const left = (WIDTH - videoWidth) / 2;
  const top = (HEIGHT - videoHeight) / 2;

  return (
    <Video
      src={src}
      style={{
        position: "absolute",
        left, top,
        width: videoWidth,
        height: videoHeight,
        opacity,
      }}
    />
  );
}

function styledText({ text, style, opacity = 1 }) {
  return (
    <div
      style={{
        position: "absolute",
        opacity,
        ...style,
      }}
    >
      <div
        style={{
          fontFamily: style.fontFamily || TITLE_FONT,
          fontSize: style.fontSize || 20,
          letterSpacing: style.letterSpacing || "0",
          color: style.color || "#fff",
          textShadow: style.textShadow || "none",
          fontWeight: style.fontWeight || "normal",
          textAlign: style.textAlign || "center",
          lineHeight: style.lineHeight || 1.4,
          margin: 0,
          ...(style.textTransform ? { textTransform: style.textTransform } : {}),
        }}
      >
        {text}
      </div>
    </div>
  );
}

function TitleText({ text, sub, frame, fps }) {
  const opacity = interpolate(
    frame,
    [0, 30, fps * 3, fps * 6],
    [0, 1, 1, 0],
    { clamp: false }
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: TITLE_FONT,
          fontSize: 56,
          letterSpacing: "14px",
          color: "#fff",
          textShadow: "0 0 40px rgba(224,184,102,0.35)",
          fontWeight: "normal",
          textAlign: "center",
        }}
      >
        {text}
      </div>
      {sub && (
        <div
          style={{
            fontFamily: BODY_FONT,
            fontSize: 16,
            letterSpacing: "5px",
            color: "#e0b866",
            textTransform: "uppercase",
            fontWeight: "normal",
            textAlign: "center",
            marginTop: 12,
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}

function BodyText({ text, frame, fps, startFrame, endFrame, y = HEIGHT / 2 + 120 }) {
  const opacity = interpolate(
    frame,
    [startFrame, startFrame + 15, endFrame - 15, endFrame],
    [0, 1, 1, 0],
    { clamp: false }
  );

  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: 120,
        right: 120,
        opacity,
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: BODY_FONT,
          fontSize: 20,
          lineHeight: 1.6,
          color: "#c8c2dd",
          textAlign: "center",
        }}
      >
        {text}
      </div>
    </div>
  );
}

function HighlightText({ text, frame, fps, startFrame, endFrame, y = HEIGHT / 2 + 40 }) {
  const opacity = interpolate(
    frame,
    [startFrame, startFrame + 15, endFrame - 15, endFrame],
    [0, 1, 1, 0],
    { clamp: false }
  );

  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: 0,
        right: 0,
        opacity,
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: TITLE_FONT,
          fontSize: 32,
          letterSpacing: "4px",
          color: "#e0b866",
          fontWeight: "normal",
          textAlign: "center",
        }}
      >
        {text}
      </div>
    </div>
  );
}

function LacunaTitle({ frame, fps }) {
  const opacity = interpolate(
    frame,
    [0, 30, fps * 2, fps * 5],
    [0, 1, 1, 0],
    { clamp: false }
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: TITLE_FONT,
          fontSize: 64,
          letterSpacing: "16px",
          color: "#fff",
          textShadow: "0 0 50px rgba(224,184,102,0.4)",
          fontWeight: "normal",
          textAlign: "center",
        }}
      >
        LACUNA
      </div>
      <div
        style={{
          fontFamily: BODY_FONT,
          fontSize: 16,
          letterSpacing: "6px",
          color: "#e0b866",
          textTransform: "uppercase",
          fontWeight: "normal",
          textAlign: "center",
          marginTop: 16,
        }}
      >
        The price of remembering
      </div>
    </div>
  );
}

export default function MyComposition() {
  const frame = useCurrentFrame();
  const fps = 30;
  const sceneIndex = getSceneIndex(frame, fps);
  const sceneTime = getSceneTime(frame, fps, sceneIndex);

  return (
    <Composition
      id="LacunaDemo"
      width={WIDTH}
      height={HEIGHT}
      fps={fps}
      durationInFrames={Math.floor(TOTAL_DURATION * fps)}
    >
      <Background />

      {/* Scene 1: The Offer (0-7s) */}
      {sceneIndex === 0 && (
        <>
          <GameplayVideo src="/assets/scene1.mp4" />
          <TitleText
            text="A lender will give you \u20ac400."
            sub=""
            frame={frame}
            fps={fps}
          />
          <HighlightText
            text="It wants one of your memories."
            frame={frame}
            fps={fps}
            startFrame={Math.floor(fps * 2.5)}
            endFrame={Math.floor(fps * 6.5)}
          />
        </>
      )}

      {/* Scene 2: The World (7-19s) */}
      {sceneIndex === 1 && (
        <>
          <GameplayVideo src="/assets/scene2.mp4" />
          <LacunaTitle frame={frame} fps={fps} />
          <BodyText
            text="In this city, even your past has a price."
            frame={frame}
            fps={fps}
            startFrame={Math.floor(fps * 9)}
            endFrame={Math.floor(fps * 11.5)}
            y={HEIGHT / 2 + 140}
          />
        </>
      )}

      {/* Scene 3: The Decision (19-36s) */}
      {sceneIndex === 2 && (
        <>
          <GameplayVideo src="/assets/scene3.mp4" />
          <HighlightText
            text="The lender sees three assets."
            frame={frame}
            fps={fps}
            startFrame={Math.floor(fps * 20.5)}
            endFrame={Math.floor(fps * 23.5)}
            y={HEIGHT / 2 - 60}
          />
          <HighlightText
            text="The player sees three ways to survive."
            frame={frame}
            fps={fps}
            startFrame={Math.floor(fps * 24.5)}
            endFrame={Math.floor(fps * 27.5)}
            y={HEIGHT / 2 + 20}
          />
        </>
      )}

      {/* Scene 4: The Consequence (36-57s) */}
      {sceneIndex === 3 && (
        <>
          <GameplayVideo src="/assets/scene4.mp4" />
          <HighlightText
            text="Pledge the wrong memory,"
            frame={frame}
            fps={fps}
            startFrame={Math.floor(fps * 38)}
            endFrame={Math.floor(fps * 41)}
            y={HEIGHT / 2 - 60}
          />
          <HighlightText
            text="and you lose an opportunity that could have paid you."
            frame={frame}
            fps={fps}
            startFrame={Math.floor(fps * 42)}
            endFrame={Math.floor(fps * 47)}
            y={HEIGHT / 2 + 20}
          />
        </>
      )}

      {/* Scene 5: The Clock (57-72s) */}
      {sceneIndex === 4 && (
        <>
          <GameplayVideo src="/assets/scene5.mp4" />
          <HighlightText
            text="10% interest per cycle."
            frame={frame}
            fps={fps}
            startFrame={Math.floor(fps * 59)}
            endFrame={Math.floor(fps * 62)}
            y={HEIGHT / 2 - 60}
          />
          <HighlightText
            text="Four cycles to settle."
            frame={frame}
            fps={fps}
            startFrame={Math.floor(fps * 63)}
            endFrame={Math.floor(fps * 66)}
            y={HEIGHT / 2 + 20}
          />
        </>
      )}

      {/* Scene 6: The Payoff (72-97s) */}
      {sceneIndex === 5 && (
        <>
          <GameplayVideo src="/assets/scene6.mp4" />
          <HighlightText
            text="Borrowing gets you through the door."
            frame={frame}
            fps={fps}
            startFrame={Math.floor(fps * 74)}
            endFrame={Math.floor(fps * 77)}
            y={HEIGHT / 2 - 60}
          />
          <HighlightText
            text="What you sacrifice determines what happens after."
            frame={frame}
            fps={fps}
            startFrame={Math.floor(fps * 78)}
            endFrame={Math.floor(fps * 83)}
            y={HEIGHT / 2 + 20}
          />
        </>
      )}

      {/* Scene 7: The Last Question (97-113s) */}
      {sceneIndex === 6 && (
        <>
          <GameplayVideo src="/assets/scene7.mp4" />
          <LacunaTitle frame={frame} fps={fps} />
          <BodyText
            text="What would you sell to afford your future?"
            frame={frame}
            fps={fps}
            startFrame={Math.floor(fps * 101)}
            endFrame={Math.floor(fps * 107)}
            y={HEIGHT / 2 + 140}
          />
        </>
      )}
    </Composition>
  );
}
