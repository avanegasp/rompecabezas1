$(document).on('ready',iniciar);

  // $(function() {
  //   var imagenes = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img 5.png', 'img6.png'];
  //   $('#tabla1').css({'img': 'url(img6/' + imagenes[Math.floor(Math.random() * imagenes.length)] + ')'});
  // });
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



// $(document).ready(function(){
// 	$(".block1").click(function(){
//   		$("#tabla1").animate({backgroundPositionX:"0px", backgroundPositionY:"0px"});
//     });
// 	$(".block2").click(function(){
//           $("#tabla1").animate({bottom:"50px"},2000,function() {alert ('segundo!');});
//     });
// 	$(".block3").click(function(){
//     	$("#tabla1").animate({top:"30px"},3000,function() {alert ('tercero!');});
//     });
// });


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
