import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const updateContacts = (contactsList) =>
  fs.writeFile(PATH_DB, JSON.stringify(contactsList, null, 2));

export default updateContacts;