import type { IconType } from "react-icons";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiResurrectionremixos,
  SiTailwindcss,
  SiPrisma,
  SiTypescript,
  SiJava,
  SiSpringboot,
  SiFigma,
} from "react-icons/si/index";
import Icon from "./Icon";

interface Tool {
  label: string;
  icon: IconType;
  hoverColor: string;
}

const tools: Tool[] = [
  {
    label: "HTML",
    icon: SiHtml5,
    hoverColor: "red",
  },
  {
    label: "CSS",
    icon: SiCss3,
    hoverColor: "blue",
  },
  {
    label: "JS",
    icon: SiJavascript,
    hoverColor: "yellow",
  },
  {
    label: "React",
    icon: SiReact,
    hoverColor: "blue",
  },
  {
    label: "Next",
    icon: SiNextdotjs,
    hoverColor: "gray",
  },
  {
    label: "Remix",
    icon: SiResurrectionremixos,
    hoverColor: "pink",
  },
  {
    label: "Tailwind",
    icon: SiTailwindcss,
    hoverColor: "emerald",
  },
  {
    label: "Prisma",
    icon: SiPrisma,
    hoverColor: "gray",
  },
  {
    label: "TS",
    icon: SiTypescript,
    hoverColor: "blue",
  },
  {
    label: "Java",
    icon: SiJava,
    hoverColor: "cyan",
  },
  {
    label: "Spring",
    icon: SiSpringboot,
    hoverColor: "green",
  },
  {
    label: "Figma",
    icon: SiFigma,
    hoverColor: "pink",
  },
];

const Tools = () => (
  <div className="mt-24 grid grid-cols-4 gap-12 place-items-center mb-36">
    {tools.map((tool) => (
      <Icon {...tool} key={tool.label} />
    ))}
  </div>
);

export default Tools;
