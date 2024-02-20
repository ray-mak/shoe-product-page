<h1>Overview</h1>
<p>In this challenge, I built an E-commerce product page that incorporates a featured image, lightbox, image carousel and a cart function.</p>
<h2>The Challenge</h2>

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it


<h2>Screenshot</h2>
<img src="https://github.com/ray-mak/shoe-product-page/assets/154634286/f126390f-0b76-4860-99a9-052b7d587cae" alt="screenshot of page"/>

<h1>My Process</h1>
<p>This was by far the toughest challenge I've done so far. There are a lot of different components I had to integrate into this product page. But as far as the process, I created the header/nav bar first. First I created it for desktop, then for mobile. This included styling and creating a hamburger menu for mobile.</p>
<p>After that, I styled the product container for desktop and for mobile. After getting the layout of the product container, I wrote javscript for the featured image, which allows the user to change the featured image depending on the thumbnail they click.</p>
<p>Then I created the lightbox container in html and css, and added the javascript to make it functional. Since mobile does not use lightbox, I had to hide the display of the product container and create a new image carousel for mobile.</p>
<p>Lastly I had to add functionality to the add to cart button. I needed to add javascript to so that the cart updated when items were added or deleted.</p>

<h2>Built WIth</h2>

  - HTML
  - CSS
  - Vanilla JS

<h2>What I Learned</h2>
<p>I learned a lot while working on this challenge. The first being how to create a lightbox. I learned how to write script for a lightbox as well as image carousel and how to cycle through images.</p>
<p>I also learned how to impement a cart. I wrote the code so that it should work with different types of products. I learned that you can't add event listeners to dynamically created elements and had to use event delegation. This has been the most complex page I've built so far, and it was fun putting all these components together.</p>

<h1>Author</h1>
<p>Ray Mak</p>
https://www.frontendmentor.io/profile/ray-mak
