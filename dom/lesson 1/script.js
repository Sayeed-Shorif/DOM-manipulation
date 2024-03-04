document.getElementById('container').addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG' || 'A') {
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
})
// document.getElementById('gojo').addEventListener('click', (e) => {
//     console.log('the gojo got clicked');
//     e.stopPropagation();
// })

document.getElementById('google').addEventListener('click', (e) => {
    
    e.preventDefault();
})

