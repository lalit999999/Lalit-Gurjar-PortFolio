"use client";

import dynamic from "next/dynamic";

const RetroGrid = dynamic(() => import("./retro-grid"), { ssr: false });

export default function RetroGridLoader() {
  return <RetroGrid />;
}
