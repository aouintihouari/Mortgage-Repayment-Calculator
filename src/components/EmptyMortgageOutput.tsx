export default function EmptyMortgageOutput() {
  return (
    <section className="flex flex-col items-center p-5">
      <img src="/assets/images/illustration-empty.svg" alt="empty" />
      <h3 className="text-preset-2 mt-2">Results shown here</h3>
      <p className="text-center text-preset-4 text-slate-300 my-5">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </section>
  );
}
