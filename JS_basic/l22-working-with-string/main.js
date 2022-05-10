// lam viec voi chuoi

// Keyword: JS string method

/**
 * Lenght
 * Cut string
 * Find index
 * Replace
 * Convert to upper case
 * Convert to lower case
 * Trim
 * Split
 * Get a character by index
 */

var myString = 'Hoc Javascript tai F8';

// Length

console.log('Do dai chuoi', myString.length)

// Find index

console.log('Show index of Ja', myString.indexOf('Ja'))
console.log('If not found, show -1', myString.indexOf('Dog'))

var myStringDup = 'Hoc Ja tai Ja and Ja and Ja again';
console.log(myStringDup.lastIndexOf('Ja'))
console.log(myStringDup.search('and'))

// Cut string

var stringToCut = 'Hoc Js tai F8 and!';
console.log('Cut js: ', stringToCut.slice(4, 6))
console.log('Cut js to end: ', stringToCut.slice(4))
console.log('Cut from right to left: ', stringToCut.slice(-3, -1))

// Replace

var stringToReplace = 'Hoc JS and JS and JS';
console.log(stringToReplace.replace('JS', 'Javascript'))
console.log('Replace all', stringToReplace.replace(/JS/g, 'Javascript'))

// Convert to upper or lower case

var lowString = 'a b c d';
console.log(lowString.toUpperCase())

var upString = 'A B C D';
console.log(upString.toLowerCase())

// Trim

var stringWithSpace = '   JS basic   ';
console.log(stringWithSpace.trim())

console.log('Length before string: ', stringWithSpace.length)
console.log('Length after trim: ', stringWithSpace.trim().length)

// Split

var languages = 'JS, Python, PHP, C#';
console.log(languages.split(', '))

var randomString = 'abcdefghik';
console.log(randomString.split(''))

// Get character by index

var stringToGetIndex = 'Dao Phi Long';
console.log(stringToGetIndex.charAt(0))
console.log('Return empty string if not found: ', stringToGetIndex.charAt(100))

console.log(stringToGetIndex[1])
console.log('Return undefined if out of range: ', stringToGetIndex[100])

function showLength(content) {
    lengthOfString = content.length;
    console.log(`Length of '${content}' is: `, lengthOfString);
}

showLength('Hello 500 anh em')
showLength('This is an other example')
