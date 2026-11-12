"use strict";

import {
  Composition,
  Img,
  Sequence,
  Audio,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  imgToBlurHash,
} from "remotion";

// Constants
const WIDTH = 1920;
const HEIGHT = 1080;
const FPS = 30;
const DURATION = 118; // 1 minute 58 seconds

// Scene durations (seconds)
const SCENES = {
  memory: { start: 0, end: 10 },
  city: { start: 10, end: 24 },
  contract: { start: 24, end: 42 },
  value: { start: 42, end: 62 },
  debt: { start: 62, end: 76 },
  mystery: { start: 76, end: 95 },
  repayment: { start: 95, end: 115 },
  finale: { start: 115, end: 118 },
};

// Fonts
const GOLD = "#e0b866";
const IVORY = "#f8f5fa";
const DEEP_BLUE = "#05040a";
const TEAL = "#2a9d8f";
const BRASS = "#b8860b";

// Helper function for opacity
function getOpacity(frame, startSec, endSec, offset = 0) {
  const startFrame = startSec * FPS + offset;
  const endFrame = endSec * FPS + offset;
  return interpolate(frame, [startFrame - FPS * 0.5, startFrame, endFrame, endFrame + FPS * 0.5], [0, 1, 1, 0], { clamp: false });
}

// Gradient backgrounds
function DarkGradient({ frame, opacity = 1 }) {
  const start = interpolate(frame, [0, FPS * 60], [DEEP_BLUE, "#0a001a"], { clamp: true });
  const end = interpolate(frame, [0, FPS * 60], [DEEP_BLUE, "#05040a"], { clamp: true });
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `linear-gradient(135deg, ${start}, ${end})`,
        opacity,
      }}
    />
  );
}

// Night sky with stars
function NightSky({ frame }) {
  const stars = [
    { x: 0.1, y: 0.2, size: 2 },
    { x: 0.3, y: 0.1, size: 3 },
    { x: 0.5, y: 0.3, size: 1.5 },
    { x: 0.7, y: 0.15, size: 2.5 },
    { x: 0.9, y: 0.25, size: 2 },
    { x: 0.15, y: 0.7, size: 1 },
    { x: 0.4, y: 0.8, size: 2 },
    { x: 0.6, y: 0.75, size: 1.5 },
    { x: 0.85, y: 0.85, size: 2.5 },
    { x: 0.25, y: 0.5, size: 1 },
  ];

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
      {stars.map((star, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${star.x * 100}%`,
            top: `${star.y * 100}%`,
            width: star.size,
            height: star.size,
            background: "white",
            borderRadius: "50%",
            opacity: 0.6 + 0.4 * Math.sin(frame / 30 + i),
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}

// Memory orb component
function MemoryOrb({ 
  type, 
  frame, 
  position, 
  scale = 1, 
  opacity = 1,
  glowing = true 
}) {
  const colors = {
    voice: { main: "#ffb74d", accent: "#ff9800", inner: "#ffd54f" },
    home: { main: "#81c784", accent: "#4caf50", inner: "#a5d6a7" },
    love: { main: "#ba68c8", accent: "#9c27b0", inner: "#ce93d8" },
  };

  const col = colors[type];
  const pulse = Math.sin(frame / 20) * 0.2 + 0.8;
  const glow = glowing ? (Math.sin(frame / 15) * 0.3 + 0.7) : 0.3;

  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: 120 * scale,
        height: 120 * scale,
        borderRadius: "50%",
        background: `radial-gradient(circle at 30% 30%, ${col.inner}, ${col.main})`,
        opacity,
        filter: `drop-shadow(0 0 ${20 * scale * glow}px rgba(255, 168, 77, ${glow}))`,
        animation: `pulse ${2 / scale}s infinite alternate`,
      }}
    >
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(${1 + 0.05 * scale}); }
        }
      `}</style>
      
      {/* Shimmer effect */}
      <div
        style={{
          position: "absolute",
          top: -20,
          left: -20,
          width: "100%",
          height: "100%",
          background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
          transform: `rotate(${frame / 10}deg)`,
          opacity: 0.3,
        }}
      />
      
      {/* Inner glow */}
      <div
        style={{
          position: "absolute",
          left: "35%",
          top: "35%",
          width: "30%",
          height: "30%",
          background: col.accent,
          borderRadius: "50%",
          opacity: 0.6,
          filter: "blur(5px)",
        }}
      />
    </div>
  );
}

// Memory icon with type label
function MemoryIcon({ type, frame, position, showLabel = true }) {
  const labels = {
    voice: "MOTHER'S VOICE",
    home: "CHILDHOOD HOME",
    love: "FACE OF LOVE",
  };

  const values = {
    voice: { collateral: 300, productive: 500 },
    home: { collateral: 200, productive: 450 },
    love: { collateral: 400,  productive: 100 },
  };

  return (
    <div style={{ position: "absolute", left: position.x, top: position.y }}>
      <MemoryOrb type={type} frame={frame} position={{ x: 0, y: 0 }} />
      
      {showLabel && (
        <div
          style={{
            position: "absolute",
            top: 140,
            left: -60,
            width: 180,
            textAlign: "center",
            opacity: interpolate(frame, [0, FPS * 30], [0, 1], { clamp: true }),
          }}
        >
          <div style={{
            fontFamily: "Georgia, serif",
            fontSize: 14,
            color: IVORY,
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}>
            {labels[type]}
          </div>
          <div style={{
            fontFamily: "Georgia, serif",
            fontSize: 12,
            color: GOLD,
            marginTop: 4,
          }}>
            Collateral: ₡{values[type].collateral.toLocaleString()}
          </div>
          <div style={{
            fontFamily: "Georgia, serif",
            fontSize: 12,
            color: "#8ac",
            marginTop: 2,
          }}>
            Use: +₡{(type === "voice" ? 200 : type === "home" ? 250 : 100)} income
          </div>
        </div>
      )}
    </div>
  );
}

// Contract overlay
function Contract({ frame, visible = true }) {
  const opacity = visible ? 1 : 0;
  const scale = visible ? 1 : 0.8;
  
  // Animated numbers
  const loanAmount = 400;
  const interest = 10;
  const sealFee = 500;
  const toll = 100;
  
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
        width: "600px",
        height: "700px",
        background: "rgba(15, 10, 30, 0.95)",
        border: "2px solid rgba(224, 184, 102, 0.5)",
        borderRadius: "20px",
        padding: "40px",
        boxShadow: "0 0 50px rgba(224, 184, 102, 0.3)",
        overflow: "hidden",
      }}
    >
      {/* Contract header */}
      <div style={{
        textAlign: "center",
        marginBottom: 30,
        opacity: getOpacity(frame, 0, 0.1),
      }}>
        <div style={{
          fontFamily: "Georgia, serif",
          fontSize: 36,
          color: GOLD,
          letterSpacing: 2,
          textShadow: "0 0 20px rgba(224, 184, 102, 0.5)",
          marginBottom: 10,
        }}>
          LOAN AGREEMENT
        </div>
        <div style={{
          fontFamily: "Georgia, serif",
          fontSize: 14,
          color: "#b8a9c2",
        }}>
          The Lender Will See You Differently
        </div>
      </div>

      {/* Terms section */}
      <div style={{
        fontFamily: "Georgia, serif",
        fontSize: 16,
        color: IVORY,
        lineHeight: 1.8,
        marginBottom: 30,
      }}>
        <div style={{ marginBottom: 15 }}>
          <span style={{ color: GOLD, fontWeight: "bold" }}>Principal:</span> ₡{loanAmount.toLocaleString()}
        </div>
        <div style={{ marginBottom: 15 }}>
          <span style={{ color: GOLD, fontWeight: "bold" }}>Interest:</span> {interest}% per cycle (compounded)
        </div>
        <div style={{ marginBottom: 15 }}>
          <span style={{ color: GOLD, fontWeight: "bold" }}>Deadline:</span> 4 cycles
        </div>
        <div style={{ marginBottom: 15 }}>
          <span style={{ color: GOLD, fontWeight: "bold" }}>Seal Fee:</span> ₡{sealFee.toLocaleString()}
        </div>
        <div style={{ marginBottom: 15 }}>
          <span style={{ color: GOLD, fontWeight: "bold" }}>Archive Toll:</span> ₡{toll.toLocaleString()} (₡200 if Home pledged)
        </div>
      </div>

      {/* Memory options */}
      <div style={{
        fontFamily: "Georgia, serif",
        fontSize: 14,
        color: "#a099b4",
        textAlign: "center",
        marginTop: 30,
      }}>
        Choose one memory to pledge as collateral.
        <br />
        <span style={{ color: "#8ac", marginTop: 10, display: "block" }}>
          The lender values your memories. What will you lose?
        </span>
      </div>
    </div>
  );
}

// Debt progress bar
function DebtBar({ frame, debt, maxDebt }) {
  const progress = debt / maxDebt;
  const width = 400;
  const height = 30;
  
  return (
    <div style={{
      position: "absolute",
      bottom: 60,
      left: "50%",
      transform: "translateX(-50%)",
      width,
      height,
      background: "rgba(0, 0, 0, 0.5)",
      borderRadius: 15,
      overflow: "hidden",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        width: `${progress * 100}%`,
        background: progress > 0.8 ? "#ff5252" : progress > 0.5 ? "#ff9800" : GOLD,
        transition: "width 0.3s",
      }} />
      
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Georgia, serif",
        fontSize: 14,
        color: IVORY,
        fontWeight: "bold",
      }}>
        ₡{debt.toLocaleString()} / ₡{maxDebt.toLocaleString()}
      </div>
    </div>
  );
}

// Main composition
export default function LACUNA_Demo() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Calculate current scene
  const time = frame / fps;
  let currentScene = "memory";
  for (const [name, bounds] of Object.entries(SCENES)) {
    if (time >= bounds.start && time <= bounds.end) {
      currentScene = name;
    }
  }

  return (
    <Composition
      id="LacunaDemo"
      width={WIDTH}
      height={HEIGHT}
      fps={FPS}
      durationInFrames={DURATION * FPS}
    >
      {/* Background */}
      <DarkGradient frame={frame} />
      <NightSky frame={frame} />
      
      {/* Scene 1: The Memory (0-10s) */}
      {time < SCENES.memory.end && (
        <>
          {/* Darkness fades in */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            opacity: interpolate(frame, [0, FPS * 2], [1, 0], { clamp: true }),
          }} />
          
          {/* Memory orb appears */}
          <MemoryOrb
            type="voice"
            frame={frame}
            position={{ 
              x: "50%", 
              y: "50%" 
            }}
            scale={interpolate(frame, [FPS * 2, FPS * 4], [0.5, 1], { clamp: true })}
            opacity={interpolate(frame, [FPS * 2, FPS * 4], [0, 1], { clamp: true })}
          />
          
          {/* Voice lines appear */}
          <div style={{
            position: "absolute",
            bottom: 100,
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            opacity: interpolate(frame, [FPS * 5, FPS * 7], [0, 1], { clamp: true }),
          }}>
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: 20,
              color: GOLD,
              textShadow: "0 0 10px rgba(224, 184, 102, 0.5)",
            }}>
              "Remember..."
            </div>
          </div>
          
          {/* Collateral value */}
          <div style={{
            position: "absolute",
            top: 80,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 48,
            color: GOLD,
            textShadow: "0 0 20px rgba(224, 184, 102, 0.5)",
            opacity: interpolate(frame, [FPS * 7, FPS * 9], [0, 1], { clamp: true }),
          }}>
            ₡300
          </div>
          
          {/* Label */}
          <div style={{
            position: "absolute",
            top: 150,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 24,
            color: IVORY,
            opacity: interpolate(frame, [FPS * 8, FPS * 10], [0, 1], { clamp: true }),
          }}>
            MOTHER'S VOICE
          </div>
          
          {/* Question */}
          <div style={{
            position: "absolute",
            bottom: 50,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 28,
            color: IVORY,
            textAlign: "center",
            opacity: interpolate(frame, [FPS * 9, FPS * 10], [0, 1], { clamp: true }),
          }}>
            What is a memory worth?
          </div>
        </>
      )}
      
      {/* Scene 2: The City (10-24s) */}
      {time >= SCENES.memory.end && time < SCENES.city.end && (
        <>
          {/* City reveal - abstract geometric shapes for architecture */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${-50 + (i * 15)}%`,
                top: `${80 + (i * 3)}%`,
                width: `${100 + Math.sin(i) * 50}px`,
                height: `${200 + Math.cos(i) * 100}px`,
                background: `rgba(100, 50, 150, ${0.3 + Math.sin(frame/10 + i) * 0.1})`,
                clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
                borderRadius: "20px",
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
          
          {/* Floating buildings */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i + 20}
              style={{
                position: "absolute",
                left: `${Math.random() * 100}%`,
                top: `${60 + Math.random() * 30}%`,
                width: `${80 + Math.random() * 120}px`,
                height: `${40 + Math.random() * 60}px`,
                background: `rgba(${100 + i * 20}, ${80 + i * 15}, ${150 + i * 10}, 0.4)`,
                borderRadius: "10px 10px 0 0",
                opacity: 0.6,
              }}
            />
          ))}
          
          {/* Lantern */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 20,
            height: 300,
            background: "linear-gradient(to bottom, #ffd54f, #ff9800, #ffb74d)",
            borderRadius: "50% 50% 0 0",
            boxShadow: "0 0 30px rgba(255, 168, 77, 0.8)",
            animation: "glow 2s infinite alternate",
          }}>
            <div style={{
              position: "absolute",
              width: "60%",
              height: "30%",
              top: "80%",
              left: "20%",
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
              animation: "pulse 1.5s infinite",
            }} />
          </div>
          
          {/* Text */}
          <div style={{
            position: "absolute",
            top: 100,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 56,
            color: IVORY,
            textShadow: "0 0 40px rgba(224, 184, 102, 0.5)",
            fontWeight: "bold",
            letterSpacing: 8,
            opacity: interpolate(frame, [FPS * 12, FPS * 14], [0, 1], { clamp: true }),
          }}>
            LACUNA
          </div>
          
          <div style={{
            position: "absolute",
            bottom: 100,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 20,
            color: "#c8c2dd",
            textAlign: "center",
            opacity: interpolate(frame, [FPS * 18, FPS * 20], [0, 1], { clamp: true }),
          }}>
            In this city, even your past has a price.
          </div>
          
          <div style={{
            position: "absolute",
            bottom: 50,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 18,
            color: GOLD,
            textAlign: "center",
            opacity: interpolate(frame, [FPS * 20, FPS * 22], [0, 1], { clamp: true }),
          }}>
            The price of remembering
          </div>
          
          <style>{`
            @keyframes glow {
              0% { box-shadow: 0 0 30px rgba(255, 168, 77, 0.3); }
              100% { box-shadow: 0 0 50px rgba(255, 168, 77, 0.8); }
            }
            @keyframes pulse {
              0% { transform: scale(1); opacity: 0.5; }
              50% { transform: scale(1.1); opacity: 0.8; }
              100% { transform: scale(1); opacity: 0.5; }
            }
          `}</style>
        </>
      )}
      
      {/* Scene 3: The Contract (24-42s) */}
      {time >= SCENES.city.end && time < SCENES.contract.end && (
        <>
          {/* Contract appears */}
          <Contract frame={frame} visible={time >= SCENES.contract.start + 2} />
          
          {/* Three memories arranged around center */}
          <MemoryIcon
            type="voice"
            frame={frame}
            position={{ x: "25%", y: "40%" }}
            showLabel={time >= SCENES.contract.start + 8}
          />
          
          <MemoryIcon
            type="home"
            frame={frame}
            position={{ x: "75%", y: "35%" }}
            showLabel={time >= SCENES.contract.start + 10}
          />
          
          <MemoryIcon
            type="love"
            frame={frame}
            position={{ x: "50%", y: "75%" }}
            showLabel={time >= SCENES.contract.start + 12}
          />
          
          {/* Highlighted line */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "40%",
            width: "50%",
            height: 2,
            background: GOLD,
            opacity: getOpacity(frame, SCENES.contract.start + 18, SCENES.contract.start + 20),
            transform: "translateX(-50%)",
          }} />
          
          <div style={{
            position: "absolute",
            bottom: 100,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 22,
            color: IVORY,
            textAlign: "center",
            opacity: getOpacity(frame, SCENES.contract.start + 20, SCENES.contract.start + 23),
          }}>
            The lender sees three assets.
          </div>
          
          <div style={{
            position: "absolute",
            bottom: 70,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 22,
            color: GOLD,
            textAlign: "center",
            opacity: getOpacity(frame, SCENES.contract.start + 25, SCENES.contract.start + 28),
          }}>
            But the player sees three ways to survive.
          </div>
        </>
      )}
      
      {/* Scene 4: Value Comparison (42-62s) */}
      {time >= SCENES.contract.end && time < SCENES.value.end && (
        <>
          {/* Comparison grid */}
          <div style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 30,
            padding: 30,
            opacity: getOpacity(frame, SCENES.value.start, SCENES.value.start + 3),
          }}>
            {/* Lender's view */}
            <div style={{
              background: "rgba(15, 10, 30, 0.8)",
              border: "1px solid rgba(100, 100, 200, 0.3)",
              borderRadius: 15,
              padding: 20,
              fontFamily: "Georgia, serif",
            }}>
              <div style={{ color: "#8ac", fontSize: 14 }}>LENDER SEES</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 24, color: GOLD, margin: "20px 0" }}>
                Collateral Value
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 20, color: "#ffb74d" }}>₡300</div>
                  <div style={{ fontSize: 12, color: "#aaa" }}>Voice</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 20, color: "#81c784" }}>₡200</div>
                  <div style={{ fontSize: 12, color: "#aaa" }}>Home</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 20, color: "#ba68c8" }}>₡400</div>
                  <div style={{ fontSize: 12, color: "#aaa" }}>Love</div>
                </div>
              </div>
            </div>
            
            {/* Player's view */}
            <div style={{
              background: "rgba(15, 10, 30, 0.8)",
              border: "1px solid rgba(224, 184, 102, 0.5)",
              borderRadius: 15,
              padding: 20,
              fontFamily: "Georgia, serif",
            }}>
              <div style={{ color: "#e0b866", fontSize: 14 }}>PLAYER HAS</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 24, color: IVORY, margin: "20px 0" }}>
                Productive Value
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 20, color: "#ffb74d" }}>₡500</div>
                  <div style={{ fontSize: 12, color: "#aaa" }}>Voice: +₡200 seller</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 20, color: "#81c784" }}>₡450</div>
                  <div style={{ fontSize: 12, color: "#aaa" }}>Home: +₡250 archive</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 20, color: "#ba68c8" }}>₡100</div>
                  <div style={{ fontSize: 12, color: "#aaa" }}>Love: +₡100 backroom</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center split line */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "20%",
            width: 2,
            height: "400px",
            background: "rgba(224, 184, 102, 0.5)",
            opacity: getOpacity(frame, SCENES.value.start + 1, SCENES.value.start + 4),
            transform: "translateX(-50%)",
          }} />
          
          <div style={{
            position: "absolute",
            bottom: 100,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 20,
            color: IVORY,
            textAlign: "center",
            opacity: getOpacity(frame, SCENES.value.start + 8, SCENES.value.start + 11),
          }}>
            The lender cannot see what your memories enable.
          </div>
          
          <div style={{
            position: "absolute",
            bottom: 60,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 18,
            color: GOLD,
            textAlign: "center",
            opacity: getOpacity(frame, SCENES.value.start + 12, SCENES.value.start + 14),
          }}>
            "Some memories are worth more while you still have them."
          </div>
        </>
      )}
      
      {/* Scene 5: Debt Clock (62-76s) */}
      {time >= SCENES.value.end && time < SCENES.debt.end && (
        <>
          {/* Bell Tower visualization */}
          <div style={{
            position: "absolute",
            left: "30%",
            top: "40%",
            width: 140,
            height: 420,
            background: "linear-gradient(to bottom, #555, #333)",
            borderLeft: "2px solid rgba(224, 184, 102, 0.5)",
            borderRight: "2px solid rgba(224, 184, 102, 0.5)",
            borderRadius: "0 0 20px 20px",
            boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)",
          }}>
            {/* Gears */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: "20%",
                  top: `${20 + i * 80}%`,
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: BRASS,
                  border: "1px solid rgba(180, 140, 80, 0.5)",
                  animation: `rotate ${3 + i}s infinite linear`,
                }}
              />
            ))}
            
            {/* Bell */}
            <div style={{
              position: "absolute",
              left: "30%",
              top: "10%",
              width: 40,
              height: 100,
              background: BRASS,
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }} />
          </div>
          
          {/* Debt counter */}
          <div style={{
            position: "absolute",
            right: "30%",
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 28,
            color: IVORY,
            textAlign: "center",
          }}>
            <div style={{ color: "#8ac", fontSize: 14 }}>DEBT</div>
            <div style={{ fontSize: 64, color: "#ff5252", textShadow: "0 0 20px rgba(255, 82, 82, 0.5)" }}>
              ₡440
            </div>
            <div style={{ fontSize: 18, color: "#aaa" }}>₡440 → ₡484 → ₡532 → ₡585</div>
          </div>
          
          {/* Cycle counter */}
          <div style={{
            position: "absolute",
            right: "30%",
            bottom: 100,
            fontFamily: "Georgia, serif",
            fontSize: 16,
            color: GOLD,
            textAlign: "center",
          }}>
            Cycle 4 of 4 | Deadline: 4 cycles
          </div>
          
          {/* Pressure text */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "70%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 20,
            color: "#ff5252",
            textAlign: "center",
            opacity: interpolate(frame, [FPS * 64, FPS * 66], [0, 1], { clamp: true }),
          }}>
            Time has a price.
          </div>
          
          {/* Stats */}
          <div style={{
            position: "absolute",
            bottom: 160,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 16,
            color: "#c8c2dd",
            textAlign: "center",
          }}>
            10% interest per cycle | 4-cycle repayment deadline
          </div>
          
          <style>{`
            @keyframes rotate {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </>
      )}
      
      {/* Scene 6: The Investigation (76-95s) */}
      {time >= SCENES.debt.end && time < SCENES.mystery.end && (
        <>
          {/* Archive environment */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, #1a1a2e, #16213e)",
            opacity: getOpacity(frame, SCENES.mystery.start, SCENES.mystery.start + 2),
          }} />
          
          {/* Archive shelves */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${15 + (i % 6) * 14}%`,
                top: `${20 + Math.floor(i / 6) * 45}%`,
                width: 100,
                height: 120,
                background: "rgba(30, 30, 50, 0.7)",
                border: "1px solid rgba(224, 184, 102, 0.2)",
                borderRadius: 5,
                opacity: getOpacity(frame, SCENES.mystery.start + 5, SCENES.mystery.start + 14),
              }}
            />
          ))}
          
          {/* Evidence items */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 80,
            height: 120,
            background: "linear-gradient(to bottom, #4a4a6a, #2a2a4a)",
            border: "2px solid rgba(224, 184, 102, 0.5)",
            borderRadius: 10,
            padding: 15,
            opacity: getOpacity(frame, SCENES.mystery.start + 10, SCENES.mystery.start + 18),
          }}>
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: 14,
              color: GOLD,
              fontWeight: "bold",
              marginBottom: 10,
            }}>
              EVIDENCE FOUND
            </div>
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: 12,
              color: IVORY,
              lineHeight: 1.4,
            }}>
              • Forgotten Ledger<br />
              • Torn Correspondence<br />
              • Voice Fragment<br />
              • Home Sketch<br />
              • Love Letter
            </div>
          </div>
          
          {/* Journal icon */}
          <div style={{
            position: "absolute",
            bottom: 100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 60,
            background: "linear-gradient(to bottom, #8b4513, #5d2906)",
            border: "1px solid rgba(139, 69, 19, 0.5)",
            borderRadius: "0 0 8px 8px",
            opacity: getOpacity(frame, SCENES.mystery.start + 15, SCENES.mystery.start + 17),
          }} />
          
          {/* Text */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "85%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 20,
            color: IVORY,
            textAlign: "center",
            opacity: getOpacity(frame, SCENES.mystery.start + 20, SCENES.mystery.start + 23),
          }}>
            The mystery unfolds.
          </div>
        </>
      )}
      
      {/* Scene 7: Repayment (95-115s) */}
      {time >= SCENES.mystery.end && time < SCENES.repayment.end && (
        <>
          {/* New Lantern State - memories restored */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 20,
            height: 300,
            background: "linear-gradient(to bottom, #ffd54f, #ff9800, #ffb74d)",
            borderRadius: "50% 50% 0 0",
            boxShadow: "0 0 50px rgba(255, 168, 77, 1)",
            animation: "restore 2s forwards",
          }}>
            {/* Restored memories inside lantern */}
            <MemoryOrb type="voice" frame={frame} position={{ x: "30%", y: "10%" }} scale={0.6} />
            <MemoryOrb type="home" frame={frame} position={{ x: "70%", y: "40%" }} scale={0.6} />
            <MemoryOrb type="love" frame={frame} position={{ x: "50%", y: "70%" }} scale={0.6} />
          </div>
          
          {/* Success state */}
          <div style={{
            position: "absolute",
            bottom: 120,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 28,
            color: "#4caf50",
            textShadow: "0 0 20px rgba(76, 175, 80, 0.5)",
            textAlign: "center",
            opacity: getOpacity(frame, SCENES.repayment.start + 3, SCENES.repayment.start + 6),
          }}>
            DEBT SETTLED<br />
            MEMORIES RESTORED
          </div>
          
          {/* Financial state */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "85%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 18,
            color: GOLD,
            textAlign: "center",
            opacity: getOpacity(frame, SCENES.repayment.start + 8, SCENES.repayment.start + 10),
          }}>
            ₡500 remaining | Seal fee paid | Archive toll paid
          </div>
          
          {/* New Ledger ending */}
          <div style={{
            position: "absolute",
            right: 100,
            top: "75%",
            fontFamily: "Georgia, serif",
            fontSize: 14,
            color: "#8ac",
            textAlign: "right",
            opacity: getOpacity(frame, SCENES.repayment.start + 12, SCENES.repayment.start + 15),
          }}>
            Evidence: 5<br />
            Memories held: 3<br />
            Ending: NEW LEDGER
          </div>
          
          <style>{`
            @keyframes restore {
              0% { height: 0; opacity: 0; }
              30% { height: 300px; opacity: 1; }
              100% { height: 300px; opacity: 1; }
            }
          `}</style>
        </>
      )}
      
      {/* Scene 8: Finale (115-118s) */}
      {time >= SCENES.repayment.end && (
        <>
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(135deg, ${DEEP_BLUE}, ${DEEP_BLUE}cc, #0a001a)`,
            opacity: getOpacity(frame, SCENES.repayment.end, SCENES.repayment.end + 1),
          }} />
          
          <div style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "Georgia, serif",
            fontSize: 96,
            color: IVORY,
            textAlign: "center",
            textShadow: "0 0 50px rgba(224, 184, 102, 0.5)",
            fontWeight: "bold",
            letterSpacing: 8,
            opacity: getOpacity(frame, SCENES.repayment.end + 2, SCENES.repayment.end + 5),
          }}>
            LACUNA
          </div>
          
          <div style={{
            position: "absolute",
            bottom: 120,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Georgia, serif",
            fontSize: 28,
            color: GOLD,
            textAlign: "center",
            opacity: getOpacity(frame, SCENES.repayment.end + 6, DURATION),
          }}>
            THE PRICE OF REMEMBERING
          </div>
        </>
      )}
    </Composition>
  );
}