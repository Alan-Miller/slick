export default function(text) {
  return {
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='100px' width='320px'>` +
      `<text x='0' y='45' fill='rgba(255, 255, 255, .55)' font-size='70'>${text}</text>` +
      `<text x='0' y='45' fill='rgba(255, 255, 255, .55)' font-size='70'>${text}</text>` +
      `</svg>")`
  }
}


const text = "leaves"
const length = text.length

const fontSize = (mult) => {
  const fontSize = `calc(${~~(mult / length)}vh)`
  return fontSize
}



const fdas = [
  { position: 'absolute', top: '-20vh', left: '-10vw', transform: 'rotate(-55deg)', fontSize: fontSize(100) },
  { position: 'absolute', top: '-20vh', left: '50vw', transform: 'rotate(-55deg)', fontSize: fontSize(100) },

  { position: 'absolute', top: '30vh', left: '20vw', transform: 'rotate(35deg)', fontSize: fontSize(100) },
  { position: 'absolute', top: '30vh', left: '80vw', transform: 'rotate(35deg)', fontSize: fontSize(100) },

  { position: 'absolute', top: '60vh', left: '-10vw', transform: 'rotate(-55deg)', fontSize: fontSize(100) },
  { position: 'absolute', top: '60vh', left: '50vw', transform: 'rotate(-55deg)', fontSize: fontSize(100) },

  { position: 'absolute', top: '90vh', left: '20vw', transform: 'rotate(35deg)', fontSize: fontSize(100) },
  { position: 'absolute', top: '90vh', left: '80vw', transform: 'rotate(35deg)', fontSize: fontSize(100) },



  { position: 'absolute', top: '10vh', left: '60vw', transform: 'rotate(180deg)', fontSize: fontSize(40) },
  { position: 'absolute', top: '10vh', left: '0vw', transform: 'rotate(-55deg)', fontSize: fontSize(40) },

  { position: 'absolute', top: '70vh', left: '0vw', transform: 'rotate(-55deg)', fontSize: fontSize(40) },
  { position: 'absolute', top: '70vh', left: '60vw', transform: 'rotate(-55deg)', fontSize: fontSize(40) },



  { position: 'absolute', left: '10%' },
]



{fdas.map((word, i) => (
  <div className="word" style={word}>
    {text}
  </div>
))}