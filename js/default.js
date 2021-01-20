function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function consentCookies() {
    if (getCookie('cookieconsent') != "true") {
        document.body.innerHTML += '\
            <div class="cookieconsent">\
            We use cookies to make this site work and we process personal data for security purposes. \
            If You dont consent, please leave the site without logging in.\
            <button id="coconsent">I Understand</button>\
            </div>';
        document.querySelector('.cookieconsent #coconsent').onclick = function(e) {
            e.preventDefault();
            console.log("clicked Consenting");
            document.querySelector('.cookieconsent').style.display = 'none';
            setCookie("cookieconsent", "true", 7);
        };
    } else {}
}

function loadMenu(buttonName) {
    if (document.getElementById("tempMenu") != null) {
        document.getElementById("tempMenu").remove();
    }
    realbut = document.getElementById(buttonName);
    levl = buttonName.split("-");
    towr = levl[1];
    levl = levl[0].replace("place", "");
    parentDiv = document.getElementById(buttonName).parentNode;
    menuDiv = document.createElement('div');
    menuDiv.id = "tempMenu";
    menuDiv.style.margin = realbut.style.margin + "200";
    menuDiv.style.width = "100px";
    menuDiv.style.height = "400px";
    menuDiv.style.display = "flex";
    menuDiv.style.flexDirection = "column";
    menuButton = document.createElement('button');
    menuButton.style.height = "30px";
    menuButton.innerHTML = "gun";
    menuButton.id = "gun";
    menuDiv.appendChild(menuButton);
    menuButton = document.createElement('button');
    menuButton.style.height = "30px";
    menuButton.innerHTML = "bomb";
    menuButton.id = "bomb";
    menuDiv.appendChild(menuButton);
    menuButton = document.createElement('button');
    menuButton.style.height = "30px";
    menuButton.innerHTML = "electric";
    menuButton.id = "electric";
    menuDiv.appendChild(menuButton);
    menuButton = document.createElement('button');
    menuButton.style.height = "30px";
    menuButton.innerHTML = "shrink ray";
    menuButton.id = "shrink ray";
    menuDiv.appendChild(menuButton);
    menuButton = document.createElement('button');
    menuButton.style.height = "30px";
    menuButton.innerHTML = "saw";
    menuButton.id = "saw";
    menuDiv.appendChild(menuButton);
    menuButton = document.createElement('button');
    menuButton.style.height = "30px";
    menuButton.innerHTML = "acid";
    menuButton.id = "acid";
    menuDiv.appendChild(menuButton);
    menuButton = document.createElement('button');
    menuButton.style.height = "30px";
    menuButton.innerHTML = "magnet";
    menuButton.id = "magnet";
    menuDiv.appendChild(menuButton);
    parentDiv.appendChild(menuDiv);
    document.getElementById("gun").onclick = () => {
        endMenu(buttonName, "gun")
    };
    document.getElementById("bomb").onclick = () => {
        endMenu(buttonName, "bomb")
    };
    document.getElementById("electric").onclick = () => {
        endMenu(buttonName, "electric")
    };
    document.getElementById("shrink ray").onclick = () => {
        endMenu(buttonName, "shrink ray")
    };
    document.getElementById("saw").onclick = () => {
        endMenu(buttonName, "saw")
    };
    document.getElementById("acid").onclick = () => {
        endMenu(buttonName, "acid")
    };
    document.getElementById("magnet").onclick = () => {
        endMenu(buttonName, "magnet")
    };
}

function endMenu(buttonNam, towr) {
    buttn = document.getElementById(buttonNam);
    giveColor = "";
    giveText = "";
    buttn.style.fontSize = "20px";
    switch (towr) {
        case "gun":
            giveColor = "rgb(150,70,70)";
            giveText = "G";
            break;
        case "bomb":
            giveColor = "rgb(250,50,50)";
            giveText = "B";
            break;
        case "electric":
            giveColor = "yellow";
            giveText = "E";
            break;
        case "shrink ray":
            giveColor = "rgb(240,100,150)";
            giveText = "R";
            break;
        case "saw":
            giveColor = "gray";
            giveText = "S";
            break;
        case "acid":
            giveColor = "green";
            giveText = "A";
            break;
        case "magnet":
            giveColor = "rgb(50,50,220)";
            giveText = "M";
            break;
    }
    setCookie(buttonNam, towr, 7);
    buttn.style.backgroundColor = giveColor;
    buttn.textContent = giveText;
    if (document.getElementById("tempMenu") != null) {
        document.getElementById("tempMenu").remove();
    }
}

function addButtons() {
    endMenu("place1-1", getCookie("place1-1"));
    document.getElementById("place1-1").onclick = () => {
        loadMenu("place1-1")
    };
    endMenu("place1-2", getCookie("place1-2"));
    document.getElementById("place1-2").onclick = () => {
        loadMenu("place1-2")
    };
    endMenu("place1-3", getCookie("place1-3"));
    document.getElementById("place1-3").onclick = () => {
        loadMenu("place1-3")
    };
}