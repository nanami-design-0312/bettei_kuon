/*-------------------------- ローディング〜ロゴ表示 --------------------------*/

window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    const line = document.querySelector(".loading-line");
  
    line.addEventListener("animationend", () => {
      loading.classList.add("fade-out");
  
      const topLogo = document.querySelector('.top_logo');
      const kvTitle = document.querySelector('.kv_title');
      
      topLogo?.classList.add('animate');
      kvTitle?.classList.add('animate');

    setTimeout(() => {
        loading.remove();
      }, 1000);
    });
});

/*-------------------------- メニュー挿入 --------------------------*/

fetch('menu.html')
.then(res => res.text())
.then(html => {
    document.querySelectorAll('.common-menu').forEach(el => {
    el.innerHTML = html;
    });
});

/*-------------------------- ヘッダー切り替え --------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('site-header');
    const logo = document.getElementById('header-logo');
    const trigger = document.querySelector('.header-trigger');
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          header.classList.remove('header_black');
          header.classList.add('header_white');
        } else {
          header.classList.remove('header_white');
          header.classList.add('header_black');
        }
      },
      { threshold: 0.1 }
    );
  
    if (trigger) observer.observe(trigger);
});


/*-------------------------- ハンバーガーメニュー --------------------------*/

$(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("active");
      $(".header_menu").toggleClass("active");
    });
  
    $(document).on("click", ".header_menu .menu a", function (e) {
      e.preventDefault();
      const url = $(this).attr("href");
      $(".hamburger").removeClass("active");
      $(".header_menu").removeClass("active");
  
      setTimeout(function () {
        window.location.href = url;
      }, 300);
    });
});

/*-------------------------- アニメーション_キービジュ --------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('.top')) {
        const slides = document.querySelectorAll(".kv_img .slide");
        let current = 0;
        const total = slides.length;
        const duration = 8000;
  
        slides.forEach(slide => {
           slide.style.transition = "opacity 2s ease-in-out, transform 8s linear, filter 2s ease-in-out";
        });
  
    
        requestAnimationFrame(() => {
           slides[current].classList.add("active");
        });
  
        setInterval(() => {
            const next = (current + 1) % total;
  
      
            slides[next].classList.add("active");
  
      
        setTimeout(() => {
            slides[current].classList.remove("active");
            current = next;
        }, 2000);
        }, duration);
    }
});


/*-------------------------- スクロール表示 --------------------------*/


document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll('.scroll-fadein');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2
    });
  
    targets.forEach(target => observer.observe(target));
});

/*-------------------------- 離れメイン写真移り変わり --------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".wrapper").forEach(wrapper => {
      const mainImage = wrapper.querySelector(".hanare_main");
      const thumbnails = wrapper.querySelectorAll(".hanare_img img");
  
      let currentIndex = 0;
      const imageSources = Array.from(thumbnails).map(img => img.dataset.img);
  
      const changeImage = index => {
        mainImage.style.opacity = 0;
        setTimeout(() => {
          mainImage.src = imageSources[index];
          mainImage.style.opacity = 1;
        }, 300);
      };
  
      // サムネイルクリック
      thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
          currentIndex = index;
          changeImage(index);
        });
      });
  
      // 自動スライド
      setInterval(() => {
        currentIndex = (currentIndex + 1) % imageSources.length;
        changeImage(currentIndex);
      }, 10000);
    });
});

/*-------------------------- スクロールリンクホバー追従 --------------------------*/


document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".page_scroll ul li");
    const underline = document.querySelector(".page_scroll .underline");
  
    if (listItems.length > 0) {
      const firstItem = listItems[0];
      const rect = firstItem.getBoundingClientRect();
      const parentRect = firstItem.parentElement.getBoundingClientRect();
      const center = rect.left - parentRect.left + rect.width / 2;
      underline.style.width = `60px`;
      underline.style.transform = `translateX(${center - 5}px) translateX(-50%)`;
    }
  
    listItems.forEach(item => {
      item.addEventListener("mouseenter", () => {
        const rect = item.getBoundingClientRect();
        const parentRect = item.parentElement.getBoundingClientRect();
        const center = rect.left - parentRect.left + rect.width / 2;
        underline.style.width = `60px`;
        underline.style.transform = `translateX(${center - 5}px) translateX(-50%)`;
      });
    });
  });


/*-------------------------- スムーズスクロール --------------------------*/


  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  });
