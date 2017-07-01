// $(document).on('ready',iniciar);
//
//   var enlace;
//
//   function iniciar(){
//     $('#tabla2 div img').draggable(copiar);
//   }
//
//   function copiar(){
//     enlace=$(this).attr('src');
//     $('#tabla1 div img').on('draggable', pegar)
//   }
//
//   function pegar (){
//     $(this).attr('src', enlace);
//   }

$( function() {
   $( "#tabla2 div img" ).draggable();
 });

$(function(){
  $('nav h1').draggable();
})
