var teacherService = new TeacherService();

function getEle(id) {
  return document.getElementById(id);
}

function getListTeacher() {
  var promise = teacherService.getListTeacherApi();
  promise
    .then(function (result) {
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListTeacher();

function renderHTML(data) {
  var content = "";
  data.forEach(function (teacher) {
    if (teacher.loaiND == "GV") {
      content += ` <div class="col-lg-3 col-sm-6 col-12">
            <div class="card-content">
              <div class="card overflow-hidden">
                <div class="overflow-hidden">
                  <img
                    class="card-img-top"
                    src="./imgs/${teacher.hinhAnh}"
                    alt="Card image cap"
                  />
                </div>

                <div class="card-body text-center">
                  <p>${teacher.ngonNgu}</p>
                  <h3>${teacher.hoTen}</h3>
                  <span>
                    ${teacher.moTa}
                  </span>
                </div>
              </div>
            </div>
          </div>`;
    }
  });

  getEle("teacherCards").innerHTML = content;
}
