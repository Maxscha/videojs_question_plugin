var videojs = require('video.js');
require('videojs-youtube')
var css = require('video.js/dist/video-js.css');

function wrongAnswer() {
    document.getElementById('answer-div').innerText = "wrong";
}

function rightAnswer() {
    document.getElementById('answer-div').innerText = "right!";
}

document.addEventListener("DOMContentLoaded", function () {
    // code...

    var player = videojs('my-video');

    var ModalDialog = videojs.getComponent('ModalDialog');

    // var modal = new ModalDialog(player, {

    // We don't want this modal to go away when it closes.
    // temporary: false
    // });
    // 
    // modal.content("test")

    var btn = document.createElement("div");   // Create a <button> element
    btn.innerHTML = `
    <div>
        <span class="question">What will you learn in this video?</span>
    </div>
    <button onclick="wrongAnswer()"> Nothing </button> 
    <button onclick="rightAnswer()"> As much python as possible </button>
    <div id="answer-div">
    </div>
    `;

    // On click

    var wasOpen = false;
    var pausetime = 5;
    player.on('timeupdate', function (e) {
        if (player.currentTime() >= pausetime && !wasOpen) {
            var modal = player.createModal(btn);
            wasOpen = true;
        }
    });

});