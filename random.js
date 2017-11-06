/*当时用到的是洗牌，传入字符串数组，输出打乱的字符串数组*/
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
/*论坛上大家分享的洗牌的更简单的方式
调用方式：
var cards = ['','','','','',''];
cards.sort(shuffle);
*/
function shuffle(){
	return Math.random()>0.5?-1:1;
}
