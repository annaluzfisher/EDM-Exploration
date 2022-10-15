#Overview

This project was born from a desire to create something I have been tirelessly looking for - a good explanation of EDM and it's subgenres WITH an auditory component. It is a space to cick deeper and deeper into sub-genres that also provides an audio sample of each subgenre. The code is clean and allows for automatic adjustments should the json file with the data expand or shrink. If someone makes a datafile for Country or Hip hop- the website would adjust automatically and create necessary visuals. 

This project was made with vanilla javascript, native HTML audio, css, and lots and lots of love. 

# Features
The page is expected to allow the user to :
-- navigate through the edm sub-genres tree via bubbles on the page
-- see the path taken to the subgenre on the right of the page
-- play music of each sub-genre
-- mute music if need be
-- play with the visual BPM tool

additional features to be added include:
-- a search bar for key words in descriptions
-- a constant tree representation of the data below the main visualizer
-- styles of edm/fashion slideshow 

# Challenges / Story Time

The hardest part of the project for me was designing the code. I wanted it to be malleable. If a new sub-genre is added, I wanted to dom elements to automatically reflect that. Using OOP to create a class that both keeps track of the js object and the respective dom element was fun! Once the core structure of my 'node' class was created the implementation followed easily. 
The functions below are in charge of creating all the nodes stored in a 'bubbles'. Each 'bubble' in the array represents an instance of the node class, which in turn has a this.bubble that refers to it's DOM elemnt counterpart. The dom element is created with event listeners included. 
 

![](data/snippets/Screen%20Shot%202022-10-15%20at%2012.06.30%20PM.png)


![](data/snippets/Screen%20Shot%202022-10-15%20at%2012.06.43%20PM.png)


![](data/snippets/Screen%20Shot%202022-10-15%20at%2012.06.56%20PM.png)