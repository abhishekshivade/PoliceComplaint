const validateUser = () => {
  const validateName = (value) => {
    const trimmedValue = value.trim().toUpperCase();
    if (trimmedValue.length < 3 || trimmedValue.length > 10) {
      return "Length must be between 3 and 10 characters long";
    }
    if (!/^[a-zA-Z]+$/.test(trimmedValue)) {
      return "Enter only letters";
    }
    return null; // No error
  };

  const validateEmail = (value) => {
    if (
      !value
        .trim()
        .toUpperCase()
        .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      return "Invalid email";
    }
    return null; // No error
  };

  const validatePassword = (value) => {
    
    if (value.trim().length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(value)
    ) {
      return "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character";
    }
    return null; // No error
  };

  const validateCityName = (value) => {
    const trimmedValue = value.trim();

    if (trimmedValue.length < 2 || trimmedValue.length > 50) {
      return "City Name must be between 2 and 50 characters long";
    }

    if (!/^[a-zA-Z\s]+$/.test(trimmedValue)) {
      return "City Name must contain only letters and spaces";
    }

    return null; // No error
  };

  const validateMobileNumber = (value) => {
    const trimmedValue = value.trim();

    if (!/^[6-9]\d{9}$/.test(trimmedValue)) {
      return "Indian Mobile Number must be a 10-digit number starting with 6, 7, 8, or 9";
    }

    return null;
  };

  const validateAadhaarNumber = (value) => {
    const trimmedValue = value.trim();

    if (!/^\d{12}$/.test(trimmedValue)) {
        return "Aadhaar Number must be a 12-digit number";
    }

    return null; 
};

const validatePanCardNumber = (value) => {
  const trimmedValue = value.trim();

  if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(trimmedValue)) {
      return "PAN Card Number must be a 10-character alphanumeric string (e.g., ABCDE1234F)";
  }

  return null;
};


const validateAccountType = (value) => {
  const trimmedValue = value.trim().toLowerCase();

  const validAccountTypes = ['Savings', 'Current', 'Loan', 'Fixed Deposit'];

  if (!validAccountTypes.includes(trimmedValue)) {
      return "Account type must be one of the following: Savings, Current, Loan, Fixed Deposit";
  }

  return null;
};



  const validateBranch=value=>!value ? 'Please select a branch' : null;

  const validateId = (value) => {
    const trimmedValue = value.trim();

    if (!/^\d{5}$/.test(trimmedValue)) {
      return "Customer ID must be a 6 digit number";
    }

    return null; // No error
  };

  return {
    validateName,
    validateEmail,
    validatePassword,
    validateCityName,
    validateMobileNumber,
    validateBranch,
    validateId,
    validateAadhaarNumber,
    validatePanCardNumber,
    validateAccountType
  };
};

export default validateUser;
