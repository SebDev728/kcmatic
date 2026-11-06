 // MOBILE MENU
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // TAB FILTERING LOGIC
    function switchTab(type) {
      const cards = document.querySelectorAll('.cat-card');
      const btns = document.querySelectorAll('.tab-btn');

      btns.forEach(b => b.classList.remove('tab-active'));
      document.getElementById(`btn-${type}`).classList.add('tab-active');

      cards.forEach(c => {
        if (type === 'all') {
          c.style.display = 'flex';
        } else if (c.classList.contains(`cat-${type}`)) {
          c.style.display = 'flex';
        } else {
          c.style.display = 'none';
        }
      });
    }
