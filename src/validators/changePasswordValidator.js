const changePasswordValidator = ({ oldPassword, newPassword }) => {
  const errors = {
    oldPassword: "",
    newPassword: "",
  };

  if (!oldPassword) {
    errors.oldPassword = "Old password is required";
  }

  if (!newPassword) {
    errors.newPassword = "New password is required";
  } else if (newPassword.length < 6) {
    errors.newPassword = "New pasword should be 6 char long";
  }

  if (oldPassword && oldPassword === newPassword) {
    errors.newPassword = "You are providing old password";
  }

  return errors;
};

export default changePasswordValidator;
