var app = new Vue({
  el: '#app',
  data: {
    message: 'Firma electrónica',
    vueCanvas:null,
    painting:false,
    canvas:null,
    ctx:null,
  },
  methods: {
    startPainting(e) {
      this.painting = true;
      console.log(this.painting)
      this.draw(e)
    },
    finishedPainting() {
      this.painting = false;
      console.log(this.painting);
      this.ctx.beginPath()
      console.log(this.canvas); //para ver que lo que nos devuelve... hay que saber cual es la variable del canvas... utilizar la consola

    },
    draw(e) { //permite utilizar el mouse... 
      if(!this.painting) return

      this.ctx.lineWidth = 10;
      this.ctx.lineCap ="round"
      
     this.ctx.lineTo(e.clientX,e.clientY)
     this.ctx.stroke()

     this.ctx.beginPath()
     this.ctx.moveTo(e.clientX,e.clientY)

     
    },

    exportToPdf() {

      let vm = this; //este objeto == this 
      
      let img = this.canvas.toDataURL("image/png");

      let doc = new jsPDF("p","pt"); //p == de tipo portrait (vertical), pt=== pixeles

      //doc.text("Hello World", 40, 40); //this is the same as the let doc function...

      doc.addImage(img, "png", 15, 40, 180, 160); 

      doc.save("downloaded.pdf");

    },
  },
 mounted() {
  this.canvas = document.getElementById("canvas");
  this.ctx = canvas.getContext("2d");  

  // Resize canvas
  this.canvas.height = window.innerHeight;
  this.canvas.width = window.innerWidth;
}


})
