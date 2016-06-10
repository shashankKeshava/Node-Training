var colors = require("colors");
console.log("===>  Node is life\n\n".rainbow);


colors.setTheme({
    mod1_warn: 'cyan',
    mod1_error: 'red',
    mymod2_note: 'yellow',
    my_info: 'green'
});

console.log("This is a helpful message".mymod2_note);
console.log("This is a err message".mod1_error);
console.log("This is a warning ".mod1_warn);
console.log("General Blah blah ... ".my_info);
