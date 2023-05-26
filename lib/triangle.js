const generateTriangle = (shapecolor, textcolor, logotext) => {
    return `<svg version="1.1"
     width="300" height="300"
     xmlns="http://www.w3.org/2000/svg">

  <polygon points="100, 100 200, 300 300, 100" fill ="${shapecolor}"/> 

  <text x="200" y="170" font-size="60" text-anchor="middle" fill="${textcolor}">${logotext}</text>

</svg>`
}

module.exports = {generateTriangle}