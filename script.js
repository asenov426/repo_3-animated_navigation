const nav = document.getElementById('nav');
const btn = document.getElementById('btn');
const icon1 = document.getElementById('reorder-three-outline');
const icon2 = document.getElementById('close-outline');
 
btn.addEventListener('click', () => {
    icon1.classList.toggle('hide');     
    icon2.classList.toggle('hide');
    nav.classList.toggle('hide');  
});
