import { useEffect, useState } from 'react';
import { Box } from '../PhoneBook/PhoneBook.styled';
import { LabelForm, InputForm } from './ContactForm.styled';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, updateContact } from 'redux/contacts/contactsOperations';
import { IsLoading, getContacts } from 'redux/contacts/selectors';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import { LoadingButton } from '@mui/lab';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import toast from 'react-hot-toast';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const themeAddBtn = createTheme({
  components: {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          textTransform: 'capitalize',
          color: '#000000',
          borderColor: '#3d341aba',
          '&:hover': {
            borderColor: '#eab013ba',
            boxShadow: 'inset 0 0 10px 1px #eab013ba',
          },
        },
      },
    },
  },
});

export const ContactForm = ({
  handleSubmitCloseModal,
  defaultValue = { nick: '', phone: '' },
  btnText = 'Add contact',
  id,
}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(IsLoading);
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
      return handleSubmitCloseModal();

    IsContactInList && id !== IsContactInList.id
      ? toast.error(
          `Contact with name ${name}} is already in exists! Try another name`,
          {
            duration: 1500,
            position: 'top-right',
            style: {
              borderRadius: '10px',
              background: '#f6da26',
              border: '1px solid #333',
              color: '#000',
            },
          }
        )
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
      onSubmit={handleOnSubmit}
      autocomplete="off"
    >
      <LabelForm htmlFor="nameId">
        <PersonIcon sx={{ color: 'black' }} fontSize="small" />
        <span
          style={{ marginRight: '5px', fontSize: '20px', fontWeight: '600' }}
        >
          Name
        </span>
      </LabelForm>
      <InputForm
        id="nameId"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleOnInputChange}
        autocomplete="off"
        autoFocus
      />

      <LabelForm>
        <PhoneIcon sx={{ color: 'black' }} fontSize="small" />
        <span
          style={{ marginRight: '5px', fontSize: '20px', fontWeight: '600' }}
        >
          Number
        </span>
      </LabelForm>
      <InputForm
        type="tel"
        name="number"
        value={number}
        maxLength="20"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleOnInputChange}
        autocomplete="off"
      />
      <ThemeProvider theme={themeAddBtn}>
        <LoadingButton
          loading={isLoading}
          loadingPosition="end"
          endIcon={<AddCircleOutlineIcon />}
          variant="outlined"
          type="submit"
          size="small"
          sx={{ mt: '20px' }}
        >
          {btnText}
        </LoadingButton>
      </ThemeProvider>
    </Box>
  );
};

ContactForm.propTypes = {
  handleSubmitCloseModal: PropTypes.func,
  defaultValue: PropTypes.object,
  btnText: PropTypes.string,
  id: PropTypes.string,
};
