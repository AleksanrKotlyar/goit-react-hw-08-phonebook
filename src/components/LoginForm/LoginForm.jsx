import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, LabelForm } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelForm>
        Email
        <input type="email" name="email" />
      </LabelForm>
      <LabelForm>
        Password
        <input type="password" name="password" />
      </LabelForm>
      <button type="submit">Log In</button>
    </Form>
  );
};
