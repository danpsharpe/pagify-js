var pagify = {
    init: function ( props ) {
        this.pageHeight = props.pageHeight;
        this.getHeader();
        this.getFooter();
        this.getContent();
        this.setcontentHeight();
        this.pagifyContent();
    },
    getHeader: function () {
        var height = 0;
        var html = '';
        $('.page-header').each(function () {
            height += parseInt($(this).outerHeight(true));
            html += $(this).wrap('<div class="temp-element"/>').parent().html();
            $('div.temp-element').remove();
        });
        this.headerHeight = height;
        this.headerHTML = html;
    },
    getFooter: function () {
        var height = 0;
        var html = '';
        $('.page-footer').each(function () {
            height += parseInt($(this).outerHeight(true));
            html += $(this).wrap('<div class="temp-element"/>').parent().html();
            $('div.temp-element').remove();
        });
        this.footerHeight = height;
        this.footerHTML = html;
    },
    getContent: function () {
        var elements = [];
        $('.page-content').each(function () {
            elements.push({
                height: parseInt($(this).outerHeight(true)),
                html: $(this).wrap('<div class="temp-element"/>').parent().html()
            });
            $('div.temp-element').remove();
        });
        this.contentElements = elements;
    },
    setcontentHeight: function () {
        this.contentHeight = (this.pageHeight - this.footerHeight);
    },
    pagifyContent: function () {
        var headerHeight = this.headerHeight;
        var headerHTML = this.headerHTML;
        var footerHTML = this.footerHTML;
        var contentHeight = this.contentHeight;
        var currentContentHeight = headerHeight;
        var currentPage = 1;
        var html = '';
        $(this.contentElements).each(function (index) {
            currentContentHeight += this.height;

            if (index == 0) {
                // Create first page.
                html += '<div id="page-' + currentPage + '" class="page"><div style="height: ' + contentHeight + 'px">';
                html += headerHTML;
            } else if (currentContentHeight > contentHeight) {
                // Create a new page.
                currentPage++;
                html += '</div>';
                html += footerHTML;
                html += '</div>';
                html += '<div id="page-' + currentPage + '" class="page"><div style="height: ' + contentHeight + 'px">';
                html += headerHTML;
                currentContentHeight = headerHeight + this.height;
            }

            // Add this content element.
            html += this.html;
        });

        html += '</div>';
        html += footerHTML;
        html += '</div>';

        $('body').append(html);

        var thisPage = 0;
        $('.page').each(function () {
            thisPage++;
            $(this).find('.pagify-current-page').text(thisPage);
        });
        $('.pagify-total-pages').text(thisPage);
    }
};