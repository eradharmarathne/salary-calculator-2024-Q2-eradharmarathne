import React, { useContext } from 'react';
import { SalaryContext } from '../context/SalaryContext';

const SalarySummary = () => {
  const { calculateNetSalary } = useContext(SalaryContext);
  const { netSalary = 0, totalEarnings = 0, totalDeductions = 0, employeeEPF = 0, employerEPF = 0, employerETF = 0, grossEarnings = 0, apit = 0, costToCompany = 0 } = calculateNetSalary();

  return (
    <div className="salary-summary">
      <h2>Your salary</h2>
      <div className="summary-table">
        <div className="summary-item header">
          <span>Items</span>
          <span>Amount</span>
        </div>
        <div className="summary-item">
          <span>Basic Salary</span>
          <span>{totalEarnings}</span>
        </div>
        <div className="summary-item">
          <span>Gross Earning</span>
          <span>{totalEarnings}</span>
        </div>
        <div className="summary-item">
          <span>Gross Deduction</span>
          <span>{totalDeductions}</span>
        </div>
        <div className="summary-item">
          <span>Employee EPF (8%)</span>
          <span>{employeeEPF}</span>
        </div>
        <div className="summary-item">
          <span>APIT</span>
          <span>{apit}</span>
        </div>
        <div className="summary-total">
          <h3>Net Salary (Take Home)</h3>
          <span>{netSalary}</span>
        </div>
      </div>
      <h3>Contribution from the Employer</h3>
      <div className="summary-table">
        <div className="summary-item">
          <span>Employer EPF (12%)</span>
          <span>{employerEPF}</span>
        </div>
        <div className="summary-item">
          <span>Employer ETF (3%)</span>
          <span>{employerETF}</span>
        </div>
        <div className="summary-total">
          <h3>CTC (Cost to Company)</h3>
          <span>{costToCompany}</span>
        </div>
      </div>
    </div>
  );
};

export default SalarySummary;
