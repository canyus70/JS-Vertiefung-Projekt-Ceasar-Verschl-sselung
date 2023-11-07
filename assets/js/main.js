function encrypt() {
    const text = document.getElementById("text").value.toLowerCase();
    const key = parseInt(document.getElementById("key").value);

    let result = "";

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            let encryptedCharCode = ((charCode - 97 + key) % 26) + 97;
            result += String.fromCharCode(encryptedCharCode);
        } else {
            result += text.charAt(i);
        }
    }
    document.getElementById("result").value = result.toUpperCase();
}

function decrypt() {
    const text = document.getElementById("text").value.toLowerCase();
    const key = Number(document.getElementById("key").value);

    let result = "";
    
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            let decryptedCharCode = ((charCode - 97 - key + 26) % 26) + 97;
            result += String.fromCharCode(decryptedCharCode);
        } else {
            result += text.charAt(i);
        }
    }
    document.getElementById("result").value = result.toUpperCase();
}