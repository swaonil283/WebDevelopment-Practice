
function getResponse(String url,String method,String key){


var xhttp = new XMLHttpRequest();

xhttp.setRequestHeader("x-api-key", key);
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("responsetext").innerHTML = xhttp.responseText;
    }
};
xhttp.open(method, url, true);
xhttp.send();

alert("sss");
}


getResponse("https://cdata.ml/services/vehicle2cloud/v1/vehicles/projectSmpl/ESP32?start_time_stamp=1551256867.707865","GET","123");