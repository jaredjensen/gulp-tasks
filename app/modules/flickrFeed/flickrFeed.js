(function ($) {

    var INTERVAL = 2000;
    var SEARCH_TERM = 'kittens';
    var $el = $('.flickr-feed');
    var $title = $el.find('.flickr-feed-search-term');
    var $container = $el.find('.flickr-feed-images');
    var $image = $('<img class="flickr-feed-image"/>').appendTo($container);
    var images = [];
    var imageIndex = -1;

    init();

    function init() {
        $image.load(function () {
            setTimeout(showNextImage, INTERVAL);
        });
        $title.text(SEARCH_TERM);
        getImages();
    }

    function getImages() {
        $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', {
            tags: SEARCH_TERM,
            tagmode: 'any',
            format: 'json'
        }).done(function (data) {
            images = data.items;
            imageIndex = -1;
            showNextImage();
        });
    }

    function showNextImage() {
        imageIndex++;

        if (imageIndex >= images.length) {
            getImages();
            return;
        }

        $image.attr('src', images[imageIndex].media.m);
    }

} (jQuery));
