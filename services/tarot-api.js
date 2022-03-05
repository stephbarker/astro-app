//Base URL
 const BASE_URL = `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1`;

// Connect to API and get back json
export function getTarotCard() {
    return fetch(BASE_URL).then(res => res.json());
}