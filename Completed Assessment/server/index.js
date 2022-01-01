const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); 

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
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/inspo", (req, res) => {
  const inspirations = ["'When you have a dream, you’ve got to grab it and never let go - Carol Burnett", "The bad news is time flies. The good news is you’re the pilot. — Michael Altshuler", "Life has got all those twists and turns. You’ve got to hold on tight and off you go. — Nicole Kidman", "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box. — Duchess Meghan"]

  let inspoIndex = Math.floor(Math.random() * inspirations.length);
  let randomInspo = inspirations[inspoIndex];

  res.status(200).send(randomInspo);
});

app.get("/api/encourage", (req, res) => {
  const encourage = ["You’re making a big change, and I’m so proud of you!", "I know things are difficult right now, but I also know you’ve got what it takes to get through it.", "I believe in you! And unicorns. But mostly you."
  ];

  let anotherIndex = Math.floor(Math.random() * encourage.length);
  let randomEncouragement = encourage[anotherIndex];

  res.status(200).send(randomEncouragement);
});

app.get("/api/jokes", (req, res) => {
  const jokes = ["What did one ocean say to the other ocean? Nothing, it just waved.", "When does a joke become a ‘dad’ joke? When it becomes apparent.", " What kind of shorts do clouds wear? Thunderpants", "You heard the rumor going around about butter?  Never mind, I shouldn’t spread it."];

  let jokeIndex = Math.floor(Math.random() * jokes.length);
  let randomJoke  = jokes[jokeIndex];

  res.status(200).send(randomJoke);
});

app.listen(4000, () => console.log("Server running on 4000"));
