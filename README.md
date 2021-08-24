# Memory-Game
MS Project 2
## Overview
What is this website and what does it do?
The memory game, which also may be known as, 'Matching Pairs, Match Match or Match Up' used to be and still is a classic physical card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards. This game has been taken to the next level by being hosted online so it can be played anywhere, anytime, making it one step easier to train your brain.

A live demo can be found [here]
## UX
### Strategy
What are the main goals of this site?
•	Make a game that users enjoy playing.
•	Provide a clean, simple, and interactive site which allows users to improve their memory.
User Stories
First Time Visitor Goals
•	As a first time user I need to understand the site/game purpose.
•	As a first time user I want to be able to enjoy playing the memory game.
Returning Visitor Goals
•	As a returning Visitor, I would like to still feel challenged when playing the memory game.
•	As a returning Visitor I would like to improve my memory with the game.
### Scope
There are a few features that will be included in the site.
#### Button
A button will be needed for user to find instructions on how to play the game. The button was chosen so that people can have the option of chosing whether or not they would like to have instruction text or not as there are many people who already know how to play the game.
#### Modal
The modal will appear once the button has been selected. This will help any user that have not played the game before, or would like a slight refresh on how to play the game. Once the instructions have been read, a 'close' button is also available to remove the modal and start playing the game.
#### Alert
There are three occasions in which an alert will appear on the page.
- The first being when a match is found, an alert is triggered and the user is informed that they have found a match.
- When a match has not been found, an alert is triggered and the user is informed that they have not found a match and to try again.
- When they have clicked the same card, an alert is triggered and the user is informed that they have clicked the same card twice.
#### Footer
The footer section includes relevant links to social media sites, this encourages the user to stay connected. Each link will open a new tab allowing for easy navigation and not having to lose anything that may of been saved on the game page.
#### Features Left to Implement
There are a few features that I would like to implement in the future, such as:
- Different games, I would like the site to have a variety of different memory games so that users have a choice in which game they wish to play. The games would also be group together based on what they test, for example, audio tests would all be in one catogory, images test and text test, etc.
- Different difficulty levels can also be added, so the images become more and more complex as you go along. 
### Structure
This site currently consists of one page, and is in the following order:
-Title
-Small text
-Button (with modal pop up)
-Score
-Game grid
-Footer
### Skeleton
Before creating the website I did have sketch the page wireframe so that I have a rough idea on how I want my site to lool.

<a href="assets/docs/wireframe/landingpage-wireframe.pdf" target="_blank" >  Landing Page</a>

### Surface
#### Colour Scheme
The main theme for the game was very old school, so a mismatch colour scheme was needed to match with the game cards.
#### Typography
The main body text was Raleway with sans-serif as a back up. For the main title, Cinzel was used, with serif as the backup font. Both font styles were obtained from Google fonts, the first font that I chose was the title font and from the few recommended body text suggested to me on the site I felt that Raleway look best.
#### Imagery
The main background image used was a simple board to again match the theme of it being very old school.
For the playing cards, I created the images myself on Paint 3D, having simple images was key.
## Technologies Used
### Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets/)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
### Frameworks, Libraries & Programs Used
- [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - For the styling and responsivness of the website Bootstrap was used.
- [Google Fonts:](https://fonts.google.com/)
    - Google fonts was used throught the document, Cinzel was used for the heading, the rest of the text used Raleway.
- [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used for the social media icons which is located in the footer.
- [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap for the modal.
- [Git](https://git-scm.com/)
    - Git was used for version control to commit and push to GitHub.
- [GitHub:](https://github.com/)
    - GitHub is used to store the projects code.
- [Mockflow:](https://mockflow.com/)
    - Mockflow was used to create the wireframes during the design process.
- [AmIResponsive:](http://ami.responsivedesign.is/#)
    - Used to check how the layout of the website looks across different devices.
- [W3Schools:](https://www.w3schools.com/)
    - Used as a resource for coding section, CSS styling tips and testing for html and css code.
- [Imgbb:](https://imgbb.com/)
    - This is the site I uploaded all my images to view for the README file.
- [Pixibay:]( https://pixabay.com/)
    - Used for the background image.
- [Paint 3D:]( https://www.microsoft.com/en-gb/p/paint-3d/9nblggh5fv99?activetab=pivot:overviewtab
    - Used for the card images I created.
- [JsHint:](https://jshint.com/)
    - Used for testing JavaScript code.
- [Esprima:](https://esprima.org/demo/validate.html)
    - Used for testing JavaScript code.
## Testing
Several different sites were utilized to validate and approve each page of the code to guarantee and ensure that there were no syntax errors, these sites included, W3C Markup Validator, W3C CSS Validator Services, Esprima and JsHint.

- W3C Markup Validator - Results
- W3C CSS Validator - Results
- Esprima Validator (JavaScript) - Results
- JsHint - Results

#### Know bugs and issues

- Screen size was the main know issue, on devices smaller than 300px or 320px, the site was no longer responsive and had an overspill which caused you to scroll to the right slightly to view the entire page. This can be seen below.

The first cause of the overspill was the grid for the game which contained all the cards that needed flippig. I had to set the styling to:
 display:contents;
 flex-wrap: wrap;

I also added a fixed height and width, later on the width had to be changed to 'auto' as it was causing an overspill.

![Overspill error](/assets/images/readmeimages/overspill.PNG?raw=true "Overspill error")

- The footer did cause several issues. The first being that the size of the icons were not adjusting properly to the different screen sizes. To fix this I put it in a container to single it out and add a more customised styling. The next issues was also the overspill. Once most of the site was conplete it was hard to figure out what was causing it so with the process of elimination, I cut each container out and checked how the page looked. Based off this, the container causing the issue was the footer container, but also, it was due to my grid having a width of 400px. I added a media query to the footer container with a max width of 240px, this was to make the icons smaller when the screen size reduced. 

![Footer size](/assets/images/readmeimages/footersize.PNG?raw=true "footer size")

### Testing User Stories from User Experience (UX) Section
#### First Time Visitor Goals
- As a first time user I need to understand the site/game purpose.
A modal with instructions on how to play the game was added. This was to ensure that if anyone has not played this game before, there is an option for them to find out how to play the game. The modal was very simple and a 'how to play' button was added.

![How to play button](/assets/images/readmeimages/howtoplaybutton.PNG?raw=true "How to play button")
![How to play modal](/assets/images/readmeimages/howtoplaymodal.PNG?raw=true "How to play modal")

- As a first time user I want to be able to enjoy playing the memory game.
 A simple page was created for this game mainly with the purpose of just this game. This allows the user to not be interrupted or distracted.
#### Returning Visitor Goals
- As a returning Visitor, I would like to still feel challenged when playing the memory game.
Rather than a small grid, I ensured that there were 12 cards you can flip. With the random card generator which was created using javascript the likelyhood of you having the same card matches in the same spot is very low. 
- As a returning Visitor I would like to improve my memory with the game.
The cards are matched randomly, this allows you to constantly have to find new pairs, figure out which one you've previously seen, and how you can match them. The score function also allows you to track how many you have got right, this can be compared to your previous games which allows you to see if there has been an improvement with your memory.

![Score](/assets/images/readmeimages/score.PNG?raw=true "Score")

### Deployment
The site is hosted using GitHub pages, deployed directly from the master branch.

#### The steps to creating a new repository is as follows:
1. Go to 'my repositories' on GitHub and selected 'New'. From here I added the repository name, kept it as 'Public' and selected 'Add a README file'.
2. Once the repository was created I opened it via the 'gitpod' button located.

All code for the course was written in GitPod.
Once there has been a new commit and push on GitPod, the GitHub site will automatically update.

#### Deployment steps is as follows:
To host my project under GitHub so others can view it and be provided with a shareable URL.
1. Log into Github
2. Locate your specific repository that you wish to deploy
3. Once on the page, select the 'settings' button, this can be found next to 'Insights' and right above 'add file'.
![Settings](/assets/images/readmeimages/settings.PNG?raw=true "Settings")
4. Once you've landed on the page, scroll all the way to the second last topic which is titled 'GitHub Page', here you have a link, which you would eed to select to access.
![Redirect](/assets/images/readmeimages/redirect.PNG?raw=true "Redirect")
5. When redirect you will now be on a page soley dedicated to 'GitHub Pages', here you would click on 'none' which is a button under the 'source' section. A small dropdown will appear. From here you will select the branch your reository is in, for mine it was 'master'.
![Source](/assets/images/readmeimages/source.PNG?raw=true "Source")
6. Then select 'Save'.
7. Your site is now published, a link is now available for you to access.
![Published](/assets/images/readmeimages/published.PNG?raw=true "Published")

To ensure correct deployment, the landing page must be named index.html.
#### Cloning:
The code can be run locally by either selecting "clone" which provides an URL one can use on their local machine.
![Clone](/assets/images/readmeimages/clone.PNG?raw=true "Clone")
### Credits
All text content was created by me. I did have a search around on Google and Youtube for inspiration.
#### Content
All images used was created by me on Paint 3D.
#### Media
#### Acknowledgements