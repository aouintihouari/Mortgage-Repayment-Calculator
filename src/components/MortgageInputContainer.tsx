import { ReactNode, ReactElement, FormEvent } from "react";

type Props = {
  children: ReactNode;
};

export default function MortgageInputContainer({
  children,
}: Props): ReactElement {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
