import type { ComponentType } from "react";
import Overview from "./Overview";
import Principles from "./Principles";
import Accounts from "./Accounts";
import Operation from "./Operation";
import AxWorkflow from "./AxWorkflow";
import GoogleSlide from "./GoogleSlide";
import SlackSlide from "./SlackSlide";
import NotionSlide from "./NotionSlide";
import GitHubSlide from "./GitHubSlide";
import Knowledge from "./Knowledge";
import Governance from "./Governance";
import Checklist from "./Checklist";
import Faq from "./Faq";
import Hardware from "./Hardware";

export const slides: Record<string, ComponentType> = {
  overview: Overview,
  principles: Principles,
  accounts: Accounts,
  operation: Operation,
  "ax-workflow": AxWorkflow,
  "integration-google": GoogleSlide,
  "integration-slack": SlackSlide,
  "integration-notion": NotionSlide,
  "integration-github": GitHubSlide,
  knowledge: Knowledge,
  governance: Governance,
  checklist: Checklist,
  faq: Faq,
  "appendix-hw": Hardware,
};

export const slideIds = Object.keys(slides);
export const defaultSlideId = "overview";
