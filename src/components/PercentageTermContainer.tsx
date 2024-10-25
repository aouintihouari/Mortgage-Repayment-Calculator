import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PercentageTermContainer({
  children,
}: Props): ReactElement {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {children}
    </section>
  );
}
