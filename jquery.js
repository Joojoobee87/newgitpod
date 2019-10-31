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
        let nextButton = $(".next");
        let prevButton = $(".prev");
        let index = 1;

        $(images[0]).css("display", "block");

        $(nextButton).on('click', function() {
            for (i = 0; i < images.length; i++) {
                $(images[i]).css("display", "none");
            }
            index++;
            if (index > images.length) {
                $(images[images.length - 1]).css("display", "block");
                return false;
            }
            $(images[index - 1]).css("display", "block");
        })
        $(prevButton).on('click', function() {
            for (i = 0; i < images.length; i++) {
                $(images[i]).css("display", "none");
                console.log(images[i]);
            }
            index++;
            console.log(index);
            if (index < 0) {
                $(images[images.length - i]).css("display", "block");
            }
            $(images[index - 1]).css("display", "block");
        })
    }
    slideshow();

})
function nextImage() {
    if (index < images.length - 1) {
        for (i = 0; i < 10; i++) {
            document.getElementById('imgsrc').src = images[index++];
        }
    }
}

function previousImage() {
    if (index > 0) {
        for (i = 0; i < 10; i++) {
            document.getElementById('imgsrc').src = images[index--];
        }
    }
}