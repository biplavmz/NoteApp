 let element = document.getElementById('heading');
// element.style.color = 'red';
element.innerText = 'biplav is a good boy';
element.innerHTML = '<b>ok google</b>';
// element = element.className;
element = element.parentNode;
element = element.childNodes;
element.innerText = 'biplav is a good boy'; 
console.log(element);
// console.log('kkk');

console.log('single element selector');
   
let sel = document.querySelector('div');
sel.style.color = 'green'; 
sel = document.querySelector('head');
console.log(sel);

console.log('multiple element selector');
       
//let r = document.getElementsByClassName('container');
r= document.getElementsByTagName('div');
console.log(r);

Array.from(r).forEach(Element =>{
    console.log(Element);
    Element.style.color = 'blue';
});

// console.log(r[0].getElementsByClassName('class'));