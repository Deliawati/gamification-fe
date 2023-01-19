export const firstLetterToUpperCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const removeQuotes = (string) => string.replace(/"/g, '');

const resolveFormErrorMessage = (error) => {
  if (error.message) {
    return firstLetterToUpperCase(removeQuotes(error.message));
  }
  if (typeof error === 'string') {
    return firstLetterToUpperCase(removeQuotes(error));
  }
  return 'Something went wrong';
};

export default resolveFormErrorMessage;
