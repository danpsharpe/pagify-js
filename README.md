# pagify
Logic for converting an HTML document into a PDF'd paginated printable format

This script is a use case for converting ordinary html that has been broken up into header, content and footer segments, and automatically creates pages based on that data.

## Example Input

```
<div class="page-header">
    LOGO 30px
    <div style="height: 10px;"></div>
</div>
<div class="page-content">
    Page Content 140px
    <div style="height: 120px;"></div>
</div>
<div class="page-content">
    Page Content 100px
    <div style="height: 80px;"></div>
</div>
<div class="page-content">
    Page Content 40px
    <div style="height: 20px;"></div>
</div>
<div class="page-footer">
    <span class="current-page">x</span> of <span class="total-pages">x</span>
</div>
```

## Example Output:

```
<div id="page-1" class="page">
    <div class="page-content-zone" style="height: 440px">
        <div class="page-header">
            LOGO 30px
            <div style="height: 10px;"></div>
        </div>
        <div class="page-content">
            Page Content 140px
            <div style="height: 120px;"></div>
        </div>
        <div class="page-content">
            Page Content 100px
            <div style="height: 80px;"></div>
        </div>
        <div class="page-content">
            Page Content 40px
            <div style="height: 20px;"></div>
        </div>
    </div>
    <div class="page-footer"><span class="current-page">1</span> of <span class="total-pages">3</span></div>
</div>
```

## Visual Preview:

[Preview](http://imgur.com/a/f29Kl)
