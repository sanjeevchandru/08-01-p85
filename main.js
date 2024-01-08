document.write("49.to replace every character in a given string with the character following it in the alphabet"+"<br>");
function test49(str){
    var s=str.split("");
    for(let i=0;i<s.length;i++){
        switch(s[i]){
            case "":
                break;
            case "z":
                s[i]="a";
                break;
            case "Z":
                s[i]="A";
                break;
            default:
                s[i]=String.fromCharCode(1+s[i].charCodeAt(0));
        }
        switch(s[i]){
            case "a": case "e" : case "i" : case "o" : case "u":
                s[i]=s[i].toUpperCase();
        }
    }
    return s.join("");
}
document.write("The string is :PYTHON, Ans :"+test49("PYTHON")+"<br>");
document.write("The string is :sm, Ans :"+test49("sm")+"<br><br>");