$(function() {
    // Show more items button
    $(".item").slice(0 , 4).show().css("display", "flex");
    $(".show-more").on("click", () => {
        $(".item:hidden").slice(0, 4).show().css("display", "flex");
    })
    // hide/show sticky nav
    $(".sticky-nav-icon").on("click", () => {
        $(".sticky-nav").css("display", "flex");
        $(".blank-div").css("display", "flex")
        $(".hamburger-links").css("display", "flex")
    })

    // when user click on sticky nav, close sticky nav
    $(".hamburger-links").on("click", () => {
        $(".sticky-nav").css("display", "none");
        $(".blank-div").css("display", "none")
        $(".hamburger-links").css("display", "none")
    })

    $(".blank-div").on("click", () => {
        $(".sticky-nav").css("display", "none");
        $(".blank-div").css("display", "none")
        $(".hamburger-links").css("display", "none")
    })
});