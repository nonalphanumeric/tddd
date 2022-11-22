import { sign } from "crypto";
import { create } from "domain";
import * as http from 'http'
import { system } from "systeminformation";

//create a json named ISystemInformation
interface ISystemInformation {
  cpu: JSON;
  system: JSON;
  mem: JSON;
  os: JSON;
  currentLoad: JSON;
  processes: JSON;
  diskLayout: JSON;
  networkInterfaces: JSON;
}

//create a function to populate the object and awaits
async function populateSystemInformation() {
  systemInformation = {
    cpu: await si.cpu(),
    system: await si.system(),
    mem: await si.mem(),
    os: await si.osInfo(),
    currentLoad: await si.currentLoad(),
    processes: await si.processes(),
    diskLayout: await si.diskLayout(),
    networkInterfaces: await si.networkInterfaces()
  }
}

 //create the object json and populate using si.cpu() and so on

  const si = require('systeminformation')



  let systemInformation: ISystemInformation;

  //populate the object
  populateSystemInformation();









/**
 * 
 */
/**
 * Create a http server and listen on port 8080.
 * @returns A http server.
 * 
 */
export const createServer = (): http.Server => {
  return http.createServer((req, res) => {
 
    //get request from client
    const url = req.url;
    
    
    //if req.url is "/api/v1/sysinfo"
    if (url === '/api/v1/sysinfo') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      populateSystemInformation();
      //send the json object to the client
      res.write(JSON.stringify(systemInformation));

      res.end();
    }
    else {
      //error 404
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
    
  }).listen(5000);
}

//getter for systemInformation
export const getSystemInformation = (): ISystemInformation => {
  return systemInformation;
}


//createServer();

function myMain() {
  createServer();
}

if (require.main === module) {
  myMain();
}
