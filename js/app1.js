// $(document).on('ready',iniciar);

  $(function() {
    var imagenes = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img 5.png', 'img6.png'];
    $('#tabla1').css({'background-image': 'url(img6/' + imagenes[Math.floor(Math.random() * imagenes.length)] + ')'});
  });
  // var enlace;
  //
  // function iniciar(){
  //   $('#tabla2 div img').on('click', copiar);
  // }
  //
  // function copiar(){
  //   enlace=$(this).attr('src');
  //   $('#tabla1 div img').on('click', pegar)
  // }
  //
  // function pegar (){
  //   $(this).attr('src', enlace);
  // }
