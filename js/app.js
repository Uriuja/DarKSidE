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
    // console.log(data.leaderboard);
    paintVersus(versus);
  });
  $.get( "https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=4&start=1&count=10000", function( data ) {
    let tg = data.leaderboard;
    console.log(data.leaderboard);
    paintTG(tg);
  });

  function paintVersus(data){
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.clan == "Biry") {
          var _cadena = "<tr><td>" + element.rank + "</td><td> "+ element.name + "</td>";
          var _imagen = getFlag(element.country);
          _cadena = _cadena + "<td class = 'centerFlag'>"+_imagen+"</td>";
          _cadena = _cadena + "<td> " +element.rating+"</td></tr>";
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
        var _cadena = "<tr><td>" + element.rank + "</td><td> "+ element.name + "</td>";
        var _imagen = getFlag(element.country);
        _cadena = _cadena + "<td class = 'centerFlag'>"+_imagen+"</td>";
        _cadena = _cadena + "<td> " +element.rating+"</td></tr>";
        $("#contenttg").append(_cadena);
      }
    }
    $("#tg").DataTable({
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json'
      }
    });
  }

  function getFlag(country){
    var _imagen ="";
    switch (country){
      case 'AR': //Argentina
      _imagen =  "<img src='img/flags/argentina.png' alt='Argentina' class='flag'>"
        break;
      case 'CL': //Chile
      _imagen =  "<img src='img/flags/chile.png' alt='Chile' class='flag'>"
        break;
      case 'MX': //México
      _imagen =  "<img src='img/flags/mexico.png' alt='Mexico' class='flag'>"
        break;
      case 'ES': //España
      _imagen =  "<img src='img/flags/spain.png' alt='España' class='flag'>"
        break
      case 'GT': //Guatemala
      _imagen =  "<img src='img/flags/098-guatemala.png' alt='Guatemala' class='flag'>"
        break
      case 'VN': //Vietnam
      _imagen =  "<img src='img/flags/vietnam.png' alt='Vietnam' class='flag'>"
        break
      case 'BR': //Brasil
      _imagen =  "<img src='img/flags/brazil.png' alt='Brasil' class='flag'>"
        break
      case 'CO': //Colombia
      _imagen =  "<img src='img/flags/colombia.png' alt='Colombia' class='flag'>"
        break
      case 'FR': //Francia
      _imagen =  "<img src='img/flags/france.png' alt='Francia' class='flag'>"
        break
      case 'AU': //Australia
      _imagen =  "<img src='img/flags/australia.png' alt='Australia' class='flag'>"
        break
        case 'GB': //Gran Bretaña
      _imagen =  "<img src='img/flags/united-kingdom.png' alt='Reino Unido' class='flag'>"
        break
        case 'UY': //Uruguay
      _imagen =  "<img src='img/flags/uruguay.png' alt='Uruguay' class='flag'>"
        break
        case 'PE': //Peru
      _imagen =  "<img src='img/flags/peru.png' alt='Peru' class='flag'>"
        break
      default:
        _imagen =  "<img src='' alt='' class='flag'>"
        break;
    }
    return _imagen;
  }

});