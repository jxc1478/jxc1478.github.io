$(document)
  .ready(function() {
    //all js goes in here
    console.log("we loaded");

  $("body").html("background-color", "#1F4560");
  $("html").html("font-family", "lacquer");
  $("#ingredientslist").hide();
  $("#s1").hide();
  $("#s2").hide();
  $("#s3").hide();
  $("#s4").hide();
  $("#s5").hide();
  $("#s6").hide();
// ingredients
  $("#ingredients").click(function(){
    $("#ingredientslist").show();
  });
  $("#ingredientslist").click(function(){
    $("#ingredientslist").hide();
  });
  $("#ingredientslist").mouseenter(function(){
    $("#ingredients").html("Ingredients -");
  });

  $("#ingredientslist").mouseleave(function(){
    $("#ingredients").html("Ingredients");
  });
// step 1
  $("#step1").click(function(){
    $("#s1").toggle();
  });
  $("#step1").mouseenter(function(){
    $("#step1").css("color", "#1F4560");
    $("#step1").css("background-color", "white");
  });
  $("#step1").mouseleave(function(){
    $("#step1").css("color", "black");
    $("#step1").css("background-color", "pink");
  });

// step 2
  $("#step2").click(function(){
    $("#s2").toggle();
  });
  $("#step2").mouseenter(function(){
    $("#step2").css("color", "#1F4560");
    $("#step2").css("background-color", "white");
  });
  $("#step2").mouseleave(function(){
    $("#step2").css("color", "black");
    $("#step2").css("background-color", "");
  });

// step 3
  $("#step3").click(function(){
    $("#s3").toggle();
  });
  $("#step3").mouseenter(function(){
    $("#step3").css("color", "#1F4560");
    $("#step3").css("background-color", "white");
  });
  $("#step3").mouseleave(function(){
    $("#step3").css("color", "black");
    $("#step3").css("background-color", "");
  });
// step 4
  $("#step4").click(function(){
    $("#s4").toggle();
  });
  $("#step4").mouseenter(function(){
    $("#step4").css("color", "#1F4560");
    $("#step4").css("background-color", "white");
  });
  $("#step4").mouseleave(function(){
    $("#step4").css("color", "black");
    $("#step4").css("background-color", "");
  });
//step 5
  $("#step5").click(function(){
    $("#s5").toggle();
  });
  $("#step5").mouseenter(function(){
    $("#step5").css("color", "#1F4560");
    $("#step5").css("background-color", "white");
  });
  $("#step5").mouseleave(function(){
    $("#step5").css("color", "black");
    $("#step5").css("background-color", "");
  });
// step 6
  $("#step6").click(function(){
    $("#s6").toggle();
  });
  $("#step6").mouseenter(function(){
    $("#step6").css("color", "#1F4560");
    $("#step6").css("background-color", "white");
  });
  $("#step6").mouseleave(function(){
    $("#step6").css("color", "black");
    $("#step6").css("background-color", "");
  });

}); <script src=”js/main.js” type=”text/javascript”></script>
