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
    menuDiv.style.zIndex = "50";
    menuDiv.style.margin = realbut.style.margin + "200";
    menuDiv.style.width = "100px";
    menuDiv.style.height = "400px";
    menuDiv.style.display = "flex";
    menuDiv.style.flexDirection = "column";
    menuButton = document.createElement('button');
    menuButton.style.zIndex = "50";
    menuButton.style.height = "30px";
    menuButton.innerHTML = "gun";
    menuButton.id = "gun";
    menuDiv.appendChild(menuButton);
    menuButton = document.createElement('button');
    menuButton.style.zIndex = "50";
    menuButton.style.height = "30px";
    menuButton.innerHTML = "bomb";
    menuButton.id = "bomb";
    menuDiv.appendChild(menuButton);
    menuButton = document.createElement('button');
    menuButton.style.zIndex = "50";
    menuButton.style.height = "30px";
    menuButton.innerHTML = "electric";
    menuButton.id = "electric";
    menuDiv.appendChild(menuButton);
    menuButton = document.createElement('button');
    menuButton.style.zIndex = "50";
    menuButton.style.height = "30px";
    menuButton.innerHTML = "shrink ray";
    menuButton.id = "shrink ray";
    menuDiv.appendChild(menuButton);
    menuButton = document.createElement('button');
    menuButton.style.zIndex = "50";
    menuButton.style.height = "30px";
    menuButton.innerHTML = "saw";
    menuButton.id = "saw";
    menuDiv.appendChild(menuButton);
    menuButton = document.createElement('button');
    menuButton.style.zIndex = "50";
    menuButton.style.height = "30px";
    menuButton.innerHTML = "acid";
    menuButton.id = "acid";
    menuDiv.appendChild(menuButton);
    menuButton = document.createElement('button');
    menuButton.style.zIndex = "50";
    menuButton.style.height = "30px";
    menuButton.innerHTML = "magnet";
    menuButton.id = "magnet";
    menuDiv.appendChild(menuButton);
    menuButton = document.createElement('button');
    menuButton.style.zIndex = "50";
    menuButton.style.height = "30px";
    menuButton.innerHTML = "clear";
    menuButton.id = "clear";
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
    document.getElementById("clear").onclick = () => {
        endMenu(buttonName, "clear")
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
        case "clear":
            giveColor = "lightgrey";
            giveText = "";
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
    // LEVEL 1
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
    // LEVEL 2
    endMenu("place2-1", getCookie("place2-1"));
    document.getElementById("place2-1").onclick = () => {
        loadMenu("place2-1")
    };
    endMenu("place2-2", getCookie("place2-2"));
    document.getElementById("place2-2").onclick = () => {
        loadMenu("place2-2")
    };
    endMenu("place2-3", getCookie("place2-3"));
    document.getElementById("place2-3").onclick = () => {
        loadMenu("place2-3")
    };
    endMenu("place2-4", getCookie("place2-4"));
    document.getElementById("place2-4").onclick = () => {
        loadMenu("place2-4")
    };
    endMenu("place2-5", getCookie("place2-5"));
    document.getElementById("place2-5").onclick = () => {
        loadMenu("place2-5")
    };
    endMenu("place2-6", getCookie("place2-6"));
    document.getElementById("place2-6").onclick = () => {
        loadMenu("place2-6")
    };
    endMenu("place2-7", getCookie("place2-7"));
    document.getElementById("place2-7").onclick = () => {
        loadMenu("place2-7")
    };
    endMenu("place2-8", getCookie("place2-8"));
    document.getElementById("place2-8").onclick = () => {
        loadMenu("place2-8")
    };
    endMenu("place2-9", getCookie("place2-9"));
    document.getElementById("place2-9").onclick = () => {
        loadMenu("place2-9")
    };
    endMenu("place2-10", getCookie("place2-10"));
    document.getElementById("place2-10").onclick = () => {
        loadMenu("place2-10")
    };
    endMenu("place2-11", getCookie("place2-11"));
    document.getElementById("place2-11").onclick = () => {
        loadMenu("place2-11")
    };
    // LEVELendMenu("place3-1", getCookie("place3-1"));
    document.getElementById("place3-1").onclick = () => {
        loadMenu("place3-1")
    };
    endMenu("place3-2", getCookie("place3-2"));
    document.getElementById("place3-2").onclick = () => {
        loadMenu("place3-2")
    };
    endMenu("place3-3", getCookie("place3-3"));
    document.getElementById("place3-3").onclick = () => {
        loadMenu("place3-3")
    };
    endMenu("place3-4", getCookie("place3-4"));
    document.getElementById("place3-4").onclick = () => {
        loadMenu("place3-4")
    };
    endMenu("place3-5", getCookie("place3-5"));
    document.getElementById("place3-5").onclick = () => {
        loadMenu("place3-5")
    };
    endMenu("place3-6", getCookie("place3-6"));
    document.getElementById("place3-6").onclick = () => {
        loadMenu("place3-6")
    };
    endMenu("place3-7", getCookie("place3-7"));
    document.getElementById("place3-7").onclick = () => {
        loadMenu("place3-7")
    };
    endMenu("place3-8", getCookie("place3-8"));
    document.getElementById("place3-8").onclick = () => {
        loadMenu("place3-8")
    };
    endMenu("place3-9", getCookie("place3-9"));
    document.getElementById("place3-9").onclick = () => {
        loadMenu("place3-9")
    };
    endMenu("place3-10", getCookie("place3-10"));
    document.getElementById("place3-10").onclick = () => {
        loadMenu("place3-10")
    };
    endMenu("place3-11", getCookie("place3-11"));
    document.getElementById("place3-11").onclick = () => {
        loadMenu("place3-11")
    };
    endMenu("place3-12", getCookie("place3-12"));
    document.getElementById("place3-12").onclick = () => {
        loadMenu("place3-12")
    };
    endMenu("place4-1", getCookie("place4-1"));
    document.getElementById("place4-1").onclick = () => {
        loadMenu("place4-1")
    };
    endMenu("place4-2", getCookie("place4-2"));
    document.getElementById("place4-2").onclick = () => {
        loadMenu("place4-2")
    };
    endMenu("place4-3", getCookie("place4-3"));
    document.getElementById("place4-3").onclick = () => {
        loadMenu("place4-3")
    };
    endMenu("place4-4", getCookie("place4-4"));
    document.getElementById("place4-4").onclick = () => {
        loadMenu("place4-4")
    };
    endMenu("place4-5", getCookie("place4-5"));
    document.getElementById("place4-5").onclick = () => {
        loadMenu("place4-5")
    };
    endMenu("place4-6", getCookie("place4-6"));
    document.getElementById("place4-6").onclick = () => {
        loadMenu("place4-6")
    };
    endMenu("place4-7", getCookie("place4-7"));
    document.getElementById("place4-7").onclick = () => {
        loadMenu("place4-7")
    };
    endMenu("place4-8", getCookie("place4-8"));
    document.getElementById("place4-8").onclick = () => {
        loadMenu("place4-8")
    };
    endMenu("place4-9", getCookie("place4-9"));
    document.getElementById("place4-9").onclick = () => {
        loadMenu("place4-9")
    };
    endMenu("place4-10", getCookie("place4-10"));
    document.getElementById("place4-10").onclick = () => {
        loadMenu("place4-10")
    };
    endMenu("place4-11", getCookie("place4-11"));
    document.getElementById("place4-11").onclick = () => {
        loadMenu("place4-11")
    };
    endMenu("place4-12", getCookie("place4-12"));
    document.getElementById("place4-12").onclick = () => {
        loadMenu("place4-12")
    };

}