import * as yup from "yup";

export const schema = yup
  .object({
    title: yup.string().max(50).required(),
    description: yup.string().max(300).required(),
  })
  .required();
