// const modalCloseIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.5 2.5L10 10L2.5 17.5" stroke="#303A57" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 2.5L10 10L17.5 17.5" stroke="#303A57" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
// const modalCloseClass = 'modal__close-btn';

// function init() {
//   var modalList = $("[data-id]");
//   $.each(modalList, function (key, value) {
//     var dataTimeout = $(value).data("timeout");
//     var dataId = $(value).data("id");
//     var dataModalShow = $(value).data("modal-show");
//     if(dataModalShow == "init"){
//        showModal(dataId);
//     }
//     else if (dataId !== undefined || dataId !== null || dataId !== "") {
//       writeCookie(dataId, dataTimeout);
//     }
//   });
// }
// function CustomModal(state) {
//   var props =  {
//       customClose:{
//         closeClass: modalCloseClass,
//         closeText: modalCloseIcon,
//       },
//       hiddenClose:{
//         escapeClose: false,
//         clickClose: false,
//         showClose: false
//       }
//   }
//   return state ? props.customClose : props.hiddenClose;
// }
// function writeCookie(id, timeout) {
//   var date = new Date();
//   var CookiesName = Cookies.get("p-" + id);
//   if (timeout <= 0 || timeout == null || timeout == undefined || timeout == "") {
//     timeout = 24;
//   }
//   date.setTime(date.getTime() + timeout * 60 * 60 * 1000);
//   if (CookiesName == undefined || CookiesName == null) {
//     Cookies.set(("p-" + id), true, { expires: date });
//     showModal(id);
//   }
// }
// function showModal(id){
//   let $el = $('[data-id="' + id + '"]');
//   let dataCustomModal = $el.data("modal-style");
//   if(dataCustomModal == 'custom'){
//     $el.modal(CustomModal(true));
//   }else if(dataCustomModal == "hidden"){
//     $el.modal(CustomModal(false));
//   }
//   else{
//     $el.modal();
//   }

// }

// $(function () {
//   init();
// });
