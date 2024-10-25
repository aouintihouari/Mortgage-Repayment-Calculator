import { ReactElement, useState, useEffect } from "react";

import { isPositiveNumber } from "../helpers/isPositiveNumber";
import { mortgageRange } from "../helpers/mortgageRange";
import { formatNumberWithCommas } from "../helpers/formatNumberWithCommas";
import { parseNumberFromFormattedString } from "../helpers/parseFormattedMortgage";

type Props = {
  mortgage: number;
  onMortgage: (value: number) => void;
  clear: boolean;
};

export default function MortgageInput({
  mortgage,
  onMortgage,
  clear,
}: Props): ReactElement {
  const [mortgageDisplay, setMortgageDisplay] = useState<string>("");
  const handleMortgage = (value: string): void => {
    if (value === "") {
      setMortgageDisplay("");
      onMortgage(0);
      return;
    }
    const mortgageParsed = parseNumberFromFormattedString(value);

    if (isPositiveNumber(value)) {
      const mortgage = mortgageRange(mortgageParsed.toString());
      setMortgageDisplay(formatNumberWithCommas(mortgage));
      onMortgage(mortgage);
    }
  };

  useEffect(() => {
    setMortgageDisplay("");
  }, [clear]);

  return (
    <div className="relative mt-5">
      <div className="flex flex-col">
        <label className="mb-2" htmlFor="mortgage">
          <span className="text-preset-4 text-slate-700">Mortgage Amount</span>{" "}
          {mortgage >= 1_000_000 && (
            <span className="text-red-500">
              The interest rate can't be greater than $1,000,000
            </span>
          )}
        </label>
        <input
          className={`${
            mortgage ? "border-lime" : "border-slate-500"
          } border-2 h-200 rounded-lg outline-none pl-200`}
          name="mortgage"
          id="mortgage"
          type="text"
          onChange={(e) => handleMortgage(e.target.value)}
          value={mortgageDisplay}
        />
      </div>
      <div
        className={`absolute flex justify-center items-center ${
          mortgage ? "bg-lime" : "bg-slate-100"
        } bottom-[2px] left-[2px] p-2 h-[36px] w-100 rounded-bl-md rounded-tl-md`}
      >
        <p className="text-preset-3 text-slate-700">£</p>
      </div>
    </div>
  );
}
