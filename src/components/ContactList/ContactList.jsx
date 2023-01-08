import { Box, Plug } from '../PhoneBook/PhoneBook.styled';
import { ContactItem } from './ContactList.styled';
// import PropTypes from 'prop-types';
import { Item } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normFilter = filter.toLocaleLowerCase();
  const renderContactsList = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normFilter)
  );

  return (
    <Box mr="auto" width="100%" mt="5px" as="ul">
      {renderContactsList.length ? (
        renderContactsList.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <Item name={name} number={number} id={id} />
          </ContactItem>
        ))
      ) : (
        <Plug>No contacts find</Plug>
      )}
    </Box>
  );
};

// ContactList.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.object).isRequired,
//   handleOnDelete: PropTypes.func.isRequired,
// };
