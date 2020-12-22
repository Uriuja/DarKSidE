$(document).ready(function() {
  console.log("Cargando comentarios");

  $.get( "https://darkside.website/api/rest/1.0/post.php", function( data ) {
    var obj = JSON.parse(data);
    // let _data = data;
    // console.log(_data);
    for (let index = 0; index < obj.length; index++) {
      const element = obj[index];
      var cadena = '<div class="tm-product comment">';
      cadena = cadena + '<div class="tm-product-text comment">';
      cadena = cadena + '<h3 class="tm-product-title">'+element.otro+'</h3>';
      cadena = cadena + '<p class="tm-product-description">'+element.comentario+'</p>';
      cadena = cadena + '<div class="tm-product">';
      cadena = cadena + '<p class="dateC">'+element.fecha+'</p>';
      cadena = cadena + '</div></div>';
      $("#comentariosSection").append(cadena);
    }
  });

});