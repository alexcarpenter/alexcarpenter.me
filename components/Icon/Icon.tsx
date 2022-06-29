import { Command } from "react-feather";

interface IconProps {
  name: keyof typeof Icons;
}

const Icons = {
  command: Command,
};

export const Icon = ({ name }: IconProps) => {
  const Component = Icons[name];
  return <Component width="1rem" height="1rem" />;
};
