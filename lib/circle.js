const fs = require('fs')

class Circle {
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
        
                <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
              
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.stringColor}">${this.string}</text>
              
              </svg>
        </body>
        </html>`
        fs.writeFile('index.html', doc, err => {if(err){
            console.error(err)
        }})
        return doc
    }
}

module.exports = Circle



// {
//     fs.writeFile('index.html', `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>LogoMaker</title>
//     </head>
//     <body>
//         <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
//             <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
          
//             <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.stringColor}">${this.string}</text>
          
//           </svg>
//     </body>
//     </html>`, err => {if (err){
//         console.error(err)
//     }}
// )
// }
