jQuery(document).ready(function() {
  jQuery(".scrollbar-macosx").scrollbar();
});

$.getJSON("./json/test.json", function(obj) {
  for (key in obj) {
    $(".menu__list").append(
      `<li class='text-secondary text-truncate'>
        <a class='navbar-list-text text-secondary' href='#'>${key}</a>
      </li>`
    );
  }
  function addContent(defaultContent) {
    $(".table__thead").append(
      `<tr><td class='d-flex align-items-center sticky-top bg-white'>
        <div class='rounded-circle mr-1'></div>
          <p class='text-truncate mb-0'>${obj[defaultContent]["table"][0]}</p>
        </td>
      </tr>`
    );
    for (var i = 1; i < obj[defaultContent]["table"].length; i++) {
      $(".table__tdoby").append(
        `<tr><td class='d-flex align-items-center'>
          <div class='rounded-circle mr-1'></div>
          <p class='text-truncate mb-0'>${obj[defaultContent]["table"][i]}</p>
        </td></tr>`
      );
    }
    $(".wrapper__text1").append(`<p class='pl-3'>${obj[defaultContent]["text1"]}</p>`);

    for (var i = 0; i < obj[defaultContent]["text2"].length; i++) {
      $(".text2__table__tdoby").append(`<tr><td><p class='pl-3'>${obj[defaultContent]["text2"][i]}</p></td></tr>`);
    }
  }
  function removeContent() {
    $(".table__thead").empty();
    $(".table__tdoby").empty();
    $(".wrapper__text1").empty();
    $(".text2__table__tdoby").empty();
  }

  addContent("Link for display");

  $(".navbar-list-text").click(function() {
    let html = $(this).text();
    console.log(html);
    removeContent();
    addContent(html);
  });
});
