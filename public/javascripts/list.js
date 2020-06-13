$(function () {
$(".operate span ,.p-img img ").each(function () {
    $(this).click(function(){
        var title = $(this).parent().parent().siblings(".attr").find("em").text()
        var pice = $(this).parent().parent().siblings(".price").find("i").text()
        pice=pice.replace("¥", "");
        var herf ='/item?'+'title='+title+'&pice='+pice
        console.log("herf",herf)
        $(this).parent().attr('href',herf);
    })
})

})