import { updateContacts } from '../utils/updateContacts.js';
import { getAllContacts } from './getAllContacts.js';

export const removeLastContact = async () => {
  const data = await getAllContacts();
  data.pop();
  await updateContacts(data);
};

removeLastContact();