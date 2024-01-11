window.addEventListener("load", function () {
    this.document.getElementById("forma").addEventListener("submit", function () {
        var validno = true;
        if (document.getElementById("naziv").value.length < 3) {
            validno = false;
            document.getElementById("naziv").classList.add("error");
            document.getElementById("naziv").classList.remove("success");
        } else {
            document.getElementById("naziv").classList.add("success");
            document.getElementById("naziv").classList.remove("error");
        }

        return validno;
    });
    this.document.getElementById("naziv").addEventListener("keypress", function () {
        this.classList.remove('success');
        this.classList.remove('error');
    });
    this.document.getElementById("dodaj-sastojak").addEventListener("click", function () {
        var id = document.getElementById("spisak-sastojaka").value;
        if (!id) {
            alert("Izaberi sastojak")
            return;
        }
        dodajSastojak(id);
    });
    this.document.getElementById("forma").addEventListener("submit", function () {
        submitHandler();
    });

    //action="http://postman-echo.com/post" je jos uvijek dio form-a, sto znaci da i u slucaju errora pravi se json za postman
});

function dodajSastojak(id) {
    document.querySelector(`#spisak-sastojaka > option[value='${id}']`).disabled = true;
    document.getElementById("spisak-sastojaka").selectedIndex = 0;
    var naziv = document.querySelector(`#spisak-sastojaka > option[value='${id}']`).innerHTML;
    var span = document.createElement("span");
    span.classList.add("badge");
    span.classList.add("bg-secondary");
    span.dataset.id = id;
    span.innerHTML = naziv;
    var button = document.createElement("button");
    button.type = "button";
    button.classList.add("btn");
    button.classList.add("btn-default");
    button.classList.add("btn-sm");
    button.innerHTML = "X"
    span.appendChild(button);
    document.getElementById("sastojci").appendChild(span);
    document.getElementById("sastojci").appendChild(document.createTextNode(" "));
    button.addEventListener("click", function () {
        var id = this.parentNode.dataset.id;
        this.parentNode.parentNode.removeChild(this.parentNode);
        document.querySelector(`#spisak-sastojaka > option[value='${id}']`).disabled = false;
    })
}

function submitHandler() {
    var spanovi = document.querySelectorAll("#sastojci > span.badge");
    var niz = []
    for (let i = 0; i < spanovi.length; i++) {
        niz.push(spanovi[i].dataset.id);
    }
    var jsonSting = JSON.stringify(niz);
    console.log(jsonSting);

}