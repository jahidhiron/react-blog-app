const addCategoryValidator = ({ title }) => {
  const errors = {
    title: "",
  };

  if (!title) {
    errors.title = "Title is required";
  }

  return errors;
};

export default addCategoryValidator;
