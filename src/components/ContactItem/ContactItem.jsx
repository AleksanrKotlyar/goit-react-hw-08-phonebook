import { ContactNumber, DeleteBtn } from './ContactItem.styled';
import { AiOutlineUserDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { IsLoading } from 'redux/contacts/selectors';

export const Item = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(IsLoading);

  return (
    <>
      {name}: <ContactNumber>{number}</ContactNumber>
      <DeleteBtn
        type="button"
        disabled={isLoading}
        onClick={() => dispatch(deleteContact(id))}
      >
        <AiOutlineUserDelete />
        Delete
      </DeleteBtn>
    </>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
