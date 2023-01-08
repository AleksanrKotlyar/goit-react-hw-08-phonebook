// import { updateContact } from 'redux/contacts/contactsOperations';
import { Modal, Overlay, TitleWrapper, CloseBtn } from './ContactEdit.styled';

import { ContactForm } from '../ContactForm/ContactForm';

export const EditContact = ({ closeModal, id }) => {
  const contacts = localStorage.getItem('persist:contacts');
  const items = JSON.parse(contacts);

  const contact = JSON.parse(items.items).find(item => item.id === id);

  const handleCloseModal = e => {
    if (e.currentTarget === e.target || e.key === 'Escape') {
      closeModal(false);
      document.querySelector('body').style.overflowY = 'visible';
      window.removeEventListener('keydown', handleCloseModal);
    }
  };

  document.querySelector('body').style.overflowY = 'hidden';
  window.addEventListener('keydown', handleCloseModal);

  return (
    <Overlay onClick={handleCloseModal}>
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
            btnText={'Submit changes'}
            defaultValue={{ nick: contact.name, phone: contact.number }}
          />
        )}
      </Modal>
    </Overlay>
  );
};
