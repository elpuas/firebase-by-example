/*
* Contestant Prize Screen
*/

// Initialize Firebase

  var config = {
    apiKey: "AIzaSyBaaOVgcPrlKsCphJfsvM7xNzx3-Gzacsc",
    authDomain: "contestant-a8cd5.firebaseapp.com",
    databaseURL: "https://contestant-a8cd5.firebaseio.com",
    projectId: "contestant-a8cd5",
    storageBucket: "contestant-a8cd5.appspot.com",
    messagingSenderId: "573748405974"
  };

  firebase.initializeApp(config);

// Create my variables


var ref = firebase.database().ref('participantes/'),
header1 = document.getElementsByTagName( 'h1')[0],
header2 = document.getElementsByTagName( 'h1')[1],
header3 = document.getElementsByTagName( 'h1')[2],
header4 = document.getElementsByTagName( 'h1')[3],
input1 = document.getElementsByTagName('input')[0],
input2 = document.getElementsByTagName('input')[1],
input3 = document.getElementsByTagName('input')[2],
input4 = document.getElementsByTagName('input')[3],
submit = document.getElementsByTagName('input')[4],
message = document.getElementsByClassName('msg')[0],

contestants = { 
    contestant1: ['username', '1000'],
    contestant2: ['username', '2000'],
    contestant3: ['username', '3000'],
    contestant4: ['username', '4000'],
},
localData;

// Read Firebase Data 

ref.on("value", function(snapshot) {
    header1.innerHTML = snapshot.val().participante1.puntos,
    header2.innerHTML = snapshot.val().participante2.puntos,
    header3.innerHTML = snapshot.val().participante3.puntos,
    header4.innerHTML = snapshot.val().participante4.puntos;
    }, function (error) {
    console.log("Error: " + error.code);
});  

console.log( ref.child('participantes/') );

// Create New Total

function updatePrizeTotal( event ) {
    
    event.preventDefault();
    
    ref.set({
        participante1: {
            puntos: input1.value
        },
        participante2: {
            puntos: input2.value
        },
        participante3: {
            puntos: input3.value
        },
        participante4: {
            puntos: input4.value
        },
    })
   
    // Success!
    message.innerHTML = '👍 Puntos Actualizados';
    setTimeout(
        function(){
            message.innerText = ' ';
        },
        2000
    );

}

// Run updatePrizeTotal on submit;

if ( submit != null ) {

submit.addEventListener( 'click' , updatePrizeTotal, false );

};




