//incremente la quantité au click du plus
document
.querySelectorAll('.fa-plus-circle') //selectionne tous les elements de class fa-plus-circle
.forEach(button => {
   button //j'attache un evenement click
   .addEventListener('click', function() {
       let qElement = this.nextElementSibling;
       let VAL = parseInt(qElement.textContent);
       qElement.textContent = VAL + 1;
       TotalPrix();
   });
});

//decremente la quantité au click du moins
document
.querySelectorAll('.fa-minus-circle')
.forEach(button =>{
   button
   .addEventListener('click', function() {
       let qElement = this.previousElementSibling;
       let VAL = parseInt(qElement.textContent);
       if (VAL > 0) {
           qElement.textContent = VAL - 1;
       }
       TotalPrix();
   });
});
function TotalPrix() {
   let total = 0;
   document
   .querySelectorAll('.card')
   .forEach(card =>{
       let prix = parseInt(card.querySelector('.unit-price').textContent.replace('$', ''));
       let quantity = parseInt(card.querySelector('.quantity').textContent);
       total += prix * quantity;
   });
   document.querySelector('.total').textContent = total + ' $';
}

//supression d'un article
document
.querySelectorAll('.fa-trash-alt')
.forEach(button =>{
   button
   .addEventListener('click', function() {
    let card = this.closest('.card');
    let imageElement = card.querySelector('.card-img-top');
    let newImage = 'image/delete.png';
    imageElement.src = newImage;
   });
});
//like or no like

document.querySelectorAll('.fa-heart').forEach(button => {
   button.addEventListener('click', function() {
       
       if (this.style.color === 'red') {
           this.style.color = ''; 
       } else {
           this.style.color = 'red'; 
       }
   });
});

