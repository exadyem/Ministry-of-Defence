import websockets.*;

WebsocketClient wsc;

void setup(){
  size(400,400);
  
  wsc = new WebsocketClient(this, "ws://145.93.61.70:8080");
  
  println("hallo");
}

void draw(){
  text("word", 200,200);
  wsc.sendMessage("swag");
  delay(2000);
}

void webSocketEvent(String msg){
  println(msg);
}
