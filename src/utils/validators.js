// Utility functions for validation and form handling
import { VALIDATION_RULES } from '../constants';

/**
 * Validates form data against predefined rules
 * @param {string} fieldName - Name of the field to validate
 * @param {string} value - Value to validate
 * @returns {object} - { isValid: boolean, error: string }
 */
export const validateField = (fieldName, value) => {
  const rules = VALIDATION_RULES[fieldName];

  if (!rules) {
    return { isValid: true, error: '' };
  }

  // Check if required
  if (rules.required && !value?.trim()) {
    return { isValid: false, error: `${fieldName} is required` };
  }

  // Check minimum length
  if (rules.minLength && value.length < rules.minLength) {
    return { isValid: false, error: rules.errorMsg };
  }

  // Check pattern/regex
  if (rules.pattern && value && !rules.pattern.test(value)) {
    return { isValid: false, error: rules.errorMsg };
  }

  return { isValid: true, error: '' };
};

/**
 * Validates entire form object
 * @param {object} formData - Form data object
 * @param {array} fields - Array of field names to validate
 * @returns {object} - { isValid: boolean, errors: {} }
 */
export const validateForm = (formData, fields) => {
  const errors = {};
  let isValid = true;

  fields.forEach((field) => {
    const { isValid: fieldValid, error } = validateField(field, formData[field]);
    if (!fieldValid) {
      errors[field] = error;
      isValid = false;
    }
  });

  return { isValid, errors };
};

/**
 * Sanitizes user input to prevent XSS
 * @param {string} input - User input string
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (input) => {
  if (!input) return '';
  
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
};

/**
 * Formats phone number for WhatsApp
 * @param {string} phone - Phone number
 * @returns {string} - WhatsApp link
 */
export const getWhatsAppLink = (phone) => {
  const cleanPhone = phone.replace(/\D/g, '');
  const phoneWithCountry = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
  return `https://wa.me/${phoneWithCountry}`;
};

/**
 * Formats phone number to a readable format
 * @param {string} phone - Phone number
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3');
};

/**
 * Handles form submission with validation
 * @param {object} e - Event object
 * @param {object} formData - Form data
 * @param {array} requiredFields - Array of required field names
 * @param {function} onSuccess - Callback on success
 * @param {function} onError - Callback on error
 */
export const handleFormSubmit = async (e, formData, requiredFields, onSuccess, onError) => {
  e.preventDefault();

  // Validate form
  const { isValid, errors } = validateForm(formData, requiredFields);

  if (!isValid) {
    onError(errors);
    return;
  }

  // Sanitize data
  const sanitizedData = Object.keys(formData).reduce((acc, key) => {
    acc[key] = sanitizeInput(formData[key]);
    return acc;
  }, {});

  try {
    // Here you would typically send data to backend
    // Example: const response = await fetch('/api/inquiries/submit', { method: 'POST', body: JSON.stringify(sanitizedData) });
    
    console.log('Form submitted:', sanitizedData);
    onSuccess();
  } catch (error) {
    console.error('Form submission error:', error);
    onError({ submit: 'Failed to submit form. Please try again.' });
  }
};

/**
 * Gets CSS classes dynamically
 * @param {object} baseClasses - Base class object
 * @param {boolean} isActive - Active state
 * @returns {string} - Combined class string
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Formats currency values
 * @param {number} value - Value to format
 * @param {string} currency - Currency symbol (default: ₹)
 * @returns {string} - Formatted currency
 */
export const formatCurrency = (value, currency = '₹') => {
  const crores = Math.floor(value / 10000000);
  const lakhs = Math.floor((value % 10000000) / 100000);

  if (crores > 0) {
    return `${currency}${crores}.${lakhs}${crores > 0 ? ' Cr' : ''}`;
  }
  return `${currency}${lakhs} L`;
};

/**
 * Debounce function for search and input handlers
 * @param {function} func - Function to debounce
 * @param {number} delay - Delay in ms
 * @returns {function} - Debounced function
 */
export const debounce = (func, delay = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export default {
  validateField,
  validateForm,
  sanitizeInput,
  getWhatsAppLink,
  formatPhoneNumber,
  handleFormSubmit,
  cn,
  formatCurrency,
  debounce
};
