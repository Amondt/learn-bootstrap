window.onload = () => {

    // Navbar scripts
    const navbar = document.querySelector('#mainNavbar')
    
    const home = document.querySelector('#home')
    const about = document.querySelector('#about')
    const menu = document.querySelector('#menu')
    const gallery = document.querySelector('#gallery')
    const restaurants = document.querySelector('#restaurants')
    const contact = document.querySelector('#contact')

    const navHome = document.querySelector('#navHome')
    const navAbout = document.querySelector('#navAbout')
    const navMenu = document.querySelector('#navMenu')
    const navGallery = document.querySelector('#navGallery')
    const navRestaurants = document.querySelector('#navRestaurants')
    const navContact = document.querySelector('#navContact')

    document.body.addEventListener('scroll', function(e) {
        console.log()
        if (e.target.scrollTop > 300) {
            navbar.style.top = '0px'
        } else if (e.target.scrollTop <= 300) {
            navbar.style.top = '-64px'
        }
        if (e.target.scrollTop >= (e.target.scrollHeight - (e.target.offsetHeight)*1.2)) {
            $(".navbar-nav").find(".active").removeClass("active")
            navContact.classList.add("active")
        } else if (e.target.scrollTop >= home.offsetTop && e.target.scrollTop < (about.offsetTop -64)) {
            $(".navbar-nav").find(".active").removeClass("active")
            navHome.classList.add("active")
        } else if (e.target.scrollTop >= (about.offsetTop - 64) && e.target.scrollTop < (menu.offsetTop-64)) {
            $(".navbar-nav").find(".active").removeClass("active")
            navAbout.classList.add("active")
        } else if (e.target.scrollTop >= (menu.offsetTop-64) && e.target.scrollTop < (gallery.offsetTop-64)) {
            $(".navbar-nav").find(".active").removeClass("active")
            navMenu.classList.add("active")
        } else if (e.target.scrollTop >= (gallery.offsetTop-64) && e.target.scrollTop < (restaurants.offsetTop-64)) {
            $(".navbar-nav").find(".active").removeClass("active")
            navGallery.classList.add("active")
        } else if (e.target.scrollTop >= (restaurants.offsetTop-64)) {
            $(".navbar-nav").find(".active").removeClass("active")
            navRestaurants.classList.add("active")
        }
    })
    

    $(".navbar-nav .nav-link").on("click", function(){
        $(".navbar-nav").find(".active").removeClass("active")
        $(this).addClass("active")
    })

    // Gallery
    let modalId = $('#image-gallery')

    $(document).ready(function () {

        loadGallery(true, 'a.thumbnail')

        //This function disables buttons when needed
        function disableButtons(counter_max, counter_current) {
            $('#show-previous-image, #show-next-image').show()
            if (counter_max === counter_current) {
                $('#show-next-image').hide()
            } else if (counter_current === 1) {
                $('#show-previous-image').hide()
            }
        }

        /**
         *
         * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
         * @param setClickAttr  Sets the attribute for the click handler.
         */

        function loadGallery(setIDs, setClickAttr) {
            let current_image,
                selector,
                counter = 0;

            $('#show-next-image, #show-previous-image').click(function () {
                if ($(this).attr('id') === 'show-previous-image') {
                    current_image--
                } else {
                    current_image++
                }

                selector = $('[data-image-id="' + current_image + '"]')
                updateGallery(selector)
            })

            function updateGallery(selector) {
                let $sel = selector
                current_image = $sel.data('image-id')
                $('#image-gallery-title').text($sel.data('title'))
                $('#image-gallery-image').attr('src', $sel.data('image'))
                disableButtons(counter, $sel.data('image-id'))
            }

            if (setIDs == true) {
                $('[data-image-id]').each(function () {
                    counter++
                    $(this).attr('data-image-id', counter)
                })
            }
            $(setClickAttr).on('click', function () {
                updateGallery($(this))
            })
        }
    })

    // build key actions
    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: // left
                if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
                    $('#show-previous-image').click()
                }
                break

            case 39: // right
                if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
                    $('#show-next-image').click()
                }
                break

            default:
                return // exit this handler for other keys
        }
        e.preventDefault() // prevent the default action (scroll / move caret)
    })

}