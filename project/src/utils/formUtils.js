export const validateEmail = (email) => {
  return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

export const handleFormError = (error) => {
  console.error('Form submission error:', error);
};