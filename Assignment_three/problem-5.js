function analyzeText(text) {
    //  String kina check kori
    if (typeof text !== "string") {
        return "Invalid";
    }
    // string khali kina check kori
    if (text.trim().length === 0) {
        return "Invalid";
    }
    
    // words ghola alada korar jonno 
    let words = text.split(" ");
    let longestWord = "";
    
    // sobche bari word ta ber kori
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    //space chara total character count kori
    let totalChars = text.split(" ").join("").length;
    
    return {
        longwords: longestWord,
        token: totalChars
    };
}


console.log(analyzeText("I am a little honest person")); 

console.log(analyzeText("Hello world")); 
console.log(analyzeText("")); 

console.log(analyzeText(123)); 
console.log(analyzeText("Keep coding keep shining")); 

