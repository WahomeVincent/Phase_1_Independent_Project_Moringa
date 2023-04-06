const searchForm = document.getElementById('mysearch')
const subscriptionForm = document.getElementById('subscription-form')

subscriptionForm.addEventListener('submit', (e) => e.preventDefault())
searchForm.addEventListener('submit', (e) => e.preventDefault())

const main = document.querySelector('main')


fetch('https://thronesapi.com/api/v2/Characters')
    .then(res => res.json())
    .then(characters=> {
        characters.forEach(character => {
        let card = document.createElement('div');
        let details =document.createElement('div')

        card.className = "card";
        card.innerHTML = `
            <img src="${character.imageUrl}" alt="daenerys.jpg">
            <div>
            <button id = "character-details">Open</button>
            </div>  
            `
            main.appendChild(card)

            const btn = document.getElementById('character-details')
            btn.addEventListener('click', () => {
                details.innerHTML = `
                <p>Family : ${character.family}</p>
                <p>FirstName: ${character.firstName}</p>
                <p>Fullname: ${character.fullName}</p>
                <p>LastName: ${character.lastName}</p>
                <p>Title: ${character.title}</p>
                `
            })

            card.appendChild(details)

        })
    })

  
        