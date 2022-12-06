$(document).ready((function () {
    $(".select--search").select2({
        width: "100%",
        placeholder: {
            text: function (e) {
                return $(this).parents(".select2").prev().attr("placeholder")
            }
        }
    }), $(".next").click((function () {
        return $(".review--1").hide(), $(".review--2").show(), !1
    })), $(".next--to").click((function () {
        return $(".review--2").is(":visible") ? ($(".review--1, .review--2").hide(), $(".review--3").show(), $(this).html("โพสต์")) : $(".review--1, .review--2").show(), !1
    })), $(document).on("click", ".cancel", (function () {
        $(".box--member").toggleClass("active")
    }))

    var reviewIndex = 1
    $(".next--review").click(function () {
        $(".review--"+reviewIndex).hide()
        $(".review--"+(reviewIndex+1)).show()
        reviewIndex++
        if($(".review--3").is(":visible")) {
            $(this).html("โพสต์ !")
            $("body").addClass("bg-bg")
            $(".topic").html("พรีวิวก่อนโพสต์")
            reviewIndex = 4
        }
    })
}));