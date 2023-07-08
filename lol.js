usefulComponent = window.$nuxt.$children[2].$children[0].$children[0]

function forceGoodCaptcha() {
    var currCaptcha = usefulComponent.currCaptcha
    
    while (currCaptcha != "cnwyc") {
        usefulComponent.refreshCaptcha()
        currCaptcha = usefulComponent.currCaptcha
    } 
}

function getGoodMoon() {
    return ["🌓", "🌕", "🌓", "🌑", "🌒", "🌔", "🌒"].find((moon) => {
        return usefulComponent.rules[12].test(moon).isValid
    })
}

(async() => {
    // Preparations
    forceGoodCaptcha()
    
    var password = '993A!'
    
    while (!usefulComponent.wordleAnswer) {
        await new Promise(resolve => setTimeout(resolve,200))
    }
    var month = 'July'
    var leapYear = '4'
    var romanNumerals = 'XXXV'
    var sponsor = 'shell'
    var captcha = 'cnwyc'
    var element = 'Ag'
    var wordleAnswer = usefulComponent.wordleAnswer
    var goodPlace = usefulComponent.currPlace.title.toLowerCase()
    var goodMoon = getGoodMoon()
    //var chessSolution = usefulComponent.getChessSolutions()[usefulComponent.currChessPuzzle].sol

    password = password + month + leapYear + romanNumerals + sponsor + captcha +
               element + wordleAnswer + goodMoon + goodPlace

    // I don't like this solution. Wish I could access B
    document.getElementsByClassName('ProseMirror')[0].firstChild.innerText = password
    while (!usefulComponent.possibleChessMoves) {
        await new Promise(resolve => setTimeout(resolve,200))
    }
    for (var chessSol of usefulComponent.possibleChessMoves) {
        console.log(chessSol)
        var numVal = chessSol.match(/\d+/)[0][0]
        password = (9 - parseInt(numVal)).toString() + password.substring(1)
        document.getElementsByClassName('ProseMirror')[0].firstChild.innerText = password + chessSol
        await new Promise(resolve => setTimeout(resolve,50))
        if (usefulComponent.ruleReached > 16)
            break
    }

    password = password + chessSol + '🥚'
    document.getElementsByClassName('ProseMirror')[0].firstChild.innerText = password

    // To continue I think We have to access the global variables [For the periodic table]
})()
