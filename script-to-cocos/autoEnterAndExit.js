

//get component

const getComponent = (name) => {
  // 獲取當前場景
  let components = [];
  var currentScene = cc.director.getScene();

  // 獲取場景中的所有組件
  var allComponents = currentScene.getComponentsInChildren(cc.Component);

  // 迭代所有組件
  for (var i = 0; i < allComponents.length; i++) {
      let component = allComponents[i];
      if(component.name === name){
        components = [...components, component];
      }
  }

  return components
}

// 1. "btnEnter<Button>"
// 2. "BtnBack<Button>"

(()=>{
  let isInGamePlayScreen = false;

  let goinbtns;
  let goInBtn
  let exitbtns;
  let exitbtn;
  // const exitDragOffset = {
  //   x: 1005,
  //   y: 35,
  // };
  // const goInDragOffset = {
  //   x: 897,
  //   y: 260,
  // };
  // cvs.onmousedown = function(e){
  //   console.log(e.x, e.y);
  //   console.log(e.clientX, e.clientY);
  // }
  
  const simulateExitClick = () => {
  //   let drag = exitDragOffset;
    // console.log(drag);
    // var event = new MouseEvent("click", {
    //   bubbles: true,
    //   cancelable: true,
    //   x: drag.x,
    //   y: drag.y
    // });
    // cvs.dispatchEvent(event);
    exitbtn.clickEvents[0].emit()
  }
  const simulateGoInClick =()=>{
    console.log(goInBtn)
    goInBtn.clickEvents[0].emit()
  }
  const GoInObj = {
    start: () => {
      setTimeout(() => {
        console.log("GoIn:", isInGamePlayScreen)
        if(!isInGamePlayScreen){
          isInGamePlayScreen = true;
          goinbtns = getComponent("btnEnter<Button>")
          goInBtn = goinbtns[0]
          simulateGoInClick();
          ExitObj.start();
        }
      }, 7000)
    }
  }
  const ExitObj = {
    start: () => {
      setTimeout(() => {
        console.log("Exit:", isInGamePlayScreen)
        if(isInGamePlayScreen){
          isInGamePlayScreen = false;
          exitbtns = getComponent("BtnBack<Button>")
          exitbtn = exitbtns[0];
          isGetExitBtn = true;
          simulateExitClick();
          GoInObj.start();
        }
      }, 7000)
    }
  }
  GoInObj.start();
})()




