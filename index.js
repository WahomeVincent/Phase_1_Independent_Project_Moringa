fetch('https://thronesapi.com/api/v1/Characters')
    .then(res => res.json())
    .then(characters => console.log(characters))