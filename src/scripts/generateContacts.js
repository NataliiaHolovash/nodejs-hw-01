import { createFakeContact } from '../utils/createFakeContact.js';
import { updateContacts } from '../utils/updateContacts.js';
import { getAllContacts } from './getAllContacts.js';

export const generateContacts = async (number) => {
  const constantsList = await getAllContacts();
  const newContactsList = Array(number).fill(0).map(createFakeContact);

  const data = [...constantsList, ...newContactsList];
  await updateContacts(data);
};

generateContacts(5);