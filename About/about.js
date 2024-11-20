// script.js
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.experience-card');
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
        if (card.classList.contains('expanded')) {
            card.style.maxHeight = 'none';
        } else {
            card.style.maxHeight = '600px';
        }
    });
});


function toggleDescription() {
    const shortDesc = document.getElementById('short-description');
    const fullDesc = document.getElementById('full-description');
    const btn = document.querySelector('.expand-btn');
    
    if (fullDesc.classList.contains('hidden')) {
      shortDesc.style.display = 'none';
      fullDesc.classList.remove('hidden');
      btn.textContent = 'Show less';
    } else {
      shortDesc.style.display = 'block';
      fullDesc.classList.add('hidden');
      btn.textContent = 'Read more';
    }
  }






  document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const certCards = document.querySelectorAll('.certification-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        certCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(1.25rem)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  });