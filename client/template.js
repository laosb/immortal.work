Template.post_item.onRendered(function() {
    $(this.find('.zone-wrapper')).css('background', randomColor({
        luminosity: 'dark',
        hue: 'blue'
    }));
});
