import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import { updateContacts } from '../utils/updateContacts.js';

export const addOneContact = async () => {
  const constantsList = await getAllContacts();
  const newContactsList = createFakeContact();

  const data = [...constantsList, newContactsList];
  await updateContacts(data);
};

addOneContact();