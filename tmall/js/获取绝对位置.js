/*获取页面元素的绝对位置*/
//网页元素的绝对位置，指该元素的左上角相对于整张网页左上角的坐标。这个绝对位置要通过计算才能得到。
function getElementLeft(element){
　　　　var actualLeft = element.offsetLeft;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualLeft += current.offsetLeft;
　　　　　　current = current.offsetParent;
　　　　}
　　　　return actualLeft;
　　}
　　function getElementTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualTop += current.offsetTop;
　　　　　　current = current.offsetParent;
　　　　}
　　　　return actualTop;
　　}
//由于在表格和iframe中，offsetParent对象未必等于父容器，所以上面的函数对于表格和iframe中的元素不适用。


/*获取页面元素的相对位置*/
//网页元素的相对位置，指该元素左上角相对于浏览器窗口左上角的坐标。
function getElementViewLeft(element){
　　　　var actualLeft = element.offsetLeft;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualLeft += current.offsetLeft;
　　　　　　current = current.offsetParent;
　　　　}
　　　　if (document.compatMode == "BackCompat"){
　　　　　　var elementScrollLeft=document.body.scrollLeft;
　　　　} else {
　　　　　　var elementScrollLeft=document.documentElement.scrollLeft; 
　　　　}
　　　　return actualLeft-elementScrollLeft;
　　}
　　function getElementViewTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualTop += current. offsetTop;
　　　　　　current = current.offsetParent;
　　　　}
　　　　 if (document.compatMode == "BackCompat"){
　　　　　　var elementScrollTop=document.body.scrollTop;
　　　　} else {
　　　　　　var elementScrollTop=document.documentElement.scrollTop; 
　　　　}
　　　　return actualTop-elementScrollTop;
　　}