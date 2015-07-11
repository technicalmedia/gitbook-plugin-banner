module.exports = {
    book: {
        //assets: "./book",
        //js: [
        //    "plugin.js"
        //],
        //css: [
        //  "styles.css"
        //],
        html: {
            "body:start": function() {
                // Required to including this way because raphael is non-AMD compliant
                return "<div style='background-color: red; width: 100%; height: 75px;' />";
            }
        }
    }
};