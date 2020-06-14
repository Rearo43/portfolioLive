'use strict';

let companyName = [];

$(document).ready(function(){
  $.ajax('myJson/companies.json').then(data => {
    data.forEach(things =>{
      render(things);

    },);
    
})

},);


function render(info){
    $('#company').append(`<option class="${info.name}">${info.name}</option>`);
    companyName.push(info.name);
    
}

window.onload = function() {
    $('.yours').change(function(e){
        e.preventDefault();
        
        $('select option:selected').each(function(){
            let $companyChoice = $('select option:selected').val();
            console.log('done');
            
            $('.yours').text($companyChoice);
        });
    

  })
    .trigger('change');

};
