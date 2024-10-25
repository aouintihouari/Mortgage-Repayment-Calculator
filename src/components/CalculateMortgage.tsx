import { ReactElement } from "react";

type Props = { onCalculateRepayment: () => void };

export default function CalculateMortgage({
  onCalculateRepayment,
}: Props): ReactElement {
  return (
    <button
      onClick={onCalculateRepayment}
      className="bg-lime text-slate-900 text-preset-3 w-full sm:w-6/12 rounded-full flex justify-center items-center p-2 my-5"
    >
      <img src="/assets/images/icon-calculator.svg" alt="calculator icon" />{" "}
      Calculate Repayments
    </button>
  );
}
