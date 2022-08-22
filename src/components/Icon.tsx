import { useMemo } from "react";
import type { IconType } from "react-icons";
import classNames from "classnames";

interface IconProps {
  label: string;
  icon: IconType;
  hoverColor: string;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  label,
  hoverColor,
}) => {
  const css = useMemo(() => `block text-6xl transition-all`, []);

  const appliedCss = css + ` group-hover:text-${hoverColor}-400`;

  return (
    <div className={`flex flex-col font-head items-center gap-4 group`}>
      <IconComponent className={appliedCss} />
      <span className={`text-2xl group-hover:text-${hoverColor}-400`}>
        {label}
      </span>
    </div>
  );
};

export default Icon;
