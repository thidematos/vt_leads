import axios from "axios";

async function createContact(contact) {
  const res = await axios.post("/api/v1/nectar", contact);

  return res.data.data.contact;
}

export { createContact };
