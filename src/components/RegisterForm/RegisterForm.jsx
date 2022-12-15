import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, LabelForm } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelForm>
        Username
        <input type="text" name="name" />
      </LabelForm>
      <LabelForm>
        Email
        <input type="email" name="email" />
      </LabelForm>
      <LabelForm>
        Password
        <input type="password" name="password" />
      </LabelForm>
      <button type="submit">Register</button>
    </Form>
  );
};
