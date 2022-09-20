/**
 * This function checks whether a given word can be constructed with the available tiles.
 * The availableTiles object should not be modified.
 * 
 * @param {Object<string, number>} availableTiles A collection of available tiles and their frequency.
 * @param {string} word The word a player wants to construct.
 * @returns {boolean} true if the word can be constructed with the available tiles, else false.
 */
 function canConstructWord(availableTiles, word) {
    for(let i = 0; i < word.length; i++)
    {
        let character = word.charAt(i);
        if(!availableTiles.hasOwnProperty(character))
        {
            return false;
        }
        else
        {
            if(availableTiles[character] <= 0) 
            {
                return false;
            }
            else
            {
                availableTiles[character]--;
            }
        }
    }
    return true;
}

const map = {'a' : 1, 'e': 1, 'i': 1, 'o':1, 'u':1, 'd':2, 'g':2, 'b':3, 'c': 3
    , 'm': 3, 'p': 3, 'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4, 'k' : 5, 'j': 8
    , 'x': 8, 'q':10, 'z':10, ' ': 0};

/**
 * We define the base score of a word as the score obtained by adding each letter's score, without taking board position
 * into account. This function will compute and return the base score of a given word.
 * 
 * @param {string} word The word that will be used to compute the base score.
 * @returns {number} The base score for the given word.
 */
 function baseScore(word) {
    let score = 0;
    for(let i = 0; i < word.length; i++)
    {
         let character = word.charAt(i);
         if(map.hasOwnProperty(character))
         {
            score += map[character]
         }
    }
    return score;
}


const example = {'u':5, 'm':4, 'a':1, 's':4};



console.log(baseScore(" "))
