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
          resultImage.src = 'data:image/jpeg;base64,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';
          resultImage.width='20';
          resultImage.height='20';
          resultImage.style.position='absolute';
          resultImage.style.top='130%';
          resultImage.style.left='70%';
          resultImage.style.backgroundColor='white';


          console.log('successfully');
        }
        else{
          resultImage.src = 'data:image/png;base64,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';
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
          resultImage.src = 'data:image/jpeg;base64,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';
          resultImage.width='20';
          resultImage.height='20';
          resultImage.style.position='absolute';
          resultImage.style.top='130%';
          resultImage.style.left='30%';
          resultImage.style.backgroundColor='white';
          console.log('successfully');
        }
        else{
          resultImage.src = 'data:image/png;base64,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';
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
          resultImage.src = 'data:image/jpeg;base64,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';
          resultImage.width='20';
          resultImage.height='20';
          resultImage.style.position='absolute';
          resultImage.style.top='130%';
          resultImage.style.left='70%';
          resultImage.style.backgroundColor='white';


          console.log('successfully');
        }
        else{
          resultImage.src = 'data:image/png;base64,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';
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
          resultImage.src = 'data:image/jpeg;base64,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';
          resultImage.width='20';
          resultImage.height='20';
          resultImage.style.position='absolute';
          resultImage.style.top='130%';
          resultImage.style.left='30%';
          resultImage.style.backgroundColor='white';
          console.log('successfully');
        }
        else{
          resultImage.src = 'data:image/png;base64,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';
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
