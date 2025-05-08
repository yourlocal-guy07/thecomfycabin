const button = document.querySelector('#Menu button');

    const backgroundImages = [
      'backgroundwebsite.png',
      'backgroundwebsite2.png',
      'backgroundwebsite3.png',
      'backgroundwebsite4.png',
      'backgroundwebsite5.png'
    ];

    let currentImageIndex = 0;

    button.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
      document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
    });