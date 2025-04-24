// ✅ 1. 타이핑 효과
const typingText = "지금, 새로운 M4칩을 경험하세요.";
const typingElement = document.getElementById("typing");
let typingIndex = 0;

function type() {
  if (typingIndex < typingText.length) {
    typingElement.textContent += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(type, 100);
  }
}

window.addEventListener("DOMContentLoaded", type);

// ✅ 2. M4 이미지 확대 (IntersectionObserver)
window.addEventListener("DOMContentLoaded", () => {
  const m4Img = document.getElementById("m4Image");
  if (!m4Img) return;

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("grow");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  io.observe(m4Img);
});

// ✅ 3. 감성 이미지 클릭 전환
const designImage = document.getElementById("designImage");
const designImgs = [
  "assets/mac1.jpg",
  "assets/mac4.jpg",
  "assets/mac2.jpg",
  "assets/mac3.jpg"
];
let currentImg = 0;

designImage?.addEventListener("click", () => {
  currentImg = (currentImg + 1) % designImgs.length;
  designImage.style.opacity = 0;
  setTimeout(() => {
    designImage.src = designImgs[currentImg];
    designImage.style.opacity = 1;
  }, 300);
});

// ✅ 4. 페이드 인 효과
window.addEventListener("load", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".fade-target").forEach(el => observer.observe(el));
});

// ✅ 5. 트롤박스 (무료로 받기 버튼)
const ctaBtn = document.querySelector('.cta-btn');
const trollBox = document.getElementById('trollBox');

ctaBtn?.addEventListener('click', e => {
  e.preventDefault();
  trollBox?.classList.add('show');
  setTimeout(() => trollBox?.classList.remove('show'), 3000);
});

// ✅ 6. FREE 텍스트 애니메이션
window.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".free-letter");

  // 순차 등장
  letters.forEach((el, idx) => {
    setTimeout(() => el.classList.add("show"), idx * 200);
  });

  // 마우스 올리면 랜덤 애니메이션
  letters.forEach(letter => {
    letter.addEventListener("mouseenter", () => {
      const anims = ["fall", "rise", "shake"];
      const name = anims[Math.floor(Math.random() * anims.length)];

      letter.style.animation = "none";
      void letter.offsetWidth;
      letter.style.animation = `${name} 0.8s ease forwards`;

      setTimeout(() => {
        letter.style.animation = "freeShake 1.5s ease-in-out infinite";
      }, 800);
    });
  });

  // 기본 흔들림 적용
  letters.forEach(letter => {
    letter.style.animation = "freeShake 1.5s ease-in-out infinite";
  });
});

// ✅ 7. Hero 버튼 클릭 반응
const heroBtn = document.querySelector('.hero-btn');
heroBtn?.addEventListener('click', e => {
  e.preventDefault();
  alert('품절입니다 🤪');
});