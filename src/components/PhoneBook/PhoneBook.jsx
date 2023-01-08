import {
  Box,
  Title,
  SubTitle,
  Plug,
  Wrapper,
  WrapperContacts,
} from './PhoneBook.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactsSkeleton } from '../ContactsSkeleton/ContactsSkeleton';
import { useSelector } from 'react-redux';

import 'Utils/index.css';

import { getContacts, IsLoading } from 'redux/contacts/selectors';

export const PhoneBook = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(IsLoading);

  return (
    <>
      <Box
        backgroundImage="linear-gradient(to bottom, #1c7791, #71b280);)"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        p="4"
        mr="auto"
        ml="auto"
        mt="3"
        width="700px"
        minHeight="75vh"
        border="normal"
        borderRadius="normal"
        borderColor="#3d341aba"
        boxShadow="base"
        as="section"
      >
        <Title>Phonebook</Title>
        <Wrapper>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            border="1px  "
            borderStyle="dotted"
            borderColor="colorTitle"
            borderRadius="normal"
            maxHeight="270px"
            p="3"
          >
            <SubTitle>Add new contact</SubTitle>
            <ContactForm />
          </Box>
          <WrapperContacts>
            <SubTitle>Contacts</SubTitle>
            <Filter />
            {contacts && isLoading && <ContactsSkeleton />}
            {contacts.length === 0 && !isLoading && <Plug> No contacts</Plug>}
            {!isLoading && contacts && <ContactList />}
          </WrapperContacts>
        </Wrapper>
      </Box>
    </>
  );
};
