const fs = require('fs');

class Triangle {
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

                <polygon points="150 0, 300 200, 0 200" fill="${this.shapeColor}" />
      
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.stringColor}">${this.string}</text>
      
            </svg>
        </body>
        </html>`
        fs.writeFile('index.html', doc, err => {if(err){
            console.error(err)
        }})
        return doc
    }
}

module.exports = Triangle