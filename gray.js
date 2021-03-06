/**
 * Make color images gray.
 *
 * @param {Image} image The instance of Image
 * @returns {string} The src of gray image
 */
function gray(image) {
  const width = image.width;
  const height = image.height;

  const canvas = document.querySelector('#canvas');
  const context = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;

  context.drawImage(image, 0, 0);

  const imgPixels = context.getImageData(0, 0, width, height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * 4 * width + x * 4;
      const avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;

      imgPixels.data[i] = avg;
      imgPixels.data[i + 1] = avg;
      imgPixels.data[i + 2] = avg;
    }
  }

  context.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

  return canvas.toDataURL();
}
