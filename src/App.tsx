import { ReactElement, useState } from "react";
import MortgageContainer from "./components/MortgageContainer";
import MortgageInputContainer from "./components/MortgageInputContainer";
import MortgageHeader from "./components/MortgageHeader";
import MortgageInput from "./components/MortgageInput";
import PercentageTermContainer from "./components/PercentageTermContainer";
import TermInput from "./components/TermInput";
import PercentageInput from "./components/PercentageInput";
import MortgageType from "./components/MortgageType";
import CalculateMortgage from "./components/CalculateMortgage";
import MortgageOutputContainer from "./components/MortgageOutputContainer";
import EmptyMortgageOutput from "./components/EmptyMortgageOutput";
import MortgageOutput from "./components/MortgageOutput";

export default function App(): ReactElement {
  const [mortgage, setMortgage] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [monthlyRepayment, setMonthlyRepayment] = useState<number>(0);
  const [totalRepayment, setTotalRepayment] = useState<number>(0);
  const [monthlyInterest, setMonthlyInterest] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [showEmpty, setShowEmpty] = useState<boolean>(true);
  const [clear, setClear] = useState<boolean>(false);

  function handleMortgage(value: number): void {
    setMortgage(value);
  }

  function handleTerm(value: number): void {
    setTerm(value);
  }

  function handlePercentage(value: number): void {
    setPercentage(value);
  }

  const handleOptionChange = (option: string): void => {
    setSelectedOption(option);
  };

  function handleCalculateRepayments(): void {
    if (mortgage <= 0 || term <= 0 || percentage <= 0) {
      setShowEmpty(true);
      return;
    }

    const monthlyInterestRate = percentage / 100 / 12;
    const numberOfPayments = term * 12;

    const monthlyRepaymentCalc =
      (mortgage * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalRepaymentCalc = monthlyRepaymentCalc * numberOfPayments;

    const monthlyInterestCalc = (mortgage * percentage) / 100 / 12;
    const totalInterestCalc = monthlyInterestCalc * numberOfPayments;

    setMonthlyRepayment(monthlyRepaymentCalc);
    setTotalRepayment(totalRepaymentCalc);
    setMonthlyInterest(monthlyInterestCalc);
    setTotalInterest(totalInterestCalc);
    setShowEmpty(false);
  }

  function clearAll(): void {
    setClear((clear) => !clear);
    setMortgage(0);
    setTerm(0);
    setPercentage(0);
    setSelectedOption(null);
    setMonthlyRepayment(0);
    setTotalRepayment(0);
    setMonthlyInterest(0);
    setTotalInterest(0);
    setShowEmpty(true);
  }

  return (
    <MortgageContainer>
      <MortgageInputContainer>
        <MortgageHeader onClearAll={clearAll} />
        <MortgageInput
          mortgage={mortgage}
          onMortgage={handleMortgage}
          clear={clear}
        />
        <PercentageTermContainer>
          <TermInput clear={clear} onTerm={handleTerm} />
          <PercentageInput clear={clear} onPercentage={handlePercentage} />
        </PercentageTermContainer>
        <MortgageType
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
        />
        <CalculateMortgage onCalculateRepayment={handleCalculateRepayments} />
      </MortgageInputContainer>
      <MortgageOutputContainer>
        {showEmpty ? (
          <EmptyMortgageOutput />
        ) : (
          <MortgageOutput
            monthlyRepayment={monthlyRepayment}
            totalRepayment={totalRepayment}
            monthlyInterest={monthlyInterest}
            totalInterest={totalInterest}
            selectedOption={selectedOption}
          />
        )}
      </MortgageOutputContainer>
    </MortgageContainer>
  );
}
