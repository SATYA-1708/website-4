const { Jimp } = require('jimp');
const path = require('path');

const inputFile = path.join(__dirname, 'public', 'logo.png');
const outputFile = path.join(__dirname, 'public', 'logo-v3.png');

async function processImage() {
  try {
    const image = await Jimp.read(inputFile);
    
    // First, make white background transparent
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      
      // If it's mostly white or very light gray
      if (min > 230 && (max - min) < 20) {
        this.bitmap.data[idx + 3] = 0; // Make transparent
      }
    });

    // Find actual content boundaries
    let top = image.bitmap.height;
    let bottom = 0;
    let left = image.bitmap.width;
    let right = 0;

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const alpha = this.bitmap.data[idx + 3];
      if (alpha > 10) { // If pixel is visible
        if (y < top) top = y;
        if (y > bottom) bottom = y;
        if (x < left) left = x;
        if (x > right) right = x;
      }
    });

    console.log('Bounds:', { top, bottom, left, right });

    // Crop if valid bounds found
    if (top < bottom && left < right) {
      const width = right - left + 1;
      const height = bottom - top + 1;
      // Add a small 10px padding
      const pad = 10;
      const cropLeft = Math.max(0, left - pad);
      const cropTop = Math.max(0, top - pad);
      const cropWidth = Math.min(image.bitmap.width - cropLeft, width + pad * 2);
      const cropHeight = Math.min(image.bitmap.height - cropTop, height + pad * 2);
      
      image.crop({ x: cropLeft, y: cropTop, w: cropWidth, h: cropHeight });
      console.log('Cropped to:', cropWidth, 'x', cropHeight);
    } else {
      console.log('Could not find bounds. Image might be empty.');
    }

    await image.write(outputFile);
    console.log('Saved to', outputFile);

  } catch (e) {
    console.error('Error processing image:', e);
  }
}

processImage();
