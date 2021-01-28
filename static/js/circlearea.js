

areaBtn = document.querySelector('#button_area');

areaBtn.addEventListener('click',function(e){
    
    txtRadius = document.querySelector('#value_radius');
    txtArea = document.querySelector('#value_area');

    let area;
    
    area= 3.14159 * ((txtRadius.value)**2) ;

    txtArea.value = area;
});