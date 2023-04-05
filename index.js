const searchForm = document.getElementById('mysearch')
searchForm.addEventListener('submit', (e) => e.preventDefault())

const main = document.querySelector('main')


fetch('https://thronesapi.com/api/v2/Characters')
    .then(res => res.json())
    .then(character=> {
        let card = document.createElement('div');
        card.innerHTML = `
            <img src="${character[0].imageUrl}" alt="daenerys.jpg">
            <p>Family : ${character[0].family}</p>
            <p>FirstName: ${character[0].firstName}</p>
            <p>Fullname: ${character[0].fullName}</p>
            <p>LastName: ${character[0].lastName}</p>
            <p>Title: ${character[0].title}</p>
            `
            main.appendChild(card)
    })

    