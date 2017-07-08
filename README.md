# pagify v1.0.1
Logic for converting an HTML document into a PDF'd paginated printable format

This script is a use case for converting ordinary html that has been broken up into header, content and footer segments, and automatically creates pages based on that data.

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