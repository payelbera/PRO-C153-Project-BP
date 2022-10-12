//Diver rotation component
AFRAME.registerComponent("diver-rotation-reader", {
  //define schema with speedOfRoation and speedOfAscent
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      //get the data from the attributes
      //this.data.speedOfRoation =
      //this.data.speedOfAscent = 

      var diverRotation = this.data.speedOfRoation;      
      var diverPosition = this.data.speedOfAscent;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if (diverRotation.x < 10) {
          diverRotation.x += 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
      }
      // navigation for ArrowLeft
        
      
      if (e.key === "ArrowUp") {
        if (diverRotation.z < 20) {
          diverRotation.z += 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.y < 2) {
          diverPosition.y += 0.01;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (diverRotation.z > -10) {
          diverRotation.z -= 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.y > -2) {
          diverPosition.y -= 0.01;
          this.el.setAttribute("position", diverPosition);
        }
      }
    });
  }
});
