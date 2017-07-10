# pagifyJS v1.1.0
PagifyJS is a useful library for converting a plain HTML document into a paginated document, ideal for generating documentation, and PDF's.

The usage pattern is very simple and minimal. Simply include the JS library, initialize on load with the desired page height and specify your header/footer elements.

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
.pagify-header - one or many elements that repeat on every page.
.pagify-footer - one or many elements that repeat on every page.
```

##### Helper classes: All of these class elements are automatically populated
```
.pagify-current-page - the current document page
.pagify-total-pages - the total pages in the docment.
```

## Example Input

```
<div class="pagify-header" style="height: 30px">Title 30px</div>
<div style="height: 140px">Page Content 140px</div>
<div style="height: 100px">Page Content 100px</div>
<div style="height: 40px">Page Content 40px</div>
<div style="height: 220px">Page Content 220px</div>
<div style="height: 120px">Page Content 120px</div>
<div style="height: 120px">Page Content 120px</div>
<div style="height: 70px">Page Content 70px</div>
<div style="height: 90px">Page Content 90px</div>
<div style="height: 100px">Page Content 100px</div>
<div class="pagify-footer"><span class="pagify-current-page">x</span> of <span class="pagify-total-pages">x</span></div>
```

## Example Output:

```
<div id="pagify-page-1" class="pagify">
    <div style="height: 440px">
        <div class="pagify-header" style="height: 30px">Title 30px</div>
        <div style="height: 140px">Page Content 140px</div>
        <div style="height: 100px">Page Content 100px</div>
        <div style="height: 40px">Page Content 40px</div>
    </div>
    <div class="pagify-footer"><span class="pagify-current-page">1</span> of <span class="pagify-total-pages">3</span>
    </div>
</div>
<div id="pagify-page-2" class="pagify">
    <div style="height: 440px">
        <div class="pagify-header" style="height: 30px">Title 30px</div>
        <div style="height: 220px">Page Content 220px</div>
        <div style="height: 120px">Page Content 120px</div>
    </div>
    <div class="pagify-footer"><span class="pagify-current-page">2</span> of <span class="pagify-total-pages">3</span>
    </div>
</div>
<div id="pagify-page-3" class="pagify">
    <div style="height: 440px">
        <div class="pagify-header" style="height: 30px">Title 30px</div>
        <div style="height: 120px">Page Content 120px</div>
        <div style="height: 70px">Page Content 70px</div>
        <div style="height: 90px">Page Content 90px</div>
        <div style="height: 100px">Page Content 100px</div>
    </div>
    <div class="pagify-footer"><span class="pagify-current-page">3</span> of <span class="pagify-total-pages">3</span>
    </div>
</div>
```