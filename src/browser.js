if (!window.WebSocket) {
  document.body.innerHTML = "WebSocket в этом браузере не поддерживается.";
}

// создать подключение
// var socket = new WebSocket("ws://localhost:8081");
// FOR CODESANDBOX WSS PORT LINK:
var wsUrl = "s98sv-8081.sse.codesandbox.io";
// for normal usage (for localhost or production)
// var wsUrl = window.location.hostname + ":8081";

var socket = new WebSocket("wss://" + wsUrl);

// отправить сообщение из формы publish
document.forms.publish.onsubmit = function() {
  var outgoingMessage = this.message.value;

  socket.send(outgoingMessage);
  return false;
};

// обработчик входящих сообщений
socket.onmessage = function(event) {
  var incomingMessage = event.data;
  console.log("incoming message", incomingMessage);
  showMessage(incomingMessage);
};

// показать сообщение в div#subscribe
function showMessage(message) {
  var messageElem = document.createElement("div");
  messageElem.appendChild(document.createTextNode(message));
  document.getElementById("subscribe").appendChild(messageElem);
}
