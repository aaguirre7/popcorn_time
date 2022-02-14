# PORCORN TIME 🍿
 ## Memory Tiles
 
### Links :

 


### User Story:
As a movie fanatic I want to research movie titles and ratings before purchasing tickets to the theatre or purchasing it online.
I want to make sure that the movie I search for is going to be a fun and thrilling experience.
So that I do not waste time and money.

## Acceptance Criteria
Given that I am looking for a movie to watch, when I search for the movie title, then I receive information about the movie, cast, and ratings.



## Structure

The game buttons are displayed on a black background. Three options are presented to the user, "start", "tutorial" and "strictmode". 
The start game button triggers the game container to bounce down. Four black tiles appear, the game begins by firstly flipping one tile. Placed above the four tiles is an "exit" button which allows the user to return to the main menu. 
The tutorial button triggers a modal. The modal contains step by step insturctions. These include a desciption of how to play along with corresponding images. 
The strictmode option is a simple checkbox which the user can select if they wish to play the game in strictmode. 

![Capture](https://user-images.githubusercontent.com/93087137/153800677-a1912a7e-771b-41a9-a400-4dc9dfa7ed86.PNG)
![Capture](https://user-images.githubusercontent.com/93087137/153800836-9455122f-d909-4269-9adb-a2881b32a0f2.PNG)
![Capture](https://user-images.githubusercontent.com/93087137/153801475-abc9ab1c-350b-414f-aceb-95fba7c3d898.PNG)

![Capture](https://user-images.githubusercontent.com/93087137/153801305-2cf3b39e-ca34-4a90-9e3f-555023673752.PNG)



## Technologies

* HTML
* CSS
* javascript
* jQuery
## CSS Frameworks used
* Bulma  Link:https://bulma.io/expo/
  
* Foundation
  Link:https://get.foundation/index.html

## Features 


#### Top Ten Movies Currently:
Upon entry to the page, the game menu reveals itself with a bouncing down effect from the top of the screen. 
This effect is also applied to the game container itself, which is triggered when the user selects the "start Game " button. 
This was applied with the use of css. 

#### Modals :
Bootstrap modals were used for the tutorial Information,"Correct" and"incorrect" alerts .Within these modals are a "next stage", "preview again" or "restart game " button. The "preview again" button only appears within the modal if you havent selected the "strict Mode" checkbox, otherwise the user is asked to restart the game. 

#### Favorites List:
Audio is triggered by the users onclick, depending on whether or not they have selected the correct pattern previously displayed to them. 




## Features Left to Implement

Search Movies by genre (Comedy, Action, Thriller, etc.)
Recommend Movie Titles by the user mood
Adding location based services to see if a movie is available in a theater near you.
. 


## Challenges
Challenges we faced include, merging each other branches, styling of the content containers, and making the site mobile responsive.

## Successes
Successes include styling of the header and footer of the page and receiving and deploying the API data to the actual website.




## Credits 
The Project was coded on Visual Studio Code. 

API's used in this project:
* IMBD FOR THE SEARCH AND FOR THE DISPLAYING OF MOVIES,CAST ETC...
:https://imdb-api.com/
* WATCH MODE WAS USED FOR DISPLAYING THE FOLLOWING PROVIDERS FOR THE MOVIES 
  :https://www.watchmode.com

Made by the wonderful Team 2


