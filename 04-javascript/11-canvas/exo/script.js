"use strict"

    const canvas = document.getElementById('drawing-board');
    const toolbar = document.getElementById('toolbar');
    const ctx = canvas.getContext('2d');

    let undoBtn = document.getElementById("undo");
    let redoBtn = document.getElementById("redo");
// creating history stacks for undo/redo functionality 
    let undoStack = [canvas.toDataURL()];
    let redoStack = []
    function getTopImage() {
    return undoStack[undoStack.length-1]
}

    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;

    let isPainting = false;
    let linewidth = 5;
    let startX;
    let startY;

    toolbar.addEventListener('click', e => {
      if (e.target.id === 'clear'){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });
    toolbar.addEventListener('change', e => {
     if(e.target.id === 'stroke'){
      ctx.strokeStyle = e.target.value;
     }
     if(e.target.id === 'linewidth'){
      linewidth = e.target.value
     }      
    }); 
    const draw = (e) => {
      if(!isPainting){
        return;
      }
      ctx.linewidth = linewidth;
      ctx.lineCap = 'round';
      ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
      ctx.stroke();
    }
    canvas.addEventListener('mousedown', (e) => {
      isPainting = true;
      startX = e.clientX;
      startY = e.clientY;
    });
    canvas.addEventListener('mouseup', e => {
      isPainting = false;
      ctx.stroke();
      ctx.beginPath();
      handleMouseUp();
    });
    canvas.addEventListener('mousemove', draw);
    // adding event to each undo and redo
    undoBtn.addEventListener('click', handleUndo);
    redoBtn.addEventListener('click', handleRedo);

    function handleMouseUp() {
      //Push the image to the history
      undoStack.push(canvas.toDataURL())
      redoStack = [];
  }

function undoRedo(pushStack,popStack) {
  pushStack.push(popStack.pop());
  const source = getTopImage();
  const img = new Image();
  img.src = source;
  ctx.clearRect(
     0,0,canvas.width,canvas.height
  );
  img.onload = ()=>{
    ctx.drawImage(
       img,0,0,canvas.width,canvas.height
    );

  }
}
function handleUndo() {
  console.log(undoStack);
  
  if (undoStack.length>1) {
      undoRedo(redoStack, undoStack);
  }
}
function handleRedo() {
  if (redoStack.length>=1) {
      undoRedo(undoStack, redoStack);
  }
}



