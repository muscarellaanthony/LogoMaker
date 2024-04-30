const Circle = require('./circle')

describe('Circle', () => {
    test('should generate an html file with a circle svg snippet', () => {
        let expectedHtml = `<!DOCTYPE html>
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
        console.log(expectedHtml)
        const circle = new Circle();
        expect(circle.render()).toEqual(expectedHtml)
    })
})