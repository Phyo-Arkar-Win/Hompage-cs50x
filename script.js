function caesar(){
    let sentence = document.getElementById("caesarInput").value;
    let finalSentence ='';
    let charAscii, replacedAscii, modulo;
    let key = document.getElementById("caesarKey").value;
    // if the user doesn't choose the key
    if(key == 'Key'){
        alert("Please choose a key.");
        return;
    }
    for(let i = 0; i < sentence.length; i++){
        charAscii = sentence[i].charCodeAt();
        replacedAscii = parseInt(charAscii) + parseInt(key);
        // For upper-case letters
        if(charAscii >= 65 && charAscii <= 90){
            finalSentence += String.fromCharCode(((replacedAscii - 65) % 26) + 65);
        }
        // For lower-case letters
        else if(charAscii >= 97 && charAscii <= 122){
            finalSentence += String.fromCharCode(((replacedAscii -97) % 26) + 97);
        }
        else{
            finalSentence += String.fromCharCode(parseInt(replacedAscii) - parseInt(key));
        }
    }
    document.getElementById("caesarOutput").value = finalSentence;
}
function binary(){
    let sentence = document.getElementById("binaryInput").value;
    let finalSentence = '';
    let charAscii;
    for(let i = 0; i < sentence.length; i++){
        charAscii = sentence[i].charCodeAt();
        // Convert the ASCII code of character to binary(base 2)
        finalSentence += charAscii.toString(2);
        finalSentence += ' ';
    }
    document.getElementById("binaryOutput").value = finalSentence;
}

function hex(x){
    let sentence = document.getElementById("hexInput").value;
    let finalSentence = '';
    let subString = '';
    let charAscii;
    // Converting text to hex(tth)
    if(x=='tth'){
        for(i = 0; i < sentence.length; i++){
            charAscii = sentence[i].charCodeAt();
            // Convert the ASCII code of character to hexadecimal(base 16)
            finalSentence += charAscii.toString(16);
            finalSentence += ' ';
        }
    }
    // Converting hex to text(htt)
    if(x=='htt'){
        for(let i = 0; i < sentence.length; i++){
            if(i%3==0){
                subString = sentence.substr(i,2);
                finalSentence += String.fromCharCode(parseInt(subString,16).toString(10));
            }
        }
    }
    document.getElementById("hexOutput").value = finalSentence;
}