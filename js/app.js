'use strict'
//global variables
let allAnimalsinfo = [];

//the main constructor, meant to take an array of objects and put it inside
// the variable above, specifically for the .json data
function AnimalMaster(data){
  this.pathUrl = data.image_url;
  this.title = data.title;
  this.description = data.description;
  this.keyword = data.keyword;
  this.horns = data.horns;

  allAnimalsinfo.push(this);

} 

//this will get ajax data after page loads
$.ajax('../data/page-1.json')
  .then(data => {
    //here we use the data and shove it into the object constructor
    data.forEach(value => {
      let animal = new AnimalMaster(value);

    });
    //this will take our newly formed object and render the stuff onto the page
    //DOM manipulation
    allAnimalsinfo.forEach(value => {
      let $clonePhotoTemp = $('#photo-template').clone();
      $clonePhotoTemp.removeAttr('id');
      $clonePhotoTemp.attr('class', value.keyword);
      $clonePhotoTemp.find('h2').text(value.title);
      $clonePhotoTemp.find('img').attr({'src': value.pathUrl, 'alt' : value.title });
      $clonePhotoTemp.find('p').text(value.description);
      $('main').append($clonePhotoTemp);
      // let $selectMenu = $('select').find('option').clone();
      // $selectMenu.text('test');

    });


  });




