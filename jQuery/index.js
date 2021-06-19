$("button").click(function(){
  this.style.backgroundColor="red";
  $("h1").css("font-size","10rem");
})

$("input").keydown(function(event){
  console.log(event.key);
});
