

function synchronousRequest() {
    try {
        const response = fetch('https://api.example.com/data');
        const data = response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function asynchronousRequest() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

synchronousRequest();
asynchronousRequest();