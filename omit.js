;(function($){
    'use strict';
    
    $.fn.omit = function(options){
        var settings = $.extend({
            count: 100,
            mark: '...',
            hideClassName: 'om-hidden',
            markClassName: 'om-mark',
            clear: false
        }, options);
        
        return this.each(function(){
            $(this).find('.' + settings.markClassName).remove();
            var thisText = $(this).text();
            var textLength = thisText.length;
            if (textLength > settings.count) {
                if (settings.clear) {
                    $(this).html(thisText);
                } else {
                    var showText = thisText.substring(0, settings.count);
                    var hideText = thisText.substring(settings.count, textLength);
                    var insertText = showText;
                    insertText += '<span class="' + settings.hideClassName + '" style="display: none;">' + hideText + '</span>';
                    insertText += '<span class="' + settings.markClassName + '">' + settings.mark + '</span>';
                    $(this).html(insertText);
                }
            } else {
                $(this).html(thisText);
            }
        });
    };
}(jQuery));
