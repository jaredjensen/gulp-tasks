/// <reference types="jquery" />
declare class FlickrFeed {
    private $el;
    imageIndex: number;
    images: Array<any>;
    interval: number;
    searchTerm: string;
    $container: JQuery;
    $image: JQuery;
    $title: JQuery;
    constructor($el: JQuery);
    private init();
    private setupDom();
    private startSlideShow();
    private onImageLoaded();
    private getImages();
    private onFeedLoaded(data);
    private showNextImage();
}
