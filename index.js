document.addEventListener('DOMContentLoaded' ,function (){

const searchForm = document.getElementById('mysearch')
searchForm.addEventListener('submit', (e) => e.preventDefault())

const subscriptionForm = document.getElementById('subscription-form');

subscriptionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('subscription-form').style.display = "none";
    document.getElementById('thankyou').style.display = "block";
})



const main = document.querySelector('main')


fetch('https://thronesapi.com/api/v2/Characters')
    .then(res => res.json())
    .then(characters=> {
        characters.forEach(character => {
        let card = document.createElement('div');
        let details =document.createElement('div')

        details.className = "details"
        card.className = "card";
        card.innerHTML = `
            <img src="${character.imageUrl}" alt="daenerys.jpg">
            <p>${character.fullName}</p>
            <div>
            <button id = "character-details">View More</button>
            </div>  
            `
            main.appendChild(card)

            const btn = document.getElementById('character-details')
            btn.addEventListener('click', () => {
                details.innerHTML = `
                <p>Family : ${character.family}</p>
                <p>FirstName: ${character.firstName}</p>
                
                <p>LastName: ${character.lastName}</p>
                <p>Title: ${character.title}</p>
                `
                card.appendChild(details)
            })

            

        })
    })

  
})        