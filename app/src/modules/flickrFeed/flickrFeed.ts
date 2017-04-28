class FlickrFeed {
    imageIndex: number;
    images: Array<any>;
    interval: number;
    searchTerm: string;
    $container: JQuery;
    $image: JQuery;
    $title: JQuery;

    constructor(private $el: JQuery) {
        this.interval = $el.data("interval") || 2000;
        this.searchTerm = $el.data("searchTerm") || "kittens";
        this.init();
    }

    private init() {
        this.setupDom();
        this.startSlideShow();
    }

    private setupDom() {
        this.$title = $("<h3 class=\"flickr-feed-search-term\"></h3>").appendTo(this.$el);
        this.$container = $("<div class=\"flickr-feed-images\"></div>").appendTo(this.$el);
        this.$image = $("<img class=\"flickr-feed-image\"/>").appendTo(this.$container);
        this.$title.text(this.searchTerm);
    }

    private startSlideShow() {
        this.images = [];
        this.imageIndex = -1;
        this.$image.load(() => this.onImageLoaded());
        this.getImages();
    }

    private onImageLoaded() {
        setTimeout(() => this.showNextImage(), this.interval);
    }

    private getImages() {
        $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            tags: this.searchTerm,
            tagmode: "any",
            format: "json"
        }).done(data => this.onFeedLoaded(data));
    }

    private onFeedLoaded(data) {
        this.images = data.items;
        this.imageIndex = -1;
        this.showNextImage();
    }

    private showNextImage() {
        this.imageIndex++;

        if (this.imageIndex >= this.images.length) {
            this.getImages();
            return;
        }

        console.log(`show image ${this.imageIndex + 1} of ${this.images.length} for ${this.searchTerm}`);
        this.$image.attr("src", this.images[this.imageIndex].media.m);
    }
}

$(function () {
    $(".flickr-feed").each(function () {
        new FlickrFeed($(this));
    });
});