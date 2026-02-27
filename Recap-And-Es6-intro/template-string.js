const firstName = 'Afjal ';
const lastName = "Hosssain";

// const aboutMe = 'asdasf 


const aboutMe = `My name is ${firstName}`;
console.log(aboutMe);
const giveMe = `give me money ${(10+30)*3+500}`
console.log(giveMe);

const fullName = firstName + ' ' + lastName;
const fullName2 = `${firstName} ${lastName}`;

// begtics --> ``

function getCardHTML(name, description, price) {
    const div = `
        <div class="card">
            <h2>${name.toUpperCase() + ' Pro'} High performance</h2>
            <p>Price: $ ${price}</p>
            <p>${description}</p>
        </div>
    `;

    console.log(div);
}
// calling the function
getCardHTML('iPhone 16', 'This is the latest iPhone model', 1099);