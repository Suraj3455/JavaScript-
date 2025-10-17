//write code in strict mode
'use strict';
// Modal Window

// Selecting elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);
// console.log(overlay);
// console.log(modal);

//to open modal
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//to close modal
const closeModal = function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };
//to open multiple buttons 
for (let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal);
}
    // const closeModal = function(){
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');
    // };
//to close modal


    btnCloseModal.addEventListener('click', closeModal);
    //to close modal when clicking outside the modal
    overlay.addEventListener('click', closeModal);
    //to close modal when pressing the escape key
    // Using the keydown event to close modal

    document.addEventListener('keydown', function(e){
        // console.log(e.key);
        if (e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal();
        }
    });

