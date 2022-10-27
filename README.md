# To-do List Challenge

## Hi hi! 👋

This project is a solution for a challenge developed by [Frontend Mentor](https://www.frontendmentor.io). To start the challenge, we receive screenshots of the final product and some guidelines on style and expectations on the usability. The rest was up to me, what is very exciting and mildly terrifying. 🙃
I particularly enjoy completing these type of challenges as they are a great opportunity to develop my skills in a similar context to real world workflow. Once I was done, I also published it on the Frontend Mentor platform and had the chance to receive feedback from the community. Feel free to visit [my profile at Frontend Mentor]( https://www.frontendmentor.io/profile/ga-bri-ela). 

## The Challenge 🧩

According to Frontend Mentor, to complete the [Todo App]( https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW/hub/todo-app-HcFrFHxYB3) Challenge, the users should be able to:
- View the optimal layout for the app depending on their device’s screen size
- See the hover states for all interactive elements on the page
- Add new todos to the list
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos 
- Toggle light and dark mode

They have also added a bonus task that I chose to accomplish, which was:

- Drag and drop to reorder items on the list (available for desktop only)


![screenshot of the app in light mode](https://github.com/ga-bri-ela/Todo-List/blob/main/images/todo-lightmode.png?raw=true)
This is how the app looks with light mode activated.

![screenshot of the app in dark mode](https://github.com/ga-bri-ela/Todo-List/blob/main/images/todo-darkmode.png?raw=true)
And this is the dark mode version.

## Technologies 💻

This project was built using JavaScript ES6, CSS and HTML.
 
## Personal take-aways 👩‍💻

This was my first attempt at an intermediate level challenge at Frontend mentor, and it made me so happy and motivated to see how much I have learned since I have started practicing at the platform. 
To accomplish this challenge, I have watched a lot of tutorials (which will be linked below), and learned a lot of new problem-solving possibilities with them. Taking on a task as popular as a to-do list has the advantages of having plenty of resources available to help. But it was definitely not a mindless task, as I had to customize and “Frankenstein” all that input into something that made sense to the design I was given and the features I wanted to implement. 
Here are some of the features and tools I have learned with this project that I would like to highlight:

-	CSS variables: I had seen them before in tutorials but had never used them. And what a game changer it is. This tool made implementing the dark mode so easy! All it took was setting up the variables that needed to be changed and writing a tiny bit of JS. And I must admit that building my first project with a dark themed option made me feel really awesome! 

>.dark-mode {
>   --primary-color: hsl(237, 14%, 26%);
>   --secondary-color: hsl(233, 14%, 35%);
>   --tertiary-color: hsl(236, 33%, 92%);
>   --quaternary-color: hsl(236, 9%, 61%);
>   --shadowColor: 0px 15px 29px 0px rgba(29, 29, 29, 0.5);
>   --background: url("/images/bg-desktop-dark.jpg");
>}

> const icon = document.getElementById('icon');
> 
>
>icon.addEventListener('click', () => {
>
>    document.body.classList.toggle('dark-mode');
>    
>    if(document.body.classList.contains('dark-mode')){
>    
>        icon.src = '/images/icon-sun.svg';
>        
>    } else {
>    
>        icon.src = '/images/icon-moon.svg';
>        
>    };
>    
>});

-	Sortable Drag and Drop option: This is a really cool feature and following the tutorial by [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified) really broke it down into a simple implementation. Nonetheless, I still have a little to go here, more about it in the “Continue Development” section.

-	Custom checkbox: Having to customize the checkbox made me understand a lot about this kind of input, its relationship with its label and overall design possibilities. I did hit a really big wall while working on it, but thankfully I got saved by an article at the [Trendy Coder]( https://thetrendycoder.com/) literally called “Custom checkbox not working”. 😅

-	Html <template> tags: I have leaned to use <template> by following another [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified) tutorial. The code snippet below shows how I have used it to create the “blueprint” for the to-dos elements.

>        <template id="task-template">
>            <div class="submitted-task incomplete-task draggable" draggable="true">
>               <button class="icon-cross">
>                    <img src="/images/icon-cross.svg" 
>                         aria-label="Delete task" />
>               </button>
>               <input type="checkbox">
>               <label>
>                   <span class="custom-checkbox">
>                       <span class="check">
>                       </span>
>                   </span>
>               </label>
>           </div>
>       </template>

 
## Resources and Links 
-	Video Tutorial [How to Code A Better To-Do List – Tutorial Part 1 HTML/CSS (by Kevin Powell)]( https://www.youtube.com/watch?v=IhmSidOJSeE&t=0s) 
-	Video Tutorial [How to Code A Better To-Do List – Tutorial Part 2 JS (by Web Dev Simplified)]( https://www.youtube.com/watch?v=W7FaYfuwu70&t=2062s) 
-	Article [Custom Checkbox Not Working by The Trendy Coder](https://thetrendycoder.com/custom-checkbox-not-working/)
-	Video Tutorial [How To Build Sortable Drag & Drop With Vanilla Javascript
 by Web Dev Simplified](https://www.youtube.com/watch?v=jfYWwQrtzzY&t=671s)




