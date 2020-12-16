$(document).ready(function() {
  console.log("Cargando DarkSide");
  // setTimeout(function(){
  //   $("#audio")[0].play();
  // },5000)
  // Swal.fire({
  //   title: '¿Reproducir  con Música?',
  //   icon: 'question',
  //   iconColor: '#e590b7',
  //   confirmButtonText: 'Si',
  //   showCancelButton: true,
  //   cancelButtonText: 'No',
  //   showLoaderOnConfirm: true,
  //   allowEscapeKey: false,
  //   allowOutsideClick: false,
  //   confirmButtonColor: '',
  //   cancelButtonColor: '',
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //    console.log('Reproduciendo Gengis kan');
  //   $("#audio")[0].play();
  //   }
  // });

  $.get( "https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=3&start=1&count=10000", function( data ) {
    let versus = data.leaderboard;
    console.log(data.leaderboard);
    paintVersus(versus);
  });
  $.get( "https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=4&start=1&count=10000", function( data ) {
    let tg = data.leaderboard;
    paintTG(tg);
  });

  function paintVersus(data){
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.clan == "Biry") {
      //if (element.country == "MX") {
          var _cadena = "<tr><td>" + element.rank + "</td><td> "+ element.name + "</td><td> " +element.rating+"</td></tr>";
          $("#content").append(_cadena);
      }
    }
    $("#versus").DataTable({
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json'
      },
    });
  }

  function paintTG(data){
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.clan == "Biry") {
      //if (element.country == "MX") {
          var _cadena = "<tr><td>" + element.rank + "</td><td> "+ element.name + "</td><td> " +element.rating+"</td></tr>";
          $("#contenttg").append(_cadena);
      }
    }
    $("#tg").DataTable({
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json'
      }
    });
  }
});