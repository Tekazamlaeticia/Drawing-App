const increseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const canvas = document.getElementById('canvas');
const ctx = document.getElementById('2d');
 let size =10;

function drawCircle(x, y){
    ctx.beginpath();
    ctx.arc(x,y, size, 0, math.PI) 
}


