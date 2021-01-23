# gray-image

Make color images gray.

## Demo

Before:

![cat](./cat.png)

After:

![gray-cat](./gray-cat.png)

## Usage

```js
/**
 * image: instance of Image 
 * return: string
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

const sourceImage = new Image();
sourceImage.src = 'cat.png';
const image = new Image;
image.src = gray(sourceImage);
```

## Lisence

MIT

