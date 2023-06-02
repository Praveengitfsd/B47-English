function sayHello(times){
    if(times==0) return;
    console.log("Hello")
    sayHello(times-1)

}
sayHello(5)

function printNaturalnum(N){
    if (N==0) return;
    printNaturalnum(N-1)
    console.log(N)
    }
printNaturalnum(5)

function s(N){
    if (N==0) return 0;
    if (N==1) return 1;
    return (N-1)=S(N-1)+N

}
