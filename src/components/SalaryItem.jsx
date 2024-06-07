import React, { useContext } from 'react';
import { SalaryContext } from '../context/SalaryContext';

const SalaryItem = ({ item }) => {
  const { deleteSalaryItem } = useContext(SalaryContext);

  return (
    <div className="salary-item">
      <span>{item.name}: {item.amount}</span>
      {item.isEPFApplicable && <span> ✓ EPF/ETF</span>}
      <button onClick={() => deleteSalaryItem(item.id)}>✕</button>
    </div>
  );
};

export default SalaryItem;
