import React, { useContext } from "react";
import { SalaryContext } from "../context/SalaryContext";
import { FaRedo, FaUndo } from "react-icons/fa"; // Using react-icons for the reset icon

const ResetButton = () => {
  const { resetSalaryItems } = useContext(SalaryContext);

  return (
    <div className="title">
      <h2>Calculate Your Salary</h2>
      <div onClick={resetSalaryItems} className="reset-button">
        <FaUndo />
        <span>Reset</span>
      </div>
    </div>
  );
};

export default ResetButton;
