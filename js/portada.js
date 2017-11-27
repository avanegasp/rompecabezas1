// $(function(){
//   $('a').draggable()
// })
//
//
// $(function(){
//   $('a').click(function(){
//     $("a").load('index.html'),
//     $("a").load('index2.html')
//   })
// })


var slider = $('#slider');
var siguiente =$('#btn-next');
var anterior =$('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first')
