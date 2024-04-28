function openStartPage() {
  document.getElementById("main-page").style.display = "none";
  document.getElementById("start-page").style.display = "grid";
}

function closeStartPage() {
  document.getElementById("start-page").style.display = "none";
  document.getElementById("main-page").style.display = "grid";
}

function showLetters() {
  document.getElementById("start-page").style.display = "none";
  document.getElementById("letters-page").style.display = "grid";
}

function closeLettersPage() {
  document.getElementById("letters-page").style.display = "none";
  document.getElementById("start-page").style.display = "grid";
}  

function showWriteLetters() {
  document.getElementById("letters-page").style.display = "none";
  document.getElementById("write-letters-page").style.display = "grid";
}

function closeWriteLettersPage() {
  document.getElementById("write-letters-page").style.display = "none";
  document.getElementById("letters-page").style.display = "grid";
}



function showWriteLetters1() {
  document.getElementById("write-letters-page").style.display = "none";
  document.getElementById("write-letters-page-1").style.display = "block";

  const div = document.createElement("div");
  div.innerHTML = "أ";
  div.id = "myDiv";
  div.style.fontFamily = "myFont"; 
  div.style.position = "absolute";
  div.style.top = "98%";
  div.style.left = "57%";
  div.style.fontSize = "100px"
  div.style.userSelect = "none";
  document.body.appendChild(div);



  const canvas = document.createElement('canvas');
  canvas.width = 300;
  canvas.height = 200;
  canvas.id = "Canvas";

  canvas.style.position = 'absolute';
  canvas.style.top = '138%';
  canvas.style.left = '70%';
  canvas.style.userSelect = "none";
  canvas.style.transform = 'translate(-80%, -150%)';
  
  document.body.appendChild(canvas);
  
  const style = document.createElement('style');
  style.textContent = `
    #Canvas{
      border: 1px solid black;
    }`;
  
  document.head.appendChild(style);
  
  const context = canvas.getContext("2d");
  context.strokeStyle = "yellow";
  context.lineWidth = 5;
  context.fillStyle="white"
  let isDrawing = false;
  let previousX = 0;
  let previousY = 0;
  
  canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;
  
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
  
    if (x === previousX && y === previousY) {
      context.beginPath();
      context.arc(x, y, 2, 0, 2 * Math.PI);
      context.fillStyle = "white";
     // تعيين سماكة الخط
      context.fill();
    } else {
      context.beginPath();
      context.moveTo(x, y);
  
      canvas.addEventListener("mousemove", (event) => {
        if (isDrawing) {
          const x = event.offsetX;
          const y = event.offsetY;
  
          context.lineTo(x, y);
          context.stroke();
        }
      });
    }
    previousX = x;
    previousY = y;
  });
  
  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
  });

const button1 = document.createElement('button');
button1.innerText = 'تحقق';
button1.style.marginTop = '10px';
button1.style.position='absolute';
button1.style.top='123%';
button1.style.left='70%';

button1.addEventListener('click', () => {
  canvas.toBlob((blob) => {
    const file = new File([blob], 'image.png', { type: 'image/jpeg' });
    const type='أ'
    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', type);
    const resultImage = new Image();
    resultImage.id='check';

    axios.post('https://alphabetical.pythonanywhere.com/predict', formData) // استبدل عنوان URL بعنوان الخادم الصحيح
      .then((response) => {
        if(response.data['The predicted character is ']===type)
        {
          resultImage.src = '../pictures/True.svg.png';
          resultImage.width='20';
          resultImage.height='20';
          resultImage.style.position='absolute';
          resultImage.style.top='130%';
          resultImage.style.left='70%';
          resultImage.style.backgroundColor='white';


          console.log('successfully');
        }
        else{
          resultImage.src = '../pictures/False.svg.png';
          resultImage.width='20';
          resultImage.height='20';
          resultImage.style.position='absolute';
          resultImage.style.top='130%';
          resultImage.style.left='70%';
          resultImage.style.backgroundColor='white';

          console.log('failed');
        }
        document.body.appendChild(resultImage);

      })
      .catch((error) => {
        console.error(error);
        console.log(formData);
      });
  }, 'image/jpeg');
});

document.body.appendChild(button1);
  

// document.getElementById("write-letters-page").style.display = "none";

const canvasTwo = document.createElement('canvas'); // canvasTwo instead of canvas
canvasTwo.width = 300;
canvasTwo.height = 200;
canvasTwo.id = "CanvasTwo"; // CanvasTwo instead of Canvas
canvasTwo.style.position = 'absolute';
canvasTwo.style.top = '138%';
canvasTwo.style.left = '40%';
canvasTwo.style.border = '1px solid black';
canvasTwo.style.transform = 'translate(-80%, -150%)';

document.body.appendChild(canvasTwo);

// Add CSS styling to the canvas element with the specified ID
const styleTwo = document.createElement('style'); // styleTwo instead of style
styleTwo.textContent = `
  #CanvasTwo {  // Target CanvasTwo with its ID
    border: 1px solid black; /* Customize border style, width, and color here */
  }`;

document.head.appendChild(styleTwo);

const contextTwo = canvasTwo.getContext("2d"); // contextTwo instead of context

contextTwo.strokeStyle = "Yellow";
contextTwo.lineWidth = 5;
let isDrawingTwo = false; // isDrawingTwo instead of isDrawing
let previousXTwo = 0; // previousXTwo instead of previousX
let previousYTwo = 0; // previousYTwo instead of previousY

canvasTwo.addEventListener("mousedown", (event) => {
  isDrawingTwo = true;

  const rectTwo = canvasTwo.getBoundingClientRect(); // rectTwo instead of rect
  const x = event.clientX - rectTwo.left;
  const y = event.clientY - rectTwo.top;

  if (x === previousXTwo && y === previousYTwo) {
    // رسم نقطة فقط إذا لم يتم تحريك الماوس
    contextTwo.beginPath();
    contextTwo.arc(x, y, 2, 0, 2 * Math.PI);
    contextTwo.fillStyle = "black";
    contextTwo.fill();
  } else {
    // بدء الرسم عند تحريك الماوس
    contextTwo.beginPath();
    contextTwo.moveTo(x, y);

    canvasTwo.addEventListener("mousemove", (event) => {
      if (isDrawingTwo) {
        const x = event.offsetX;
        const y = event.offsetY;

        contextTwo.lineTo(x, y);
        contextTwo.stroke();
      }
    });
  }
  previousXTwo = x;
  previousYTwo = y;
});

canvasTwo.addEventListener("mouseup", () => {
  isDrawingTwo = false;
});

const button2 = document.createElement('button');
button2.innerText = 'تحقق';
button2.style.marginTop = '10px';
button2.style.position='absolute';
button2.style.top='123%';
button2.style.left='30%';

button2.addEventListener('click', () => {
  canvas.toBlob((blob) => {
    const file = new File([blob], 'image.png', { type: 'image/jpeg' });
    const type='أ'
    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', type);
    const resultImage = new Image();
    resultImage.id='check1';
    axios.post('https://alphabetical.pythonanywhere.com/predict', formData) // استبدل عنوان URL بعنوان الخادم الصحيح
      .then((response) => {
        if(response.data['The predicted character is ']===type)
        {
          resultImage.src = '../pictures/True.svg.png';
          resultImage.width='20';
          resultImage.height='20';
          resultImage.style.position='absolute';
          resultImage.style.top='130%';
          resultImage.style.left='30%';
          resultImage.style.backgroundColor='white';
          console.log('successfully');
        }
        else{
          resultImage.src = '../pictures/False.svg.png';
          resultImage.style.position='absolute';
          resultImage.style.top='130%';
          resultImage.style.left='30%';
          resultImage.style.backgroundColor='white';
          resultImage.width='20';
          resultImage.height='20';
          console.log('failed');
        }
        document.body.appendChild(resultImage);

      })
      .catch((error) => {
        console.error(error);
        console.log(formData);
      });
  }, 'image/jpeg');
});

document.body.appendChild(button2);



const button = document.createElement("button");
button.textContent = "رجوع";
button.id = "hide-button";
button.style.position = 'absolute';
button.style.top = '125%';
button.style.left = '40%';
button.style.backgroundColor = '#2196F3';
document.body.appendChild(button);

// 2. إضافة مستمع حدث click إلى زر
const canvasElement = document.getElementById("canvas");
const hideButton = document.getElementById("hide-button");

hideButton.addEventListener("click", () => {
  canvas.style.display = "none";
  canvasTwo.style.display = "none";
  document.getElementById("write-letters-page").style.display = "block";
  document.getElementById("write-letters-page-1").style.display = "none";
  button.style.display = 'none';
  div.style.display = 'none';
  button1.style.display= 'none'
  button2.style.display= 'none';
  const elements = document.querySelectorAll("[id^='check']");

  elements.forEach((element) => {
    element.style.display = "none";
  });
  const elements1 = document.querySelectorAll("[id^='check1']");

elements1.forEach((element) => {
  element.style.display = "none";
});
});
}
function showWriteLetters2() {
  document.getElementById("write-letters-page").style.display = "none";
  document.getElementById("write-letters-page-2").style.display = "block";

  const div = document.createElement("div");
  div.innerHTML = "ب";
  div.id = "myDiv";
  div.style.fontFamily = "myFont"; 
  div.style.position = "absolute";
  div.style.top = "90%";
  div.style.left = "57%";
  div.style.fontSize = "100px"
  div.style.userSelect = "none";
  document.body.appendChild(div);

const canvas = document.createElement('canvas');
canvas.width = 300;
canvas.height = 200;
canvas.id = "Canvas";
canvas.style.position = 'absolute';
canvas.style.top = '138%';
canvas.style.left = '70%';
// canvas.style.display = "none";
// canvasTwo.style.display = "none";
canvas.style.transform = 'translate(-80%, -150%)';

// var body = document.getElementsByTagName("body")[0]; 

document.body.appendChild(canvas);

// Add CSS styling to the canvas element with the specified ID
const style = document.createElement('style');
style.textContent = `
  #Canvas{
    border: 1px solid black; /* Customize border style, width, and color here */
  }`;

document.head.appendChild(style);


const context = canvas.getContext("2d");
// context.translate(0, 0);

context.strokeStyle = "yellow";
context.lineWidth = 5;
let isDrawing = false;
let previousX = 0;
let previousY = 0;

canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;



  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (x === previousX && y === previousY) {
    // رسم نقطة فقط إذا لم يتم تحريك الماوس
    context.beginPath();
    context.arc(x, y, 2, 0, 2 * Math.PI);
    context.fillStyle = "yellow";
    context.fill();
  } else {
    // بدء الرسم عند تحريك الماوس
    context.beginPath();
    context.moveTo(x, y);

    canvas.addEventListener("mousemove", (event) => {
      if (isDrawing) {
        // const x = event.clientX;
        // const y = event.clientY;
        const x = event.offsetX;
        const y = event.offsetY;

        context.lineTo(x, y);
        context.stroke();
      }
    });
  }
  previousX = x;
  previousY = y;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

const button1 = document.createElement('button');
button1.innerText = 'تحقق';
button1.style.marginTop = '10px';
button1.style.position='absolute';
button1.style.top='123%';
button1.style.left='70%';

button1.addEventListener('click', () => {
  canvas.toBlob((blob) => {
    const file = new File([blob], 'image.png', { type: 'image/jpeg' });
    const type='ب'
    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', type);
    const resultImage = new Image();
    resultImage.id='check';

    axios.post('https://alphabetical.pythonanywhere.com/predict', formData) // استبدل عنوان URL بعنوان الخادم الصحيح
      .then((response) => {
        if(response.data['The predicted character is ']===type)
        {
          resultImage.src = '../pictures/True.svg.png';
          resultImage.width='20';
          resultImage.height='20';
          resultImage.style.position='absolute';
          resultImage.style.top='130%';
          resultImage.style.left='70%';
          resultImage.style.backgroundColor='white';


          console.log('successfully');
        }
        else{
          resultImage.src = '../pictures/False.svg.png';
          resultImage.width='20';
          resultImage.height='20';
          resultImage.style.position='absolute';
          resultImage.style.top='130%';
          resultImage.style.left='70%';
          resultImage.style.backgroundColor='white';

          console.log('failed');
        }
        document.body.appendChild(resultImage);

      })
      .catch((error) => {
        console.error(error);
        console.log(formData);
      });
  }, 'image/jpeg');
});

document.body.appendChild(button1);
  



const canvasTwo = document.createElement('canvas'); // canvasTwo instead of canvas
canvasTwo.width = 300;
canvasTwo.height = 200;
canvasTwo.id = "CanvasTwo"; // CanvasTwo instead of Canvas
canvasTwo.style.position = 'absolute';
canvasTwo.style.top = '138%';
canvasTwo.style.left = '40%';
canvasTwo.style.border = '1px solid black';
canvasTwo.style.transform = 'translate(-80%, -150%)';

document.body.appendChild(canvasTwo);

// Add CSS styling to the canvas element with the specified ID
const styleTwo = document.createElement('style'); // styleTwo instead of style
styleTwo.textContent = `
  # anvasTwo {  // Target CanvasTwo with its ID
    border: 1px solid black; /* Customize border style, width, and color here */
  }`;

document.head.appendChild(styleTwo);

const contextTwo = canvasTwo.getContext("2d"); // contextTwo instead of context

contextTwo.strokeStyle = "yellow";
contextTwo.lineWidth = 5;
let isDrawingTwo = false; // isDrawingTwo instead of isDrawing
let previousXTwo = 0; // previousXTwo instead of previousX
let previousYTwo = 0; // previousYTwo instead of previousY

canvasTwo.addEventListener("mousedown", (event) => {
  isDrawingTwo = true;

  const rectTwo = canvasTwo.getBoundingClientRect(); // rectTwo instead of rect
  const x = event.clientX - rectTwo.left;
  const y = event.clientY - rectTwo.top;

  if (x === previousXTwo && y === previousYTwo) {
    // رسم نقطة فقط إذا لم يتم تحريك الماوس
    contextTwo.beginPath();
    contextTwo.arc(x, y, 2, 0, 2 * Math.PI);
    contextTwo.fillStyle = "yellow";
    contextTwo.fill();
  } else {
    // بدء الرسم عند تحريك الماوس
    contextTwo.beginPath();
    contextTwo.moveTo(x, y);

    canvasTwo.addEventListener("mousemove", (event) => {
      if (isDrawingTwo) {
        const x = event.offsetX;
        const y = event.offsetY;

        contextTwo.lineTo(x, y);
        contextTwo.stroke();
      }
    });
  }
  previousXTwo = x;
  previousYTwo = y;
});

canvasTwo.addEventListener("mouseup", () => {
  isDrawingTwo = false;
});

const button2 = document.createElement('button');
button2.innerText = 'تحقق';
button2.style.marginTop = '10px';
button2.style.position='absolute';
button2.style.top='123%';
button2.style.left='30%';

button2.addEventListener('click', () => {
  canvas.toBlob((blob) => {
    const file = new File([blob], 'image.png', { type: 'image/jpeg' });
    const type='ب'
    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', type);
    const resultImage = new Image();
    resultImage.id='check1';
    axios.post('https://alphabetical.pythonanywhere.com/predict', formData) // استبدل عنوان URL بعنوان الخادم الصحيح
      .then((response) => {
        if(response.data['The predicted character is ']===type)
        {
          resultImage.src = '../pictures/True.svg.png';
          resultImage.width='20';
          resultImage.height='20';
          resultImage.style.position='absolute';
          resultImage.style.top='130%';
          resultImage.style.left='30%';
          resultImage.style.backgroundColor='white';
          console.log('successfully');
        }
        else{
          resultImage.src = '../pictures/False.svg.png';
          resultImage.style.position='absolute';
          resultImage.style.top='130%';
          resultImage.style.left='30%';
          resultImage.style.backgroundColor='white';
          resultImage.width='20';
          resultImage.height='20';
          console.log('failed');
        }
        document.body.appendChild(resultImage);

      })
      .catch((error) => {
        console.error(error);
        console.log(formData);
      });
  }, 'image/jpeg');
});

document.body.appendChild(button2);






const button = document.createElement("button");
button.textContent = "رجوع";
button.id = "hide-button";
button.style.position = 'absolute';
button.style.top = '125%';
button.style.left = '40%';
button.style.backgroundColor = '#2196F3';
document.body.appendChild(button);

// 2. إضافة مستمع حدث click إلى زر
const canvasElement = document.getElementById("canvas");
const hideButton = document.getElementById("hide-button");

hideButton.addEventListener("click", () => {
  canvas.style.display = "none";
  canvasTwo.style.display = "none";
  document.getElementById("write-letters-page").style.display = "block";
  document.getElementById("write-letters-page-2").style.display = "none";
  button.style.display = 'none';
  div.style.display = 'none';
  button1.style.display= 'none'
  button2.style.display= 'none';
  const elements = document.querySelectorAll("[id^='check']");

  elements.forEach((element) => {
    element.style.display = "none";
  });
  const elements1 = document.querySelectorAll("[id^='check1']");

elements1.forEach((element) => {
  element.style.display = "none";
});
});
}

function showListenLetters() {
  document.getElementById("letters-page").style.display = "none";
  document.getElementById("listen-letters-page").style.display = "grid";
}

function closeListenLettersPage() {
  document.getElementById("listen-letters-page").style.display = "none";
  document.getElementById("letters-page").style.display = "grid";
}

function showNumbers() {
  document.getElementById("start-page").style.display = "none";
  document.getElementById("numbers-page").style.display = "grid";
}

function closeNumbersPage() {
  document.getElementById("numbers-page").style.display = "none";
  document.getElementById("start-page").style.display = "grid";
}

function showWriteNumbers() {
  document.getElementById("numbers-page").style.display = "none";
  document.getElementById("write-numbers-page").style.display = "grid";
}

function closeWriteNumbersPage() {
  document.getElementById("write-numbers-page").style.display = "none";
  document.getElementById("numbers-page").style.display = "grid";
}

function showWritenumbers1() {
  document.getElementById("write-numbers-page").style.display = "none";
  document.getElementById("write-numbers-page-1").style.display = "block";
}

function showListenNumbers() {
  document.getElementById("numbers-page").style.display = "none";
  document.getElementById("listen-numbers-page").style.display = "grid";
}

function closeListenNumbersPage() {
  document.getElementById("listen-numbers-page").style.display = "none";
  document.getElementById("numbers-page").style.display = "grid";
}
