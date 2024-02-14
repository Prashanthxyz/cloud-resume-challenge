const counter = document.querySelector(".counter-number");

async function updateCounter() {
    let response = await fetch("https://njy7inhfsanbvuvvazdewcxogq0frpqy.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data.views}`; // Note the backticks (`) and the added 'views' property
}

updateCounter();
