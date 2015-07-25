module.exports = {
    book: {
        assets: "./book",
        css: [
          "styles.css"
        ],
        html: {
            "body:start": function(a) {
                // console.log(JSON.stringify(a));
                var ret = '<div style="position: absolute; top: 0; height: 75px; right:0; width: 300px; background-color: white;">' 
                            + '<a href="http://www.cmichaelgraham.io" target="_blank"><img src="' + a.staticBase + '/plugins/gitbook-plugin-banner/cmg.jpg" style="height: 59px; width: 59px; margin: 8px 0px 8px 0px" /></a>' 
                            + '<a href="http://www.cmichaelgraham.io/building-information-systems" target="_blank"><img src="' + a.staticBase + '/plugins/gitbook-plugin-banner/plotter.jpg" style="height: 59px; width: 59px; margin: 8px 0px 8px 21px" /></a>' 
                            + '<a href="http://www.cmichaelgraham.io/aurelia-typescript-samples" target="_blank"><img src="' + a.staticBase + '/plugins/gitbook-plugin-banner/aurelia.jpg" style="height: 59px; width: 59px; margin: 8px 0px 8px 21px" /></a>' 
                            + '<a href="http://www.technicalmedia.com" target="_blank"><img src="' + a.staticBase + '/plugins/gitbook-plugin-banner/tm.jpg" style="height: 59px; width: 59px; margin: 8px 0px 8px 21px" /></a>' 
                            + '</div>';

                ret += '<div style="position: absolute; top: 75px; bottom: 0; right:0; width: 300px; background-color: white;"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- responsive-ad --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1172196663696524" data-ad-slot="7874509891" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>';
                return ret; // "<div style='background-color: red; width: 100%; height: 75px;' />";
            }
        }
    }
};