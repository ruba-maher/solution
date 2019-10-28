/*//webDevlopment1

1-
<img></img>
Our img tag doesn't have a src! Add one using jQuery!

//Answer
<img src ="">
<script src="https://code.jquery.com/jquery-2.1.1.js"></script>
<script>
	$('img').attr('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2pJ87lxpAzQyuPwBpZxZeEv7QSjNGG0dTjpDR3KGS5HC7zRiGA&s');
</script>


2-
<!DOCTYPE html>
<html>
<head>
</head>

<body id = "target">
<button id= "beeperOne">Beeper</button>
<button class = "beeperTwo">Beeper 2</button>
<button class = "beeperThree">Beerper 3</button>
<div></div>
<p id = "output">HEY</p>
<input id = "color"></input>
<button id = "go">Click Me</button>

<script src="https://code.jquery.com/jquery-2.1.1.js"></script>
<script>
1
</script>
</body>
</html>
What will happen when I put the following where 1 is?

$('button#go').on('click', function(){ $('p#output').text( $('input#color').val() ).css('color', 'red'); });

//Answer
when you click on the button that have the ID go, what was written in the input with the id color, it will change the content of the p tag
with the id color and change the color of the text to red.


3-
	I want to get an alert every time someone clicks on a button. But I don't know how! Show me how below!

	Hint: I THINK this uses a jQuery event.
//Answer
$('button').on('click', function(){alert('You clicked on the button')})




4-
What does .append() do?

//Answer
.append() Insert content to the end of an element.

5-
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>practice jQuery</title>
</head>
<body>
<div class = "show">
</div>
<div id="everything">
<h1>Practice JQuery</h1>
<p>Here's some text!</p>
<p>Here's a second set of text!</p>
<p>Lets show the Rat Pack</p>
<div id="secret">We should hide this!</div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
</script>
<script src="myScript.js"></script>
<script>

</script>
</body>
</html>
I want to hide the secret. How would I do that?

//Answer
$('#secret').hide();

6-
$(body).css(background-color, 'green')

//Answer
This wont work because :
	body is not in a string
	the background-color is not in a string



7-

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>practice jQuery</title>
</head>
<body>
<div id="everything">
<h1>Practice JQuery</h1>
<p>Here's some text!</p>
<p>Here's a second set of text!</p>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
</script>
<script src="myScript.js"></script>
<script>

</script>
</body>
</html>
I want to change the background color of the body to red using jQuery. How would I do this?


//Answer
$('body').css('background-color','red')

8-

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>practice jQuery</title>
</head>
<body>
<div id="everything">
<h1>Practice JQuery</h1>
<p>Here's some text!</p>
<p>Here's a second set of text!</p>
<ol>
<li>Here is thing one.</li>
<li>Here is thing two.</li>
<li>Here is thing three.</li>
</ol>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
</script>
<script src="myScript.js"></script>
<script>

</script>
</body>
</html>
I want to append a new list item of thing four. How would I do that?

//Answer
$('ol').append('<li> here\'s thing four </li>');

//webDevlopment2

//1

Bob says hi, immediately


2-
Write a line of code that uses .call (from Function.prototype.call) to alert the string "Alice says hello!"

function sayHello () {
alert(this.name + " says hello!");
}
var alice = { name: "Alice" };
sayHello.call(alice);

3-
After running the following code, what will be the value of result?

var x = 10;
var puzzle = function (amount) {
this.x += amount;
return this.x;
};

var result = 50 - puzzle(20);
result = 30;


4-
After running the following code, what will be the value of result?

window.name = 'window'

var alice = {
name: 'Alice',
greet: function () {
return "Hi I am " + this.name
}
}

var bob = {
name: 'Bob',
greet: alice.greet
}

var greet = alice.greet
var result = greet()

//answer
"Hi I am window"

5-
After running the following code, what will be the value of result?

var obj1 = { x: 10 };

var obj2 = Object.create(obj1);

var obj3 = Object.create(obj2);

var result = obj3.x + 10;

//answer
20

6-
What message will eventually be alerted? After how long?

var name = "Window";
var alice = {
name: "Alice",
sayHi: function() {
alert(this.name + " says hi");
}
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.bind(alice), 1000);
//answer
Alice says hi, after 1 second

7-
Which of the following are reasons why we might reuse code?
//Answer
DRY - don't repeat yourself (developer efficacy)

//Git

1-
What git command will take a project on Github and put it on your local machine?

Answer
git clone

2-
What git command would you use to see the current state of the project, or to see what is not staged?

Answer
git status

3-
Which command would you use to remove all of the '.json' files from the current directory?

Answer
rm . json

4-
Which of these commands will delete a directory named 'config' from your current one.

Answer 
rm -rf config

5-
6-
Which of the following commands allows you to specify the parent repo from which you forked your current local copy.

Answer
git remote

7-
How do you rename your "config" folder to "setup" so instead of this:

.
..
node_modules/
config/
README.md
you have this:

you have this:

.
..
node_modules/
setup/
README.md

Answer 
Using the "mv" command, I move config to setup.

8-
In the terminal, how would you move up one directory?

Answer 
cd ..

8-
From the command-line, how would you move from the "db/" directory to the "public/" directory in a project folder that looks like this?

config/
    ↳ db/
node-modules/
public/
index.html
README.md

Answer 
cd ../../public
*/