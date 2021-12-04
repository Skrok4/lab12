var engwords0 = ["family", "friend", "time", "city", "money", "way", "table", "food ", "school", "house"];
var ruswords0 = ["родина", "друг", "час", "місто", "гроші", "шлях", "стіл", "їжа", "школа", "будинок"];
var engwords1 = ["courage","depth","entourage","flood","justice","liberty","mirror","naughty","petrol","paw"];
var ruswords1 = ["сміливість","глибина","оточення","потоп","справедливість","свобода","дзеркало","неслухняний","бензин","лапа"];
var engwords2 = ["augury","humanity","investigate","landlord","mature","pleasure","profit","quarrel","rehearsal","satchel"];
var ruswords2 = ["передвісті","людяність","розслідувати","поміщик","зрілий","задоволення","прибуток","сваритися","репетиція","ранець"];
var counter = 0;
var btnPlay = $('#btnCheck');
function restart(){
	counter = 0;
}
Array.prototype.remove = function(el) {
    return this.splice(this.indexOf(el), 1);
}
function fun1(){
	var rad = document.getElementsByName('level');
	for (var k = 0; k < rad.length; k++) {
	  if (rad[0].checked) {
		i = engwords0;
		j = ruswords0;
		
	}
	else if (rad[1].checked) {
		i = engwords1;
		j = ruswords1;

	}
	else if(rad[2].checked){
		i = engwords2;
		j = ruswords2;
	}
	else{
		alert("level dosn't choosen");
	}
}

function dellfromarr(){
	
	i.remove(i[random]);
	console.log(i);
	j.remove(j[random]);
	console.log(j);
	random = Math.floor(Math.random() * i.length);
	guessedword = $('#words').html(i[random]);
};
$("#btnNext").click(function(){
	word = 1;
	if(i.length == 0){
		alert("Please reload the window")
	}
		$("input[name='level']").attr("disabled", true);
		$(".cards").toggleClass('flipped');
		$("#words").toggleClass('flipped');
		random = Math.floor(Math.random() * i.length);
		guessedword = $('#words').html(i[random]);
		console.log(i);
		console.log(j);
		
		$("#words").click(function(){
			$("#words").animation = "anim 5s ease";
			$("#words").toggleClass('answ');
			$('#words').html(j[random]);
			setTimeout(showOrig,3000)
		});
	});
	


function clear(){
	$("input").val("");
}
var counterright = 0;
var counterwrong = 0;
var tr, fl;
var word = document.getElementById("words").getAttribute('value');

function showOrig(){
	$('#words').html(i[random]);
}
$("#btnCheck").click(function(){
	
	$(".cards").toggleClass('flipped');
	$("#words").toggleClass('flipped');
	if(word == null){
		counter--;
		alert("Please click in arrow")
	}
	counter++;
	setTimeout(clear, 1);
    $("#counter").html(counter);
	var value = $(".field").val();
	if(value === j[random]){
		dellfromarr();
        counterright++;
        $("#correct").html(counterright);	
	}
	else if(value != j[random]){
		dellfromarr();
        counterwrong=counterwrong+1;
        $("#wrong").html(counterwrong);
	}
	if(counter == 10){
		btnPlay.prop("disabled", true );
		word = null;
		$('#words').html(":)")
		tr = counterright;
		fl = counterwrong;
var answers = $("#answers");

var answersData = {
    labels: [
        "Correct",
        "Uncorrect"
    ],
    datasets: [
        {
            data: [tr*1,fl*1],
            backgroundColor: [
				"#63FF84",
                "#FF6384"
            ]
        }]
};
 pieChart = new Chart(answers, {
  type: 'pie',
  data: answersData
});

// - Modal window
		$(document).ready(function($) {
			$('.popup-open').ready(function() {
				$('.popup-fade').fadeIn();
				restart();
				return false;
			});

			$('.popup-close').click(function() {
				$(this).parents('.popup-fade').fadeOut();
				restart();
				return false;
			});

			$(document).keydown(function(e) {
				if (e.keyCode === 27) {
					e.stopPropagation();
					$('.popup-fade').fadeOut();
					restart();
				}
			});

			$('.popup-fade').click(function(e) {
				if ($(e.target).closest('.popup').length == 0) {
					$(this).fadeOut();
					restart();
				}
			});
		});


	}
});
}
// - Modal window
