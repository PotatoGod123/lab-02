# lab-02  

Gallery of horns

## Contributors: Cristain Robles, Ryan Tipper, Tek Jones  

## About

Cool images gallery of animals with horns!!! With sorting features!!  

# Time Estimate  

Number and name of feature: Display Images
Estimate of time needed to complete: 1 Hour

Start time: _____

Finish time: _____

Actual time needed to complete: _____

How To Implement Feature: Using .ajax, we will read data from json file. So each object from the data will be ran through a contrucstor function, which has key of image_url,title,description,keyword,horns push it into an empty array holding all the animals information. With that array with will use the data to append it to the dom, by using jQuery to clone the template element and remove the class from the cloned element add the content from the animal information into it and then append it to the target element.  


Number and name of feature: Filter Images

Estimate of time needed to complete: 40 Minutes

Start time: _____

Finish time: _____

Actual time needed to complete: _____

How To Implement Feature:  So after images are done being added to the DOM, with the new array we will get the keywords for each object. jQuery will select all images that don't have the selected keyword on the drop down list and give use the .hide() method on them or toggle() with an event handler that will look for the selected option by user.  

Number and name of feature: Style the application

Estimate of time needed to complete: 30 Minutes

Start time: _____

Finish time: _____

Actual time needed to complete: _____

How To Implement Feature: Add custom google font, have all images float left and have a set size for all the images. Background color with alternating border colors between the images.  
