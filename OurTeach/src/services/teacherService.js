function TeacherService() {
  this.getListTeacherApi = function () {
    var promise = axios({
      url: "https://638328771ada9475c8f91916.mockapi.io/api/Product",
      method: "GET",
    });

    return promise
  };
}
