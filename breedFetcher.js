const request = require ('request');



const breedFetcherData = () => {
const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

request.get(url, (error, response,  body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    
  const data = JSON.parse(body); //convert string to obj

    console.log(data);
    console.log(typeof data);


  }
});

}

breedFetcherData();
