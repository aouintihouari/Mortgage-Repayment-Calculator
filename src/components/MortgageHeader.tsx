import { ReactElement } from "react";

type Props = { onClearAll: () => void };

export default function MortgageHeader({ onClearAll }: Props): ReactElement {
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <h1 className="text-preset-2 text-slate-900 font-bold">
        Mortgage Calculator
      </h1>
      <p
        onClick={onClearAll}
        className="text-preset-4 text-slate-700 underline cursor-pointer"
      >
        Clear All
      </p>
    </header>
  );
}
