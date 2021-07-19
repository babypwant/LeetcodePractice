api;

const fetch = require("node-fetch");

async function testApi() {
    let response = await fetch(api)
    let data = response.json()
    return data
}

testApi().then(data => console.log(data))