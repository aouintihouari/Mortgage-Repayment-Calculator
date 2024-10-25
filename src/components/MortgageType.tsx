import { ReactElement } from "react";

type Props = {
  selectedOption: string | null;
  onOptionChange: (option: string) => void;
};

export default function MortgageType({
  selectedOption,
  onOptionChange,
}: Props): ReactElement {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-2" htmlFor="type">
        Mortgage type
      </label>
      <div
        className={`flex items-center w-full border-2 mb-2 py-2 rounded-lg ${
          selectedOption === "repayment"
            ? "border-lime-500 bg-lime-50"
            : "border-slate-500"
        }`}
      >
        <label className="flex items-center w-full cursor-pointer">
          <input
            className={`mx-2 ${
              selectedOption === "repayment" ? "custom-radio" : ""
            }`}
            type="radio"
            name="mortgageType"
            id="repayment"
            checked={selectedOption === "repayment"}
            onChange={() => onOptionChange("repayment")}
          />
          <p>Repayment</p>
        </label>
      </div>
      <div
        className={`flex items-center w-full border-2 py-2 rounded-lg ${
          selectedOption === "interestOnly"
            ? "border-lime-500 bg-lime-50"
            : "border-slate-500"
        }`}
      >
        <label className="flex items-center w-full cursor-pointer">
          <input
            className={`mx-2 ${
              selectedOption === "interestOnly" ? "custom-radio" : ""
            }`}
            type="radio"
            name="mortgageType"
            id="interestOnly"
            checked={selectedOption === "interestOnly"}
            onChange={() => onOptionChange("interestOnly")}
          />
          <p>Interest Only</p>
        </label>
      </div>
    </div>
  );
}
