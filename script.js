const fetchUrl = async (url) => {
    const data = await fetch(url)
    return data.json()
}

async function init() {
    const data = await fetchUrl("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    console.log(data);
}

init()

let apiKey = "7cb9356a93524227b36104234232711"