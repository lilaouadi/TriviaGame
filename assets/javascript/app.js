$(document).ready(function(){
	var questions = [
		{
			question: "If there is a basket of 13 apples and you take three of them, how many apples do you have?",
			answers: ['10', '1', '16', '3'],
			correctAnswer: '3',
		},{
			question: "How many 2-cent stamps does it take to make a dozen?",
			answers: ['10', '6', '12', '0'],
			correctAnswer: '12',
		},
		{
			question: "Mary’s father has 5 daughters – Nana, Nene, Nini, Nono. What is the fifth daughters name?",
			answers: ['Nini', 'Nene', 'Mary', 'Nono'],
			correctAnswer: 'Mary',
		},
		{
			question: "What travels around the world but stays in one spot?",
			answers: ['Air', 'Stamp', 'Time', 'Birds'],
			correctAnswer: 'Stamp',
		},
		{
			question: "If you divide 14 by 1/2, what do you get?",
			answers: ['7', '50', '2', '28'],
			correctAnswer: '7',
		},
	]
	var number = 50;
	var counter;
	var correct = 0;
	var incorrect = 0;
	$("#start-button").on("click", start);  

	$(document).on("click", "#done", function(){
		stop();
	})


  
		
		
	  
	function showResults(){
		clearInterval(counter);
		$(".quiz-area").html("<h2>All Done</h2>");
		$(".quiz-area").append("<h3>Correct Answers: " +correct +"</h3>");
		$(".quiz-area").append("<h3> Incorrect Answers: "+incorrect +"</h3>")
	}
	  function start(){
		  counter = setInterval(timer, 1000);
		  $(".quiz-area").prepend("<h2>Time remaining: <span id='counter-number'>120 </span> Seconds</h2>");

		$("#start-button").remove();
		for(var i=0; i<questions.length; i++){
			$(".quiz-area").append("<h2>" +questions[i].question +"</h2>")
			for(var j=0; j<questions[i].answers.length; j++){
				$(".quiz-area").append("<input type='radio' name='question-" + i +
				"' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
			}
		}
		$(".quiz-area").append("<br/> <button id='done'>Done</button>")
	  }
	  function timer(){
		number-- 
		$("#counter-number").html(number);
		if (number === 0){
		  alert("Times Up!")
		  stop(); 
		}
	  }
	  function stop(){
		  $.each($("input[name='question-0']:checked"), function(){
			  if($(this).val() === questions[0].correctAnswer){
				correct++;
			  }
			  else{
				  incorrect++;
			  }
		  })
		  $.each($("input[name='question-1']:checked"), function(){
			if($(this).val() === questions[1].correctAnswer){
			  correct++;
			}
			else{
				incorrect++;
			}
		})
		$.each($("input[name='question-2']:checked"), function(){
			if($(this).val() === questions[2].correctAnswer){
			  correct++;
			}
			else{
				incorrect++;
			}
		})
		$.each($("input[name='question-3']:checked"), function(){
			if($(this).val() === questions[3].correctAnswer){
			  correct++;
			}
			else{
				incorrect++;
			}
		})
		showResults();
	  }
	  
  
	  function restart(){
		  number = 50;
		  start();
	  }
  
	  function hideMe(e) {
		  $(e).hide();
	  }
	  function showMe(e) {
		  $(e).show();
	  }
 
  });