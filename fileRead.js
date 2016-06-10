var fs = require('fs');

fs.readFile('/home/shashank/Downloads/Magic Sword - Uprising.mp3', "base64", function(err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});
console.log("===>>   Reading file....");
