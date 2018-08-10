/*
 Copyright 2017 Daniel Sharpe <dan@dansharpe.com>
 https://github.com/itdansharpe/pagifyJS
 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var pagifyJS = {
  init: function(props) {
    this.pageHeight = props.pageHeight ? props.pageHeight : "1000";
    this.heightCalculator = props.heightCalculator ? props.heightCalculator : "oh";
    this.getHeader();
    this.getFooter();
    this.getContent();
    this.setContentHeight();
    this.pagifyContent();
  },
  getHeader: function() {
    var height = 0;
    var heightCalculator = this.heightCalculator;
    var html = "";
    $("body > div.pagify-header").each(function() {
      if (heightCalculator == "oh") {
        height += parseInt($(this).outerHeight(true));
      } else {
        height += parseInt(this.clientHeight);
      }
      html += $(this).wrap('<div class="temp-element"/>').parent().html();
      $("div.temp-element").remove();
    });
    this.headerHeight = height;
    this.headerHTML = html;
  },
  getFooter: function() {
    var height = 0;
    var heightCalculator = this.heightCalculator;
    var html = "";
    $("body > div.pagify-footer").each(function() {
      if (heightCalculator == "oh") {
        height += parseInt($(this).outerHeight(true));
      } else {
        height += parseInt(this.clientHeight);
      }
      html += $(this).wrap('<div class="temp-element"/>').parent().html();
      $("div.temp-element").remove();
    });
    this.footerHeight = height;
    this.footerHTML = html;
  },
  getContent: function() {
    var elements = [];
    var height = 0;
    var heightCalculator = this.heightCalculator;
    $("body > div:not(.pagify-header):not(.pagify-footer):not(.pagify-page):not(.pagify-exclude)").each(function() {
      if (heightCalculator == "oh") {
        height = parseInt($(this).outerHeight(true));
      } else {
        height = parseInt(this.clientHeight);
      }

      elements.push({
        height: parseInt(height),
        pageBreak: !!$(this).hasClass("pagify-force-page-break"),
        html: $(this).wrap('<div class="temp-element"/>').parent().html()
      });
      $("div.temp-element").remove();
    });
    this.contentElements = elements;
  },
  setContentHeight: function() {
    this.contentHeight = this.pageHeight - this.footerHeight;
  },
  pagifyContent: function() {
    var headerHeight = this.headerHeight;
    var headerHTML = this.headerHTML;
    var footerHTML = this.footerHTML;
    var contentHeight = this.contentHeight;
    var currentContentHeight = headerHeight;
    var currentPage = 1;
    var html = "";
    $(this.contentElements).each(function(index) {
      currentContentHeight += this.height;

      if (index == 0) {
        html += '<div id="pagify-page-' + currentPage + '" class="pagify-page"><div style="height: ' + contentHeight + 'px">';
        html += headerHTML;
      } else if (currentContentHeight > contentHeight || this.pageBreak) {
        currentPage++;
        html += "</div>";
        html += footerHTML;
        html += "</div>";
        html += '<div id="pagify-page-' + currentPage + '" class="pagify-page"><div style="height: ' + contentHeight + 'px">';
        html += headerHTML;
        currentContentHeight = headerHeight + this.height;
      }
      html += this.html;
    });

    html += "</div>";
    html += footerHTML;
    html += "</div>";

    $("body").append(html);

    var thisPage = 0;
    $("body > div.pagify-page").each(function() {
      thisPage++;
      $(this).find(".pagify-current-page").text(thisPage);
    });
    $(".pagify-total-pages").text(thisPage);
  }
};
