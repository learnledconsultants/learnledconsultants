$( document ).ready(function() {
        $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
        }); 
        AOS.init();
        var scrollToTopBtn = document.getElementById("scrollToTopBtn")
        var rootElement = document.documentElement

        function scrollToTop() {
        // Scroll to top logic
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        }
        scrollToTopBtn.addEventListener("click", scrollToTop)
});