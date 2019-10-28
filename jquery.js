$(document).ready(function() {

    let button = $(".filter");
    let boxes = $(".box");

    console.log(button);
    console.log(boxes);
    boxes.hide();

    function filterSelected() {
        button.on('click', function() {
            $(this).addClass('highlight');
            $('.' + this.id).show();
            button.on('click', function() {
                $(this).removeClass('highlight');
                $('.' + this.id).hide();
                filterSelected();
            })
        });
    }
    filterSelected();
})

/*
        button.on('click', function() {
            $('.' + this.id).toggle();
            $(this).toggleClass('red');
        });
check visibility code:

     if($("p").is(":visible")){
                  alert("The paragraph  is visible.");
    } else{
           alert("The paragraph  is hidden.");


check is element has class of:

$(selector).hasClass(className)
*/