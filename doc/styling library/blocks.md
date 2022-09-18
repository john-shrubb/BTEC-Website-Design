Styling Blocks
==============

Creating a new block using the CSS libraries available can be done by applying a block class to a div element and placing all content inside of a `div.content-wrapper`. Adding a colour class is also recommended. See below for an example:

```html
<div class="block-h3 green-block">
	<div class="content-wrapper">
		<h3>Test Block</h3>
		<p>ABC</p>
	</div>
</div>
```

This produces the following result:

![Functioning example of the styling](./example%20images/block-h3%20green-block%20example.png)

## Current Block Types

Current allowed blocks are
- Blocks with H1 headings `div.block-h1`
- Blocks with H3 headings `div.block-h3`

*These blocks may be expanded upon in the future*

## Colour Types

Currently allowed block colours are
- Dark green background white text `div.green-block`
- Light gray background black text `div.gray-block`

*More colours are very likely to be added*