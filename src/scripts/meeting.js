let localStream;
let remoteStream;

const allowBrowserSettings = async () => {
    localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
    document.getElementById("screen").srcObject = localStream
}

allowBrowserSettings()