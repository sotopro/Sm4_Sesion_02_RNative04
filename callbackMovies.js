const request = require('request');
const fs = require('fs');

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    if(error){
        console.error(`Could not send request to API: ${error.message}`);
        return;
    }
    if(response.statusCode !== 200){
        console.error(`Expected status code 200 but received ${response.statusCode}`);
        return;
    }

    console.log('Processing our list of movies');
    const movies = JSON.parse(body);
    let moviesList = '';
    movies.forEach(movie => {
        moviesList += `Title: ${movie.original_title}, Release date: ${movie.release_date}\n`
    });
    fs.writeFile('callbackMovies.csv', moviesList, (error) => {
        if(error){
            console.error(`Could not write file: ${error.message}`);
            return;
        }
        console.log('File written successfully');
    })
});