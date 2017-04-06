var FlickrFeed = (function () {
    function FlickrFeed($el) {
        this.$el = $el;
        this.interval = $el.data("interval") || 2000;
        this.searchTerm = $el.data("searchTerm") || "kittens";
        this.init();
    }
    FlickrFeed.prototype.init = function () {
        this.setupDom();
        this.startSlideShow();
    };
    FlickrFeed.prototype.setupDom = function () {
        this.$title = $("<h3 class=\"flickr-feed-search-term\"></h3>").appendTo(this.$el);
        this.$container = $("<div class=\"flickr-feed-images\"></div>").appendTo(this.$el);
        this.$image = $("<img class=\"flickr-feed-image\"/>").appendTo(this.$container);
        this.$title.text(this.searchTerm);
    };
    FlickrFeed.prototype.startSlideShow = function () {
        var _this = this;
        this.images = [];
        this.imageIndex = -1;
        this.$image.load(function () { return _this.onImageLoaded(); });
        this.getImages();
    };
    FlickrFeed.prototype.onImageLoaded = function () {
        var _this = this;
        setTimeout(function () { return _this.showNextImage(); }, this.interval);
    };
    FlickrFeed.prototype.getImages = function () {
        var _this = this;
        $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            tags: this.searchTerm,
            tagmode: "any",
            format: "json"
        }).done(function (data) { return _this.onFeedLoaded(data); });
    };
    FlickrFeed.prototype.onFeedLoaded = function (data) {
        this.images = data.items;
        this.imageIndex = -1;
        this.showNextImage();
    };
    FlickrFeed.prototype.showNextImage = function () {
        this.imageIndex++;
        if (this.imageIndex >= this.images.length) {
            this.getImages();
            return;
        }
        console.log("show image " + (this.imageIndex + 1) + " of " + this.images.length + " for " + this.searchTerm);
        this.$image.attr("src", this.images[this.imageIndex].media.m);
    };
    return FlickrFeed;
}());
$(function () {
    $(".flickr-feed").each(function () {
        new FlickrFeed($(this));
    });
});
