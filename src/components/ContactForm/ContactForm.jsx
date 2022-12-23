import { useEffect, useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Box } from '../PhoneBook/PhoneBook.styled';
import { SubmitBtn, LabelForm, InputForm } from './ContactForm.styled';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, updateContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/selectors';
import toast from 'react-hot-toast';

export const ContactForm = ({
  handleCloseModal,
  defaultValue = { nick: '', phone: '' },
  btnText = 'Add contact',
  id,
}) => {
  const [name, setName] = useState('');

  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (defaultValue.nick !== '' && defaultValue.phone !== '') {
      setName(defaultValue.nick);
      setNumber(defaultValue.phone);
    }
  }, [defaultValue.nick, defaultValue.phone]);

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

    if (
      defaultValue.nick !== '' &&
      defaultValue.phone !== '' &&
      name === defaultValue.nick &&
      number === defaultValue.phone
    )
      return handleCloseModal();

    IsContactInList && id !== IsContactInList.id
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
      : e.currentTarget.elements[2].innerText === 'Update'
      ? dispatch(
          updateContact({
            id,
            name: name,
            number: number,
          })
        )
      : dispatch(
          addContact({
            name: e.currentTarget.elements.name.value,
            number: e.currentTarget.elements.number.value,
          })
        );

    if (!IsContactInList) {
      setName('');
      setNumber('');
      // e.currentTarget.reset();
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
          // defaultValue={defaultValue.nick}
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
          // defaultValue={defaultValue?.phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleOnInputChange}
          autocomplete="off"
        />
      </LabelForm>
      <SubmitBtn type="submit">
        <AiOutlineUserAdd /> {btnText}
      </SubmitBtn>
    </Box>
  );
};

ContactForm.propTypes = {
  handleCloseModal: PropTypes.func,
  defaultValue: PropTypes.object,
  btnText: PropTypes.string,
  id: PropTypes.string,
};
