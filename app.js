/* ==========================================================
   MOBILE NAVIGATION
   ----------------------------------------------------------
   Creates the hamburger menu automatically on every page.

   The existing desktop navigation is used as the source,
   so we don't have to duplicate navigation links in every
   HTML file.
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /*
     * Find every header on the page.
     */
    const headers = document.querySelectorAll("header");

    headers.forEach(function (header) {

        /*
         * Find the existing desktop navigation.
         */
        const desktopNav = header.querySelector("nav");

        if (!desktopNav) {
            return;
        }


        /*
         * Prevent the mobile menu from being created twice.
         */
        if (header.querySelector(".mobile-menu-toggle")) {
            return;
        }


        /* ==================================================
           CREATE HAMBURGER BUTTON
        ================================================== */

        const toggleButton = document.createElement("button");

        toggleButton.className = "mobile-menu-toggle";

        toggleButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        toggleButton.setAttribute(
            "aria-expanded",
            "false"
        );

        toggleButton.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;


        /*
         * Put the hamburger button inside the header
         * next to the existing logo.
         */
        const headerContainer = header.querySelector(
            ".page-container"
        ) || header.querySelector(
            ":scope > div"
        );

        if (!headerContainer) {
            return;
        }

        headerContainer.appendChild(toggleButton);


        /* ==================================================
           CREATE MOBILE MENU
        ================================================== */

        const mobileMenu = document.createElement("div");

        mobileMenu.className = "mobile-menu";


        /* ==================================================
           COPY NAVIGATION LINKS
        ================================================== */

        const navList = desktopNav.querySelector("ul");

        if (navList) {

            const mobileList = navList.cloneNode(true);

            mobileMenu.appendChild(mobileList);

        }


        /* ==================================================
           COPY BOOK BUTTON
        ================================================== */

        const bookButton = desktopNav.querySelector(
            ".book-button"
        );

        if (bookButton) {

            const mobileBookButton =
                bookButton.cloneNode(true);

            mobileMenu.appendChild(mobileBookButton);

        }


        /* ==================================================
           COPY LANGUAGE SWITCHER
        ================================================== */

        const languageSwitcher =
            desktopNav.querySelector(
                ".language-switcher"
            );

        if (languageSwitcher) {

            const mobileLanguageSwitcher =
                languageSwitcher.cloneNode(true);

            mobileMenu.appendChild(
                mobileLanguageSwitcher
            );

        }


        /*
         * Add the finished mobile menu to the header.
         */
        header.appendChild(mobileMenu);


        /* ==================================================
           OPEN / CLOSE MENU
        ================================================== */

        toggleButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    mobileMenu.classList.toggle("is-open");

                toggleButton.classList.toggle(
                    "is-open",
                    isOpen
                );

                toggleButton.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );

                toggleButton.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                );

            }
        );


        /* ==================================================
           CLOSE WHEN A LINK IS CLICKED
        ================================================== */

        mobileMenu.addEventListener(
            "click",
            function (event) {

                const link =
                    event.target.closest("a");

                if (!link) {
                    return;
                }

                mobileMenu.classList.remove(
                    "is-open"
                );

                toggleButton.classList.remove(
                    "is-open"
                );

                toggleButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                toggleButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }
        );


        /* ==================================================
           CLOSE WITH ESCAPE
        ================================================== */

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key !== "Escape") {
                    return;
                }

                mobileMenu.classList.remove(
                    "is-open"
                );

                toggleButton.classList.remove(
                    "is-open"
                );

                toggleButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                toggleButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }
        );


        /* ==================================================
           CLOSE IF SCREEN BECOMES DESKTOP SIZE
        ================================================== */

        window.addEventListener(
            "resize",
            function () {

                if (window.innerWidth > 768) {

                    mobileMenu.classList.remove(
                        "is-open"
                    );

                    toggleButton.classList.remove(
                        "is-open"
                    );

                    toggleButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    });

});