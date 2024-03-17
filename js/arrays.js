let arrOne=Array.from(Array(10),()=>{return Math.round(Math.random()*25)});
//6.1
function calcSquareRoot(arrOne){
    return arrOne.filter(elem=>elem%2==0).map(elem=>Math.round(Math.sqrt(elem))).reduce((sum, elem)=>sum+elem, 0);
}
//6.2
function calcSum(arrOne){
    return arrOne.filter(elem=>elem>0&&elem<10).reduce((sum, elem)=>sum+elem, 0);
}
//6.3
function getEvenArray(arrOne){
    return arrOne.every(elem=>elem%2==0);
}
//6.4
function getArray5(arrOne){
    return arrOne.filter(elem=>elem%5==0)
}
//6.5
function calcMiddleSum(arrOne){
    return (arrOne.reduce((sum, elem)=>sum+elem, 0)/arrOne.length).toFixed(2)
}
//6.6
function getChangeElement(arrOne){
    arrOne.push(arrOne.at(-10));
    arrOne.shift();
    return arrOne;
}
//6.7
let sumChet=arrOne.reduce((sum, elem, index)=>{
    if (index%2==0) sum=sum+elem
    return sum;
}, 0);
let sumNechet=arrOne.reduce((sum, elem, index)=>{
    if (index%2!=0) sum=sum+elem
    return sum;
}, 0);
function calcDel(){
    return (sumChet/sumNechet).toFixed(2);
}
//6.8
function getNum(){
    let arrTwo=prompt("Введите число");
    arrTwo=arrTwo.split('').map(elem=>++elem);
    return arrTwo;
}
//6.9
let arrThree=('yandex.ru, http://yandex.ru, ya.ru')
function getSite(arrThree){
    arrThree=arrThree.split(', ').filter(elem=>elem.startsWith("http://"))
        return arrThree
    }





