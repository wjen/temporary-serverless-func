//domain/.netlify/functions/1-hello
// exports -- node environment

const person = { name: "wen" };
exports.handler = async (event, context, cb) => {
  // cb(null, {
  //   statusCode: 200,
  //   body: "our first netlify function examssssple",
  // });

  // returns promise due to async by default
  // NEEDS A STRING
  return {
    statusCode: 200,
    body: "first functions",
  };
};
