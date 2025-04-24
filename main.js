// main.js

// ✅ 1. 타이핑 효과 (그대로 둬도 됨)
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


// ===== M4 이미지 확대 애니메이션 개선 =====

// ===== M4 이미지 확대: IntersectionObserver 버전 =====
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
  }, {
    threshold: 0.3  // 30% 보이면 트리거
  });
  io.observe(m4Img);
});

// ✅ 감성 이미지 클릭 시 전환 (기존 코드)
const designImage = document.getElementById("designImage");
const designImgs = ["mac1.jpg", "mac4.jpg", "mac2.jpg", "mac3.jpg"];
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


// ✅ 페이드 인 (기존 코드)
window.addEventListener("load", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll(".fade-target").forEach(el => observer.observe(el));
});

// “무료로 받기” 트롤박스
const ctaBtn = document.querySelector('.cta-btn');
const trollBox = document.getElementById('trollBox');

if (ctaBtn && trollBox) {
  ctaBtn.addEventListener('click', e => {
    e.preventDefault();
    trollBox.classList.add('show');
    // 3초 후 사라지게
    setTimeout(() => trollBox.classList.remove('show'), 3000);
  });
}

/* ── FREE 글자 등장 & 인터랙티브 효과 ── */
window.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".free-letter");
  
  // 1) 페이지 로드 시 차례대로 ‘show’ 클래스로 등장
  letters.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add("show");
    }, idx * 200); // 0.2초씩 딜레이
  });

  // 2) 마우스 올리면 중구난방 애니메이션
  letters.forEach(letter => {
    letter.addEventListener("mouseenter", () => {
      const anims = ["fall", "rise", "shake"];
      const name  = anims[Math.floor(Math.random() * anims.length)];
      letter.style.animation = "none";      // 리셋
      void letter.offsetWidth;              // 리플로우 트리거
      letter.style.animation = `${name} 0.8s ease forwards`;
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const designImage = document.getElementById("designImage");
  const slider     = document.querySelector(".design-slider");

});

// main.js 맨 아래에 붙여넣기
const heroBtn = document.querySelector('.hero-btn');
if (heroBtn) {
  heroBtn.addEventListener('click', e => {
    e.preventDefault();
    alert('품절입니다 🤪'); 
  });
}



