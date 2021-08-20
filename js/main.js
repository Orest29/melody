$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path");
  var counterUp = $('.counter-up'); /*кнопка збільшення поверха */
  var counterDown = $('.counter-down'); /*кнопка зменшення поверха */
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsBatton = $('.view-flats');

  floorPath.on("mouseover", function() {
    floorPath.removeClass("current-floor");  /*видаляємо поверх */
    currentFloor = $(this).attr('data-floor');
    $('.counter').text(currentFloor);
  });

  floorPath.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);
  viewFlatsBatton.on("click", toggleModal);

  counterUp.on('click', function() {
    if (currentFloor < 18) { /*обмежує кількість поверхів */
      currentFloor++;
    usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false}); /*щоб відображалося число у форматі 01,02,03... а не 1,2,3 */
    $('.counter').text(usCurrentFloor);
    floorPath.removeClass("current-floor"); /*видаляємо поверх */
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");  /*підсвітка поверхів */
    }
  });
  counterDown.on('click', function() {
    if (currentFloor > 2) { /*обмежує кількість поверхів */
      currentFloor--;
    usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false}); /*щоб відображалося число у форматі 01,02,03... а не 1,2,3 */
    $('.counter').text(usCurrentFloor);
    floorPath.removeClass("current-floor");  /*видаляємо поверх */
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");  /*підсвітка поверхів */
    }
  });
  function toggleModal() {   /*функція відкрити-закрити вікно */
    modal.toggleClass('is-open');
  }
});