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
                return "<div style='background-color: red; width: 100%; height: 75px;' />";
            }
        }
    },
    hooks: {
        "page": function(page) {
            alert('at hook');
        }
    }
};