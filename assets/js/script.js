$(document).ready(function(){
  var max = 3, min = 0;
  var cpt = 0;
  $('#shifumi').on('click', function(){
    $('img').css('border', '')
    cpt++;
    var random = Math.floor(Math.random() * (max - min) + min)
    switch(random) {
      case 0:
      $('#pierre').css('border', '5px solid green')
      break;
      case 1:
      $('#feuille').css('border', '5px solid green')
      break;
      case 2:
      $('#ciseaux').css('border', '5px solid green')
      break;
      default:
    }
    console.log(random)
    var test = $('select').val();
    console.log(test);
    if (test == random) {
      alert('C\'est une égalité');
      $('#Nul').text(parseInt($('#Nul').text()) + 1);
    }
    else if (test == 0 && random == 1 || test == 1 && random == 2 || test == 2 && random == 0) {
      alert('C\'est perdu');
      $('#Lose').text(parseInt($('#Lose').text()) + 1);
    }
    else {
      alert('C\'est gagné');
      $('#Win').text(parseInt($('#Win').text()) + 1);
    }
    $('#percent').text(Math.round(parseInt($('#Win').text()) / cpt * 100));
  })
})
