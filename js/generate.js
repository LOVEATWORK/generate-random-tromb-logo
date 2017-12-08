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

    var bgcol = hexToRgb(background);

    while (single_col == background) {
        single_col = getRandomItem();
    }

    $(".line").each(function(i, item) {
        $(item).attr("fill", single_col);
    });

    $(".box").attr("fill", background);
    $("body").css("background-color", 'rgba('+bgcol.r+','+bgcol.g+','+bgcol.b+',0.9)');

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

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
