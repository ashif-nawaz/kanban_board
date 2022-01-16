import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const INITIAL_VALUES = {
  name: "",
  username: "",
  email: "",
  number: "",
  password: "",
};

const VALIDATION_SCHEMA = Yup.object({
  name: Yup.string()
    .min(3, "At least 3 character or more")
    .required("Name is required"),
  username: Yup.string()
    .min(3, "At least 3 character or more")
    .required("Username is required"),
  email: Yup.string()
    .email("Please enter a valid user email")
    .required("Email is required."),
  number: Yup.string()
    .optional()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Phone number should be 10 digits"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

export { INITIAL_VALUES, VALIDATION_SCHEMA };