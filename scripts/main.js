const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/salud-digital.jpeg') {
    myImage.setAttribute('src','images/health-app.jpeg');
  } else {
    myImage.setAttribute('src','images/salud-digital.jpeg');
  }
}
