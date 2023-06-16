// Copyright (2022-2023) Svetlin Tassev
var url = "https://runningonphysics.org/cows/help.html";
var alphabet = "";
var listOfFrequentlyUsedWords = [];
var allWords = [];
var currentColorIndex = Array(30).fill(0);
var tileGrid = "";
var lengthOfWord = -1;
var myWord = "";
var wordsOfGivenLength = [];
var indexOfWord = -1;
let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear().toString().substring(2);
var maxLengthNumberOfWordsLeft = 0;
var results = month + '/' + day + '/' + year + '<br>&#10;';
//var results = "";
var TotTriesDefault = 20;
var TotTries = TotTriesDefault;
var tries = TotTries;
var message = "";
var list = "";
var guess;
var myGuesses = [];
const colors = ["#ffffff", "#E46795", "#66D263", "#6FB6F5"];
var revealSunsMoons = 0;
var listBW = "";
var listColorized = "";
var FinalListBW = "";
var FinalListColorized = "";

var big_prime_number = 32452867;


var NumLetters = -1;
var firstReset = 1;
var textGuessWordsToRevealThe = "Guess words to reveal the ";
var textLetterWord = "-letter word.";
var textWordOfTheDayIs = "Word of the day is ";
var textLettersLong = " letters long.";
var textGuessesLeft = " guesses left.<hr>";
var textYouHave = "You have ";
var textYouAlreadyGuessed = "You already guessed this word. Try again.";
var textYourWordIsNot = "Your word is not in my list. Try again.";
var textHintsUsed = "- hints used -";
var textGuessedCorrecctly = "You guessed it correctly!<br>You made ";
var textHereisYourPattern2 = ".<hr>Here is the pattern of Suns &#128993; and Moons &#127761; in your guesses:<br>";
var textHereIsYourPattern = " guesses" + textHereisYourPattern2;
var textYouHaveNoMore = "You have no more guesses left.<br>The correct word is ";
var textPlayingForARandom = "Playing for a random ";
var textIfYouWantToPlayWoD = "-letter word now!\nIf you want to play for the word of the day, refresh the website.";
var textErrorCopy = "Error. Copy text by hand. Apologies!";
var textCopied = "Copied to clipboard";
var textScore = "Score: ";
var score = 150;
var fadeLetters = 0;

function generateTiles() {
    let w = (document.getElementById("textarea").offsetWidth + 8) / 5.;
    tileGrid = "";
    currentColorIndex.fill(0);
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            letterIndex = i * 5 + j;
            if (letterIndex < alphabet.length) {
                let letter = "<b>" + (alphabet.toUpperCase())[letterIndex] + "</b>";
                let style = `style="margin-right:-2px;margin-top:-2px;border:0px;border:solid;border-width:2px;border-color:#bdbdbd; padding:0px;display:inline-block;width:${w}px;height:${w}px;background-color:${colors[currentColorIndex[letterIndex]]};"`
                tileGrid += (`<button id=${letterIndex} onclick="changeColor(this)" ${style}>${letter}</button>`);
            }
        }
        tileGrid += ('<br />');
    }
}

function daysElapsed() {
    // Get current date in milliseconds 
    let date = new Date();
    let currentTime = date.getTime();

    // Set start date (arbitrary)
    const startYear = 2022;
    const startMonth = 11;
    const startDay = 1;

    // Create Date object for some initial date
    let startDate = new Date(startYear, startMonth, startDay);
    let startTime = startDate.getTime();

    // Calculate difference in milliseconds 
    //let difference = new Date( currentTime - startTime); 
    let difference = (currentTime - startTime) / (1000. * 24. * 3600.);


    return Math.floor(difference);
    //return difference.getUTCFullYear();
    //return difference.getUTCDate(); 
}
// Use number of elapsed days as seed for random number 
function randomNumberGenerator(seed) {
    //let randomNumber = (1 + 2 / Math.PI * Math.asin(Math.sin(seed * 99))) / 2 * listOfFrequentlyUsedWords.length;
    let randomNumber = (big_prime_number * seed);
    //randomNumber = Math.floor(randomNumber);
    return randomNumber;
}

function calculateLengthOfWordOfTheDay() {
    // Call daysElapsed to get number of days since some initial date
    let daysSince = daysElapsed() - 4;
    // Pass daysSince to randomNumberGenerator 
    indexOfWord = randomNumberGenerator(daysSince);
    // pick a word from the list
    var WordLengths = [3, 4, 4, 5, 5, 6, 7];
    lengthOfWord = WordLengths[(daysSince % 7)];


}

function selectWordGivenIndex(str) {
    if (str == "gt") {
        wordsOfGivenLength = listOfFrequentlyUsedWords.filter(words => words.length >= lengthOfWord);
        myWord = wordsOfGivenLength[indexOfWord % wordsOfGivenLength.length];
        lengthOfWord = myWord.length;
    } else {
        wordsOfGivenLength = listOfFrequentlyUsedWords.filter(words => words.length === lengthOfWord);
        myWord = wordsOfGivenLength[indexOfWord % wordsOfGivenLength.length];
    }
}

var already_switched = 0;
if (!encodeQ) {
    var Bg = [];
    var Bg_short = [];
}

function changeLang() {
    if (document.getElementById("chooseLang").value == "English") {
        document.getElementById("title").innerHTML = "Moons & Suns";
        document.getElementById("browsertitle").innerHTML = "Moons & Suns";
        alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
        listOfFrequentlyUsedWords = En_short.words;
        allWords = En;
        //if (firstReset > 1) {
        textGuessWordsToRevealThe = "Guess words to reveal the ";
        textLetterWord = "-letter word.";
        textWordOfTheDayIs = "Word of the day is ";
        textLettersLong = " letters long.";
        textGuessesLeft = " guesses left.<hr>";
        textYouHave = "You have ";
        textYouAlreadyGuessed = "You already guessed this word. Try again.";
        textYourWordIsNot = "Your word is not in my list. Try again.";
        textHintsUsed = "- hints used -";
        textGuessedCorrecctly = "You guessed it correctly!<br>You made ";
        textHereisYourPattern2 = ".<hr>Here is the pattern of Suns &#128993; and Moons &#127761; in your guesses:<br>";
        textHereIsYourPattern = " guesses" + textHereisYourPattern2;
        textYouHaveNoMore = "You have no more guesses left.<br>The correct word is ";
        textPlayingForARandom = "Playing for a random ";
        textIfYouWantToPlayWoD = "-letter word now!\nIf you want to play for the word of the day, refresh the website.";
        textErrorCopy = "Error. Copy text by hand. Apologies!";
        textCopied = "Copied to clipboard";
        textScore = "Score: ";
        document.getElementById("textarea").placeholder = "Your notes here ...";
        document.getElementById("shuf").placeholder = "Letters to shuffle";
        document.getElementById("guess").placeholder = "Enter any-length guess.";
        document.getElementById("copyres").value = "Copy guess pattern and share!";
        document.getElementById("heading").innerHTML = "&nbsp;<u>&nbsp;&#9788;&nbsp;&nbsp;&#9790;&nbsp;&nbsp;guesses&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;words&nbsp;left&nbsp;</u><br>";
        document.getElementById("fadeText").innerHTML = "Fade letter when tile is purple";
        document.getElementById("btnReveal").value = "Reveal Sun and Moon locations.";
        document.getElementById("btnPractice").value = "Practice on a random word.";
        document.getElementById("btnShuff").value = "shuffle";
        document.getElementById("shuf").title = "Lower case letters are shuffled. Capital letters are held fixed. Use dash or dot for unknown letters.";
        document.getElementById("help").innerHTML = "Help";
        url = "https://runningonphysics.org/cows/help.html";
        //alert(textWordOfTheDayIs + lengthOfWord + textLettersLong);
        //}
    }
    if (document.getElementById("chooseLang").value == "Bulgarian") {
        if (already_switched == 0) {
            Bg = decode(bg, "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪьЮЯ".toLowerCase(), false, true);
            Bg_short = decode(bg_short, "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪьЮЯ".toLowerCase(), true, false);
            bg = "";
            bg_short = "";
        }

        already_switched++;
        document.getElementById("title").innerHTML = "Луни и Слънца";
        document.getElementById("browsertitle").innerHTML = "Луни и Слънца";
        alphabet = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪьЮЯ".toLowerCase();
        listOfFrequentlyUsedWords = Bg_short.words;
        allWords = Bg;
        //if (firstReset > 1) {
        textGuessWordsToRevealThe = "Познайте ";
        textLetterWord = "-буквената скрита дума.";
        textWordOfTheDayIs = "Думата днес е ";
        textLettersLong = " буквена.";
        textGuessesLeft = " останали опита.<hr>";
        textYouHave = "Имате ";
        textYouAlreadyGuessed = "Вече опитахте с тази дума. Пробвайте пак.";
        textYourWordIsNot = "Вашата дума не е в речника ми. Пробвайте пак.";
        textHintsUsed = "- подсказване -";
        textGuessedCorrecctly = "Познахте правилно!<br>Направихте ";
        textHereisYourPattern2 = ".<hr>Ето шарката от Слънца &#128993; и Луни &#127761; във вашите опити:<br>";
        textHereIsYourPattern = " опита." + textHereisYourPattern2;
        textYouHaveNoMore = "Нямате повече опити.<br>Правилната дума е ";
        textPlayingForARandom = "Играете за произволна дума от ";
        textIfYouWantToPlayWoD = " букви!\nАко искате да играете за думата на деня, обновете сайта.";
        textErrorCopy = "Грешка! Копирайте на ръка. Съжаляваме за това!";
        textCopied = "Копирането успешно!";
        textScore = "Резултат: ";
        document.getElementById("textarea").placeholder = "Място за вашите бележки ...";
        document.getElementById("shuf").placeholder = "Букви за разбъркване";
        document.getElementById("guess").placeholder = "Въведете дума.";
        document.getElementById("copyres").value = "Копирайте шарката и споделете!";
        document.getElementById("heading").innerHTML = "&nbsp;<u>&nbsp;&#9788;&nbsp;&nbsp;&#9790;&nbsp;&nbsp;опити&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;останали&nbsp;думи&nbsp;</u><br>";
        document.getElementById("fadeText").innerHTML = "Бледа буква, когато<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;квадратчето е лилаво.";
        document.getElementById("btnReveal").value = "Разкрий местата на Слънцата и Луните.";
        document.getElementById("btnPractice").value = "Играй за произволна дума.";
        document.getElementById("btnShuff").value = "разбъркай";
        document.getElementById("shuf").title = "Малките букви се разбъркват. Големите букви - не. Използвайте тире или точка за букви, които не знаете.";
        document.getElementById("help").innerHTML = "Упътване";
        url = "https://runningonphysics.org/cows/help_bg.html";
        //alert(textWordOfTheDayIs + lengthOfWord + textLettersLong);
        //}
    }
    let bw = document.getElementById("textarea").clientWidth - document.getElementById("shuf").clientWidth - 5;
    let bh = document.getElementById("shuf").clientHeight;
    document.getElementById("btnShuff").style.width = `${bw}px`;
    document.getElementById("btnShuff").style.height = `${bh}px`;
    //for (var j = 0; j < allWords.length; j++) {
    //    allWords[j] = allWords[j].toLowerCase();
    //}
    for (var j = 0; j < listOfFrequentlyUsedWords.length; j++) {
        listOfFrequentlyUsedWords[j] = listOfFrequentlyUsedWords[j].toLowerCase();
    }

    NumLetters = alphabet.length;
    generateTiles();
    document.getElementById("tileGrid").innerHTML = tileGrid;
    if (firstReset == 1) {
        firstReset += 1;
    }
    resetGameAndWord();
    alert(textWordOfTheDayIs + lengthOfWord + textLettersLong);
}


function resetGameAndWord() {
    calculateLengthOfWordOfTheDay();
    let str = "eq";
    if (lengthOfWord >= 7) str = "gt";
    selectWordGivenIndex(str);
    resetGame();
}

function resetGame() {
    document.getElementById("btnReveal").disabled = false;
    score = 150;
    revealSunsMoons = 0;
    listBW = "";
    listColorized = "";
    FinalListBW = "";
    FinalListColorized = "";
    document.getElementById("shuf").value = "";
    document.getElementById("guess").value = "";
    document.getElementById("go").disabled = false;
    currentColorIndex.fill(0);
    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let year = today.getFullYear().toString().substring(2);

    results = month + '/' + day + '/' + year + '<br>&#10;';
    //results = "";
    document.getElementById("copyres").style.display = "none";
    if (lengthOfWord < 7) {
        TotTries = TotTriesDefault;
        tries = TotTries;
    } else {
        TotTries = 99;
        tries = 99;
    }
    list = "";
    document.getElementById("hi").innerHTML = textGuessWordsToRevealThe + lengthOfWord + textLetterWord;
    document.getElementById("tries").innerHTML = textYouHave + tries + textGuessesLeft;
    document.getElementById("list").innerHTML = list;
    document.getElementById("guess").disabled = false;
    document.getElementById("textarea").value = "";
    document.getElementById("results").innerHTML = "";
    document.getElementById("dim").checked = false;
    fadeLetters = 0;
    myGuesses = [];
    for (let i = 0; i < NumLetters; i++) {
        document.getElementById(`${i}`).style.backgroundColor = colors[0];
        updateLetterFonts(alphabet[i], currentColorIndex[i]);
    }
}



// function to open the popup window
function openPopUp() {
    let height = 800;
    let width = 1200;
    newWindow = window.open(url, 'popUpWindow', 'height=' + height + ', width=' + width + ', resizable=yes,scrollbars=yes,toolbar=yes');
}


String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}




function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        // swap elements array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuff() {
    let a = document.getElementById("shuf").value;
    let b = []
    let i0 = 0
    let ind = []
    for (let i = 0; i < a.length; i++) {
        let c = a[i];
        if ((c == c.toLowerCase() && c != c.toUpperCase()) || (c === "-") || (c === ".")) { // check lower case
            b.push(c);
            ind.push(i);
            i0 = i0 + 1;
        }
    }
    shuffle(b);
    for (let i = 0; i < b.length; i++) {
        a = a.replaceAt(ind[i], b[i]);
    }

    document.getElementById("shuf").value = a;
}



function emojisSunsMoons(results) {
    let b = "";

    for (let i = 0; i < results.length; i++) {
        let a = results[i];
        let c = "012";
        if (results[i].normalize() === c[0].normalize()) a = "&#9898;";
        if (results[i].normalize() === c[1].normalize()) a = "&#127761;";
        if (results[i].normalize() === c[2].normalize()) a = "&#128993;";
        b = b + a;
    }
    return b;
}

function colorizeSunsMoons(guess, results) {
    let g = "";

    for (let i = 0; i < results.length; i++) {
        let a = guess[i];
        let c = "012";
        if (results[i].normalize() === c[1].normalize()) a = "<span style=\"color:blue;\">" + a + "</span>";
        if (results[i].normalize() === c[2].normalize()) a = "<span style=\"color:orange;\">" + a + "</span>";
        g = g + a;
    }
    return g;
}



function findMatches(ws, g, suns, moons) {
    let matches = [];

    //console.log(ws)

    for (let w of ws) {
        //console.log(g)
        //console.log(w)
        let w1 = w;
        let g1 = g;
        let b = 0,
            c = 0;
        let l = w.length;
        if (l > g1.length) {
            l = g1.length
        }

        for (let i = 0; i < l; i++) {
            if (w1.charAt(i) === g1.charAt(i)) {
                b++;
                w1 = w1.replaceAt(i, "2");
                g1 = g1.replaceAt(i, "1");
            }
        }

        for (let i = 0; i < g1.length; i++) {
            if (w1.indexOf(g1.charAt(i)) !== -1) {
                w1 = w1.replaceAt(w1.indexOf(g.charAt(i)), "2")
                c++;
            }
        }
        //console.log(g)
        //console.log(w1)
        //c -= b;
        if (b === suns && c === moons) {
            matches.push(w);
            //console.log(w);
        }
    }
    //console.log(matches)
    return matches;
}


function playSuns() {
    guess = document.getElementById("guess").value;
    guess = guess.toLowerCase();
    let t = false;
    for (let i = 0; i < guess.length; i++) {
        if (alphabet.indexOf(guess.charAt(i)) < 0)
            t = true;
    }
    //alert(allWords.words);
    //let alphaInd = alphabet.indexOf(guess.charAt(0));
    //alert(allWords.letter1freq[guess.charAt(0)]);
    //alert(allWords.words.slice(...allWords.letter1freq[guess.charAt(0)]));
    //alert(encodeUsingPredefinedDictionary(allWords.lut, allWords.translation, guess, 1));
    if (t || (guess.length == 0) || (!allWords.words.slice(...allWords.letter1freq[guess.charAt(0)]).includes(encodeUsingPredefinedDictionary(allWords.lut, allWords.translation, guess, 1)))) {
        alert(textYourWordIsNot);
    } else if (myGuesses.includes(guess)) {
        alert(textYouAlreadyGuessed);
        document.getElementById('guess').value = '';
    } else {
        document.getElementById('guess').value = '';
        myGuesses.push(guess);
        tries -= 1;
        document.getElementById("tries").innerHTML = textYouHave + tries + textGuessesLeft;
        let myWord_tmp = myWord;
        let guess_tmp = guess;
        // set to 0
        var countSuns = 0;
        var countMoons = 0;
        var N = myWord.length;
        if (N < guess.length) {
            N = guess.length;
        }



        let res = "";
        for (var j = 0; j < guess.length; j++) {
            res = res + "0";
        }
        // loop through word and guess
        for (var j = 0; j < N; j++) {
            if (myWord_tmp.charAt(j) === guess_tmp.charAt(j)) {
                countSuns++;
                myWord_tmp = myWord_tmp.replaceAt(j, "1");
                guess_tmp = guess_tmp.replaceAt(j, "2");
                res = res.replaceAt(j, "2");
            }
        }
        for (var j = 0; j < N; j++) {
            var l = guess_tmp[j];
            if (myWord_tmp.indexOf(l) !== -1) {
                countMoons++;
                myWord_tmp = myWord_tmp.replaceAt(myWord_tmp.indexOf(l), "1");
                res = res.replaceAt(j, "1");
            }
        }

        if (revealSunsMoons == 1) {
            results = results + textHintsUsed + "<br>&#10;";
        }

        wordsOfGivenLength = findMatches(wordsOfGivenLength, guess, countSuns, countMoons)
        let sss = (wordsOfGivenLength.length).toString()
        if (myGuesses.length == 1) {
            maxLengthNumberOfWordsLeft = sss.length
        }
        console.log(wordsOfGivenLength)

        results = results + ' ' + emojisSunsMoons(res) + "<br>&#10;";

        let countSunsString = countSuns.toString();
        let countMoonsString = countMoons.toString();
        if (countSunsString.length === 1) {
            countSunsString = "&nbsp;" + countSunsString;
        }
        if (countMoonsString.length === 1) {
            countMoonsString = "&nbsp;" + countMoonsString;
        }

        let tmp1 = '';
        for (let i = 0; i < 20 + maxLengthNumberOfWordsLeft - sss.length - guess.length; i++) {
            tmp1 = tmp1 + '&nbsp;'
        }
        tmp1 = tmp1 + sss;

        listBW = (listBW + "&nbsp;" + countSunsString + "&nbsp;" + countMoonsString + "&nbsp;&nbsp;" + guess.toUpperCase() + "<br>");
        listColorized = (listColorized + "&nbsp;<span style=\"color:orange;\">" + countSunsString + "</span>&nbsp;<span style=\"color:blue;\">" + countMoonsString + "</span>&nbsp;&nbsp;" + colorizeSunsMoons(guess.toUpperCase(), res) + "<br>");
        FinalListBW = (FinalListBW + "&nbsp;" + countSunsString + "&nbsp;" + countMoonsString + "&nbsp;&nbsp;" + guess.toUpperCase() + tmp1 + "<br>");
        FinalListColorized = (FinalListColorized + "&nbsp;<span style=\"color:orange;\">" + countSunsString + "</span>&nbsp;<span style=\"color:blue;\">" + countMoonsString + "</span>&nbsp;&nbsp;" + colorizeSunsMoons(guess.toUpperCase(), res) + tmp1 + "<br>");
        let listFinal = ''
        if (revealSunsMoons === 0) {
            list = listBW;
            listFinal = FinalListBW;
        } else {
            list = listColorized;
            listFinal = FinalListColorized;
            revealSunsMoons = revealSunsMoons + 1;
        }


        document.getElementById("list").innerHTML = list;
        for (let i = 0; i < NumLetters; i++) {
            updateLetterFonts(alphabet[i], currentColorIndex[i]);
        }

        if (myWord === guess) {
            document.getElementById("list").innerHTML = listFinal;
            document.getElementById("tries").innerHTML = textGuessedCorrecctly + (TotTries - tries) + textHereIsYourPattern;
            results += textScore + (score) + "<br>&#10;";
            document.getElementById("results").innerHTML = (results);
            document.getElementById("guess").disabled = true;
            document.getElementById("copyres").style.display = "block";
            document.getElementById("go").disabled = true;
        } else {
            score -= 5;
            //score -= Math.max((5 - guess.length), 0) * 2;
        }
        // if user does not guess
        if (tries == 0) {
            document.getElementById("copyres").style.display = "block";
            if (myWord != guess) {
                document.getElementById("tries").innerHTML = textYouHaveNoMore + myWord.toUpperCase() + textHereisYourPattern2;
                results += "Score: 0<br>&#10;";
            }
            document.getElementById("guess").disabled = true;
            document.getElementById("results").innerHTML = (results);
            document.getElementById("go").disabled = true;
        }
    }
}

function updateLetterFonts(l, c1) {
    l = l.toUpperCase();
    let i = list.indexOf(l);
    while (i != -1) {
        list = list.replaceAt(i, "-");
        i = list.indexOf(l);
    }
    if ((fadeLetters != 0) && (c1 === 1)) {
        list = list.replace(/\<span style\=\"opacity\:0.5\;\"\>-\<\/span\>/g, "_");
        list = list.replace(/\<b\>-\<\/b\>/g, "_");
        list = list.replace(/-/g, "_");
        list = list.replace(/_/g, "<span style=\"opacity\:0.5;\">-</span>");
    } else {
        list = list.replace(/\<span style\=\"opacity\:0.5\;\"\>-\<\/span\>/g, "_");
        list = list.replace(/\<b\>-\<\/b\>/g, "_");
        list = list.replace(/-/g, "_");
        list = list.replace(/_/g, "-");
    }
    i = list.indexOf("-");
    while (i != -1) {
        list = list.replaceAt(i, l);
        i = list.indexOf("-");
    }
    document.getElementById("list").innerHTML = list;
}

function changeColor(e) {
    let c0 = currentColorIndex[e.id];
    let c1 = (c0 + 1) % colors.length;
    currentColorIndex[e.id] = c1;
    e.style.backgroundColor = colors[c1];
    let l = alphabet[e.id];
    updateLetterFonts(l, c1);
};

function selectText() {
    var copyText = document.getElementById("results");
    //copyText.setSelectionRange(0, 99999);
    navigator.clipboard
        .writeText(copyText.innerText)
        .then(() => {
            alert(textCopied);
        })
        .catch(() => {
            alert(textErrorCopy);
        });
}

function practice() {
    let ind = Math.floor(Math.random() * listOfFrequentlyUsedWords.length);
    wordsOfGivenLength = listOfFrequentlyUsedWords.filter(words => words.length > 2);
    myWord = wordsOfGivenLength[ind % wordsOfGivenLength.length];
    lengthOfWord = myWord.length;
    alert(textPlayingForARandom + lengthOfWord + textIfYouWantToPlayWoD);
    resetGame();
    results = '';
}

function fadeLettersDo() {
    fadeLetters = (fadeLetters + 1) % 2;
    if (revealSunsMoons > 0) list = listColorized;
    for (let i = 0; i < NumLetters; i++) {
        updateLetterFonts(alphabet[i], currentColorIndex[i]);
    }
    if (revealSunsMoons > 0) listColorized = list;
}

function revealed() {
    document.getElementById("btnReveal").disabled = true;
    revealSunsMoons = 1;
    list = listColorized;
    score -= 10 * lengthOfWord;
    for (let i = 0; i < NumLetters; i++) {
        updateLetterFonts(alphabet[i], currentColorIndex[i]);
    }
    listColorized = list;
    document.getElementById("list").innerHTML = list;
}



function gen_compressed_str(str) {
    let len = str.length;
    var w = "";
    var i = 0;
    for (i = 0; i < len; i++) {

        // Count occurrences of current character 
        let count = 1;
        while ((i < len - 1) && (str.charAt(i) == str.charAt(i + 1))) {
            count++;
            i++;
        }
        // Print character and its count
        if (count == 1) {
            w += str.charAt(i);
        } else if (count == 2) {
            w += str.charAt(i) + str.charAt(i);
        } else {
            count -= 3;
            w += count.toString() + str.charAt(i);
        }

    }
    return w;
}


function gen_decompressed_str(str) {
    let len = str.length;
    var w = "";
    var i = 0;
    var nums = "0123456789";

    for (i = 0; i < len; i++) {
        let s = str.charAt(i);
        if (nums.indexOf(s) == -1) {
            w += s;
        } else {
            i++;
            while (nums.indexOf(str.charAt(i)) > -1) {
                s += str.charAt(i);
                i++;
            }
            let s0 = str.charAt(i);
            for (let j = 0; j < parseInt(s) + 3; j++) {
                w += s0;
            }
        }
    }

    return w;
}

function gen_decompressed_letter_frequency_array(str, alphabet) {
    let len = str.length;
    var keys = [];
    var values = [0];
    var i = 0;
    var nums = "0123456789";

    for (i = 0; i < len; i++) {
        let s = str.charAt(i);
        if (nums.indexOf(s) == -1) {
            if (str.charAt(i + 1) == s) {
                keys.push(s);
                values.push(2);
                i++;
            } else {
                keys.push(s);
                values.push(1);
            }
        } else {
            i++;
            while (nums.indexOf(str.charAt(i)) > -1) {
                s += str.charAt(i);
                i++;
            }
            let s0 = str.charAt(i);
            keys.push(s0);
            values.push(parseInt(s) + 3);
        }
    }

    for (let j = 1; j < values.length; j++) {
        values[j] = values[j - 1] + values[j]; //cummulative index
    }



    const f = Object.create(null)

    for (let j = 0; j < keys.length; j++) {
        f[keys[j]] = [values[j], values[j + 1]];
    }

    return f;
}



function check_valid_word(word, alphabet) {
    let valid = true;
    for (let i = 0; i < word.length; i++) {
        if (alphabet.indexOf(word.charAt(i)) < 0) {
            valid = false;
            //alert(alphabet.toLowerCase());
            //alert(word);
        }
    }
    return valid;
}


function encodeUsingPredefinedDictionary(lut, translation, word, minI) {
    var word1 = word.slice(1, minI); //starts at 1 as first letter (index=0) is mapped to array
    var word2 = word.slice(minI);
    for (let j = 0; j < lut.length; j++) {
        word2 = word2.replaceAll(translation[j], lut[j]);
    }
    return word1 + word2;
}

function occurrences(string, subString) {

    var n = 0;
    let pos = 0;
    let step = subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

function encodeUsingLetterComboDictionary(arr1, lut, minI) {

    let set = [];
    let c = 0;
    let arr = [...arr1];
    for (let i = 0; i < arr.length; i++)
        arr[i] = arr[i].slice(minI);
    arr = arr1.join("|") + "||||||||||||||||||||||||||||||||||||||||||||||";
    let Nw = arr.length;
    let common_strings = [];
    let dict = [];
    var i = 0;
    while (true) {

        let k = (i * big_prime_number) % (Nw - 10);
        //alert(k);
        for (let len = 2; len <= 3; len++) {
            let seq = arr.slice(k, k + len);
            if (seq.indexOf("|") == -1) {
                let count = occurrences(arr, seq);
                set.push([count * (len - 1), seq]);
            }
        }
        if ((i % 1000 == 0) && (i > 0)) {
            set.sort((a, b) => {
                if (b[0] != a[0])
                    return b[0] - a[0];
                else {
                    if (a[1] < b[1])
                        return 1;
                    else if (a[1] > b[1])
                        return -1;
                    else
                        return 0;
                }

            })
            //set = set.filter((v, i, a) => { // UNNECESSARY                             
            //    if (i < a.length - 1) // UNNECESSARY                   
            //        return v[1] != a[i + 1][1] // UNNECESSARY                            
            //    else // UNNECESSARY  
            //        return true; // UNNECESSARY              
            //}); // UNNECESSARY
            common_strings.push(set[0][1]);
            dict.push(lut.charAt(common_strings.length - 1) + "|" + set[0][1]);
            arr = arr.replaceAll(set[0][1], lut.charAt(common_strings.length - 1));
            Nw = arr.length;
            set = [];
            // alert(common_strings)
        }
        if (common_strings.length == lut.length)
            break;
        i++;
    }

    //alert(common_strings);
    Nw = arr1.length;
    //alert(arr1);
    for (let j = 0; j < lut.length; j++) {
        for (let i = 0; i < Nw; i++) {
            if (arr1[i].length > minI) {
                let sub = arr1[i].slice(minI);
                arr1[i] = arr1[i].slice(0, minI) + sub.replaceAll(common_strings[j], lut.charAt(j));
            }
        }
    }
    return [dict, arr1]
}

function encode(arr, alphabet, lut, to_sort) {


    let Nw = arr.length;
    for (let i = 0; i < Nw; i++) {
        arr[i] = arr[i].toLowerCase();
        if (!(check_valid_word(arr[i], alphabet))) {
            //alert(arr[i]);
            arr.splice(i, 1);
            Nw -= 1;
        }
    }

    let tmp = encodeUsingLetterComboDictionary(arr, lut, 1);

    arr = tmp[1];
    let dict = tmp[0];
    //arr = decodeUsingDictionary(dict, arr, 1);
    //alert(arr.slice(1e4, 1e4 + 100));
    if (to_sort)
        arr = arr.sort();

    let longestLength = arr.reduce(
        function(a, b) {
            let lb = b.length;
            return a > lb ? a : lb;
        }
    );
    var NumWordsOfGivenLength = Array(longestLength).fill(0);
    NumWordsOfGivenLength = arr.reduce(
        function(NWordsOfGivenLength, b) {
            NWordsOfGivenLength[b.length - 1] += 1;
            return NWordsOfGivenLength;
        }, NumWordsOfGivenLength
    );
    for (let i = longestLength - 2; i >= 0; i--) {
        NumWordsOfGivenLength[i] += NumWordsOfGivenLength[i + 1]; // Cummulative distribution
    }

    var chars = Array(longestLength).fill("");


    let lwArr = "";
    let lw = 0;

    for (let i = 0; i < Nw; i++) {
        let w = arr[i];
        lw = w.length;
        for (let j = 0; j < lw; j++) {
            chars[j] += w.charAt(j);
        }
        lwArr = lwArr + lut.charAt(lw);
    }
    for (let i = 0; i < longestLength; i++) chars[i] = gen_compressed_str(chars[i]);
    var compressed = ([dict.length, dict.join("|"), longestLength, NumWordsOfGivenLength.join('|'), gen_compressed_str(lwArr), chars.join('|')].join('|'));
    //alert(compressed.slice(compressed.indexOf("14bee6ikk6o0u17y"),compressed.indexOf("14bee6ikk6o0u17y")+100))
    //tmp = encodeUsingDictionary([compressed], alphabet, lut2, 0);
    //arr = tmp[1];
    //dict = tmp[0];
    //alert(compressed.slice(lwArr.length + 1000));
    //compressed = ([dict.length, dict.join("|"), arr]).join("|");
    return compressed;
}


function decode(compressed, alphabet, decode_dict, firstLetterToIndex) {
    let ind = 0;
    let arr = (compressed).split('|');
    let translation = [];
    let dsize = parseInt(arr[ind]);
    let lut = []
    ind++;
    for (let i = 0; i < dsize; i++) {
        lut.push(arr[ind]);
        translation.push([arr[ind + 1]]);
        ind += 2;
    }
    //arr = decodeUsingDictionary(dict, tmp.slice(2 * dsize + 1).join("|");, 1);

    //alert(arr);

    longestLength = parseInt(arr[ind]);
    ind++;
    var NumWordsOfGivenLength = Array(longestLength).fill(0);

    for (let i = 0; i < longestLength; i++) {
        NumWordsOfGivenLength[i] = parseInt(arr[ind]);
        ind++;
    }
    let Nw = NumWordsOfGivenLength[0];

    var lwStr = gen_decompressed_str(arr[ind].toString());
    ind++;
    //alert(lwStr);

    var lwArr = Array(Nw).fill(0);
    var a = 0;
    for (let i = 0; i < Nw; i++) {
        lwArr[i] = lut.indexOf(lwStr.charAt(i));
        //alert(lwStr.substring(0, 1));
    }
    //alert(lwArr);

    let chars = [];
    let letter1F = [];
    //alert("a");
    if (!firstLetterToIndex) {
        for (let i = 0; i < longestLength; i++) {
            chars.push(gen_decompressed_str(arr[ind]));
            ind++;
        }
        //alert("b");
        //alert(chars[longestLength - 2]);
        var words = Array(Nw).fill("");
        var index = Array(longestLength).fill(0);
        for (let i = 0; i < Nw; i++) {
            let w = "";
            for (let j = 0; j < lwArr[i]; j++) {
                w += chars[j].charAt(index[j]);
                index[j]++;
            }
            if (decode_dict) {
                let w0 = "";
                let c = 1;
                while (c != 0) {
                    c = 0;
                    w0 = "";
                    for (let j = 0; j < w.length; j++) {
                        let wj = w.charAt(j);
                        if (alphabet.indexOf(wj) == -1) {
                            wj = translation[lut.indexOf(wj)]
                            c++;
                        }
                        w0 += wj;
                    }
                    //alert(w0);
                    w = w0;
                }
            }
            words[i] = w;
        }
    } else {
        letter1F = gen_decompressed_letter_frequency_array(arr[ind], alphabet);
        //alert(letter1F);
        ind++;
        for (let i = 1; i < longestLength; i++) {
            chars.push(gen_decompressed_str(arr[ind]));
            ind++;
        }
        //alert("b");
        //alert(chars[longestLength - 2]);
        var words = Array(Nw).fill("");
        var index = Array(longestLength - 1).fill(0);
        for (let i = 0; i < Nw; i++) {
            let w = "";
            for (let j = 0; j < lwArr[i] - 1; j++) {
                //chars[j] = chars[j].substring(1);
                w += chars[j].charAt(index[j]);
                index[j]++;
            }
            if (decode_dict) {
                let w0 = "";
                let c = 1;
                while (c != 0) {
                    c = 0;
                    w0 = "";
                    for (let j = 0; j < w.length; j++) {
                        let wj = w.charAt(j);
                        if (alphabet.indexOf(wj) == -1) {
                            wj = translation[lut.indexOf(wj)]
                            c++;
                        }
                        w0 += wj;
                    }
                    w = w0;
                }
            }
            words[i] = w;
        }
    }
    //words = words.join("|");
    ////alert("c");
    ////dict
    //for (let j = 0; j < lut.length; j++) {
    //    words = words.replaceAll(lut[j], translation[j]);
    //}
    //words = words.split("|");
    //alert(words);
    //words = decodeUsingDictionary(dict, words, 1);
    //alert(words)
    if (!firstLetterToIndex)
        return {
            lut: lut,
            translation: translation,
            words: words
        };
    else
        return {
            lut: lut,
            translation: translation,
            words: words,
            letter1freq: letter1F
        };
}