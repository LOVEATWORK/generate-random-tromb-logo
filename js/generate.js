var colors = [
    '#FFFFFF',
    '#000000',
    '#428670',
    '#48141A',
    '#E3993F',
    '#CA393B',
    '#12474C'
];

$("document").ready(function() {
    var background = getRandomItem();
    var single_col = getRandomItem();

    while (single_col == background) {
        single_col = getRandomItem();
    }

    $(".line").each(function(i, item) {
        $(item).attr("fill", single_col);
    });

    $(".box").attr("fill", background);
    $("body").css("background-color", background);

})

$("#link").on('click', function(){

    //get svg element.
    var svg = $("svg")[0];

    //get svg source.
    var serializer = new XMLSerializer();
    var source = serializer.serializeToString(svg);

    //add name spaces.
    if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
        source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
        source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }

    //add xml declaration
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

    //convert svg source to URI data scheme.
    var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

    //set url value to a element's href attribute.

    $("#link").attr("href", url);


});



function getRandomItem() {
    return rnd = colors[Math.floor(Math.random()*colors.length)];
}