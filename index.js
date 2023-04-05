fetch('https://thronesapi.com/api/v2/Characters')
    .then(res => res.json())
    .then(characters => {
        characters.forEach(character => {
            const main = document.querySelector('main')
            let card = document.createElement('div')
            card.innerHTML = `
            <p>Family : ${character.family}</p>
            <p>FirstName: ${character.firstName}</p>
            <p>Fullname: ${character.fullName}</p>
            <img src="${character.imageUrl}" alt="daenerys.jpg">
            <p>LastName: ${character.lastName}</p>
            <p>Title: ${character.title}</p>
            `
            main.appendChild(card)
        });
    })