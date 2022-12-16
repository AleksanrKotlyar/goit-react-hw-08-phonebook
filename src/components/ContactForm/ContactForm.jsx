import { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Box } from '../PhoneBook/PhoneBook.styled';
import { SubmitBtn, LabelForm, InputForm } from './ContactForm.styled';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/selectors';
import toast from 'react-hot-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleOnInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log('Invalid subscription type');
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const normalizeName = name.toLocaleLowerCase();
    const IsContactInList = contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizeName
    );

    IsContactInList
      ? toast.error(`${name} is already in contacts`, {
          duration: 1500,
          position: 'top-right',
          style: {
            borderRadius: '10px',
            background: '#f6da26',
            border: '1px solid #333',
            color: '#000',
          },
        })
      : dispatch(
          addContact({
            name: e.currentTarget.elements.name.value,
            number: e.currentTarget.elements.number.value,
          })
        );

    if (!IsContactInList) {
      setName('');
      setNumber('');
    }
  };

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      onSubmit={handleOnSubmit}
      autocomplete="off"
    >
      <LabelForm>
        Name
        <InputForm
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleOnInputChange}
          autocomplete="off"
        />
      </LabelForm>
      <LabelForm>
        Number
        <InputForm
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleOnInputChange}
          autocomplete="off"
        />
      </LabelForm>
      <SubmitBtn type="submit">
        <AiOutlineUserAdd /> Add contact
      </SubmitBtn>
    </Box>
  );
};

// ContactForm.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
// };
