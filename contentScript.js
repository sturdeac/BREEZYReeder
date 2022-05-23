const breeziefy = (sentance) => {
    const sentanceArr = sentance.split(" ");
    let newSentanceObj = {};

    for (let i = 0; i < sentanceArr.length; i++){
        const word = sentanceArr[i];
        // remove punctuation before getting length.
        const strippedWord = word.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
        const halfWordLength = Math.floor(strippedWord.length/2);

        let breezyWord;
        if (halfWordLength >= 1){
            breezyWord = `<b>${word.substring(0, halfWordLength)}</b>${word.substring(halfWordLength)}`;
        } else {
            breezyWord = `<b>${word}</b>`
        }
        
        newSentanceObj[word] = breezyWord;
    }

    return newSentanceObj;
}

const text = document.querySelector("body").querySelectorAll('p'); 

for (let i = 0; i < text.length; i++){
    const sentance = $(text[i]).text();
    const newSentanceObj = breeziefy(sentance);
    
    for (let key in newSentanceObj) {
        console.log(`key: ${key}, value: ${newSentanceObj[key]}`);
        if (text[i].innerHTML.includes(key)){
            text[i].innerHTML = text[i].innerHTML.replace(key, newSentanceObj[key]);
        }
    }
}