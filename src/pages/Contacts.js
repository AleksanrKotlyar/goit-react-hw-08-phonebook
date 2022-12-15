import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/contactsOperations';
// import { selectLoading } from 'redux/tasks/selectors';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';

export default function Tasks() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <PhoneBook />
      {/* <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList /> */}
    </>
  );
}
