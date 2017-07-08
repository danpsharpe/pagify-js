# pagifyJS v1.0.1
Logic for converting an HTML document into a PDF'd paginated printable format

This script is a use case for converting ordinary html that has been broken up into header, content and footer segments, and automatically creates pages based on that data.

## Usage

```
// Include Jquery and pagifJS.
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="pagifyjs-1.0.1.min.js"></script>

<script>
    $(function () {
        pagifyJS.init({
            pageHeight: <page height in pixels>
        });
    });
</script>
```
##### Within the BODY of your document, add content with:
```
.page-header - one or many elements that repeat on every page.
.page-content - chunked content that spans one or many pages. each block should be relatively small.
.page-footer - one or many elements that repeat on every page.
```

##### Helper classes: All of these class elements are automatically populated
```
.pagify-current-page - the current document page
.pagify-total-pages - the total pages in the docment.
```

## Example Input

```
<div class="page-header" style="height: 30px">Title 30px</div>
<div class="page-content" style="height: 140px">Page Content 140px</div>
<div class="page-content" style="height: 100px">Page Content 100px</div>
<div class="page-content" style="height: 40px">Page Content 40px</div>
<div class="page-content" style="height: 220px">Page Content 220px</div>
<div class="page-content" style="height: 120px">Page Content 120px</div>
<div class="page-content" style="height: 120px">Page Content 120px</div>
<div class="page-content" style="height: 70px">Page Content 70px</div>
<div class="page-content" style="height: 90px">Page Content 90px</div>
<div class="page-content" style="height: 100px">Page Content 100px</div>
<div class="page-footer"><span class="pagify-current-page">x</span> of <span class="pagify-total-pages">x</span></div>
```

## Example Output:

```
<div id="page-1" class="page">
    <div style="height: 440px">
        <div class="page-header" style="height: 30px">Title 30px</div>
        <div class="page-content" style="height: 140px">Page Content 140px</div>
        <div class="page-content" style="height: 100px">Page Content 100px</div>
        <div class="page-content" style="height: 40px">Page Content 40px</div>
    </div>
    <div class="page-footer"><span class="pagify-current-page">1</span> of <span class="pagify-total-pages">3</span>
    </div>
</div>
<div id="page-2" class="page">
    <div style="height: 440px">
        <div class="page-header" style="height: 30px">Title 30px</div>
        <div class="page-content" style="height: 220px">Page Content 220px</div>
        <div class="page-content" style="height: 120px">Page Content 120px</div>
    </div>
    <div class="page-footer"><span class="pagify-current-page">2</span> of <span class="pagify-total-pages">3</span>
    </div>
</div>
<div id="page-3" class="page">
    <div style="height: 440px">
        <div class="page-header" style="height: 30px">Title 30px</div>
        <div class="page-content" style="height: 120px">Page Content 120px</div>
        <div class="page-content" style="height: 70px">Page Content 70px</div>
        <div class="page-content" style="height: 90px">Page Content 90px</div>
        <div class="page-content" style="height: 100px">Page Content 100px</div>
    </div>
    <div class="page-footer"><span class="pagify-current-page">3</span> of <span class="pagify-total-pages">3</span>
    </div>
</div>
```