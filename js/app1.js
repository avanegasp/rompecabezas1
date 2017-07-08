$(document).on('ready',iniciar);
  var enlace;

  function iniciar(){
    $('#tabla2 div img').on('click', copiar);
  }
  function copiar(){
    enlace=$(this).attr('src');
    $('#tabla1 div img').on('click', pegar)
  }
  function pegar (){
    $(this).attr('src', enlace);
}


$(function(){
  $('a').click(function(){
    $("#boton").load('index.html'),
  $('a')
    $("#boton").load('portada.html')
  })
})

$(function(){
  $( document ).keydown( function ( event ){
    var keyCode = event.keyCode || event.which;
    var keyMap = {left: 37, up: 38, right: 39, down: 40};

    switch( keyCode ){
      case keyMap.left:
        $( '.block1' ).animate({
          left: '-=10'
        }, 200);
        break;
      case keyMap.up:
        var blockLeft = $( '.block1' ).offset().left;
        var blockTop = $( '.block1' ).offset().top;

      case keyMap.right:
        $( '.block1' ).animate({
          left: '+=10'
        }, 200);
        break;
    }
  });
});
