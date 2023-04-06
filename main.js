let a=parseInt(prompt("Enter the numbers"));
let reverse=0;
while(a>0){
    var b=a%10;
    a=(a-b)/10;
    reverse=reverse*10+b;
}
document.write(reverse);