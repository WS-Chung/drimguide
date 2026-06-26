import type { ComponentType } from "react";
import Overview from "./Overview";
import Roadmap from "./Roadmap";
import Operation from "./Operation";
import Install from "./Install";
import Drive from "./Drive";
import Lifecycle from "./Lifecycle";
import Ideal from "./Ideal";
import Benefit from "./Benefit";
import Faq from "./Faq";

export const slides: Record<string, ComponentType> = {
  overview: Overview,
  roadmap: Roadmap,
  operation: Operation,
  install: Install,
  drive: Drive,
  lifecycle: Lifecycle,
  ideal: Ideal,
  benefit: Benefit,
  faq: Faq,
};

export const slideIds = Object.keys(slides);
export const defaultSlideId = "overview";
