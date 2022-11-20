
// Щасливий квиток
// Напишіть веб-додаток для розрахунку щасливого квитка. Користувач вводить шестизначний номер квитка (трамвай/тролейбус). Визначте, чи дорівнює сума перших трьох цифр сумі останніх трьох цифр. Виведіть повідомлення про "щасливість" квитка користувачеві.

const userTicket = prompt(`Введіть шестизначний номер вашого квитка`);
const ticketNumber = userTicket.split(``);

let firstPart = Number(ticketNumber[0]) + Number(ticketNumber[1]) + Number(ticketNumber[2]);
let secondPart = Number(ticketNumber[3]) + Number(ticketNumber[4]) + Number(ticketNumber[5]);

console.log(firstPart, secondPart);

if (firstPart === secondPart) {
	console.log(`Вітаємо! Ваш квиток щасливий :)`);
} else {
	console.log(`Нажаль, ваш квиток нещасливий :(`);
}


// Найкоротше слово
// Напишіть програму, що отримує у користувача рядок слів та повертає довжину найкоротшого

const yourString = prompt(`Будь ласка, напишіть ваше речення`);

const stringArray = yourString.split(` `);
let lettersNumber = stringArray[0].length;

for (i = 1; i < stringArray.length; i++) {
	if (stringArray[i].length < lettersNumber) {
		lettersNumber = stringArray[i].length;
	}
};
console.log(`Кількість літер у найкоротшому слові: ${lettersNumber}.`);

// ДНК
const userDna = prompt(`Напишіть послідовність нуклеотидів А,Т,С,G першого ланцюжка ДНК`);
let result = ``;
for (let i = 0; i < userDna.length; i++) {
	if (userDna[i] === 'A') {
		result += 'T';
	}
	if (userDna[i] === 'T') {
		result += 'A';
	}
	if (userDna[i] === 'C') {
		result += 'G';
	}
	if (userDna[i] === 'G') {
		result += 'C';
	}
}
console.log(`Комплементарна пара нуклеотидів вашого ДНК: ${result}.`);

