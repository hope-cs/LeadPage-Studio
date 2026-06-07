/* =====================================================

LEADPAGE STUDIO MASTER TEMPLATE V2

CHANGE ONLY THIS SECTION FOR NEW CLIENTS

===================================================== */

const CLIENT = {

    businessName: "Prime Estate Consultants",

    whatsapp: "923709190104",

    ctaText: "Book Appointment",

    revealDelay: 100

};

/* =====================================================

DO NOT EDIT BELOW UNLESS NEEDED

===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       WHATSAPP BUTTONS
    ============================== */

    const whatsappLink = `https://wa.me/${CLIENT.whatsapp}`;

    const whatsappBtn =
        document.getElementById("whatsapp-btn");

    const whatsappContact =
        document.getElementById("whatsapp-contact");

    const stickyBtn =
        document.getElementById("sticky-btn");

    if (whatsappBtn) {
        whatsappBtn.href = whatsappLink;
        whatsappBtn.textContent = CLIENT.ctaText;
    }

    if (whatsappContact) {
        whatsappContact.href = whatsappLink;
    }

    if (stickyBtn) {
        stickyBtn.href = whatsappLink;
        stickyBtn.textContent = CLIENT.ctaText;
    }

    /* ==============================
       LIGHTBOX GALLERY
    ============================== */

    createLightbox();

    /* ==============================
       SCROLL REVEAL
    ============================== */

    setupRevealAnimations();

});

/* =====================================================
   LIGHTBOX
===================================================== */

function createLightbox() {

    const images =
        document.querySelectorAll(".gallery img");

    if (!images.length) return;

    const lightbox =
        document.createElement("div");

    lightbox.className = "lightbox";

    const lightboxImg =
        document.createElement("img");

    lightbox.appendChild(lightboxImg);

    document.body.appendChild(lightbox);

    images.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightboxImg.src = img.src;

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

/* =====================================================
   SCROLL REVEAL
===================================================== */

function setupRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".card, .testimonial, .section-title, .gallery img, .trust-item"
        );

    elements.forEach(el => {

        el.style.opacity = "0";

        el.style.transform =
            "translateY(40px)";

        el.style.transition =
            "all 0.8s ease";

    });

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },

            {
                threshold: 0.1
            }

        );

    elements.forEach(el => {

        observer.observe(el);

    });

}