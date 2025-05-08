let idleTimer;
    const idleTimeLimit = 5000; // 5 seconds
    const idleOverlay = document.getElementById('idleOverlay');
    const idleGif = document.getElementById('idleGif');

    const gifUrls = [
      'idlegif.gif',
      'idlegif2.gif'
    ];

    function resetIdleTimer() {
      clearTimeout(idleTimer);
      idleOverlay.style.display = 'none'; // Hide modal on activity
      idleTimer = setTimeout(showRandomGif, idleTimeLimit);
    }

    function showRandomGif() {
      const randomIndex = Math.floor(Math.random() * gifUrls.length);
      idleGif.src = gifUrls[randomIndex];
      idleOverlay.style.display = 'flex'; // Show modal
    }

    ['mousemove', 'keydown', 'scroll', 'click', 'touchstart'].forEach(evt =>
      document.addEventListener(evt, resetIdleTimer, false)
    );

    resetIdleTimer();