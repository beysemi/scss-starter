var $tabContent = $(".tab-content");
var $tabLink = $(".tab-link");
var $tabItem = $(".tab-item");
$tabItem.slice(1).addClass("passive");
$tabContent.hide();
$tabContent.first().show();

$tabLink.on("click", function (e) {
  e.preventDefault();
  var tabHref = $(this).attr("href");
  console.log(tabHref);
  if ($(this).parent().hasClass("passive")) {
    $tabItem.addClass("passive");
    $(this).parent().removeClass("passive");
    $tabContent.hide();
    $(tabHref).fadeIn("slow");
  }
});
