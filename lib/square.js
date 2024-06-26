const fs = require('fs');

class Square {
    constructor(shapeColor, string, stringColor){
        this.shapeColor = shapeColor;
        this.string = string;
        this.stringColor = stringColor
    }
    render(){
        let doc = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>LogoMaker</title>
        </head>
        <body>
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <rect x="1" y="1" width="200" height="200" fill="${this.shapeColor}" />
      
                <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.stringColor}">${this.string}</text>
      
            </svg>
        </body>
        </html>`
        fs.writeFile('index.html', doc, err => {if(err){
            console.error(err)
        }})
        return doc
    }
}

module.exports = Square