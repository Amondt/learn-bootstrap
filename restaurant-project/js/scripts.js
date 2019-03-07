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

    // Restaurants
    const insideRestaurantsDiv = document.querySelector('#restoContainer')

    document.querySelector('#brussels').addEventListener('click', brusselsDisplay)
    document.querySelector('#paris').addEventListener('click', parisDisplay)
    document.querySelector('#montreal').addEventListener('click', montrealDisplay)

    // Header restaurant pages display
    function imagesLinkHeader (container) {
        const row = document.createElement('div')
        row.setAttribute('class', 'row')

        const col = document.createElement('div')
        col.setAttribute('class', 'col-12')

        const linkB = document.createElement('a')
        linkB.id = "brussels"
        linkB.href = "#"
        const brussels = document.createElement('img')
        brussels.setAttribute('class', 'mx-2')
        brussels.src = "./img/brussels.jpg"
        brussels.alt = "Brussels restaurant"
        brussels.style.width = "70px"
        brussels.style.height = "70px"

        const linkP = document.createElement('a')
        linkP.id = "paris"
        linkP.href = "#"
        const paris = document.createElement('img')
        paris.setAttribute('class', 'mx-2')
        paris.src = "./img/paris.jpg"
        paris.alt = "Paris restaurant"
        paris.style.width = "70px"
        paris.style.height = "70px"

        const linkM = document.createElement('a')
        linkM.id = "montreal"
        linkM.href = "#"
        const montreal = document.createElement('img')
        montreal.setAttribute('class', 'mx-2')
        montreal.src = "./img/montreal.jpg"
        montreal.alt = "Montreal restaurant"
        montreal.style.width = "70px"
        montreal.style.height = "70px"

        const colDate = document.createElement('div')
        colDate.setAttribute('class', 'col-12 text-center mt-4')
        // Date insert
        const openClose = "ouvert"
        var d = new Date()
        var months = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre"];
        const pDate = document.createElement('p')
        pDate.textContent = "nous sommes le " + d.getDate() + " " + months[d.getMonth()]
        testOpenClose(openClose)
        const pOpCl = document.createElement('p')
        pOpCl.textContent = "le re  staurant est " + openClose

        linkB.appendChild(brussels)
        linkP.appendChild(paris)
        linkM.appendChild(montreal)

        col.appendChild(linkB)
        col.appendChild(linkP)
        col.appendChild(linkM)
        colDate.appendChild(pDate)
        colDate.appendChild(pOpCl)

        row.appendChild(col)
        row.appendChild(colDate)

        container.appendChild(row)

        setInterval(function () {
            testOpenClose(openClose)
            pOpCl.textContent = "le restaurant est " + openClose
        }, 50)

        return container
    }
    function testOpenClose (openClose) {
        var d = new Date()
        if (d.getDay() >= 1 && d.getDay() <= 5) {
            if ((d.getHours() >= 12 && d.getHours() <= 15) || (d.getHours() >= 19 && d.getHours() <= 23)) {
                openClose = "ouvert"
            } else {
                openClose = "fermé"
            }
        } else if (d.getDay() == 6) {
            if (d.getHours() >= 19 && d.getHours() <= 23) {
                openClose = "ouvert"
            } else {
                openClose = "fermé"
            }
        }
        return openClose
    }

    // Brussels displays
    function brusselsDisplay(e) {
        e.preventDefault()
        insideRestaurantsDiv.lastElementChild.remove()

        const container = document.createElement('div')
        container.setAttribute('class', 'container')

        // Images links resto
        imagesLinkHeader(container)

        // PLace | Shifts
        infosRestaurantBrussels(container)

        // Google map api
        mapBrussels(container)
        
        insideRestaurantsDiv.appendChild(container)
        document.querySelector('#brussels').removeEventListener('click', brusselsDisplay)
        document.querySelector('#paris').addEventListener('click', parisDisplay)
        document.querySelector('#montreal').addEventListener('click', montrealDisplay)
    }
    function infosRestaurantBrussels(container) {
        const row = document.createElement('div')
        row.setAttribute('class', 'row')

        // left col js init
        const colLeft = document.createElement('div')
        colLeft.setAttribute('class', 'col-12 col-md-6 mt-4')

        const rowLeft = document.createElement('div')
        rowLeft.setAttribute('class', 'row')

        const colLeftIcon = document.createElement('div')
        colLeftIcon.setAttribute('class', 'col-2')

        const iLocation = document.createElement('i')
        iLocation.setAttribute('class', "fas fa-map-marker-alt text-center mt-1")
        iLocation.style.fontSize = '2.5rem'

        const colLeftLocation = document.createElement('div')
        colLeftLocation.setAttribute('class', 'col-10')

        const h3MM = document.createElement('h3')
        h3MM.textContent = "Mamma Mia | Bruxelles"
        h3MM.setAttribute('class', 'text-left')
        const pAdress = document.createElement('p')
        pAdress.textContent = "Place Sainte-Catherine 8, 1000 Bruxelles"
        pAdress.setAttribute('class', 'text-left')

        const colLeftPhoneI = document.createElement('div')
        colLeftPhoneI.setAttribute('class', 'col-2')

        const iPhone = document.createElement('i')
        iPhone.setAttribute('class', "fas fa-phone text-center mt-1")
        iPhone.style.fontSize = '2rem'

        const colLeftPhone = document.createElement('div')
        colLeftPhone.setAttribute('class', 'col-10')

        const h3Phone = document.createElement('h3')
        h3Phone.textContent = "+32 495 56 65 74"
        h3Phone.setAttribute('class', 'text-left')

        // right col js init
        const colRight = document.createElement('div')
        colRight.setAttribute('class', 'col-12 col-md-6 mt-4')

        const rowRight = document.createElement('div')
        rowRight.setAttribute('class', 'row')

        const colRightIcon = document.createElement('div')
        colRightIcon.setAttribute('class', 'col-2')

        const iShifts = document.createElement('i')
        iShifts.setAttribute('class', "far fa-clock text-center mt-1")
        iShifts.style.fontSize = '2.5rem'

        const colRightShifts = document.createElement('div')
        colRightShifts.setAttribute('class', 'col-10')

        const h3Midi = document.createElement('h3')
        h3Midi.textContent = "Midi"
        h3Midi.setAttribute('class', 'text-left')
        const pMidi = document.createElement('p')
        pMidi.textContent = "lundi au vendredi, de 12h00 à 15h00"
        pMidi.setAttribute('class', 'text-left')

        const h3Soir = document.createElement('h3')
        h3Soir.textContent = "Soir"
        h3Soir.setAttribute('class', 'text-left')
        const pSoir = document.createElement('p')
        pSoir.textContent = "lundi à samedi, de 19h00 à 23h00"
        pSoir.setAttribute('class', 'text-left')

        // appends on Html
        container.appendChild(row)

        row.appendChild(colLeft)
        row.appendChild(colRight)

        // Left part appends | location - phone
        colLeft.appendChild(rowLeft)
        rowLeft.appendChild(colLeftIcon)
        colLeftIcon.appendChild(iLocation)
        rowLeft.appendChild(colLeftLocation)
        colLeftLocation.appendChild(h3MM)
        colLeftLocation.appendChild(pAdress)
        rowLeft.appendChild(colLeftPhoneI)
        colLeftPhoneI.appendChild(iPhone)
        rowLeft.appendChild(colLeftPhone)
        colLeftPhone.appendChild(h3Phone)

        // Right part appends | shifts
        colRight.appendChild(rowRight)
        rowRight.appendChild(colRightIcon)
        colRightIcon.appendChild(iShifts)
        rowRight.appendChild(colRightShifts)
        colRightShifts.appendChild(h3Midi)
        colRightShifts.appendChild(pMidi)
        colRightShifts.appendChild(h3Soir)
        colRightShifts.appendChild(pSoir)

        return container
    }
    function mapBrussels(container) {
        const row = document.createElement('div')
        row.setAttribute('class', 'row my-4')

        const col = document.createElement('div')
        col.setAttribute('class', 'col')

        const mapFrame = document.createElement('iframe')
        mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629.7340750526905!2d4.34726882925014!3d50.85086384541537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDUxJzAzLjEiTiA0wrAyMCc1Mi4xIkU!5e0!3m2!1sfr!2sbe!4v1551443866086"
        mapFrame.id = "map"
        mapFrame.width = "600"
        mapFrame.frameborder = "0"

        container.appendChild(row)
        row.appendChild(col)
        col.appendChild(mapFrame)

        return container
    }

    // Paris displays
    function parisDisplay(e) {
        e.preventDefault()
        insideRestaurantsDiv.lastElementChild.remove()

        const container = document.createElement('div')
        container.setAttribute('class', 'container')

        // Images links resto
        imagesLinkHeader(container)

        // PLace | Shifts
        infosRestaurantParis(container)

        // Google map api
        mapParis(container)
        
        insideRestaurantsDiv.appendChild(container)
        document.querySelector('#paris').removeEventListener('click', parisDisplay)
        document.querySelector('#brussels').addEventListener('click', brusselsDisplay)
        document.querySelector('#montreal').addEventListener('click', montrealDisplay)
    }
    function infosRestaurantParis(container) {
        const row = document.createElement('div')
        row.setAttribute('class', 'row')

        // left col js init
        const colLeft = document.createElement('div')
        colLeft.setAttribute('class', 'col-12 col-md-6 mt-4')

        const rowLeft = document.createElement('div')
        rowLeft.setAttribute('class', 'row')

        const colLeftIcon = document.createElement('div')
        colLeftIcon.setAttribute('class', 'col-2')

        const iLocation = document.createElement('i')
        iLocation.setAttribute('class', "fas fa-map-marker-alt text-center mt-1")
        iLocation.style.fontSize = '2.5rem'

        const colLeftLocation = document.createElement('div')
        colLeftLocation.setAttribute('class', 'col-10')

        const h3MM = document.createElement('h3')
        h3MM.textContent = "Mamma Mia | Paris"
        h3MM.setAttribute('class', 'text-left')
        const pAdress = document.createElement('p')
        pAdress.textContent = "Place de la Contrescarpe 2, 75005 Paris"
        pAdress.setAttribute('class', 'text-left')

        const colLeftPhoneI = document.createElement('div')
        colLeftPhoneI.setAttribute('class', 'col-2')

        const iPhone = document.createElement('i')
        iPhone.setAttribute('class', "fas fa-phone text-center mt-1")
        iPhone.style.fontSize = '2rem'

        const colLeftPhone = document.createElement('div')
        colLeftPhone.setAttribute('class', 'col-10')

        const h3Phone = document.createElement('h3')
        h3Phone.textContent = "+33 1 23 45 67 89"
        h3Phone.setAttribute('class', 'text-left')

        // right col js init
        const colRight = document.createElement('div')
        colRight.setAttribute('class', 'col-12 col-md-6 mt-4')

        const rowRight = document.createElement('div')
        rowRight.setAttribute('class', 'row')

        const colRightIcon = document.createElement('div')
        colRightIcon.setAttribute('class', 'col-2')

        const iShifts = document.createElement('i')
        iShifts.setAttribute('class', "far fa-clock text-center mt-1")
        iShifts.style.fontSize = '2.5rem'

        const colRightShifts = document.createElement('div')
        colRightShifts.setAttribute('class', 'col-10')

        const h3Midi = document.createElement('h3')
        h3Midi.textContent = "Midi"
        h3Midi.setAttribute('class', 'text-left')
        const pMidi = document.createElement('p')
        pMidi.textContent = "lundi au vendredi, de 12h00 à 15h00"
        pMidi.setAttribute('class', 'text-left')

        const h3Soir = document.createElement('h3')
        h3Soir.textContent = "Soir"
        h3Soir.setAttribute('class', 'text-left')
        const pSoir = document.createElement('p')
        pSoir.textContent = "lundi à samedi, de 19h00 à 23h00"
        pSoir.setAttribute('class', 'text-left')

        // appends on Html
        container.appendChild(row)

        row.appendChild(colLeft)
        row.appendChild(colRight)

        // Left part appends | location - phone
        colLeft.appendChild(rowLeft)
        rowLeft.appendChild(colLeftIcon)
        colLeftIcon.appendChild(iLocation)
        rowLeft.appendChild(colLeftLocation)
        colLeftLocation.appendChild(h3MM)
        colLeftLocation.appendChild(pAdress)
        rowLeft.appendChild(colLeftPhoneI)
        colLeftPhoneI.appendChild(iPhone)
        rowLeft.appendChild(colLeftPhone)
        colLeftPhone.appendChild(h3Phone)

        // Right part appends | shifts
        colRight.appendChild(rowRight)
        rowRight.appendChild(colRightIcon)
        colRightIcon.appendChild(iShifts)
        rowRight.appendChild(colRightShifts)
        colRightShifts.appendChild(h3Midi)
        colRightShifts.appendChild(pMidi)
        colRightShifts.appendChild(h3Soir)
        colRightShifts.appendChild(pSoir)

        return container
    }
    function mapParis(container) {
        const row = document.createElement('div')
        row.setAttribute('class', 'row my-4')

        const col = document.createElement('div')
        col.setAttribute('class', 'col')

        const mapFrame = document.createElement('iframe')
        mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.4280134683596!2d2.348912829262897!3d48.844630881290634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUwJzQwLjciTiAywrAyMCc1OC4xIkU!5e0!3m2!1sfr!2sbe!4v1551445748507"
        mapFrame.id = "map"
        mapFrame.width = "600"
        mapFrame.frameborder = "0"

        container.appendChild(row)
        row.appendChild(col)
        col.appendChild(mapFrame)

        return container
    }

    // Montreal displays
    function montrealDisplay(e) {
        e.preventDefault()
        insideRestaurantsDiv.lastElementChild.remove()

        const container = document.createElement('div')
        container.setAttribute('class', 'container')

        // Images links resto
        imagesLinkHeader(container)

        // PLace | Shifts
        infosRestaurantMontreal(container)

        // Google map api
        mapMontreal(container)
        
        insideRestaurantsDiv.appendChild(container)
        document.querySelector('#montreal').removeEventListener('click', montrealDisplay)
        document.querySelector('#brussels').addEventListener('click', brusselsDisplay)
        document.querySelector('#paris').addEventListener('click', parisDisplay)
    }
    function infosRestaurantMontreal(container) {
        const row = document.createElement('div')
        row.setAttribute('class', 'row')

        // left col js init
        const colLeft = document.createElement('div')
        colLeft.setAttribute('class', 'col-12 col-md-6 mt-4')

        const rowLeft = document.createElement('div')
        rowLeft.setAttribute('class', 'row')

        const colLeftIcon = document.createElement('div')
        colLeftIcon.setAttribute('class', 'col-2')

        const iLocation = document.createElement('i')
        iLocation.setAttribute('class', "fas fa-map-marker-alt text-center mt-1")
        iLocation.style.fontSize = '2.5rem'

        const colLeftLocation = document.createElement('div')
        colLeftLocation.setAttribute('class', 'col-10')

        const h3MM = document.createElement('h3')
        h3MM.textContent = "Mamma Mia | Montreal"
        h3MM.setAttribute('class', 'text-left')
        const pAdress = document.createElement('p')
        pAdress.textContent = "Boulevard Robert-Bourassa 1165, Montréal, QC H3B 1S5"
        pAdress.setAttribute('class', 'text-left')

        const colLeftPhoneI = document.createElement('div')
        colLeftPhoneI.setAttribute('class', 'col-2')

        const iPhone = document.createElement('i')
        iPhone.setAttribute('class', "fas fa-phone text-center mt-1")
        iPhone.style.fontSize = '2rem'

        const colLeftPhone = document.createElement('div')
        colLeftPhone.setAttribute('class', 'col-10')

        const h3Phone = document.createElement('h3')
        h3Phone.textContent = "+1-438-555-5555"
        h3Phone.setAttribute('class', 'text-left')

        // right col js init
        const colRight = document.createElement('div')
        colRight.setAttribute('class', 'col-12 col-md-6 mt-4')

        const rowRight = document.createElement('div')
        rowRight.setAttribute('class', 'row')

        const colRightIcon = document.createElement('div')
        colRightIcon.setAttribute('class', 'col-2')

        const iShifts = document.createElement('i')
        iShifts.setAttribute('class', "far fa-clock text-center mt-1")
        iShifts.style.fontSize = '2.5rem'

        const colRightShifts = document.createElement('div')
        colRightShifts.setAttribute('class', 'col-10')

        const h3Midi = document.createElement('h3')
        h3Midi.textContent = "Midi"
        h3Midi.setAttribute('class', 'text-left')
        const pMidi = document.createElement('p')
        pMidi.textContent = "lundi au vendredi, de 12h00 à 15h00"
        pMidi.setAttribute('class', 'text-left')

        const h3Soir = document.createElement('h3')
        h3Soir.textContent = "Soir"
        h3Soir.setAttribute('class', 'text-left')
        const pSoir = document.createElement('p')
        pSoir.textContent = "lundi à samedi, de 19h00 à 23h00"
        pSoir.setAttribute('class', 'text-left')

        // appends on Html
        container.appendChild(row)

        row.appendChild(colLeft)
        row.appendChild(colRight)

        // Left part appends | location - phone
        colLeft.appendChild(rowLeft)
        rowLeft.appendChild(colLeftIcon)
        colLeftIcon.appendChild(iLocation)
        rowLeft.appendChild(colLeftLocation)
        colLeftLocation.appendChild(h3MM)
        colLeftLocation.appendChild(pAdress)
        rowLeft.appendChild(colLeftPhoneI)
        colLeftPhoneI.appendChild(iPhone)
        rowLeft.appendChild(colLeftPhone)
        colLeftPhone.appendChild(h3Phone)

        // Right part appends | shifts
        colRight.appendChild(rowRight)
        rowRight.appendChild(colRightIcon)
        colRightIcon.appendChild(iShifts)
        rowRight.appendChild(colRightShifts)
        colRightShifts.appendChild(h3Midi)
        colRightShifts.appendChild(pMidi)
        colRightShifts.appendChild(h3Soir)
        colRightShifts.appendChild(pSoir)

        return container
    }
    function mapMontreal(container) {
        const row = document.createElement('div')
        row.setAttribute('class', 'row my-4')

        const col = document.createElement('div')
        col.setAttribute('class', 'col')

        const mapFrame = document.createElement('iframe')
        mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1289.4172012992192!2d-73.56746920918765!3d45.50228229616133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzA4LjciTiA3M8KwMzQnMDQuNCJX!5e1!3m2!1sfr!2sbe!4v1551446367992"
        mapFrame.id = "map"
        mapFrame.width = "600"
        mapFrame.frameborder = "0"

        container.appendChild(row)
        row.appendChild(col)
        col.appendChild(mapFrame)

        return container
    }

    var name = prompt('Bonjour, quel est votre nom ?')
    document.querySelector('#name').textContent = "Bonjour " + name
}