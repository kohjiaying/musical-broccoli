var rightCellMaxWidth = parseInt($(".right").css("width"));

function fixRightCellWidth() {
    $(".right .color-wrap").each(function () {
        var rightCellWidth = $(this).outerWidth();
        var rightCellType = $(this).css("display");
        if (rightCellWidth < rightCellMaxWidth 
            && rightCellType == "inline-block") {
            $(this).parent().width(rightCellWidth);
        } else {
            $(this).parent().removeAttr("style");
        }
    });
}

$(window).resize(function () {
    fixRightCellWidth();
});

fixRightCellWidth();