const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const upperLettersArr = letters.split("").map(item => item.toUpperCase());
const lowerLettersArr = letters.split("");
const numbersArr = numbers.split("");

const generateID = len => {
    const result = [];
    for (let i = 0; i < len; i++) {
        const numsOrLetters = Math.floor(Math.random() * 2);
        if (numsOrLetters === 0) {
            result.push(numbersArr[Math.floor(Math.random() * numbersArr.length)]);
        } else {
            const upperOrLower = Math.floor(Math.random() * 2);
            if (upperOrLower === 0) {
                result.push(
                    upperLettersArr[Math.floor(Math.random() * upperLettersArr.length)]
                );
            } else {
                result.push(
                    lowerLettersArr[Math.floor(Math.random() * lowerLettersArr.length)]
                );
            }
        }
    }
    return result.join("");
};

module.exports = { generateID };
