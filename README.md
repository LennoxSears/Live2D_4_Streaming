## Project title
live2D_4_streaming

## Motivation
This project is a live2d streaming overlay. It add lovely live2d model on my streaming screen.

## Screenshots
![Screenshots](./img/Live2d-StreamingOverlay-min.gif)

## Features
Check index.js and live2d.html. Backend(index.js) send random message and random live2d motion to live2d.html. live2d.html is added as streaming overlay via OBS Browser function.

## Installation
1.In terminal, run
`node index.js`
2.Launch OBS with argument "--enable-gpu" [Mac](https://obsproject.com/forum/threads/how-do-i-enable-webgl-in-browsersource-mac-10-13-3-includes-logfile.83960/)
3.Add Browser overlay in OBS, with address "http://localhost:3000"
## Related Project

- [Live2d](https://www.live2d.com)
- [Socket.io](https://socket.io/)
