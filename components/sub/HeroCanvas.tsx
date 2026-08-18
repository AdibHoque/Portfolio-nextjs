"use client";

import React, { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/* ──────────────────────────────────────────────
   Brand colours (matching CSS tokens in globals.css)
   ────────────────────────────────────────────── */
const VIOLET = "#8B5CF6";
const VIOLET_SOFT = "#A78BFA";
const VIOLET_DEEP = "#6D28D9";
const BG_CORE = "#0B0B14";

/* ──────────────────────────────────────────────
   Cybernetic Core (Geometric Sci-Fi Object)
   ────────────────────────────────────────────── */
function CyberCore() {
  const coreRef = useRef<THREE.Group>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.15;
      coreRef.current.rotation.z = t * 0.1;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3;
      ring1Ref.current.rotation.y = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.2;
      ring2Ref.current.rotation.z = t * 0.1;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -t * 0.1;
      ring3Ref.current.rotation.z = -t * 0.2;
    }
  });

  return (
    <group>
      {/* Main Floating Core */}
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={coreRef}>
          {/* Inner Solid Hull */}
          <mesh>
            <icosahedronGeometry args={[1.2, 0]} />
            <meshStandardMaterial color={BG_CORE} roughness={0.2} metalness={0.8} />
          </mesh>
          {/* Outer Glowing Wireframe */}
          <mesh scale={1.15}>
            <icosahedronGeometry args={[1.2, 0]} />
            <meshBasicMaterial color={VIOLET} wireframe transparent opacity={0.4} />
          </mesh>
        </group>
      </Float>

      {/* Holographic Gyro Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.2, 0.004, 16, 100]} />
        <meshBasicMaterial color={VIOLET_SOFT} transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.6, 0.004, 16, 100]} />
        <meshBasicMaterial color={VIOLET} transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.1, 0.004, 16, 100]} />
        <meshBasicMaterial color={VIOLET_DEEP} transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

/* ──────────────────────────────────────────────
   Floating Data Shards
   ────────────────────────────────────────────── */
function DataShards() {
  const shards = useMemo(() => {
    return Array.from({ length: 25 }).map(() => ({
      pos: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4 - 1
      ] as [number, number, number],
      rot: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number],
      scale: Math.random() * 0.15 + 0.05,
      isWireframe: Math.random() > 0.4
    }));
  }, []);

  return (
    <group>
      {shards.map((s, i) => (
        <Float key={i} speed={1.5 + Math.random()} rotationIntensity={2} floatIntensity={2}>
          <mesh position={s.pos} rotation={s.rot} scale={s.scale}>
            <tetrahedronGeometry args={[1, 0]} />
            {s.isWireframe ? (
              <meshBasicMaterial color={VIOLET_SOFT} wireframe transparent opacity={0.6} />
            ) : (
              <meshStandardMaterial color={BG_CORE} roughness={0.2} metalness={0.8} />
            )}
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ──────────────────────────────────────────────
   Mouse Parallax — shifts camera group subtly
   ────────────────────────────────────────────── */
function MouseParallax({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = useCallback((e: { clientX: number; clientY: number }) => {
    mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
  }, []);

  const { gl } = useThree();
  React.useEffect(() => {
    const el = gl.domElement;
    const handler = (e: PointerEvent) => handlePointerMove(e);
    el.addEventListener("pointermove", handler, { passive: true });
    return () => el.removeEventListener("pointermove", handler);
  }, [gl.domElement, handlePointerMove]);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.current.x * 0.15,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.current.y * 0.1,
      0.05
    );
  });

  return <group ref={groupRef}>{children}</group>;
}

/* ──────────────────────────────────────────────
   Scene Compositon
   ────────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#e0d5ff" />
      <pointLight position={[-3, -3, 2]} intensity={0.8} color={VIOLET} />

      <MouseParallax>
        <CyberCore />
        <DataShards />
        {/* Glowing data dust */}
        <Sparkles count={150} scale={8} size={1.5} speed={0.4} color={VIOLET_SOFT} opacity={0.6} />
      </MouseParallax>
    </>
  );
}

/* ──────────────────────────────────────────────
   HeroCanvas Wrapper
   ────────────────────────────────────────────── */
export default function HeroCanvas() {
  return (
    <div
      aria-hidden="true"
      className="h-full w-full"
      style={{ minHeight: 320 }}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}