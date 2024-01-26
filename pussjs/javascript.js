<script src="https://cdnjs.cloudflare.com/ajax/libs/push.js/1.0.5/push.js"></script>;

Push.Permission.request(onGranted, onDenied);

const requestButton = document.querySelector(".request-button");

function onGranted() {
  requestButton.style.background = "green";
}

function onDenied() {
  requestButton.style.background = "red";
}

requestButton.onclick = function () {
  Push.Permission.request(onGranted, onDenied);
};
function sendNotif() {
  Push.create("Hello from Adewale!", {
    body: "Hope you can see this in your browser?",
    icon: "/or.png",
    timeout: 13000,
    onClick: function () {
      window.focus();
      this.close();
    },
  });
}
