const { default: axios } = require('axios');

exports.createContact = async (contact) => {
  try {
    const res = await axios.post(
      process.env.NECTAR_URL.replace('API_TOKEN', process.env.NECTAR_KEY),
      contact,
      {
        headers: { 'Access-Token': process.env.NECTAR_KEY },
      }
    );

    return { status: true };
  } catch (err) {
    console.log(err.response.data.mensagens);
    return { status: false, data: err.response.data.mensagens };
  }
};

exports.getContacts = async () => {
  try {
    const res = await axios.get(
      process.env.NECTAR_URL.replace('API_TOKEN', process.env.NECTAR_KEY)
    );

    return { status: true, data: res.data };
  } catch (err) {
    console.log(err.response.data.mensagens);
    return { status: false, data: err.response.data.mensagens };
  }
};

exports.deleteContact = async ({ id }) => {
  try {
    const res = await axios.delete(
      process.env.NECTAR_ID_URL.replace(
        'API_TOKEN',
        process.env.NECTAR_KEY
      ).replace('_ID', id)
    );

    console.log(res.data);

    return { status: true, data: res.data };
  } catch (err) {
    return { status: false, data: err.response.data.mensagens };
  }
};
