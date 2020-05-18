$(".proj-feautures").hover(
    function() {
        $(this).append($("<div class='proj-feautures__hover'></div>"));
    }, function() {
        $(this).find("span").last().remove();
    }
)