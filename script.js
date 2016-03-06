$(document).ready(function(){

 //loading first quote
  $.getJSON("http://api.icndb.com/jokes/random",function(obj){
    $('.quote').html("<p class='text-center joke'>"+obj.value.joke+"</p>");})

           //New quote
  $("#button").on('click',function(){
 $.getJSON("http://api.icndb.com/jokes/random",function(obj){
    $('.quote').html("<p class='text-center joke'>"+obj.value.joke+"</p>");
    var joke = obj.value.joke;
    tweetUrl = "https://twitter.com/intent/tweet?text=" + joke;
    })
  })
  //var joke = $(".joke").html();
  //console.log(joke)
  $("#tweet").on("click",function(){
    window.open(tweetUrl, '_blank');
  })

})
