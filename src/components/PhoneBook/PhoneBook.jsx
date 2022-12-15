// import React, { useEffect } from 'react';
import { Box, Title, SubTitle, Plug } from './PhoneBook.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactsSkeleton } from '../ContactsSkeleton/ContactsSkeleton';
import { useSelector } from 'react-redux';
import 'Utils/index.css';
// import { fetchContacts } from 'redux/contacts/contactsOperations';
// import { useDispatch } from 'react-redux';
import { getContacts, IsLoading } from 'redux/contacts/selectors';

export const PhoneBook = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(IsLoading);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Box
      bg="mainBg"
      p="4"
      mr="auto"
      ml="auto"
      mt="3"
      width="400px"
      max-height="100vh"
      border="normal"
      borderRadius="normal"
      borderColor="#3d341aba"
      boxShadow="base"
      as="section"
    >
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {contacts && isLoading && <ContactsSkeleton />}
      {contacts.length === 0 && !isLoading && <Plug> No contacts</Plug>}
      {!isLoading && contacts && <ContactList />}
    </Box>
  );
};
