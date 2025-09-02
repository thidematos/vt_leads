const { default: axios } = require('axios');

exports.createContact = async (contact) => {
  const res = await axios.post(
    process.env.NECTAR_URL.replace('API_TOKEN', process.env.NECTAR_KEY),
    contact
  );

  console.log(res);
};
