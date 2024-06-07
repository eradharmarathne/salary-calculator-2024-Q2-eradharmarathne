import React, { useReducer } from 'react';
import { SalaryContext } from './SalaryContext';
import { calculateSalary } from '../utils/calculateSalary';

const initialState = {
  basicSalary: 0,
  salaryItems: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BASIC_SALARY':
      return {
        ...state,
        basicSalary: action.payload
      };
    case 'ADD_SALARY_ITEM':
      return {
        ...state,
        salaryItems: [...state.salaryItems, action.payload]
      };
    case 'DELETE_SALARY_ITEM':
      return {
        ...state,
        salaryItems: state.salaryItems.filter(item => item.id !== action.payload)
      };
    case 'RESET_SALARY_ITEMS':
      return {
        basicSalary: 0,
        salaryItems: []
      };
    default:
      return state;
  }
};

export const SalaryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateBasicSalary = (amount) => {
    dispatch({ type: 'UPDATE_BASIC_SALARY', payload: amount });
  };

  const addSalaryItem = (item) => {
    dispatch({ type: 'ADD_SALARY_ITEM', payload: { ...item, id: Date.now() } });
  };

  const deleteSalaryItem = (id) => {
    dispatch({ type: 'DELETE_SALARY_ITEM', payload: id });
  };

  const resetSalaryItems = () => {
    dispatch({ type: 'RESET_SALARY_ITEMS' });
  };

  const calculateNetSalary = () => {
    return calculateSalary(state.basicSalary, state.salaryItems);
  };

  return (
    <SalaryContext.Provider value={{
      basicSalary: state.basicSalary,
      salaryItems: state.salaryItems,
      updateBasicSalary,
      addSalaryItem,
      deleteSalaryItem,
      resetSalaryItems,
      calculateNetSalary
    }}>
      {children}
    </SalaryContext.Provider>
  );
};
