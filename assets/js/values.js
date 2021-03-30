console.log("hello");
$(document).ready(function () {
  let btnOne = document.querySelector(".btnOne");
  let btnTwo = document.querySelector(".btnTwo");
  let btnThree = document.querySelector(".btnThree");

  //   var $animsition = $(".animsition");
  //   $animsition
  //     .animsition()
  //     .one("animsition.inStart", function () {
  //       $(this).append(
  //         '<h2 class="target">Callback: Start</h2>'
  //       );
  //       console.log("event -> inStart");
  //     })
  //     .one("animsition.inEnd", function () {
  //       $(".target", this).html("Callback: End");
  //       console.log("event -> inEnd");
  //     })
  //     .one("animsition.outStart", function () {
  //       console.log("event -> outStart");
  //     })
  //     .one("animsition.outEnd", function () {
  //       console.log("event -> outEnd");
  //     });

  $(".animsition").animsition({
    // the class that it will use (fade down)
    inClass: "fade-in-down-sm",
    //
    outClass: "fade-out-down-sm",
    inDuration: 2000,
    timeout: false,
    // the class that will activate that element
    linkElement: ".btnOne",
    loadingParentElement: "body", //animsition wrapper element,
    loadingClass: "animsition-loading",
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [
      "animation-duration",
      "-webkit-animation-duration",
    ],
    overlay: false,
    //
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
    transition: function (url) {
      window.location.href = url;
    },
  });

  function getPageTwo() {
    console.log("second button clicked");
  }

  function getPageThree() {
    console.log("third button clicked");
  }
  // btnOne.addEventListener('click', getPageOne);
  btnTwo.addEventListener("click", getPageTwo);
  btnThree.addEventListener("click", getPageThree);
});
