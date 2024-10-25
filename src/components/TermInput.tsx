import { ReactElement, useEffect, useState } from "react";

import { isPositiveNumber } from "../helpers/isPositiveNumber";
import { termRange } from "../helpers/termRange";

interface Props {
  onTerm: (value: number) => void;
  clear: boolean;
}

export default function TermInput({ onTerm, clear }: Props): ReactElement {
  const [termInput, setTermInput] = useState<string>("");
  function handleTerm(value: string): void {
    if (!isPositiveNumber(value)) {
      setTermInput("");
      onTerm(0);
      return;
    }
    const rangedValue = termRange(value);
    setTermInput(rangedValue.toString());
    onTerm(rangedValue);
  }

  useEffect(() => {
    setTermInput("");
  }, [clear]);

  return (
    <div className="relative mt-5">
      <div className="flex flex-col mb-2">
        <label className="mb-2" htmlFor="term">
          <span className="text-preset-4 text-slate-700">Mortgage Term</span>{" "}
          {parseInt(termInput) >= 40 && (
            <span className="text-red-500">
              The mortgage term can't be greater than 40 years
            </span>
          )}
        </label>
        <input
          className={`"bg-slate-100" ${
            termInput ? "border-lime" : "border-slate-500"
          } border-2 h-200 rounded-lg outline-none pl-2`}
          type="text"
          onChange={(e) => handleTerm(e.target.value)}
          value={termInput}
          name="term"
          id="term"
        />
      </div>
      <div
        className={`absolute flex justify-center items-center ${
          termInput ? "bg-lime" : "bg-slate-100"
        } bottom-[10px] right-[2px] h-[36px] w-[50px] rounded-br-md rounded-tr-md`}
      >
        <p className="text-preset-3 text-slate-700">years</p>
      </div>
    </div>
  );
}
