function bubble(list) {
  var sorted = false;

  while (ops != 0) {
    var ops = 1;
    for (i=0;i<list.length-1;i++) {
      if (list[i]>list[i+1]) {
        ops++;
        var temp = list[i];
        list[i] = list[i+1];
        list[i+1] = temp;
      }
    }
    ops--;
  }
  return list;
}

var list = [5,4,3,2,1];
console.log(bubble(list));
