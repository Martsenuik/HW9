//*\\\\\\\\\\\\Завдання 1\\\\\\\\\\\\\\\

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
      
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };

// const arr = ['Mango', 'Poly', 'Ajax'];
// logItems(arr);

//*\\\\\\\\\\\\Завдання 2\\\\\\\\\\\\\\\

// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(' ');
//     const numberOfWords = words.length;
//     const totalPrice = numberOfWords * pricePerWord;
//     return totalPrice;
// }
// const message = "Hello";
// const pricePerWord = 10;
// const totalCost = calculateEngravingPrice(message, pricePerWord)
// console.log(`Вартість гравіювання: ${totalCost} грн`);


//*\\\\\\\\\\\\Завдання 3\\\\\\\\\\\\\\\

// function findLongestWord(string) {
//     const words = string.split(' ');
//     let findLongestWord = '';
//     for (const word of words) {
//         if (word.length > findLongestWord.length) {
//             longestWord = word
//         }
//     }
//     return longestWord;
// }

//*\\\\\\\\\\\\Завдання 4\\\\\\\\\\\\\\\

// function formatString(string) {
//     if (string.length <= 40) {
//         return string;
//     } else {
//         return string.slice(0, 40) + '...';
//     }
// }
// const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
// const shortString = 'Short text.'

// console.log(formatString(longString));
// console.log(formatString(shortString));

//*\\\\\\\\\\\\Завдання 5\\\\\\\\\\\\\\\

// function checkForSpam(message) {
//    const lowerCaseMessage = message.toLowerCase();
//     if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
//         return true;
//     }
//     return false;
// }

// console.log(checkForSpam("This is a SALE offer.")); 
// console.log(checkForSpam("Just a regular message.")); 
// console.log(checkForSpam("Spam messages are not allowed.")); 
// console.log(checkForSpam("Great deal available for you!")); 


//*\\\\\\\\\\\\Завдання 6\\\\\\\\\\\\\\\

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введіть число:');
    
    if (input === null) {
        break; 
    }

    if (isNaN(input) || input.trim() === '') {
        alert('Було введено не число, попробуйте ще раз');
    } else {
        numbers.push(Number(input)); 
    }
}

if (numbers.length > 0) {
    for (let number of numbers) {
        total += number; 
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
}








