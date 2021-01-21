document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "In 1931,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0during\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0the french</br>colonial\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0administratIon\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0occupation</br>of Algeria,\xa0\xa0\xa0\xa0\xa0\xa0\xa0the bard Hanani\xa0\xa0\xa0\xa0\xa0came\xa0\xa0\xa0up</br>\xa0\xa0with\xa0\xa0\xa0the\xa0\xa0\xa0\xa0qacida\xa0\xa0called\xa0\xa0\xa0\xa0\xa0“S’hab  el</br>\xa0\xa0\xa0baroud” (People\xa0\xa0of the Powder)\xa0\xa0Created in</br>\xa0\xa0\xa0\xa0the context,\xa0\xa0\xa0\xa0and on the\xa0\xa0\xa0\xa0\xa0sidelines</br>\xa0\xa0\xa0\xa0\xa0of the celebration of the centenary of</br>French colonization,</br>the\xa0\xa0poem is</br>not a simple</br>denunciation</br>of\xa0\xa0\xa0\xa0\xa0the</br>established</br>order\xa0\xa0or\xa0\xa0a</br>\xa0\xa0\xa0\xa0\xa0simple statement of position. Its</br> \xa0\xa0\xa0\xa0author calls out to popular consciousness,</br> \xa0\xa0\xa0clearly calling\xa0\xa0\xa0for the taking\xa0\xa0\xa0\xa0up of arms:</br> \xa0\xa0“The companions\xa0\xa0\xa0\xa0of the powder /\xa0\xa0\xa0\xa0The people</br>of the powder\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0and rifle /\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0They carry</br> the powder /\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0And have lit\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0the fuse”</br> "];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h3").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 20);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});





audioPlayer();
function audioPlayer(){
  var currentSong = 0;
  $("#audioPlayer")[0].src = $("#playlist li a")[0];
  $("#playlist li a").click(function(e){
    e.preventDefault();
    $("#audioPlayer")[0].src = this;
    $("#audioPlayer")[0].play();
    $("#playlist li").removeClass("current-song");
      currentSong = $(this).parent().index();
      $(this).parent().addClass("current-song");
  });

  $("#audioPlayer")[0].addEventListener("ended", function(){
    currentSong++;
      if(currentSong == $("#playlist li a").length)
          currentSong = 0;
      $("#playlist li").removeClass("current-song")
      $("#playlist li:eq("+currentSong+")").addClass("current-song");
      $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
      $("#audioPlayer")[0].play();
  });
}
