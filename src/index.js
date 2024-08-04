module.exports = function toReadable(number) {
    const numbers = ['-', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
        'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
        'nineteen',];

    const numbers2 = ['-', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
        'seventy', 'eighty', 'ninety']

    let total = ''
    number = number.toString();
    if (number == '0') {
        return 'zero'
    } else if (number <= 19) {
        return numbers[number];
    } else if (number > 19 && number < 100) {
        if (number[1] === '0') {
            return numbers2[number[0]]
        } else {
            return `${numbers2[number[0]]} ${numbers[number[1]]}`
        }
    } else if (number >= 100) {
        if (number[1] === '0' && number[2] === '0') {
            return `${numbers[number[0]]} hundred`
        } else if (number[1] > 0 && number[2] === '0') {
            return `${numbers[number[0]]} hundred ${numbers2[number[1]]}`
        } else if (number[1] === '0' && number[2] > 0) {
            return `${numbers[number[0]]} hundred ${numbers[number[2]]}`
        } else if (number.slice(1) < 20) {
            return `${numbers[number[0]]} hundred ${numbers[Number(number.slice(1))]}`
        } else {
            return `${numbers[number[0]]} hundred ${numbers2[number[1]]} ${numbers[number[2]]}`
        }
    }
};



