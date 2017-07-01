$(function(){
  $('a').draggable(),
  $('#hongo').draggable()
})


$(function(){
  $('a').click(function(){
    $("a").load('index.html'),
    $("a").load('index2.html')
  })
})
