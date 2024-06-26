const Square = require('./square')

describe('Square', () => {
    test('should generate an html file with a square svg snippet', () => {
        let expectedHtml = `<!DOCTYPE html>
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
        const square = new Square();
        expect(square.render()).toEqual(expectedHtml)
    })
})