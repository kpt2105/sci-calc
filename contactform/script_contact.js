$(document).ready(function () {
  $(".submit").click(function (event) {
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var statusElm = $("#status");
    statusElm.empty();

    function removeAll() {
      if (name.length >= 2) {
        statusElm.append("<div></div>");
      } else {
        event.preventDefault();
        statusElm.append("<div>Името трябва да е поне 2 знака</div>");
      }

      if (email.length >= 5 && email.includes("@") && email.includes(".")) {
        statusElm.append("<div></div>");
      } else {
        event.preventDefault();
        statusElm.append("<div>И-мейлът не е валиден</div>");
      }

      if (subject.length >= 2) {
        statusElm.append("<div></div>");
      } else {
        event.preventDefault();
        statusElm.append("<div>Темата трябва да е поне 2 знака</div>");
      }

      if (message.length >= 10) {
        statusElm.append("<div></div>");
      } else {
        event.preventDefault();
        statusElm.append("<div>Съобщението трябва да е поне 10 знака</div>");
      }
    }

    if (
      name.length >= 2 &&
      email.length >= 5 &&
      email.includes("@") &&
      email.includes(".") &&
      subject.length >= 2 &&
      message.length >= 10
    ) {
      removeAll();
      window.scrollTo(0, 0);
    } else {
      pleaseFill();
      window.scrollTo(0, 0);
    }

    function redAppear() {
      document.getElementById("status").style = "display: flex;";
      return false;
    }

    function redGone() {
      document.getElementById("status").style = "display: none;";
      return false;
    }

    if (
      name.length >= 2 &&
      email.length >= 5 &&
      email.includes("@") &&
      email.includes(".") &&
      subject.length >= 2 &&
      message.length >= 10
    ) {
      redGone();
    } else {
      redAppear();
    }

    function pleaseFill() {
      if (
        name.length == 0 &&
        email.length == 0 &&
        subject.length == 0 &&
        message.length == 0
      ) {
        statusElm.append("<div>Моля попълнете формата</div>");
        window.scrollTo(0, 0);
      } else {
        removeAll();
      }
    }
  });
});
