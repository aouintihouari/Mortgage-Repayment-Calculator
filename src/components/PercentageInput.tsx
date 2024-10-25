import { ReactElement, useState, useEffect } from "react";
import { percentageRange } from "../helpers/percentageRange";

import { isPositiveNumber } from "../helpers/isPositiveNumber";

interface Props {
  onPercentage: (value: number) => void;
  clear: boolean;
}

export default function PercentageInput({
  onPercentage,
  clear,
}: Props): ReactElement {
  const [percentageInput, setPercentageInput] = useState<string>("");

  function handlePercentage(value: string): void {
    if (!isPositiveNumber(value)) {
      setPercentageInput("");
      onPercentage(0);
      return;
    }
    const rangedValue = percentageRange(value);
    onPercentage(rangedValue);
    setPercentageInput(value);
  }

  useEffect(() => {
    setPercentageInput("");
  }, [clear]);

  return (
    <div className="relative mt-5">
      <div className="flex flex-col">
        <label className="mb-2" htmlFor="rate">
          {" "}
          <span className="text-preset-4 text-slate-700">Interest Rate</span>
        </label>
        <input
          className={`${
            percentageInput ? "border-lime" : "border-slate-500"
          } border-2 h-200 rounded-lg outline-none pl-2 `}
          type="text"
          name="rate"
          id="rate"
          onChange={(e) => handlePercentage(e.target.value)}
          value={percentageInput}
        />
      </div>
      <div
        className={`absolute flex justify-center items-center ${
          percentageInput ? "bg-lime" : "bg-slate-100"
        } bottom-[2px] sm:bottom-[10px] right-[2px] p-2 sm:h-[36px] w-100 rounded-br-md rounded-tr-md`}
      >
        <p className="text-preset-3 text-slate-700">%</p>
      </div>
    </div>
  );
}
