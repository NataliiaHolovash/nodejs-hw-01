import getAllContacts from './getAllContacts.js';

const countContacts = async () => {
  const contacts = await getAllContacts();
  return contacts.length;
};
export default countContacts;

console.log(await countContacts());