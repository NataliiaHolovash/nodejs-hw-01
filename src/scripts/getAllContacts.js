import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  return await readContacts();
};

export default getAllContacts;

console.log(await getAllContacts());
