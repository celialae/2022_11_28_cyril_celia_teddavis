
console.log("helper")

function optimizeCanvas(cnv) {
  // Get the DPR and size of the canvas
  const dpr = window.devicePixelRatio
  const rect = cnv.getBoundingClientRect()

  // Set the "actual" size of the canvas
  cnv.width = rect.width * dpr;
  cnv.height = rect.height * dpr;

  // Scale the context to ensure correct drawing operations
  cnv.getContext('2d').scale(dpr, dpr)

  // Set the "drawn" size of the canvas
  cnv.style.width = `${rect.width}px`;
  cnv.style.height = `${rect.height}px`;
}

function mapRange (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}