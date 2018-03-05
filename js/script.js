// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
	
	// Results.click.handler
$('#submit').click(function(){
		var word = $('#input').val();
		$('#display').html(sentenceToPigLatin(word).join(' '));
	});
});



// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance

function sentenceToPigLatin(x){
    var words = x.split(" ");
    // we need a way to seperate vowels from other letters
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    // loop so we can go through every word in the sentence
    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];
        // If there are voels they wont be change they would stay as the "currentWord"
        if (currentWord[0] in vowels) {
            var res = currentWord + "ay";
        }
        // if not a vowel then take the first letter put it in the back and add ay
        //Example Hello
        // Step 1: add the first letter in the back "elloH"
        // Step 2: add ay at the end "elloHay"
        else {
            var res = currentWord.slice(1,currentWord.length);
            res = res + currentWord[0] + "ay";
        }
        words[i] = res;
    }
    return words;
}

console.log(sentenceToPigLatin(word).join(' '));