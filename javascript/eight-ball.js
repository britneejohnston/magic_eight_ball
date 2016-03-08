function answer() {
	var words = document.getElementById("words");
	var answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
	var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
	words.innerHTML = randomAnswer;
	var input = document.getElementById("myInput");
  var li = document.createElement("li");
	li.innerHTML = input + " : " + words.innerHTML;
  var history = document.getElementById("history");
  history.appendChild(li);
  input.value = "";
}

function clearAnswer() {
  words.innerHTML = " ";
  var question = document.getElementById("question");
  question.innerHTML = '<input id="question"<type=text Name="display" Placeholder="Ask me a question">';
}

