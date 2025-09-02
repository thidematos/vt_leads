import axios from "axios";

async function createContact(contact) {
  const res = await axios.post("/api/v1/nectar", contact);

  return res.data.data.contact;
}

async function getContacts() {
  const res = await axios.get("/api/v1/nectar");

  return res.data.data.contacts;
}

export { createContact, getContacts };
