export function getFavoriteCities() {
    return fetch(`${process.env.API_URL}/favorite`).then((response) => response.json());
}

export function postFavoriteCity(cityName) {
    return fetch(`${process.env.API_URL}/favorite`, {
        method: 'POST',
        body: JSON.stringify({name: cityName}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json());
}

export function deleteFavoriteCity(cityName) {
    return fetch(`${process.env.API_URL}/favorite`, {
        method: 'DELETE',
        body: JSON.stringify({name: cityName}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json());
}

