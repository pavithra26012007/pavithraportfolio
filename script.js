
document.addEventListener("DOMContentLoaded", function () {

    // 1. LOGO CLICK - GO TO HOME
    const logo = document.querySelector(".logo");

    if (logo) {
        logo.addEventListener("click", function () {
            const home = document.querySelector("#home");

            if (home) {
                home.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }


    // 2. NAVIGATION ACCESS
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {
                const targetSection =
                    document.querySelector(targetId);

                if (targetSection) {
                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }

            // Close mobile menu
            const menu = document.querySelector(".menu");

            if (menu) {
                menu.classList.remove("active");
            }
        });
    });


    // 3. MOBILE MENU OPEN / CLOSE
    const menuToggle = document.querySelector("#menuToggle");
    const navMenu = document.querySelector(".menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            const isExpanded =
                navMenu.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isExpanded
            );
        });
    }


    // 4. VIEW MY WORK BUTTON
    const viewWorkButton =
        document.querySelector("#viewWorkBtn");

    if (viewWorkButton) {
        viewWorkButton.addEventListener("click", function () {
            const projects =
                document.querySelector("#projects");

            if (projects) {
                projects.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }


    // 5. PROJECT LINKS
    const projectLinks =
        document.querySelectorAll(".project-link");

    projectLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            const projectName =
                link.getAttribute("data-project");

            if (projectName) {
                console.log(
                    "Opening project: " + projectName
                );
            }
        });
    });


    // 6. SCROLL ANIMATION
    const animatedElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        animatedElements.forEach(function (element) {
            observer.observe(element);
        });
    } else {
        animatedElements.forEach(function (element) {
            element.classList.add("visible");
        });
    }


    // 7. ACTIVE NAVIGATION LINK
    const sections = document.querySelectorAll(
        "#home, #about, #skills, #projects, #contact"
    );

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        navLinks.forEach(function (link) {
                            link.classList.remove("active-link");

                            if (
                                link.getAttribute("href") ===
                                "#" + entry.target.id
                            ) {
                                link.classList.add("active-link");
                            }
                        });
                    }
                });
            },
            {
                threshold: 0.4
            }
        );

        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }


    // 8. BACK TO TOP BUTTON
    const backToTop =
        document.querySelector("#backToTop");

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // 9. CURRENT YEAR
    const yearElement =
        document.querySelector("#currentYear");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }


    // 10. CONTACT FORM VALIDATION
    const contactForm =
        document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            alert(
                "Form validated successfully!"
            );

            // Connect a backend or email service
            // to actually send the form data.
        });
    }


    // 11. CONSOLE MESSAGE
    console.log("Portfolio JavaScript loaded successfully!");

});