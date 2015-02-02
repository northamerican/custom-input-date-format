# custom input date format
Experimental changing of input type=date formatting.

<a href="https://cdn.rawgit.com/north-is-northwest/custom-input-date-format/master/index.html">Demo</a>

###Supported on
Windows Chrome, Mac Chrome + <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#compat-desktop">browsers that may support it.</a>

###Dependencies
CSS (preferably SASS), jQuery, Adobe Blank font.

###How it works
Data attributes are generated and assigned to the data type=input element.
The input's shadow DOM elements are hidden using AdobeBlank font. 
The desired format is appended to the year, month and day elements using the CSS ::after pseudo-element.

###Why
To test the capabilities of CSS/Shadow DOM interaction and explore the customizing of the native HTML5/5.1 date picker. This is not something for use in production but simply a not-so-simple experiment.

###Shortcomings
Typing or clearing the input can be problematic but I imagine more conditions can be added to handle this.

I could find no way to simply hide the original elements of the date picker (like setting font-size or font-shrink to 0), so I resorted to AdobeBlank font to hide the original text of the input element. Thankfully, the ::after psuedo-element can have its own font specified, allowing custom content to be appended and displayed.

Although the Shadow DOM elements of the date input have attributes indicating the date (like [aria-valuenow]) for the year, month and day, CSS is unable to read them. So JS is used to apply attributes directly to the input element.
