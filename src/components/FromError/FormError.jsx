import { ErrorMessage } from 'formik';

import ErrorText from './ErrorText.styled'

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{ message }</ErrorText> }
    />
  );
}

export default FormError;