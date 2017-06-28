  
$(document).ready(function () {

  var $q = $('input[name="q"]');
  var $form = $('form');

  $form.submit(function (event) {
    
    if($q.val() == ''){
      event.preventDefault();
      console.log('search bar was empty');
      return;
    }
    var shouldSubmit = confirm('Leave Page?');
    if(!shouldSubmit){
      event.preventDefault();
    }
  });
  
  $('#clear').click(function () {
    $q.val('');
  });

  $('#lucky').click(function () {
    wordNum = Math.floor(Math.random() * listOfWords.length);
    $q.val(listOfWords[wordNum]);
    $form.submit();
  });

  var listOfWords = ['kittens', 'puppies', 'turtles', 'penguins', 'giraffes', 'dolphins'];
  var wordNum;
  console.log(wordNum);

  $q.css('width', '300px')
  $q.css('height', '30px')
  $q.css('text-align', 'center')

});

