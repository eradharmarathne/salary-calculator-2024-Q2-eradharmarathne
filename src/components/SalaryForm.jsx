import React, { useState, useContext } from 'react';
import { SalaryContext } from '../context/SalaryContext';
import AddAllowanceModal from './AddAllowanceModal';
import AddDeductionModal from './AddDeductionModal';
import SalaryItem from './SalaryItem';

const SalaryForm = () => {
  const { salaryItems, addSalaryItem, updateBasicSalary } = useContext(SalaryContext);
  const [showAllowanceModal, setShowAllowanceModal] = useState(false);
  const [showDeductionModal, setShowDeductionModal] = useState(false);
  const [basicSalary, setBasicSalary] = useState('');

  const handleBasicSalaryChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setBasicSalary(value);
    updateBasicSalary(value);
  };

  return (
    <div className="salary-form">
      <label>
        <strong>Basic Salary</strong>
        <input
          type="number"
          value={basicSalary}
          onChange={handleBasicSalaryChange}
          placeholder="100,000.00"
        />
      </label>
      <div className="section">
        <h2>Earnings</h2>
        <p>Allowance, Fixed Allowance, Bonus and etc.</p>
        <button onClick={() => setShowAllowanceModal(true)}>+ Add New Allowance</button>
        <div>
          {salaryItems.filter(item => item.type === 'earning').map(item => (
            <SalaryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="section">
        <h2>Deductions</h2>
        <p>Salary Advances, Loan Deductions and all</p>
        <button onClick={() => setShowDeductionModal(true)}>+ Add New Deduction</button>
        <div>
          {salaryItems.filter(item => item.type === 'deduction').map(item => (
            <SalaryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      {showAllowanceModal && <AddAllowanceModal onClose={() => setShowAllowanceModal(false)} />}
      {showDeductionModal && <AddDeductionModal onClose={() => setShowDeductionModal(false)} />}
    </div>
  );
};

export default SalaryForm;
