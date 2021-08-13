# SnowBrawl!!

## 1. Background & Overview

SnowBrawl will be a game that gets more intense the longer you can stay alive. Players will be dodging snowballs coming from either side of the screen. The two ways to dodge the snowballs are either ducking under them or jumping over them. This'll be handled using collision detection.

After every successfully dodged snowball, the difficulty will be increased slightly. This means that every subsequent snowball that is created and rendered will be traveling incrementally faster. They will also increase in size, but the size will cap after a certain point.

You'll start in the middle of a platform that is rendered in front of snowy mountains, and will have the ability to traverse the platform until it's end on either side.

## 2. Functionality

In SnowBrawl, players will be able to:
* Initiate a new game by pressing start.
* Toggle sounds/music.
* Move around and dodge incoming snowballs.
* Keep track of their 'lives' displayed using hearts.
* Lose hearts on hit. The game will end when you take a hit and have no remaining hearts.

The following will also be available:
* An instructional guide describing the mechanics and how to play.
* An up-to-date READme

## 3. Wireframes

The game will consist of a canvas on a single screen where the player will start. (Ideally, I'll there will be some nice moving snow particles as well.) There'll also be a counter for how many snowballs have been dodged.

I'll implement a clickable 'How to Play', a mute/unmute music and sound button, links to my GitHub and LinkedIn (potentially more later), as well as a restart button.

![Screenshot 2021-08-12 231941](https://user-images.githubusercontent.com/85643458/129403530-9bf894fa-a810-4d98-882c-a9c27e419310.png)

## 4. Architecture and Technology

Everything will be implemented with canvas, using assets I've either found online or created myself.
Javascript will be used for all the game logic, keeping everything modular - there will be game.js, environment.js, player.js, and gameview.js files.
CSS will be utilized for styling and layout of the page.

## 5. Implementation Timeline

Friday through the weekend 8-13 -- 8-15: Figuring out the modular layout, working on environment and background, and first stage player and snowball projectiles.

Monday 8-16: Making sure that all the game logic works as it should - player is able to move within bounds of the map, jump and duck are functional, and snowballs appear.

Tuesday 8-17: Game difficulty increase per projectile dodge implemented, projectiles work as expected, collision implementation skeleton defined.

Wednesday 8-18: Styling and layout polishing, making sure that everything works.

Thursday 8-19: Final touches and online launch!!


## 6. Bonus Features

Upon completion of V1.0 of SnowBrawl, the following will be added if time allows:

* Power-ups such as double jump, extra life, time slow.
* A separate snow lodge where your character can just relax and have a cup of tea!
