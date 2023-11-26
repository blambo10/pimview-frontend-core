import mqtt from "mqtt/dist/mqtt";
import "./App.css";
import TvDevice from './Devices/TV/Tv.js';
import AVRDevice from './Devices/AVR/Avr.js';
import WallPaper from './components/Layout/Wallpaper.js'
import { connect } from "mqtt";

//TODO: issue to resolve 
//WARNING in shared module react
// No required version specified and unable to automatically determine one. Unable to find required version for "react" in description file (/Users/blamb/repos/pimview-frontend-core/home-app/node_modules/@emotion/styled/base/package.json). It need to be in dependencies, devDependencies or peerDependencies.
const mqttAddress = process.env.REACT_APP_PIMVIEW_RABBITMQ_MQTT_ADDRESS;
const mqttUsername = process.env.REACT_APP_PIMVIEW_RABBITMQ_MQTT_USER;
const mqttPassword = process.env.REACT_APP_PIMVIEW_RABBITMQ_MQTT_PASSWORD;
const mqttPort = process.env.REACT_APP_PIMVIEW_RABBITMQ_MQTT_PORT;

var options = {
  
  protocol: "ws",
  username: mqttUsername,
  password: mqttPassword,
  keepalive: 20,
  // clientId uniquely identifies client
  // choose any string you wish
  clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8),
};
var client = connect("mqtt://" + mqttAddress + ":" + mqttPort + "/ws", options);
 
function App() {
 
  console.log(mqttUsername);
  console.log(mqttPassword);
  
  document.body.style.backgroundColor = "grey"
  return (
    <div className="App">
      <br></br>
       <WallPaper />
        {/* <TvDevice mqttclient={client} /> */}
        <br></br>
        <AVRDevice mqttclient={client} />
       
    </div>
  );
}
export default App;