const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('imagePreview');

imageInput.addEventListener('change', () => {
  Array.from(imageInput.files).forEach(file => {
    if (!file.type.startsWith('image/')){ return; }

    const reader = new FileReader();

    reader.onload = e => {
      const wrapper = document.createElement('div');
      wrapper.className = 'image-item';

      const img = document.createElement('img');
      img.src = e.target.result;

      const btn = document.createElement('button');
      btn.className = 'remove-btn';
      btn.innerHTML = '&times;';
      btn.type = "button"; 

      btn.onclick = () => {
        wrapper.remove();
      };

      wrapper.appendChild(img);
      wrapper.appendChild(btn);
      preview.appendChild(wrapper);
    };

    reader.readAsDataURL(file);
  });
  
  imageInput.value = ''; 
});

