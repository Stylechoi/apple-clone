// main.js

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

// ✅ 2. M4 이미지 확대: IntersectionObserver 버전
window.addEventListener("DOMContentLoaded", () => {
  const m4Img = document.getElementById("m4Image");
  if (!m4Img) {
    console.warn("❌ m4Image 없음");
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("grow");
        console.log("✅ M4 확대 애니메이션 적용됨");
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

if (designImage) {
  designImage.addEventListener("click", () => {
    currentImg = (currentImg + 1) % designImgs.length;
    designImage.style.opacity = 0;
    setTimeout(() => {
      designImage.src = designImgs[currentImg];
      designImage.style.opacity = 1;
    }, 300);
  });
}

// ✅ 4. 페이드 인
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

// ✅ 5. "무료로 받기" 트롤박스
const ctaBtn = document.querySelector('.cta-btn');
const trollBox = document.getElementById('trollBox');

if (ctaBtn && trollBox) {
  ctaBtn.addEventListener('click', e => {
    e.preventDefault();
    trollBox.classList.add('show');
    setTimeout(() => trollBox.classList.remove('show'), 3000);
  });
}

// ✅ 6. FREE 글자 등장 & 인터랙티브
window.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".free-letter");
  letters.forEach((el, idx) => {
    setTimeout(() => el.classList.add("show"), idx * 200);
  });
  letters.forEach(letter => {
    letter.addEventListener("mouseenter", () => {
      const anims = ["fall", "rise", "shake"];
      const name = anims[Math.floor(Math.random() * anims.length)];
      letter.style.animation = "none";
      void letter.offsetWidth;
      letter.style.animation = `${name} 0.8s ease forwards`;
    });
  });
});

// ✅ 7. Hero 버튼 클릭
const heroBtn = document.querySelector('.hero-btn');
if (heroBtn) {
  heroBtn.addEventListener('click', e => {
    e.preventDefault();
    alert('품절입니다 🤪');
  });
}
