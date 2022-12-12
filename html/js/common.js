$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
      scrollHorizontally: true,
      navigation: true,
    navigationPosition : 'right',
  });
    new fullpage("#fullpage", {
      anchors: ["section1", "section2", "section3", "section4"],
    });
});
