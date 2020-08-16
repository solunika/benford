let printAsTable = function (BenfordTable)
{
    const width = 59;
    let theConsole ="";
    theConsole =theConsole + "<pre>";
    theConsole =theConsole + "\n" + "-".repeat(width) + "<br/>";
    theConsole =theConsole + "\n" + "|   |      Data       |    Benford      |    Difference   |<br/>";
    theConsole =theConsole + "\n" + "| n |  Freq     Pct   |  Freq     Pct   |  Freq     Pct   |<br/>";
    theConsole =theConsole + "\n" + "-".repeat(width) + "<br/>";

    for(let item of BenfordTable)
    {
        theConsole =theConsole + "" + `| ${item["n"]} `;
        theConsole =theConsole + "" + `| ${item["dataFrequency"].toString().padStart(6, " ")} `;
        theConsole =theConsole + "" + `| ${(item["dataFrequencyPercent"] * 100).toFixed(2).padStart(6, " ")} `;
        theConsole =theConsole + "" + `| ${item["BenfordFrequency"].toFixed(0).padStart(6, " ")} `;
        theConsole =theConsole + "" + `| ${(item["BenfordFrequencyPercent"] * 100).toFixed(2).padStart(6, " ")} `;
        theConsole =theConsole + "" + `| ${item["differenceFrequency"].toFixed(0).padStart(6, " ")} `;
        theConsole =theConsole + "" + `| ${(item["differenceFrequencyPercent"] * 100).toFixed(2).padStart(6, " ")} `;
        theConsole =theConsole + "" + "|<br/>";
    }

    theConsole =theConsole + "\n" + "-".repeat(width) + "<br/>";
    theConsole =theConsole + "</pre>"
    console.log(theConsole);
    flushToFile(theConsole, "benford.html");
}


let printAsGraph= function (BenfordTable, outputHtmlName)
{
    let theConsole ="";
    theConsole =theConsole + "<pre>";
    theConsole =theConsole + "<br/>  <span class='greenbg'>Benford's Distribution</span><br/>";
    theConsole =theConsole + "  <span class='redbg'>Data                  </span><br/><br/>";

    theConsole =theConsole + "  0%       10%       20%       30%       40%       50%<br/>";
    theConsole =theConsole + "  |         |         |         |         |         |<br/>";

    for(let item of BenfordTable)
    {
        theConsole =theConsole + `${item["n"]} <span class="greenbg">${" ".repeat(item["BenfordFrequencyPercent"] * 100)}</span><br/>  <span class="redbg">${" ".repeat(item["dataFrequencyPercent"] * 100)}</span><br/>`;
    }
    theConsole =theConsole + "</pre>";

    flushToFile(theConsole, outputHtmlName);
}




const flushToFile = function(text, fileName){

    let html = `<!DOCTYPE html>

    <html lang="en">
    
    <head>
        <title>CodeDrome: Benford's Law</title>
        <meta charset="utf-8" />
        <link href="css.css" rel="stylesheet" />
    </head>
    
    <body>
    
        <div class="maindiv">
    
            <div class="banner"></div>
    
            <div class="linkpanel"><a href="http://www.codedrome.com" target="_blank">codedrome.com</a></div>
    
            <div id="console" class="roundcorners console">
            MARKER
            </div>
    
        </div>
    
        
    
    </body>
    
    </html>`;

    fs = require('fs');
    

    html = html.replace("MARKER",text);
    fs.writeFile(fileName, html, function (err) {
        if (err) return console.log(err);                
    })
}



module.exports ={
    printAsTable:printAsTable,
    printAsGraph:printAsGraph
}

