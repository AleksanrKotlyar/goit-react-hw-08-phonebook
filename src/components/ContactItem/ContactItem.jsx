import { ContactNumber, DeleteBtn, EditBtn } from './ContactItem.styled';
import { AiOutlineUserDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { IsLoading } from 'redux/contacts/selectors';
import { useState } from 'react';
import { EditContact } from 'components/ContactEdit/ContactEdit';

export const Item = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(IsLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <span>{name}:</span> <ContactNumber>{number}</ContactNumber>
      <EditBtn type="button" onClick={() => setIsModalOpen(true)} />
      <DeleteBtn
        type="button"
        disabled={isLoading}
        onClick={() => dispatch(deleteContact(id))}
      >
        <AiOutlineUserDelete />
        Delete
      </DeleteBtn>
      {isModalOpen && <EditContact id={id} closeModal={setIsModalOpen} />}
    </>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
