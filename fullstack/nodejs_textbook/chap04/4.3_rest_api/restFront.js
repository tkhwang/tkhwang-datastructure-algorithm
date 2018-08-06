function getUser() {
  var xhr = new XMLHttpRequest();
  xhr.oload = function () {
      if (xhr.status == 200 {
          var users = JSON.parse(xhr.responseText);
          var list = document.getElementById('list');
          list.innerHTML = '';
          Object.keys(users).maps(function (key {

            })
          }
        }
      }