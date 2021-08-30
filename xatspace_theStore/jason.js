(function(){

    var btn = $(".jd-btn-top");
    var back = $(".jd-back-top");

    btn.on('click', function(){

        var select = $(this).attr("href");
        var position = $(select).offset().top;

        console.log(position);
        $("body, html").animate({
            scrollTop: position - 150
        }, 1000);
        
    })

    back.on('click', function(){

        $("body, html").animate({
            scrollTop: 0
        }, 1300);
    })

    /////////////CONTENT PAGE////////////////

    $("#img-banner-one").attr("src", banner_one.img)
    $("#img-banner-two").attr("src", banner_two.img)

    $("#title-banner").text(banner_one.title)
    $("#subtitle-banner").text(banner_one.sub_title)
    $("#description-banner").text(banner_one.description)

    $("#title-banner-two").text(banner_two.title)
    $("#subtitle-banner-two").text(banner_two.sub_title)
    $("#description-banner-two").text(banner_two.description)

    $("#your-days-a").text(block_a.day)
    $("#your-limit-a").text(block_a.limit)

    $("#your-xats-b").text(block_b.xats)
    $("#your-value-b").text(block_b.value)

    $("#your-xats-c").text(block_c.xats)

    $("#radio-xats-a").text(block_a_r.xats)

    $("#radio-value-b").text(block_b_r.value)
    $("#donation").text(block_b_r.donation)

    $("#radio-days-c").text(block_c_r.day)
    $("#radio-limit-c").text(block_c_r.limit)

    $("#announce-xat").text(announce.value)
    $("#announce-value").text(announce.xats)

    $("#whatsapp-number").text(whatsapp_numer.number)
})();
