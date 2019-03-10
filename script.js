window.onload= function(){
 var canvasHeight=600;
 var canvasWidth=600;  
 var blockSize=75;
 var widthInBlock=canvasWidth/blockSize;
 var heightInBlock=canvasHeight/blockSize;  
 var x =0;
 var y = 0;

    function init(){
    var canvas = document.createElement('canvas');
     canvas.height=canvasHeight;
     canvas.width=canvasWidth;
     canvas.style.border= "30px solid gray";  
     canvas.style.margin="0 auto";
     canvas.style.display="block";   
     ;
     document.body.appendChild(canvas);
     ctx = canvas.getContext("2d"); 
     drawBlocks()   
    }
    function drawBlocks(){
    ctx.save;
        
        for( var i = 0; i<4;i++){
        ctx.fillRect(x,y,blockSize,blockSize)
        
        
         x+=blockSize*2;
          
            
        }
          y=75
             x=75; 
           for( var i = 0; i<4;i++){
            
        ctx.fillRect(x,y,blockSize,blockSize);
               x+=blockSize*2
        }
         
        y=75*2
        x=0;
        
         for( var i = 0; i<4;i++){
            ctx.fillRect(x,y,blockSize,blockSize);
            x+=blockSize*2
        }
  y=75*3
        x=75;
        
         for( var i = 0; i<4;i++){
            ctx.fillRect(x,y,blockSize,blockSize);
            x+=blockSize*2
        }
        y=75*4
        x=0;
        
         for( var i = 0; i<4;i++){
            ctx.fillRect(x,y,blockSize,blockSize);
            x+=blockSize*2
        }
 y=75*5
        x=75;
        
         for( var i = 0; i<4;i++){
            ctx.fillRect(x,y,blockSize,blockSize);
            x+=blockSize*2
        }
         y=75*6
        x=0;
        
         for( var i = 0; i<4;i++){
            ctx.fillRect(x,y,blockSize,blockSize);
            x+=blockSize*2
        }
         y=75*7
        x=75;
        
         for( var i = 0; i<4;i++){
            ctx.fillRect(x,y,blockSize,blockSize);
            x+=blockSize*2
        }
        
        
    ctx.restore;
    }
   
init();    
}

