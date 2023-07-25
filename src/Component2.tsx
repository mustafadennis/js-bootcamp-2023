import { ColorTypes } from "./types/types";

interface Component2Props {
  name: string;
  color: ColorTypes;
}

const Component2 = ({ name, color }: Component2Props) => {
  return <div style={{ color: color }}>{name}</div>;
};

export default Component2;
