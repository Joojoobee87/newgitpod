$(document).ready(function() {


    let button = $(".filter");
    let boxes = $(".box");

    $(boxes).attr("visibility", "hidden");

    function filterBox() {
        $(button).on('click', function() {
            $('.' + this.id).attr("visibility", "visible");
        })
    }
    filterBox();

})