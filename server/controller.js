const quotes = require("./db.json")
let globalId = 2
module.exports = {


    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },



        getFortune : (req, res) => {
        const fortunes = ["A faithful friend is a strong defense!", "a golden egg of opportunity falls into your lap this month", "a person is never to old to learn"]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex]
        res.status(200).send(randomFortune)

    },
    getGame : (req, res) => {
        const game = ["apex legends", "Osrs", "valorant"]
        let randomIndex = Math.floor(Math.random() * game.length);
        let randomGame = game[randomIndex]
        res.status(200).send(randomGame)

    },
    createQuote : (req, res) => {
        const {quote} = req.body
        let newQuote = {
            id:globalId,
            quote
        }
        quotes.push(newQuote)
        res.status(200).send(quotes)
        globalId++
}




}
