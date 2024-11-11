import BA from '../img/street-BA.jpg';
export class Image {
  insertImage() {
    const img = document.createElement('img');
    img.src = BA;
    img.width = 250;

    document.querySelector('body').appendChild(img);
  }
}