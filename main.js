window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    const offsetTop = hero.offsetTop + hero.offsetHeight / 2 - window.innerHeight / 2;
  
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  
    // 스크롤 인터랙션도 같이
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.3 });
  
    const targets = document.querySelectorAll('.fade-target');
    targets.forEach(el => observer.observe(el));
  });
  
  const trollBtn = document.getElementById('troll-button');
  const msg = document.getElementById('troll-message');
  
  trollBtn.addEventListener('click', () => {
    msg.classList.add('show');
    setTimeout(() => {
      msg.classList.remove('show');
    }, 3000);
  });
  
  