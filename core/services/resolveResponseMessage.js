export const USER_NOT_FOUND = 'User not found';
export const INVALID_CREDENTIALS = 'Invalid credentials';
export const INVALID_OTP = 'Invalid OTP';
export const SUCCESS_LOGIN = 'Login success';
export const SUCCESS_FORGOT_PASSWORD = 'Forgot password success';
export const SUCCESS_RESET_PASSWORD = 'Reset password success';
export const SUCCESS_SEND_OTP = 'OTP has been send to your email';

const apiResponses = {
  'api.auth.login.user_not_found': USER_NOT_FOUND,
  'api.auth.login.password_invalid': INVALID_CREDENTIALS,
  'OTP is invalid': INVALID_OTP,
  'api.auth.login.success': SUCCESS_LOGIN,
  'api.auth.forgot_password.success': SUCCESS_FORGOT_PASSWORD,
  'api.auth.reset_password.success': SUCCESS_RESET_PASSWORD,
  'api.auth.forgot_password.send_otp.success': SUCCESS_SEND_OTP,
  'api.auth.forgot_password.confirm_otp.success': SUCCESS_RESET_PASSWORD,
};

const resolveResponseMessage = (message) => apiResponses[message] || message;

export default resolveResponseMessage;
