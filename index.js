const searchForm = document.getElementById('mysearch')
const subscriptionForm = document.getElementById('subscription-form')

subscriptionForm.addEventListener('submit', (e) => e.preventDefault())
searchForm.addEventListener('submit', (e) => e.preventDefault())

const main = document.querySelector('main')


fetch('https://thronesapi.com/api/v2/Characters')
    .then(res => res.json())
    .then(character=> {
        let myCharacter = document.createElement('div');
        myCharacter.id = "my-character";
        myCharacter.innerHTML = `
            <img src="${character[0].imageUrl}" alt="daenerys.jpg">
            <div id = "character-details">
            <p>Family : ${character[0].family}</p>
            <p>FirstName: ${character[0].firstName}</p>
            <p>Fullname: ${character[0].fullName}</p>
            <p>LastName: ${character[0].lastName}</p>
            <p>Title: ${character[0].title}</p>
            </div>
            `
            main.appendChild(myCharacter)
    })

    