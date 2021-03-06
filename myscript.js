// From the example

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// A <p> with red text says "Hey I’m red!"

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red";
paragraph.style.color = "red";
container.appendChild(paragraph);

// An h3 with blue text that says "I'm a blue h3!"

const header = document.createElement('h3');
header.textContent = "I'm a blue h3";
header.style.color = "blue";
container.appendChild(header);

//a <div> with a black border and pink background color
//another <h1> and a <p>

const newDiv = document.createElement('div');
newDiv.style.border = "2px solid black";
newDiv.style.backgroundColor = "pink";
container.appendChild(newDiv);

const newh1 = document.createElement('h1');
newh1.textContent = "Im in a div";
newDiv.appendChild(newh1);

const newp = document.createElement('p');
newp.textContent = "Me too!";
newDiv.appendChild(newp);







