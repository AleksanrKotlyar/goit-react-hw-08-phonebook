// import { updateContact } from 'redux/contacts/contactsOperations';
import { Modal, Overlay, TitleWrapper, CloseBtn } from './ContactEdit.styled';

import { ContactForm } from '../ContactForm/ContactForm';

export const EditContact = ({ closeModal, id }) => {
  const contacts = localStorage.getItem('persist:contacts');
  const items = JSON.parse(contacts);

  const contact = JSON.parse(items.items).find(item => item.id === id);

  const handleCloseModal = () => closeModal(false);

  // const editContact = updateContact();
  // const handleEditContact = async fields => {
  //   try {
  //     await editContact({ id: id });
  //     handleCloseModal();
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <Overlay>
      <Modal>
        <TitleWrapper>
          <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Update contact
          </p>
          <CloseBtn type="button" onClick={handleCloseModal} />
        </TitleWrapper>
        {contact && (
          <ContactForm
            handleCloseModal={handleCloseModal}
            id={id}
            btnText={'Update'}
            defaultValue={{ nick: contact.name, phone: contact.number }}
          />
        )}
      </Modal>
    </Overlay>
  );
};
