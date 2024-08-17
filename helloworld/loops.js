for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log(i_1);
}
var i = 0;
for (; i < 10; i++) {
    console.log(i);
}
for (var i_2 = 0;; i_2++) {
    console.log(i_2);
    if (i_2 > 9)
        break;
}
var j = 0;
for (;;) {
    console.log(j);
    j++;
    if (j > 9)
        break;
}
var counters = 0;
while (counter < 5) {
    console.log(counters);
    counters++;
}
var list = document.querySelector('#list');
while (list.firstChild) {
    list.removeChild(list.firstChild);
}
