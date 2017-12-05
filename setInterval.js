//间隔时间确定的setInterval函数
function interval(func, wait){
  var interv = function(){
    func.call(null);
    setTimeout(interv, wait);
  };

  setTimeout(interv, wait);
}

interval(function(){
  //要经过确定时间执行的代码
  console.log(2);
},1000);

//取消当前所有的setTimeout
(function() {
  var gid = setInterval(clearAllTimeouts, 0);

  function clearAllTimeouts() {
    var id = setTimeout(function() {}, 0);
    while (id > 0) {
      if (id !== gid) {
        clearTimeout(id);
      }
      id--;
    }
  }
})();
//再设置任何setTimeout都无效了
