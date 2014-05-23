$(document).ready(function() {
    $.getJSON('assets.json', function(data) {
        $.each(data.nipples, function(k, nipple) {
            var html = '<div class="nipple"><audio><source src="' + nipple.file + '" type="audio/mpeg"></audio><button class="btn btn-default">' + nipple.name + '</button></div>';

            $('#nipplecontainer').append(html);
        });

        $(document).on('click', '#nipplecontainer button', function(e) {
            console.info('hallo');
            $('#nipplecontainer audio').each(function() { 
                this.pause(); 
            });

            var audio = $(this).parent().find('audio')[0];
            audio.currentTime = 0;
            audio.load();
            audio.play();
        });        
    });


});