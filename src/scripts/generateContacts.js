import createFakeContact from '../utils/createFakeContact.js';
import getAllContacts from './getAllContacts.js';
import writeContacts from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const prevContactsList = await getAllContacts();
  const newContactsList = Array(number).fill(0).map(createFakeContact);

  prevContactsList.push(...newContactsList);
  await writeContacts(prevContactsList);
};

generateContacts(5);