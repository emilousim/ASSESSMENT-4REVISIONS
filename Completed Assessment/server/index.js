const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/fortune", (req,res)=>{
  const Fortunes = ["A beautiful, smart, and loving person will be coming into your life", "A hunch is creativity trying to tell you something.", "A lifetime friend shall soon be made.", "A light heart carries you through all the hard times.", "A short pencil is usually better than a long memory any day.",];

  let someIndex = Math.floor(Math.random() * Fortunes.length);
  let randomFortune = Fortunes[someIndex];

  res.status(200).send(randomFortune);
});

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});


app.listen(4000, () => console.log("Server running on 4000"));
