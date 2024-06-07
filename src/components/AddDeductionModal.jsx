import React, { useState, useContext } from 'react';
import { SalaryContext } from '../context/SalaryContext';

const AddDeductionModal = ({ onClose }) => {
  const { addSalaryItem } = useContext(SalaryContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSalaryItem({ type: 'deduction', name, amount: parseFloat(amount) });
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Add New Deduction</h2>
        <label>
          Deduction Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Eg: Loan"
            required
          />
        </label>
        <label>
          Amount
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Eg: 5,000"
            required
          />
        </label>
        <button type="submit">Add</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddDeductionModal;
