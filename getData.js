$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    data['people'].forEach(function (d) {
        $('#astroNames').append('<img id="'+d['name']+'Img" src="SpaceCore.png" alt="Portal 2 Space Core" style="width: 150px">');
        var left = (Math.random()-0.5)*1200;
        var randRot = Math.random()*361;
        document.getElementById(d['name']+'Img').style.transform=('rotate('+randRot+'deg)');
        document.getElementById(d['name']+'Img').style.left=(left+"px");
        $('#astroNames').append('<li id="'+d['name']+'">' + d['name']+ '</li>');
        document.getElementById(d['name']).style.left=(left+"px");
    });
});