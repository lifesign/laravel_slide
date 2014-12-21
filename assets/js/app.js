Reveal.initialize({
    width: 1440,
    height: 1000,
    margin: 0.15,

    controls: true,
    progress: true,
    history: true,
    center: true,

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'assets/js/vendor/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'assets/js/vendor/reveal-plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'assets/js/vendor/reveal-plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'assets/js/vendor/reveal-plugin/highlight/highlight.pack.js', async: true, callback: function() {
            hljs.configure({ tabReplace: '  ' });
            hljs.initHighlightingOnLoad();
        } },
        { src: 'assets/js/vendor/reveal-plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'assets/js/vendor/reveal-plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
});
