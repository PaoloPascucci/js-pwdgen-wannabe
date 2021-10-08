const UserName = prompt("Come si chiama lei, persona?")

const UserSurname = prompt("Mi serve anche il cognome zio")

const Usercolor = prompt(" Dimmi il tuo colore preferito,altrimenti...")

console.log(`${UserName} ${UserSurname} ${Usercolor}`)

document.getElementById("text").innerHTML = `${UserName}${UserSurname}${Usercolor}21`