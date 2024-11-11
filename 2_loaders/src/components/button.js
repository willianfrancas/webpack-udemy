import './button';

export class Button {
  create() {
    const button = document.createElement('button');
    button.innerText = 'Click me';
    button.classList.add('btn');
    document.querySelector('body').appendChild(button);
  }
}