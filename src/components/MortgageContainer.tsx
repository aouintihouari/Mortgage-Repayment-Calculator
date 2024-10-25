import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MortgageContainer({ children }: Props): ReactElement {
  return (
    <section className="flex flex-col md:grid gap-3 md:grid-cols-2 w-full bg-white sm:w-11/12 rounded-3xl">
      {children}
    </section>
  );
}
