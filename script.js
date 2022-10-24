//Exercise - DOM Manipulation

//Initial appended element
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the coolest webpage ever!';

container.appendChild(content);

//First exercise
const para = document.createElement('p');
para.style.color = 'red';
para.classList.add('para')
para.textContent = "Hey I'm red!";

container.append(para);

//Second exercise 
const heading = document.createElement('h3');
heading.style.color = 'blue';
heading.classList.add('heading');
heading.textContent = "I'm a blue h3!";

container.append(heading);

//Third exercise
const div = document.createElement('div'); 
div.style.border = 'black, 5px';
div.style.backgroundColor = 'pink';

const header = document.createElement('h1');
header.classList.add('header');
header.textContent = "I'm in a div"
div.appendChild(header);

const paragraph =  document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = "ME TOO!"
div.appendChild(paragraph);

container.append(div);