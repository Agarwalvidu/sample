let preveiwContainer = document.querySelector('.events-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.events-container .event').forEach(event =>{
  event.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = event.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});