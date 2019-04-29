function _loadHeader() {
    console.log('Header Loaded');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("cncAEMHeader").innerHTML = this.responseText;
            // console.log(this.responseText);
        }
    };
    xhttp.open("GET", "https://www.tomthumb.com/content/experience-fragments/www/tomthumb/en/generic_content/header/header.content.html", true);
    xhttp.send();
}
function _loadFooter() {
    console.log('Footer Loaded');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("cncAEMFooter").innerHTML = this.responseText;
            // console.log(this.responseText);
        }
    };
    xhttp.open("GET", "https://www.tomthumb.com/content/experience-fragments/www/tomthumb/en/generic_content/footer/footer.content.html", true);
    xhttp.send();
}