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


    function slideshow() {

        let images = Array.from($(".modal-image > img"));
        let imageButton = $(".image-button");
        let index = 0;

        console.log(imageButton);
        console.log(images);

        $(imageButton).on('click', function() {
            for (i = 0; i < images.length; i++) {
                console.log($(images[i]));
                $(images[i]).css("display", "none");
            }
            index++;
            if (index > images.length) { index = 1 }
            $(images[index - 1]).css("display", "block");
        })

    }
    slideshow();
})
