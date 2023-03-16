# Moons-and-Suns-word-game
Moons and Suns is a word game similar to Bulls and Cows or Wordle. One can play any length word to try to guess a hidden word. The feedback that the player is given is only the number of exact matches (Suns) and near matches (Moons) between the letters of the guess and hidden word (See the rules section below).

The game can be played here both in English and in Bulgarian: [Moons and Suns](https://runningonphysics.org/cows/).

![image](https://user-images.githubusercontent.com/6117115/225590577-19c45e9f-b4f4-4d87-9c2e-b8f25c9133c9.png)


## Rules

<p>Guess a secret word by typing in guess words of any length. Each day a new secret word will be generated at midnight. The length of the word is specified on the main screen.
<p>On Mondays expect a 3-letter word of the day; Tue, Wed: 4-letter words; Thu, Fri: 5-letter words; Sat: 6; Sun: 7 or longer. You have 20 guesses for words shorter than 7 letters. For longer words, you have 99 guesses.</p>
<p>The numbers in front of each guess are the number of Suns and Moons in the guess.</p>
<p>The number of Suns is the number of correct letters in the correct positions. If your guess has a different length than that of the secret word, then the words are anchored at their first letters, and letter positions are compared relative to the anchor. So, DEAR and SET have one Sun at the second position. </p>
<p>The number of Moons is the number of correct letters that have not been marked as Suns already. Those letters are not in the correct position. </p>
<p>If you guess correctly, your score is calculated as follows: The score starts at 150 and counts down from there. There is a penalty of 5 points for every guess. If you choose to reveal the locations of the Suns and Moons (see below), that incurs a penalty of 10 points for each letter of the secret word. A correct guess incurs no penalties.</p>
<p>You can use the notes section to jot down notes as you go along. </p>
<p>You can use the shuffle field to try different permutations of letters. Lower case letters are shuffled when button is pressed. Capital letters are held fixed. Use dash or dot for unknown letters you want to shuffle. Other symbols (space, comma, etc.) are kept fixed.</p>
<p>You can click on the letter tiles to keep track of letters you have eliminated (by marking a tile in purple, which grays out the eliminated letter if box is checked), letters that must be in the word (color tiles in green, for example), and other letters (tiles in blue).</p>
<p>The "Reveal Sun and Moon locations" button at the bottom of the page does just that for all guesses so far and for all future guesses. If you click that button to use those extra hints, your guess pattern will reflect that.</p>
<p>The "Practice on a random word" button at the bottom of the screen allows you to play for a random word that is not the word of the day.</p>
<p>Moons & Suns is similar to the word version of the game Bulls and Cows, the main difference being the option to play any length word as a guess.</p>
<p>Word list collected from these sources: <a href="https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/A_Frequency_Dictionary_of_Contemporary_American_English">Wiktionary</a>, <a href="https://www-cs-faculty.stanford.edu/~knuth/programs.html">Don Knuth's webpage</a>, <a href="https://www.wgtn.ac.nz/lals/resources/paul-nations-resources/vocabulary-lists">Victoria University of Wellington</a>, <a href="https://www.wordfrequency.info/intro.asp">Word Frequency Data</a>, Princeton University's <a href="https://wordnet.princeton.edu/">WordNet</a>, and the 
        <a href="https://norvig.com/ngrams/">Natural Language Corpus Data: Beautiful Data</a>.</p>
        
## Storage algorithm

The javascript code can (de)compress a word dictionary quite efficiently -- both in terms of computational time and compressed file size. It is licensed under GPLv3. That compression is definitely necessary especially for the Bulgarian dictionary.
