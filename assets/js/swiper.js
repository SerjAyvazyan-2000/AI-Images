let possibilitiesSwiper = new Swiper(".possibilities-slider", {
    spaceBetween: 10,
    // autoplay:true,

    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        370: {slidesPerView: 1,},
        400: {slidesPerView: 1,},
        540: {slidesPerView: 1,},
        576: {slidesPerView: 1},
        629: {slidesPerView: 2},
        855: {slidesPerView: 2.5},
    },


});

document.querySelectorAll('.possibilities-slider-picture').forEach(twenty => {
    twenty.addEventListener('pointerdown', () => {
        possibilitiesSwiper.allowTouchMove = false;
    });

    twenty.addEventListener('pointerup', () => {
        possibilitiesSwiper.allowTouchMove = true;
    });

    twenty.addEventListener('pointerleave', () => {
        possibilitiesSwiper.allowTouchMove = true;
    });
});




function initSwiper() {
    let reviewsSwiper;

    const isMobile = window.innerWidth <= 992;
    const direction = isMobile ? "horizontal" : "vertical";
    const delay = isMobile ? 4000 : 2000;

    if (reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
    }

    reviewsSwiper = new Swiper(".reviews-swiper", {
        direction: direction,
        spaceBetween: 12,
        slidesPerView: 3,
        pagination: {
            el: ".reviews-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: delay,
            disableOnInteraction: false,
        },
        speed: 2000,

        breakpoints: {
            320: {slidesPerView: 1,},
            490: {slidesPerView: 1.2,},
            620: {slidesPerView: 1.5,},
            810: {slidesPerView: 2},
            992: {slidesPerView: 2},
            1096: {slidesPerView: 2.5},
            1232: {slidesPerView: 3},
            1920: {slidesPerView: 3},
        },

    });
    const swiperContainer = document.querySelector(".reviews-swiper");

    if(swiperContainer){

        swiperContainer.addEventListener("mouseenter", () => {
            reviewsSwiper.autoplay.stop();
        });

        swiperContainer.addEventListener("mouseleave", () => {
            reviewsSwiper.autoplay.start();
        });
    }

}

initSwiper();





let advantagesSwiper = new Swiper(".advantages-slider", {
    spaceBetween: 21,
    slidesPerView: 3,

    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        370: {slidesPerView: 1,},
        400: {slidesPerView: 1,},
        540: {slidesPerView: 1.2,},
        576: {slidesPerView: 1.5},
        779: {slidesPerView: 2},
        954: {slidesPerView: 2.4},
        1139: {slidesPerView: 2.5},
        1200: {slidesPerView: 3},

    },
    on: {
        slideChange: updateActiveText, // Обновляем текст при смене слайда
    },


});


let creatingSwiper = new Swiper(".creating-swiper", {
    effect: "coverflow",
    centeredSlides: true,
    // autoplay:true,
    observer: true,
    observeParents: true,
    cursor: null,
    loop: true,
    initialSlide: 2,
    loopAdditionalSlides: 2,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 3,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".creating-button-next",
        prevEl: ".creating-button-prev",
    },
    breakpoints: {

        320: {
            slidesPerView: 1,
            effect: "slide",
            centeredSlides: false,
            loop: false,
            coverflowEffect: {}
        },
        430: {
            slidesPerView: 1.5,
        },
        540: {
            slidesPerView: 2.4,
        },
        935: {
            slidesPerView: 3,

        },

        1027: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 4,
        },
    }

});

const slides = document.querySelectorAll(".creating-swiper .swiper-slide");

slides.forEach((slide) => {
    slide.addEventListener("click", () => {
        let realIndex = slide.getAttribute("data-swiper-slide-index");
        creatingSwiper.slideToLoop(realIndex);
    });
});

creatingSwiper.on("slideChange", function () {
    updateActiveText();
});

function updateActiveText() {
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (!activeSlide) return;

    const activeImg = activeSlide.querySelector(".creating-slide");
    if(activeImg){
        const activeId = activeImg.getAttribute("data-id");
        document.querySelectorAll(".swiper-slide-text").forEach((text) => {
            text.style.display = text.getAttribute("data-id") === activeId ? "block" : "none";
        });

    }



}

creatingSwiper.on("transitionEnd", updateActiveText);

let creatingSwiperMobile = new Swiper(".creating-mobile-swiper", {
    effect: "slide",
    autoplay: true,
    loop: true,
    spaceBetween: 10,

    pagination: {
        el: ".creating-pagination",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        430: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,

        },
        935: {
            slidesPerView: 1,

        },


    }

});



creatingSwiperMobile.on("transitionEnd", updateActiveText);

document.querySelectorAll(".creating-slide-more").forEach((button) => {
    button.addEventListener("click", function () {
        const parentSlide = button.closest(".swiper-slide");
        const images = parentSlide.querySelectorAll(".creating-slide-img img");
        const currentImageIndex = Array.from(images).findIndex((img) => img.style.display === "block");

        images.forEach((img) => (img.style.display = "none"));

        const nextIndex = (currentImageIndex + 1) % images.length;
        images[nextIndex].style.display = "block";

        updateActiveText();
    });
});

function initializeSlides() {
    document.querySelectorAll(".creating-slide-img").forEach((slideImg) => {
        const images = slideImg.querySelectorAll("img");
        images.forEach((img, index) => {
            img.style.display = index === 0 ? "block" : "none";
        });
    });

    updateActiveText();
}

initializeSlides();






