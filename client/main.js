const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")
const gameBtn = document.getElementById("whatGame")
const quoteBtn = document.getElementById("#quoteBtn")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getGame = () => {
    axios.get("http://localhost:4000/api/game/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

function submitHandler(e) {
    e.preventDefault();
    let quote = document.querySelector("quoteBtn")
    let bodyObj = {
        quote: quote.value
    }
    console.log(quote.value)
    quote.value = ''
}
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
gameBtn.addEventListener('click', getGame)

quoteBtn.addEventListener('submit', createQuote)