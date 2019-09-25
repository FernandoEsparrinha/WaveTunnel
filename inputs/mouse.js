function mouseWheel(event) {
    if(event.delta == -3){
        rectangleWave.decreaseSpeed();
    } else {
        rectangleWave.increaseSpeed();
    }
  }

  /* 
  function mouseMoved(event) {
    // 0 - 600
    //console.log(event.clientX);
    // 0 - 1000
    //console.log(event.clientY);
    //console.log(event.ctrlKey);

    if (event.clientX < 100) {
      colorMode = 2;
    } else if (event.clientX < 200) {
      colorMode = 0;
    } else if (event.clientX < 250){
      colorMode = 2;
    } else if (event.clientX < 400) {
      colorMode = 3;
    } else if (event.clientX < 450){
      colorMode = 2;
    } else if (event.clientX < 500) {
      colorMode = 0;
    } else if (event.clientX < 600){
      colorMode = 2;
    }

    if (event.clientY < 500) {
        if(rectangleWave.waves.length > 1){
            rectangleWave.decreaseWaves(); 
        }
    } else {
        if(rectangleWave.waves.length < 50){
            rectangleWave.increaseWaves();
        }
    }
  }
 */