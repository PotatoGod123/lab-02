'use strict'
//global variables
let allAnimalsinfo = [];
let allAnimalsInfoSetTwo=[];
let $selectMenu = $('select');
let $buttonSelect=$('#buttons').children();
let $radioSelector=$('#radioSelection input');


//the main constructor, meant to take an array of objects and put it inside
// the variable above, specifically for the .json data
function AnimalMaster(data,set=1){
  this.pathUrl = data.image_url;
  this.title = data.title;
  this.description = data.description;
  this.keyword = data.keyword;
  this.horns = data.horns;

  if(set===1) {
    allAnimalsinfo.push(this);
  }else if(set ===2){
    allAnimalsInfoSetTwo.push(this);
  }

} 

//this will get ajax data after page loads, first page
$.ajax('./data/page-1.json')
  .then(data => {
    //here we use the data and shove it into the object constructor
    data.forEach(value => {
      new AnimalMaster(value);

    });
    //this will take our newly formed object and render the stuff onto the page
    //DOM manipulation
    allAnimalsinfo.forEach(value => {
      // let $clonePhotoTemp = $('#photo-template').clone();
      // $clonePhotoTemp.removeAttr('id');
      // $clonePhotoTemp.attr('class', value.keyword);
      // $clonePhotoTemp.find('h2').text(value.title);
      // $clonePhotoTemp.find('img').attr({'src': value.pathUrl, 'alt' : value.title });
      // $clonePhotoTemp.find('p').text(value.description);
      // $('main').append($clonePhotoTemp);
      // 
      // $selectMenu.text('test');
      renderDivWithInfo(value);
      dropDownList(value);
    });

  });

//second page data
$.ajax('./data/page-2.json')
  .then(data =>{
    //running data through contrustorer with a set number
    data.forEach(value =>{
      new AnimalMaster(value,2);
      
    });

  });




function dropDownList(value){
  // let $cloneOption = $("option[value|='default']").clone();
  // $($cloneOption).attr('value',value.keyword);
  // $($cloneOption).text(value.keyword);
  let templateOption= $("#option-template").html();
  let htmlOption = Mustache.render(templateOption,{
    keyword: value.keyword,
  })
  
  
  if($(htmlOption).text() !== $(`option[value|=${value.keyword}]`).text()){
    
    $('select').append(htmlOption);

  }
  

}

function renderDivWithInfo(value){
  let template = $('#photo-template').html();
  let html = Mustache.render(template,{
    keyword: value.keyword,
    filter:`horn${value.horns}`,
    title: value.title,
    urlLink: value.pathUrl,
    description: value.description
    
  });
  $('main').append(html);
}

$selectMenu.on('change',function(){
  let targetValue = this.value;
  
  $('main div').each(function(){
    $(this).addClass('hide');
  });
  $(`.${targetValue}`).each(function(){
    $(this).addClass(targetValue);
    $(this).removeClass('hide');
  });
  if(targetValue==='default'){
    $('main div').removeClass('hide');
  }
})




$buttonSelect.on('click',function(){
  let targetValue = this.value;
  $('main').empty();
  $('option[value|=default]').nextAll().remove();
  console.log(this);
  if(targetValue==="pageone"){
    allAnimalsinfo.forEach(val =>{
      renderDivWithInfo(val);
      dropDownList(val);
      
    })
  }else if(targetValue==="pagetwo"){
    allAnimalsInfoSetTwo.forEach(val =>{
      renderDivWithInfo(val);
      dropDownList(val);
    })
  }
});

$radioSelector.on('change', function(){
  let targetValue = this.value;
  if(targetValue==='deafult'){
    $('main div').removeClass('sort');
    sortObjects();
    
    if($('#UniWhal h2').text()==='UniWhal'){
      $('main').empty();
      allAnimalsinfo.forEach(val =>{
        renderDivWithInfo(val);
        
      })
    }else if($('#TriceraTaco h2').text()==='TriceraTaco'){
      $('main').empty();
      allAnimalsInfoSetTwo.forEach(val =>{
        
        renderDivWithInfo(val);
      });

    }
  }else if(targetValue==='horns'){
    $('main div').addClass('sort');
  }


})
function sortObjects(){
  allAnimalsinfo.sort(function(a, b) {
    var nameA = a.title.toUpperCase(); // ignore upper and lowercase
    var nameB = b.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  allAnimalsInfoSetTwo.sort(function(a, b) {
    var nameA = a.title.toUpperCase(); // ignore upper and lowercase
    var nameB = b.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}