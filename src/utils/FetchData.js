export const exerciseOptions =  {
  method: 'GET',

  headers: {
    //hide key in .env file.
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 
  }
};


//accepting two parameters. url and options.
export const fetchData = async (url, options) => {
    //we want to fetch the url and provided additional options.
    const response = await fetch (url, options);
    const data = await response.json()
    return data;
}