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
    })), $(document).on("click blur", ".cancel", (function () {
        $(".box--member").toggleClass("active")
    }))

    $(".cancel-btn").click(function () {
        $(".box--member").removeClass("active")
    })

    var reviewIndex = 1
    $(".next--review").click(function () {
        $(".review--"+reviewIndex).hide()
        $(".review--"+(reviewIndex+1)).show()
        reviewIndex++
        if($(".review--1").is(":visible")) {
            $(this).html("ต่อไป")
            $("body").removeClass("bg-bg")
            $(".topic").html("สร้างรีวิว")
            $(".back-btn").hide()
            $(".cancel-btn").show()
        }
        if($(".review--2").is(":visible")) {
            $(this).html("ต่อไป")
            $("body").removeClass("bg-bg")
            $(".topic").html("สร้างรีวิว")
            $(".back-btn").show()
            $(".cancel-btn").hide()
        }
        if($(".review--3").is(":visible")) {
            $(this).html("โพสต์ !")
            $("body").addClass("bg-bg")
            $(".topic").html("พรีวิวก่อนโพสต์")
            $(".back-btn").show()
            $(".cancel-btn").hide()
        }
        if(reviewIndex === 4) {
            window.location.replace('home.html')
        }
    })
    $(".back-btn").click(function () {
        $(".review--"+reviewIndex).hide()
        $(".review--"+(reviewIndex-1)).show()
        reviewIndex = reviewIndex - 1
        if($(".review--1").is(":visible")) {
            $(".next--review").html("ต่อไป")
            $("body").removeClass("bg-bg")
            $(".topic").html("สร้างรีวิว")
            $(".back-btn").hide()
            $(".cancel-btn").show()
        }
        if($(".review--2").is(":visible")) {
            $(".next--review").html("ต่อไป")
            $("body").removeClass("bg-bg")
            $(".topic").html("สร้างรีวิว")
            $(".back-btn").show()
            $(".cancel-btn").hide()
        }
    })

    $("input[type=radio]").on("change", function () {
        var inputName = $(this).attr("name")
        $("input[name=" + inputName + "]").removeAttr("checked","checked")
        if ( $(this).is(":checked") ) {
            $(this).attr("checked","checked")
        } else {
            $(this).removeAttr("checked","checked")
        }
    })

}))