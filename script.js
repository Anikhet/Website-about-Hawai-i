let text = document.getElementById('text');
let bg1 = document.getElementById('left');

let bg2 = document.getElementById('right');
let tree1 = document.getElementById('left-tree');
let tree2 = document.getElementById('right-tree');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 6.5 + 'px';
    bg1.style.left = -value * 3.5 + 'px'; // Moves bg1 to the left
    bg2.style.right = -value * 2.5 + 'px';
    tree1.style.top = 35 + value * 0.7 + 'vh';
    tree2.style.top = 35 + value * 0.7 + 'vh';
    console.log('bg2 right:', bg2.style.right);
});
