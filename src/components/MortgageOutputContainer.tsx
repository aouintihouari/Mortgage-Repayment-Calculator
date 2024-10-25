import { ReactElement, ReactNode } from "react";

type Props = { children: ReactNode };

export default function MortgageOutputContainer({
  children,
}: Props): ReactElement {
  return (
    <section className="bg-slate-900 text-white h-full sm:rounded-bl-[5rem] sm:p-16 sm:rounded-br-3xl sm:rounded-tr-3xl">
      {children}
    </section>
  );
}
