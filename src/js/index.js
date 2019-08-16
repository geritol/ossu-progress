const fs = require("fs");
const progress = require("../../progress.json");

const TEMPATE_LOCATION = "dist/index.html";

fs.readFile(TEMPATE_LOCATION, "utf8", function(err, template) {
  if (err) {
    console.error(`Failed to read ${TEMPATE_LOCATION} \n TIP: run 'npm build'`);
  }
  const courseProgress = __createCourseProgress();
  const htmlToRender = template.replace(
    /<ul\s+id="ossu">[\S\s]*?<\/ul>/gi,
    '<ul id="ossu">' + courseProgress + "</ul>"
  );
  fs.writeFileSync(TEMPATE_LOCATION, htmlToRender);
});

function __createCourseProgress() {
  let courseProgress = "";
  progress.forEach(function renderCategory(category) {
    courseProgress += _createCategoryOutput(category);
  });
  return courseProgress;
}

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
