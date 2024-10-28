let angle = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER) //畫方形以中心點為座標
  noFill() //方形不填顏色
  angleMode(DEGREES) //設定角度的單位為0-360
  frameRate(10) //設定每秒進入draw()函數的次數
}

function draw() {
  background(0); //背景黑色
  //translate(width/2,height/2) //把原點由視窗的左上角移到視窗的中心點
 //translate(mouseX,mouseY)
 for(let y=0;y<height;y=y+120){
for(let x=0;x<width;x=x+120){
  push() //重新設定格式,原點位置(0,0)的位置在(x,y)上
  translate(x,y) //把原點(0,0)在(x,y)上
  stroke(255) //線條顏色
//========================產生一個方形====================================
//rotate(angle) //把物件旋轉10度的角度,以原點(0,0)作為選轉的基準點
  //rect(0,0,600,600,100) //劃一個方形,在視窗中間,寬高600
  //angle = sin(frameCount)*100 //旋轉角度-100-100
  //=========================產生十個方形,每個方形大小不一============================
  for(let i=0;i<10;i=i+1){
   // let r = random(50,255) //抽一個亂數值,介於50(包含)與255(不包含)間的數字
    //let g = random(50,255) //抽一個亂數值,介於50(包含)與255(不包含)間的數字
    //let b = random(50,255) //抽一個亂數值,介於50(包含)與255(不包含)間的數字
    let r = map(sin(frameCount),-1,1,50,255)
    let g = map(cos(frameCount/2),-1,1,50,255)
    let b = map(sin(frameCount/4),-1,1,50,255)
    stroke(r,g,b)
    rotate(angle) //把物件旋轉10度的角度,以原點(0,0)作為選轉的基準點
    rect(0,0,100-i*3,100-i*3,10) //劃一個方形,在視窗中間,寬高600
    angle = sin(frameCount)*10 //旋轉角度-100-100
  }
  pop() //取消所有設定格式
}
 }
}
