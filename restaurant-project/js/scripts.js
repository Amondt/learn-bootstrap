window.onload = () => {

    // Navbar scripts
    const home = document.querySelector('#home')
    const about = document.querySelector('#about')
    const menu = document.querySelector('#menu')
    const gallery = document.querySelector('#gallery')
    const restaurants = document.querySelector('#restaurants')
    const contact = document.querySelector('#contact')
    const navbar = document.querySelector('#mainNavbar')

    document.body.addEventListener('scroll', function(e) {
        if (e.target.scrollTop > 300) {
            navbar.style.top = '0px'
        } else if (e.target.scrollTop <= 300) {
            navbar.style.top = '-60px'
        }
        if (e.target.scrollTop > about.offsetTop) {
            console.log('test')
        }
        // if ()
        // $(".navbar-nav").find(".active").removeClass("active")
        // console.log(document.querySelector('#navbarElements').childNodes[1])
    })
    

    $(".navbar-nav .nav-link").on("click", function(){
        $(".navbar-nav").find(".active").removeClass("active")
        $(this).addClass("active")
        console.log('menu choice')
    })

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