const recoverPasswordValidator = ({ code, password }) => {
  const errors = {
    code: "",
    password: "",
  };

  if (!code) {
    errors.code = "Code is required";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password is 6 char long";
  }

  return errors;
};

export default recoverPasswordValidator;
