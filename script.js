const Slider = {
    init: function(elem) {
      this.elem = elem;
      this.blocks = this.elem.querySelectorAll('.block__item');
      this.elem.addEventListener('mousedown', this.onEnterAction.bind(this));
      this.elem.addEventListener('mouseup', this.onLeaveAction.bind(this));
    },
  
    onEnterAction: function() {
      if (this.interval) clearInterval(this.interval);
      this.interval = setInterval(() => {
        const computedStyle = getComputedStyle(this.blocks[0]);
  
        this.blocks.forEach(block => {
          block.style.left = (parseInt(block.style.left || '-30px') - 15) + 'px';
        });
  
        if (Math.abs(parseInt(this.blocks[0].style.left)) >= this.blocks[0].offsetWidth + parseInt(computedStyle.marginRight)) {
          this.blocks[0].parentNode.appendChild(this.blocks[0]);
          this.blocks = this.elem.querySelectorAll('.block__item');
          this.blocks.forEach(block => block.style.left = '0px');
        }
      }, 30);
    },
  
    onLeaveAction: function() {
      clearInterval(this.interval);
    }
  };
  
Slider.init(document.querySelector('.block'));

document.addEventListener('DOMContentLoaded', () => {
  const block = document.querySelector('.ph-1'); 
  const originalImageUrl = 'photo/second/3.jpg'; 
  const newImageUrl = 'photo/second/2.jpg'; 


  block.style.backgroundImage = `url('${originalImageUrl}')`;

  block.addEventListener('click', (event) => {

    if (event.ctrlKey && event.altKey) {
      block.style.backgroundImage = `url('${newImageUrl}')`;
    }
  });

  document.addEventListener('keyup', (event) => {

    if (!event.ctrlKey && !event.altKey) {
      block.style.backgroundImage = `url('${originalImageUrl}')`;
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const block = document.querySelector('.ph-4'); 
  const originalImageUrl = 'photo/second/13.jpg' ; 
  const newImageUrl = 'photo/second/6.jpg'; 


  block.style.backgroundImage = `url('${originalImageUrl}')`;

  block.addEventListener('click', (event) => {

    if (event.altKey) {
      block.style.backgroundImage = `url('${newImageUrl}')`;
    }
  });

  document.addEventListener('keyup', (event) => {

    if (!event.altKey) {
      block.style.backgroundImage = `url('${originalImageUrl}')`;
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const block = document.querySelector('.ph-5'); 
  const originalImageUrl = 'photo/second/11.jpg' ; 
  const newImageUrl = 'photo/second/14.jpg'; 

  block.style.backgroundImage = `url('${originalImageUrl}')`;

  block.addEventListener('click', (event) => {

    if (event.ctrlKey) {
      block.style.backgroundImage = `url('${newImageUrl}')`;
    }
  });

  document.addEventListener('keyup', (event) => {

    if (!event.ctrlKey) {
      block.style.backgroundImage = `url('${originalImageUrl}')`;
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const cli = document.querySelector('.click'); 
  const cam = document.querySelector('.camera');
  const b_5 = document.querySelector('.b-5');
  const b_6 = document.querySelector('.b-6');

  cam.addEventListener('click', (event) => {

    if (event.ctrlKey) {
      cli.style.display = 'block';
      b_5.style.display = 'block';
      b_6.style.display = 'block';
    }
  });

  // document.addEventListener('keyup', (event) => {

  //   if (!event.ctrlKey) {
  //     cli.style.display = 'none'
  //   }
  // });
});
