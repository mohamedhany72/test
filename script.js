window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            // const api = '${proxy}https://api.darksky.net/forecast/ebbcce960fae7a4b74a72cd4880db0a9/${lat},${long}';
            const api = 'https://api.darksky.net/forecast/ebbcce960fae7a4b74a72cd4880db0a9/37.8267,-122.4233'

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    Console.long(data);
                })
        })
    }
});