function getApi() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText;
            var mohamed = JSON.parse(result);
            var basket = "";
            for (var i = 0; i < mohamed.length; i++) {
                var cartoona = `<div class="md:col-4 texttext-center">
                <img src="${mohamed[i].url}" class="w-100">
                <h4>"${mohamed[i].title}</h4>
                <h6>"${mohamed[i].id}</h6>
            </div>`;
                basket = basket + cartoona
            }

            document.querySelector(".test").innerHTML=basket;
        }
    }

xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
xhttp.send();
}
getApi();