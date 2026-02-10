$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
var btnYes = $("#yes");
var btnNo = $("#no");

var size = 1;

btnNo.click(function () {
  size += 0.2;

  btnYes.css({
    transform: "scale(" + size + ")"
  });
});


  
});
