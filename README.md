# nodejs-websocket-example

THIS EXAMPLE MODIFIED FOR CODESANDBOX CONTAINER!!!

it is an example of implementing websocket(ws) on both server and client side

## Configuration

Codesandbox use different hostnames for different ports:
tharefore replace wsUrl in "browser.js" to your case

```js
var wsUrl = "y4hnl-8081.sse.codesandbox.io";
```

where

```
      y4hnl -- sandbox id
      -     -- delimiter
      8081  -- websocket port
```

## How to use

Type message in the input field and press the button,
This message will be send on the server and you can see it in the server console.
It is also logged on client side console.
