/*
 Copyright 2017 Daniel Sharpe <pagifyjs@dansharpe.com>
 https://github.com/itdansharpe/pagifyJS
 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var pagifyJS = {
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
        $('body > div.pagify-header').each(function () {
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
        $('body > div.pagify-footer').each(function () {
            height += parseInt($(this).outerHeight(true));
            html += $(this).wrap('<div class="temp-element"/>').parent().html();
            $('div.temp-element').remove();
        });
        this.footerHeight = height;
        this.footerHTML = html;
    },
    getContent: function () {
        var elements = [];
        $('body > div:not(.pagify-header):not(.pagify-footer)').each(function () {
            var height = parseInt($(this).outerHeight(true));
            height = $(this).outerHeight(true);
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
                html += '<div id="pagify-page-' + currentPage + '" class="pagify-page"><div style="height: ' + contentHeight + 'px">';
                html += headerHTML;
            } else if (currentContentHeight > contentHeight) {
                // Create a new page.
                currentPage++;
                html += '</div>';
                html += footerHTML;
                html += '</div>';
                html += '<div id="pagify-page-' + currentPage + '" class="pagify-page"><div style="height: ' + contentHeight + 'px">';
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
        $('body > div.pagify-page').each(function () {
            thisPage++;
            $(this).find('.pagify-current-page').text(thisPage);
        });
        $('.pagify-total-pages').text(thisPage);
    }
};