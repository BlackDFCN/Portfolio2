"use client";


import React from "react";
import { useTheme } from "@/hooks/useTheme";
import StarfieldBackground from "../ui/StarfieldBackground";
import LightfieldBackground from "../ui/LightfieldBackground";

export default function GlobalBackground() {
  const { theme } = useTheme();
  if (theme === "dark") return <StarfieldBackground />;
  if (theme === "light") return <LightfieldBackground />;
  return null;
}
