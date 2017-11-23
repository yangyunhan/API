var reverse = function(x) {
    var charx = x.toString();
    var chary = '';
    var positive = true;
    if(x>Max ||x<Min){
        console.log('over range');
        return 0;
    }else if(x < 0) {
        console.log('negative');
        positive = false;
        chary += charx.charAt(0);
        checkReverse(chary,charx,1,positive);
    }else{console.log('positive');checkReverse(chary,charx,0,positive);
    }
};
function checkReverse(chary,charx,index,positive) {
    for(var i = charx.length - 1;i >= index;i--){chary += charx.charAt(i);}
    chary = parseInt(chary);
    if(positive){
        if(chary > Max){console.log('too big');return 0;
        }else {console.log(chary);return chary;}
    }else {
        if (chary < Min){console.log('too small');return 0;
        }else {console.log(chary);return chary;}
    }
}
var Max = 2147483647;
var Min = -2147483648;
reverse(123);
reverse(-123);
reverse(10);
reverse(7463847413);
reverse(-2147483412);
reverse(-1563847412);