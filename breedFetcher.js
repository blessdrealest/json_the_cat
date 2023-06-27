const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);

      if (data.length > 0) {
        const firstEntry = data[0];
        callback(null, firstEntry.description);
      } else {
        callback('No breeds found.');
      }

    }
  });

};


module.exports = { fetchBreedDescription };
