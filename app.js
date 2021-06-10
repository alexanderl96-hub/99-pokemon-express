const express = require("express");
const Pokemon = require("./models/pokemon.json");

const app = express();

app.get('/', (req, res)=>{
    res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`);
  });

  app.get("/bugs", (req, res) => {
    let { numberOfBugs } = req.params;
    numberOfBugs = 101;
    res.send(`<h1>
    99 little bugs in the code 
    <br/> 
    99 little bugs 
    <br/> 
    <a href="/bugs/101">Pull one down, <br/> Patch it around</a>
    <br/>
    ${numberOfBugs} bugs in the code
    </h1>`);
    })

    app.get("/bugs/:numberOfBugs", (req, res) => {
        let { numberOfBugs } = req.params;
        if (numberOfBugs < 200) {
          res.send(`<h1>
              ${numberOfBugs} little bugs in the code
              <br/>
              ${numberOfBugs} little bugs
              <br/>
              <a href="/bugs/${
                Number(numberOfBugs) + 2
              }">Pull one down, patch it around</a>
              </h1>`);
        } else {
          res.send(`<h1><a href="/bugs">Too many bugs!! Start over!</a></h1>`);
        }
      });

      app.get("/pokemon", (req,res)=>{
        res.json(Pokemon)
      })
      app.get("/pokemon/search", (req, res)=>{
          const {name} = req.query
          res.json(Pokemon.filter((poky)=>{
               return poky.name.toLowerCase() === name.toLowerCase()
          }))
      })
      
      app.get("/pokemon/:index", (req, res)=>{
          const {index}= req.params
          if(Pokemon[index]){
              res.send(Pokemon[index])
          }else{
              res.send(`Sorry, no pokemon found at ${index}`)
          }

      })

module.exports = app