export const validatePrescriptionFields = (
    allowedTimes: string,
    transaction: string,
    totalPresciption: string
  ): Record<string, string> => {
    const errors: Record<string, string> = {};
  
    const times = parseInt(allowedTimes);
    const trans = parseInt(transaction);
    const total = parseInt(totalPresciption);
  
    if (isNaN(times) || times < 2 || times > 12) {
      errors.allowedTimes = 'القيمة يجب أن تكون بين 2 و 12';
    }
  
    let maxTransaction = 6 - (times / 2);
    if (maxTransaction < 1) maxTransaction = 1;
  
    const min = 1;
    const max = Math.floor(maxTransaction);
  
    if (isNaN(trans) || trans < min || trans > max) {
      const rangeMessage = min === max ? `${min}` : `بين ${min} و ${max}`;
      errors.transaction = `القيمة يجب أن تكون ${rangeMessage}`;
    }
  
    if (isNaN(total) || total !== times * trans) {
      errors.totalPresciption = 'القيمة يجب أن تساوي مرات التكرار × المعاملة';
    }
  
    return errors;
  };
  