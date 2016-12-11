$(function () {
  $("#dark").click(function () {
    $("body").removeClass();
    $("body").addClass("dark");
  });

  $("#normal").click(function () {
    $("body").removeClass();
  });
});