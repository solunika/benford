// Extract data with `sharp` (faster)
var image = require('get-image-data/native');
let imageName='myImage01.jpg';
let printer = require('../js/printer');
let benford = require('../js/benford');

image(`./images/${imageName}`, function (err, info) {
    var data = info.data
    var height = info.height
    var width = info.width
    let bfData = [];

    for (var i = 0, l = data.length; i < l; i += 4) {
        var red = data[i]
        var green = data[i + 1]
        var blue = data[i + 2]
        var alpha = data[i + 3]
        bfData.push(red + green + blue);        
    }

    //printAsTable(calculateBenford(bfData))
    let fileOutuptName = imageName.split(".")[0];
    printer.printAsGraph(benford.calculateBenford(bfData), `out/${fileOutuptName}.html`);
})

