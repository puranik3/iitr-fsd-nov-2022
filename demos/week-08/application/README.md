## Steps
Create a new folder and from a terminal opened at that folder, run
```
npm init -y
```
Install http-server
```
npm i --save-dev http-server
```
Added a script in package.json
```
"scripts": {
    "start": "http-server -c-1"
},
```
Run the start script to start the server
```
npm run start
```
or
```
npm start
```
Open the specified page in the browser. For example, http://127.0.0.1:8082 (port number may be different for you).