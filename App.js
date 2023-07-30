const apiKey = "f84ace9b20ad5ed82e75385ee1daadc2";
const phoneNumber = "18326793986";

async function validatePhone(apiKey, phoneNumber){
    const url = `http://apilayer.net/api/validate?access_key=${apiKey}&number=${phoneNumber}&format=1`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log('Error:', error);
        return null;
    }
}

(async () => {
    const result = await validatePhone(apiKey, phoneNumber);
    if (result) {
        console.log("API Response:\n", result);
    }
})();

