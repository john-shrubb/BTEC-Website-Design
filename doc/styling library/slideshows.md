Slideshow Blocks
================

Slideshow blocks currently have no smooth transition or navigation controls however I'm not sure how you could expect so much from such an incomptent person such as myself.

## Defining a Slideshow Block

Slideshow blocks are simply normal blocks but with a couple of extra classes. See an example defined below:

```html
<div class="block-h1 slideshow-block slideshow-dark-overlay">
	<div class="slideshow-images">
		<img src="https://example.com/1.jpg" />
		<img src="https://example.com/2.jpg" />
		<img src="https://example.com/3.jpg" />
	</div>

	<div class="content-wrapper">
		<h1>Test Block</h1>
		<p>ABC.</p>
	</div>
</div>
```

## Configuration

Slideshow blocks work with both H3 blocks and H1 blocks. They also support `.slideshow-dark-overlay` which places a dark overlay over the picture as to improve text readability.

## Plans for the Future

I plan to introduce navigation of the slideshow. This will add arrows on either side of the screen which allow the user to go forwards and backwards in the slideshow.