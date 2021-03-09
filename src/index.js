var videojs = require('video.js');
require('videojs-youtube')
require('video.js/dist/video-js.css');
require('./video-js-questions.css')

function wrongAnswer() {
    document.getElementById('answer-div').innerText = "wrong";
}

function rightAnswer() {
    document.getElementById('answer-div').innerText = "right!";
}

document.addEventListener("DOMContentLoaded", function () {
    // code...

    var player = videojs('my-video');

    var question = player.options_.questions[0];

    var ModalDialog = videojs.getComponent('ModalDialog');

    // var modal = new ModalDialog(player, {

    // We don't want this modal to go away when it closes.
    // temporary: false
    // });
    // 
    // modal.content("test")

    var btn = document.createElement("div");   // Create a <button> element
    btn.style = "background-color:white; padding:20px; height: 100%;"
    btn.innerHTML = `
    <div style="position:relative; height:100%">
        <div>
            <span class="question">${question.question}</span>
        </div>
        
        <div class="answers">
            <button onclick="wrongAnswer()"> Nothing </button> 
            <button onclick="rightAnswer()"> As much python as possible </button>
        </div>
        <div id="answer-div">
        </div>

        <div style="position: absolute;bottom: 0px;height:50px;border-top: 1px solid #66666666;width: 100%;padding-top:20px;">
            <div>
            <button style="height:30px">Skip</button>
            <button style="height:30px">Submit</button>
            </div>
        </div>
    </div>
    `;

    // On click

    var wasOpen = false;
    var pausetime = 1;
    player.on('timeupdate', function (e) {
        if (player.currentTime() >= pausetime && !wasOpen) {
            var modal = player.createModal(btn);
            wasOpen = true;
        }
    });

});