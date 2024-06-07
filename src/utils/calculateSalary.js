export const calculateSalary = (basicSalary, salaryItems) => {
    const totalEarnings = salaryItems.filter(item => item.type === 'earning').reduce((sum, item) => sum + item.amount, 0) + basicSalary;
    const totalDeductions = salaryItems.filter(item => item.type === 'deduction').reduce((sum, item) => sum + item.amount, 0);
  
    const grossEarnings = totalEarnings - totalDeductions;
    const totalEarningsForEPF = basicSalary + salaryItems.filter(item => item.isEPFApplicable).reduce((sum, item) => sum + item.amount, 0);
    const grossSalaryForEPF = totalEarningsForEPF - totalDeductions;
  
    const employeeEPF = grossSalaryForEPF * 0.08;
    const employerEPF = grossSalaryForEPF * 0.12;
    const employerETF = grossSalaryForEPF * 0.03;
  
    const apit = grossEarnings > 0 ? (grossEarnings * 0.18 - 25500) : 0; // Ensure APIT is only calculated if gross earnings are positive
    const netSalary = grossEarnings - employeeEPF - apit;
    const costToCompany = grossEarnings + employerEPF + employerETF;
  
    return {
      netSalary,
      totalEarnings,
      totalDeductions,
      employeeEPF,
      employerEPF,
      employerETF,
      grossEarnings,
      apit,
      costToCompany
    };
  };
  