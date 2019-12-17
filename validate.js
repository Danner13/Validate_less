var fs = require("fs");
fs.readFile("widget.less", "utf8", function(error, text) {
    if (error)
        throw error;

    const count = (text) => {
        const re = /{/g
        return ((text || '').match(re) || []).length
    }
    const count2 = (text) => {
        const re = /}/g
        return ((text || '').match(re) || []).length
    }

    console.log("count '{':", count(text));
    console.log("count '}':", count2(text));
});