const items = require('../assets/data');
exports.handler = async (event, context, cb) => {
  // NEEDS A STRING
  console.log(items);
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
