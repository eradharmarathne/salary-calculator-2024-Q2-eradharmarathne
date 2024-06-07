import React, { useState, useContext } from 'react';
import { SalaryContext } from '../context/SalaryContext';

const AddAllowanceModal = ({ onClose }) => {
  const { addSalaryItem } = useContext(SalaryContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [isEPFApplicable, setIsEPFApplicable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addSalaryItem({ type: 'earning', name, amount: parseFloat(amount), isEPFApplicable });
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Add New Earnings</h2>
        <label>
          Earnings Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Eg: Travel"
            required
          />
        </label>
        <label>
          Amount
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Eg: 10,000"
            required
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={isEPFApplicable}
            onChange={(e) => setIsEPFApplicable(e.target.checked)}
          />
          EPF/ETF
        </label>
        <button type="submit">Add</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddAllowanceModal;
