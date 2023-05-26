// class Rectangle {
//     constructor(shapecolor, textcolor, logotext) {
//         this.shapecolor = shapecolor;
//         this.textcolor = textcolor;
//         this.logotext = logotext;
        
//     }
//     renderShape()  {
//         return `<svg version="1.1"
//         width="300" height="300"
//         xmlns="http://www.w3.org/2000/svg">
   
//      <rect x = "100" y = "100" width="200" height="100" fill="${shapecolor}" />
   
//      <text x="200" y="170" font-size="60" text-anchor="middle" fill="${textcolor}">${logotext}</text>
   
//    </svg>
//         `
//     }
// }

// module.export = Rectangle

const generateRectangle = (shapecolor, textcolor, logotext) => {
    return `<svg version="1.1"
     width="300" height="300"
     xmlns="http://www.w3.org/2000/svg">

  <rect x = "100" y = "100" width="200" height="100" fill="${shapecolor}" />

  <text x="200" y="170" font-size="60" text-anchor="middle" fill="${textcolor}">${logotext}</text>

</svg>`
}

module.exports = {generateRectangle}