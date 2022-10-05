document.addEventListener("DOMContentLoaded", () => {
    AOS.init()

    const navButton = document.querySelector('.mobile-nav-button')
    const mobileNav = document.querySelector('.mobile-nav-menu')

    navButton.onclick = () => {
        const isClosed = mobileNav.classList.contains('hidden')

        if (isClosed) {
            mobileNav.classList.remove('hidden')
            mobileNav.classList.add('flex')
        } else {
            mobileNav.classList.remove('flex')
            mobileNav.classList.add('hidden')
        }
    }
})