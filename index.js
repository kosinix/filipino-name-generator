// node index.js
const fs = require('fs');

function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

; (async () => {
    try {
        let lastNamesTxt = fs.readFileSync('last-names.json', { encoding: 'utf-8' })
        let firstNamesFemaleTxt = fs.readFileSync('first-names-female.json', { encoding: 'utf-8' })
        let firstNamesMaleTxt = fs.readFileSync('first-names-male.json', { encoding: 'utf-8' })
        
        let lastNames = shuffle(JSON.parse(lastNamesTxt))
        let middleNames = shuffle(JSON.parse(lastNamesTxt))
        let firstNamesFemale1 = shuffle(JSON.parse(firstNamesFemaleTxt))
        let firstNamesFemale2 = shuffle(JSON.parse(firstNamesFemaleTxt))
        let firstNamesMale1 = shuffle(JSON.parse(firstNamesMaleTxt))
        let firstNamesMale2 = shuffle(JSON.parse(firstNamesMaleTxt))
        
        let femaleNames = []

        for(let x = 0; x < lastNames.length; x++){
            if(!lastNames[x]){
                // console.log('last',x)
                break
            }
            if(!firstNamesFemale1[x]){
                // console.log('f',x,firstNamesFemale1[x])

                break
            }
            if(!firstNamesMale1[x]){
                // console.log('male',x)

                break
            }
           
            if(Math.round(Math.random())){
                femaleNames.push(`${lastNames[x]}, ${firstNamesFemale1[x]}, ${middleNames[x]}`)

            } else {
                femaleNames.push(`${lastNames[x]}, ${firstNamesFemale1[x]} ${firstNamesFemale2[x]}, ${middleNames[x]}`)

            }
        }
        console.log(femaleNames, femaleNames.length)
        console.log(lastNames.length, firstNamesFemale1.length, firstNamesMale1.length)


    } catch (err) {
        console.log(err)
    } finally {
    }
})()