import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const updateContacts = async (data) => {
  fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
};