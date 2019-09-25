const express = require('express');
const app =express();

const artists = [
    { 
    id: 1,
    name: 'Metallica'
},
{ 
    id: 2,
    name: 'Iron Maiden'
},
{ 
    id: 3,
    name: 'Deep Purple'
},

]


app.get('/', (req, res)=>{
    res.send('Hello API');

});


app.get('/artists', (req, res)=>{
    res.send(artists);
});

app.get('/artists/:id', (req, res)=>{
    console.log(req.params);
    const artist = artists.find( (artist) =>{
        return artist.id === Number(req.params.id)
     
    });

 res.send(artist);
});


app.listen(3012, (req, res)=> {
    console.log('API app started');

});