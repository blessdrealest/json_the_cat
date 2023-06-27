const request = require('request');



const breedFetcherData = () => {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

  request.get(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else {

      const data = JSON.parse(body);

      if (data.length > 0) {
        const firstEntry = data[0];
        console.log('Description:', firstEntry.description);
      } else {
        console.log('No breeds found.');
      }

    }
  });

};

const breedName = process.argv[2];

if (breedName) {
  breedFetcherData(breedName);
} else {
  console.log('Breed Name not present');
}

