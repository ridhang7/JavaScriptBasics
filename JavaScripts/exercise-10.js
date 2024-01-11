

const btnClass = document.querySelector('.js-test'); 
console.log(btnClass.classList.contains('js-test'));

function toggle(className){
    const btnToggle = document.querySelector(className);
    if(btnToggle.classList.contains('toggle')){
        btnToggle.classList.remove('toggle');
    }
    else{
        btnToggle.classList.add('toggle');
    }
    
}

function multiToggle(className){
    const btnToggle = document.querySelector(className);
    if(btnToggle.classList.contains('toggle')){
        btnToggle.classList.remove('toggle');
    }
    else{
        turnOffToggle();
        btnToggle.classList.add('toggle');
    }
    
}

function turnOffToggle(){
    const prevBtnToggle = document.querySelector('.toggle');
    if (prevBtnToggle) {
        prevBtnToggle.classList.remove('toggle');
      }
}
