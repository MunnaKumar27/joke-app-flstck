require('dotenv').config()
var cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 4000


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend on localhost:3000
}));

app.get('/jokes', (req,res)=>{
  res.json ([
    
    {
      "id": "2eac2186-b14c-4792-ab4d-a0aae0293343",
      "name": "ashes",
      "joke": "When the window fell into the incinerator, it was a pane in the ash to retrieve."
    },
    {
      "id": "c526955f-9ef3-4fa1-b60f-3d378580d2e1",
      "name": "pirate's favorite letter",
      "joke": "What's a pirate's favorite letter? It be the Sea"
    },
    {
      "id": "4fd6156b-7c92-4923-bec1-81e81fb15a81",
      "name": "counting cows",
      "joke": "How do you count cows? A 'Cow'culator"
    },
    {
      "id": "651bc854-d416-4c28-9216-07784eaf9390",
      "name": "He's Alright",
      "joke": "Did you hear about the guy whose whole left side was cut off? He's all right now."
    },
    {
      "id": "22dea85e-3954-45dd-9425-d149089515ab",
      "name": "Bakery Fire",
      "joke": "My friend's bakery burned down last night. Now his business is toast."
    },
    {
      "id": "74bddcfd-b053-4f24-b989-883b7e83c03b",
      "name": "Nut Assault",
      "joke": "Two peanuts were walking down the street. One was a salted."
    },
    {
      "id": "0e649c7e-452f-4040-84c1-08831871b948",
      "name": "Wonderwall",
      "joke": "My son asked me to stop singing Oasis songs in public. I said maybe."
    },
    {
      "id": "fd34db50-820c-4388-b45f-7f97de782355",
      "name": "Banking",
      "joke": "I used to be a banker but I lost interest"
    },
    {
      "id": "0009b5e4-adbf-48ef-b124-16a863bac35d",
      "name": "Golfer Pants",
      "joke": "Why did the golfer bring two pairs of pants? In case he got a hole-in-one."
    },
    {
      "id": "90482c63-daee-407b-86fd-c0451d3c711b",
      "name": "Lieutenant Dan",
      "joke": "To the man in the wheelchair that stole my camouflage jacket; You can hide, but you can't run."
    },
    {
      "id": "81a2d43c-0492-4faf-a98d-f5036cc9c2b5",
      "name": "Flamingo",
      "joke": "When my wife told me to stop impersonating a flamingo, I had to put my foot down."
    },
    {
      "id": "3a6276ef-e86f-46e0-ba11-2ef8666833ad",
      "name": "My Day",
      "joke": "The rotation of earth really makes my day."
    },
    {
      "id": "fa4617bb-1570-4ad8-8610-20b87df2ab56",
      "name": "Chickens can't drive",
      "joke": "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans."
    },
    {
      "id": "fa5eeda3-a605-4f97-9ee1-f464329f588a",
      "name": "Bel Air",
      "joke": "How do you find Will Smith in the snow? You look for the fresh prints."
    },
    {
      "id": "bc3d7a48-0ecc-4a70-a4b4-f34f83465245",
      "name": "No Charge",
      "joke": "A proton, an electron, & a neutron walk into a bar. The proton orders a shot, drinks it, pulls out his wallet, and pays the bartender. The electron orders a shot, drinks it, pulls out his wallet, and pays the bartender. The neutron orders a shot, drinks it, then pulls out his wallet. The bartender stops him and says, \"for you, no charge...\""
    },
    {
      "id": "ab0be3ec-303e-4064-8146-8b2d102e40dd",
      "name": "I'm Positive",
      "joke": "Two atoms are walking down the street. One says, \"Oh no! I lost an electron!\", The other asks him, \"Are you sure?\", The first one says, \"Yeah, I'm positive\""
    }
  ]);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})