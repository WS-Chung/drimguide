import type { ComponentType } from "react";
import Overview from "./Overview";
import Principles from "./Principles";
import GovernanceV2 from "./GovernanceV2";
import Seats from "./Seats";
import Operation from "./Operation";
import AxWorkflow from "./AxWorkflow";
import GoogleSlide from "./GoogleSlide";
import SlackSlide from "./SlackSlide";
import NotionSlide from "./NotionSlide";
import GitHubSlide from "./GitHubSlide";
import UseCasesOverview from "./UseCasesOverview";
import UseCaseAgentStandard from "./UseCaseAgentStandard";
import Knowledge from "./Knowledge";
import Governance from "./Governance";
import Checklist from "./Checklist";
import Faq from "./Faq";
import Hardware from "./Hardware";

export const slides: Record<string, ComponentType> = {
  overview: Overview,
  principles: Principles,
  "governance-v2": GovernanceV2,
  seats: Seats,
  operation: Operation,
  "ax-workflow": AxWorkflow,
  "integration-google": GoogleSlide,
  "integration-slack": SlackSlide,
  "integration-notion": NotionSlide,
  "integration-github": GitHubSlide,
  "uc-overview": UseCasesOverview,
  "uc-agent-standard": UseCaseAgentStandard,
  knowledge: Knowledge,
  governance: Governance,
  checklist: Checklist,
  faq: Faq,
  "appendix-hw": Hardware,
};

export const slideIds = Object.keys(slides);
export const defaultSlideId = "overview";
