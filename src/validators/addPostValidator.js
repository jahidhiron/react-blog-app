const addPostValidator = ({ title, category }) => {
  const errors = {
    title: "",
    category: "",
  };

  if (!title) {
    errors.title = "Title is required";
  }

  if (!category) {
    errors.category = "Category is required";
  }

  return errors;
};

export default addPostValidator;
