'use strict'
//global variables
let allAnimalsinfo = [];
let $selectMenu = $('select');


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
      // 
      // $selectMenu.text('test');
      dropDownList(value);
    });

  });




function dropDownList(value){
  let $cloneOption = $("option[value|='default']").clone();
  $($cloneOption).attr('value',value.keyword);
  $($cloneOption).text(value.keyword);
  if($($cloneOption).text() !== $(`option[value|=${value.keyword}]`).text()){
    
    $($selectMenu).append($cloneOption);

  }
  

}



$selectMenu.on('change',function(){
  let targetValue = this.value;
  
  $('div').each(function(){
    $(this).addClass('hide');
  });
  $(`.${targetValue}`).each(function(){
    $(this).attr('class',targetValue);
  });
  if(targetValue==='default'){
    $('div').removeClass('hide');
  }
})



