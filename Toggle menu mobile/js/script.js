$(document).ready(function() {
    $(".menu-toggle").click(function() {
        $(this).toggleClass("fa-times");
        $(".navigation-menu").toggleClass("active")
    })
});