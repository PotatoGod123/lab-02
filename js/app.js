'use strict'
let allAnimalsinfo = [];


function AnimalMaster(data){
  this.pathUrl = data.image_url;
  this.title = data.title;
  this.description = data.description;
  this.keyword = data.keyword;
  this.horns = data.horns;

  allAnimalsinfo.push(this);

} 


$.ajax('../data/page-1.json')
  .then(data => {
    data.forEach(value => {
      let animal = new AnimalMaster(value);

    });

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


