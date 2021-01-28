

multiplyBtn = document.querySelector('#button_multiply');

multiplyBtn.addEventListener('click',function(e){
    
    txtBase = document.querySelector('#value_base');
    txtHeight = document.querySelector('#value_height');
    txtArea = document.querySelector('#value_area');

    let d;
    
    d= (txtBase.value * txtHeight.value)/2;

    txtArea.value = d;
});