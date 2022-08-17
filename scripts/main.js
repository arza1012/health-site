const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/salud-digital.jpeg') {
    myImage.setAttribute('src','images/health-app.jpeg');
  } else {
    myImage.setAttribute('src','images/salud-digital.jpeg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Escribe tu nombre:');
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Sé el especialista de tu salud, ${myName}`;
      }
    }

  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Sé el especialista de tu salud, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  }