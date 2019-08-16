"use strict";

(function render() {
  progress.forEach(function renderCategory(category) {
    document.getElementById("ossu").innerHTML += _createCategoryOutput(
      category
    );
  });
})();

function _createCategoryOutput(category) {
  var content = `<li><h3>${category.name}</h3>`;
  if (category.categories) {
    content += "<ul>";
    category.categories.forEach(function(category) {
      content += _createCategoryOutput(category);
    });
    content += "</ul>";
  } else if (category.courses) {
    content += "<ul>";
    category.courses.forEach(function(course) {
      content += _createCourseOutput(course);
    });
    content += "</ul>";
  }
  content += "</li>";
  return content;
}

function _createCourseOutput(course) {
  const statuses = {
    done: '<div class="status done"><div class="checkmark draw"></div></div>',
    doing: '<div class="status doing"></div>',
    todo: '<div class="status todo"></div>'
  };
  return `<li>${statuses[course.status]} <h4><a href="${
    course.url
  }" target="_blank">${course.name}</a></h4></li>`;
}
