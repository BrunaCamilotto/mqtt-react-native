import {Message, Client } from "paho-mqtt";

const clientId = "mqtt234556"
const client = new Client('q06d2612.ala.us-east-1.emqxsl.com', 8084, clientId)
const connect = (onConnectedCallback) => {
    client.connect({
        onSuccess: () => {
            onSuccess()
            if (onConnectedCallback) onConnectedCallback()
        },
        onFailure: onFailure,
        useSSL: true,
        userName: 'adm',
        password: '1234',
    })
}
const sendMessage = (topic, message) => {
    if (client.isConnected()) {
        const payload = new Message(message)
        payload.destinationName = topic
        client.send(payload)
    } else {
        console.log("Erro: MQTT não está conectado")
    }
}


function onSuccess(){
    console.log("Conectado")
    client.subscribe("teste")
}

function onFailure(){
    console.log("PAIA DEMAIS :(")
}

export {connect, sendMessage}
