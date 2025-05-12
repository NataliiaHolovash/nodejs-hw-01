import getAllContacts from './getAllContacts.js';
import updateContacts from '../utils/updateContacts.js';

export const removeLastContact = async () => {
  const contactsList = await getAllContacts();
  contactsList.pop();
  await updateContacts(contactsList);
};

removeLastContact();