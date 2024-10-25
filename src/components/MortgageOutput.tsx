import { ReactElement } from "react";

import { formatNumberWithCommas } from "../helpers/formatNumberWithCommas";

interface Props {
  monthlyRepayment: number;
  totalRepayment: number;
  monthlyInterest: number;
  totalInterest: number;
  selectedOption: string | null;
}

export default function MortgageOutput({
  monthlyRepayment,
  totalRepayment,
  monthlyInterest,
  totalInterest,
  selectedOption,
}: Props): ReactElement {
  const isRepayment = selectedOption === "repayment";
  const displayedMonthly = isRepayment ? monthlyRepayment : monthlyInterest;
  const displayedTotal = isRepayment ? totalRepayment : totalInterest;
  const monthlyLabel = isRepayment
    ? "Your monthly repayments"
    : "Your monthly interest";
  const totalLabel = isRepayment
    ? "Total you'll repay over the term"
    : "Total interest over the term";

  return (
    <section className="flex flex-col p-4">
      <h3 className="text-preset-2 mb-4">Your results</h3>
      <p className="text-preset-4 text-slate-300 mb-4">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <section className="relative bg-slate-900 border-4 border-slate-900 border-t-lime rounded-3xl">
        <div className="absolute bg-black opacity-30 h-full w-full rounded-3xl z-1"></div>
        <div className="relative z-20 mx-5 mt-5">
          <h5 className="text-slate-300">{monthlyLabel}</h5>
          <p className="text-lime text-preset-1 font-bold">
            £{formatNumberWithCommas(parseFloat(displayedMonthly.toFixed(2)))}
          </p>
          <div className="w-full h-0.5 my-16 bg-slate-300"></div>
          <p className="text-slate-300 mt-5">{totalLabel}</p>
          <p className="text-preset-2 font-bold my-5">
            £{formatNumberWithCommas(parseFloat(displayedTotal.toFixed(2)))}
          </p>
        </div>
      </section>
    </section>
  );
}
