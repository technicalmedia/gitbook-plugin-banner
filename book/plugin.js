require(["gitbook"], function(gitbook) {
  gitbook.events.bind("page.change", function() {
  	$(".book").prepend('<div style="position: absolute; top: 0; height: 75px; right:0; width: 300px; background-color: blue;">' 
  		+ '<a href="http://www.cmichaelgraham.io"><img src="book/cmg.jpg" /></a>' 
  		+ '</div>');
  	$(".book").prepend('<div style="position: absolute; top: 75px; bottom: 0; right:0; width: 300px; background-color: lightblue;"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- responsive-ad --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1172196663696524" data-ad-slot="7874509891" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>');
  	$(".book-body").css({
  		right: '300px'
  	});
  });
});