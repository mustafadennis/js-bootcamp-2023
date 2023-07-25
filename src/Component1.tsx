import { useEffect, useState } from "react";
import { ColorTypes } from "./types/types";
import { MONTHS } from "./constants/constants";

interface Component1Props {
  name: string;
  color: ColorTypes;
}

interface IMyFunc {
  arrayMonth: string[];
  month: string;
}

const Component1 = ({ name, color }: Component1Props) => {
  const [state, setState] = useState<number>(0);

  const myFunc = ({ arrayMonth, month }: IMyFunc) => {
    return arrayMonth.includes(month);
  };

  myFunc({
    arrayMonth: [MONTHS.JANUARY, MONTHS.FEBRUARY, MONTHS.MARCH],
    month: MONTHS.JANUARY,
  });

  useEffect(() => {
    setState((state: number) => state + 1);
    console.log(state);
  }, [state]);

  setState(10);
  return <div style={{ color: color }}>{name}</div>;
};

export default Component1;
