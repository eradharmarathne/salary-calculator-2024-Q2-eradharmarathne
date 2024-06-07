import React from "react";
import Header from "./components/Header";
import SalaryForm from "./components/SalaryForm";
import SalarySummary from "./components/SalarySummary";
import { SalaryProvider } from "./context/SalaryProvider";
import ResetButton from "./components/ResetButton";

const App = () => {
  return (
    <SalaryProvider>
      <div className="App">
        <div className="content">
          <div className="left-column">
            <div className="header">
              <ResetButton />
            </div>
            <SalaryForm />
          </div>
          <div className="right-column">
            <SalarySummary />
          </div>
        </div>
      </div>
    </SalaryProvider>
  );
};

export default App;
