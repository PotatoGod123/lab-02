# lab-02  

Gallery of horns

## Contributors: Cristain Robles, Ryan Tipper, Tek Jones  

## About

Cool images gallery of animals with horns!!! With sorting features!!  

# Time Estimate  

Number and name of feature: Display Images
Estimate of time needed to complete: 1 Hour

Start time: 830PM

Finish time: 930PM

Actual time needed to complete: 1 hour

How To Implement Feature: Using .ajax, we will read data from json file. So each object from the data will be ran through a contrucstor function, which has key of image_url,title,description,keyword,horns push it into an empty array holding all the animals information. With that array with will use the data to append it to the dom, by using jQuery to clone the template element and remove the class from the cloned element add the content from the animal information into it and then append it to the target element.  


Number and name of feature: Filter Images

Estimate of time needed to complete: 40 Minutes

Start time: 845PM

Finish time: 1030PM

Actual time needed to complete: 2hrs (plus finishing feature 4 at the same time)

How To Implement Feature:  So after images are done being added to the DOM, with the new array we will get the keywords for each object. jQuery will select all images that don't have the selected keyword on the drop down list and give use the .hide() method on them or toggle() with an event handler that will look for the selected option by user.  

Number and name of feature: Style the application

Estimate of time needed to complete: 30 Minutes

Start time: 845PM

Finish time: 1030PM

Actual time needed to complete: 2hrs (plus finishing feature 3 at the same time)

How To Implement Feature: Add custom google font, have all images float left and have a set size for all the images. Background color with alternating border colors between the images.

# LAB-03

# Time Estiamtes 

Number and name of feature: Feature 1 Pagination

Estimate of time needed to complete: 1-1.5 hrs

Start time: 145PM

Finish time: _____

Actual time needed to complete: _____

How to Implement Feature: Create event listners based on the button being clicked, populating between the two pages and their appropriate AJAX files. Create two button that allows us to transfer between the two pages when clicked.


Number and name of feature: Feature 2 Templating

Estimate of time needed to complete: 1 hour

Start time: _____

Finish time: _____

Actual time needed to complete: _____

How to Implement Feature: Incorporate the mustache template within the original HTML file including the already created elements used in our jQuery templates. As mentioned in the instructions, refactor the method that renders our images to use the created Mustache template, rather than using .copy with jQuery.


Number and name of feature: Feature 3 Styling & Flexbox

Estimate of time needed to complete: 1 hour

Start time: _____

Finish time: _____

Actual time needed to complete: _____

How to Implement Feature: Refractor our previously created floats to use Flexbox to style our images and the layout of our two pages. Possibly incorporate a mix of flexbox and floats, if needed.


Number and name of feature: Feature 4 Sort the Images

Estimate of time needed to complete: 1 hour

Start time: _____

Finish time: _____

Actual time needed to complete: _____

How to Implement Feature: 

