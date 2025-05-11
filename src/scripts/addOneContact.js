import createFakeContact from '../utils/createFakeContact.js';
import getAllContacts from './getAllContacts.js';
import writeContacts from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contactsList = await getAllContacts();
  const newContact = createFakeContact();

  contactsList.push(newContact);
  await writeContacts(contactsList);
};

addOneContact();