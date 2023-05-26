
const generateCircle = (shapecolor, textcolor, logotext) => {
    return `<svg version="1.1"
     width="300" height="300"
     xmlns="http://www.w3.org/2000/svg">

  <circle cx="195" cy="150" r="100" fill="${shapecolor}" />

  <text x="200" y="170" font-size="60" text-anchor="middle" fill="${textcolor}">${logotext}</text>

</svg>`
}

module.exports = {generateCircle}