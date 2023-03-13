const express = require("express");
const mqtt = require("mqtt");
const app = express();
const port = 3001;

const client = mqtt.connect("ws://localhost:8083/mqtt");

client.on("connect", () => {
  client.subscribe("nlp");
});

client.on("message", (topic, message) => {
  console.log(topic)
  console.log(`Received message: ${message.toString()}`);

  client.publish("response", "nlp is connected working recived and responded")
  console.log("responded");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
