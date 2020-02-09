export default function validate(values) {
  const errors = {};
  const img = new Image();
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.description) {
    errors.description = 'Required';
  }
  if ((img.src = values.imageurl)) {
    errors.imageurl = 'Please use a valid URL';
  }
  if (!values.tags) {
    errors.tags = 'At least one tag is required';
  }

  return errors;
}
