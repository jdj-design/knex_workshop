const express = require('express');
const app = express();
const port =8081;
const knex= require('knex')(require('./knexfile')["development"]);

app.get('/', (request,response) =>{
    response.send('Application is up and running I think')
})

app.listen(port, ()=>{
    console.log('Your Knex and Express application are running successfully')
})

app.get('/company', async (request, response) => {
    try {
        const companies = await knex.select('name', 'location').from('candy_companies');
        response.send(companies);
    } catch (error) {
        console.error(error); 
        response.status(500).send('An error occurred while retrieving companies');
    }
});
