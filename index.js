document.addEventListener('DOMContentLoaded' ,function (){

const searchInput = document.getElementById('mysearch')    
searchInput.addEventListener('submit', (e) => e.preventDefault())
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
        let counter = 0; //Initialize counter
        characters.forEach(character => {
            let card = document.createElement('div');
            let details =document.createElement('div')

            details.className = "details"
            card.className = "card";
            card.innerHTML = `
                <img src="${character.imageUrl}" alt="daenerys.jpg">
                <p class="default">${character.fullName}</p>
                <div>
                <button id = "character-details-${counter}">View More</button>
                </div>  
                `
            main.appendChild(card)

            const btn = document.getElementById(`character-details-${counter}`)
            btn.addEventListener('click', () => {
                //Removes the 'view more button when clicked"
                btn.remove()
                if(details.innerHTML === '') {
                //displays the details    
                details.innerHTML = `
                    
                    <p>Family : ${character.family}</p>
                    <p>FirstName: ${character.firstName}</p>
                    <p>LastName: ${character.lastName}</p>
                    <p>Title: ${character.title}</p>
                    <button class="collapse-btn">Hide details</button>
                    `
                } else {
                    //hide details
                    details.innerHTML = ''
                }
                card.appendChild(details)

                //add event listener to collapse button
                const collapseBtn = details.querySelector('.collapse-btn')
                if(collapseBtn) {
                    collapseBtn.addEventListener('click', () => {
                        details.innerHTML = ''
                        //Add "View more" button back
                        card.appendChild(btn)
                    })
                }
            })

            counter++;

        })
    })  
})        