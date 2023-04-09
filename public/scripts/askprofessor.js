const fetch = require('node-fetch');
const request = require('request');

module.exports = {
  askQuestion
}

/**
 * Retrieves trending headlines for the given topic
 * @param {} keyTerm The term to be searched for
 */
function askProf(question) {
  return new Promise((resolve, reject) => {
    var url = 'https://api.wolframalpha.com/v1/result?i=' + question + '%3F&appid=RUVY5W-TVW9A395Y8';
    request(url, function (err, response, body) {
      if (err) {
        var error = 'cannot connect to the server';
        reject(error);
      }
      else {
        // console.log(extract);
        return resolve(body);
      }
    });
  })
}


async function askQuestion(question) {
  var response = await askProf(question);
  if (response === 'Wolfram|Alpha did not understand your input')
    response = "I do not know the answer to that question, maybe make sense next time";
  return response;
}