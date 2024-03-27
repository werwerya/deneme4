function sendData() {
    var userInput = document.getElementById('userInput').value;
    fetch('API_URL', { // API_URL kısmını gerçek API URL'niz ile değiştirin.
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Başarılı:', data);
    })
    .catch((error) => {
        console.error('Hata:', error);
    });
}
