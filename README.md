# Astro vs. Express APIs

I am currently learning about express.js from Scott Moss on Frontend Masters. It is cool and all, but I do not like the templating engines that it wants you to use. So here I am trying to build out the same APIs that I am building for my course, with the same middleware and data validations, but with a way that I am familiar with.

Let's test out the limitations of Astro vs. Express.

## SSR in Astro.

We have to tell astro that we want some of the rendering of our app to take place on the server. I know that we will want most of the site to be static, and for our API endpoints to be sending back HTMX. We can tell Astro to configure all of this in the `astro.config.mjs` file.

Well after a little bit of searching through the docs, it looks like I can use express as an adapter for server side rendered stuff. Neat-o! But for now, let's try out what Astro's own middleware can handle before using express