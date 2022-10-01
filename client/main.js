const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")
const gameBtn = document.getElementById("whatGame")
const quoteBtn = document.getElementById("quoteBtn")


const quotesCallback = ({ data: quotes }) => {
    displayQuotes(quotes)
    
    console.log('happy callback hit')
    }
const errCallback = err => console.log(err)

const getQuotes = () => {
    axios.get('http://localhost:4000')
        .then(quotesCallback)
        .catch(errCallback)
}

const createQuotes = (body) => {
    axios.post('http://localhost:4000/api/quote', body)
        .then(quotesCallback)
        .catch(errCallback)
}



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
    e.preventDefault()
    let quote = document.querySelector('#quote')

    let bodyObj = {
        quote
    }

    createQuotes(bodyObj)
    
}

function displayQuotes(arr) {
    console.log('hit display quotes')
    console.log(arr)
   
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
gameBtn.addEventListener('click', getGame)
quoteBtn.addEventListener('submit', submitHandler)