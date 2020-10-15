$(document).ready(function () {
  $('img#design').hover(function () {
    $('p#pdesign').hide();
    $("div#designInfo").show();},

    function () {
      $('p#pdesign').show();
      $("img#design").show();
      $("div#designInfo").hide();
  });

  $('img#dev').hover(function () {
    $('p#pdev').hide();
    $("div#devInfo").show();},

    function () {
      $('p#pdev').show();
      $("img#dev").show();
      $("div#devInfo").hide();
  });

  $('img#product').hover(function () {
    $('p#pprod').hide();
    $("div#prodInfo").show();},

    function () {
      $('p#pprod').show();
      $("img#product").show();
      $("div#prodInfo").hide();
  });

  $('form#feedback').submit(function () {
    var userName = $("input#name").val();
    var userEmail = $("input#email").val();
    var feedback = $("input#message").val();
    window.alert(userName + "we have received your message. Thank you for contacting us.");
  });
});
