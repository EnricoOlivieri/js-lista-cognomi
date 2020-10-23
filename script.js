var cognomeUtente = prompt('Inserire cognome')

var cognomi = ['Rossi', 'Conti', 'Ventura', 'Agnelli'];

cognomi.push(cognomeUtente);
cognomi.sort()

var cognomiOrdinati = [];

for(var i = 0; i < cognomi.length; i++){
  var cognome = cognomi
  for (var r = 0; r < cognomi.length; j++){
    if(i == r)
  }
}

var ulEl = document.getElementById('cognomiList');
for(var i = 0; i < cognomi.length; i ++){
  olEl.inner.HTML += '<li>' + cognomi[i] '</li>';
  if(cognomeUtente == cognomi[i]){
    posizioneUtente = i;
  }
}

document.getElementById('result').innerHTML += (posizioneUtente + 1);
