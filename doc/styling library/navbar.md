Navigation Bar
==============

The navigation bar is automatically affixed to the top of the page though I plan to make this attachable to any part of the page or just remain as a non fixed element.

## Defining the Navigation Bar

The navigation bar can be defined with `div.nav-bar`. In future I plan to add support to style this navbar with different colours such as red and green without editing the CSS manually.

## Structure of a Navigation Bar

A navigation bar is structured as follows:

```html
<div class="nav-bar">
    <a href="#">
        <h3>My Company</h3>
    </a>

    <div class="a-wrapper">
        <a href="#">About</a>
        <a href="#">Contact</a>
    </div>

    <div class="mobile-a-wrapper">
        <a href="#">About</a>
        <a href="#">Contact</a>
    </div>
</div>