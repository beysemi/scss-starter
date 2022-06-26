$(function () {
  initMask();
  formValidate();
});
function formValidate() {
  $("form#contactForm").validate({
    rules: {
      name: {
        required: true,
      },
      surname: {
        required: true,
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      subject: {
        required: true,
      },
      message: {
        required: true,
        minlength: 30,
      },
    },
    messages: getMessages(),

    errorElement: "p",
    errorPlacement: function (error, element) {
      var placement = $(element).data("error");
      if (placement) {
        $(placement).append(error);
      } else {
        error.insertBefore(element);
      }
    },
    onkeyup: false,
    submitHandler: function (form) {
      form.submit();
      return false;
    },
  });
}
function initMask() {
  let prevVal = {
    name: "",
    surname: "",
    subject: "",
  };
  $("input").on("input", function (e) {
    let checkValidity = this.checkValidity();
    if (checkValidity) {
      prevVal[this.id] = this.value;
      console.log(prevVal);
    } else {
      this.value = prevVal[this.id];
    }
  });
}
function getMessages() {
  var en = {
    name: "Please enter your firstname",
    surname: "Please enter your lastname",
    subject: "Please enter your subject",
    message: {
      required: "Please provide a Message",
      minlength: "Your message must be at least 30 characters long",
    },
    phone: "Please enter your phone number",
    email: "Please enter a valid email address",
  };
  var tr = {
    name: "Lütfen adınızı girin",
    surname: "Lütfen soyadınızı girin",
    subject: "Lütfen konu girin",
    message: {
      required: "Lüften mesajınızı girin",
      minlength: "Mesajınız en az 30 karakter uzunluğunda olmalıdır.",
    },
    phone: "Lütfen telefon numaranızı girin",
    email: "Lütfen geçerli bir E-Posta adresi girin",
  };

  var localition = $("html").attr("lang");
  if (localition == "tr") {
    return tr;
  } else {
    return en;
  }
}
