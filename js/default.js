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
        default:
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
    endMenu("place5-1", getCookie("place5-1"));
    document.getElementById("place5-1").onclick = () => {
        loadMenu("place5-1")
    };
    endMenu("place5-2", getCookie("place5-2"));
    document.getElementById("place5-2").onclick = () => {
        loadMenu("place5-2")
    };
    endMenu("place5-3", getCookie("place5-3"));
    document.getElementById("place5-3").onclick = () => {
        loadMenu("place5-3")
    };
    endMenu("place5-4", getCookie("place5-4"));
    document.getElementById("place5-4").onclick = () => {
        loadMenu("place5-4")
    };
    endMenu("place5-5", getCookie("place5-5"));
    document.getElementById("place5-5").onclick = () => {
        loadMenu("place5-5")
    };
    endMenu("place5-6", getCookie("place5-6"));
    document.getElementById("place5-6").onclick = () => {
        loadMenu("place5-6")
    };
    endMenu("place5-7", getCookie("place5-7"));
    document.getElementById("place5-7").onclick = () => {
        loadMenu("place5-7")
    };
    endMenu("place5-8", getCookie("place5-8"));
    document.getElementById("place5-8").onclick = () => {
        loadMenu("place5-8")
    };
    endMenu("place5-9", getCookie("place5-9"));
    document.getElementById("place5-9").onclick = () => {
        loadMenu("place5-9")
    };
    endMenu("place5-10", getCookie("place5-10"));
    document.getElementById("place5-10").onclick = () => {
        loadMenu("place5-10")
    };
    endMenu("place5-11", getCookie("place5-11"));
    document.getElementById("place5-11").onclick = () => {
        loadMenu("place5-11")
    };
    endMenu("place6-1", getCookie("place6-1"));
    document.getElementById("place6-1").onclick = () => {
        loadMenu("place6-1")
    };
    endMenu("place6-2", getCookie("place6-2"));
    document.getElementById("place6-2").onclick = () => {
        loadMenu("place6-2")
    };
    endMenu("place6-3", getCookie("place6-3"));
    document.getElementById("place6-3").onclick = () => {
        loadMenu("place6-3")
    };
    endMenu("place6-4", getCookie("place6-4"));
    document.getElementById("place6-4").onclick = () => {
        loadMenu("place6-4")
    };
    endMenu("place6-5", getCookie("place6-5"));
    document.getElementById("place6-5").onclick = () => {
        loadMenu("place6-5")
    };
    endMenu("place6-6", getCookie("place6-6"));
    document.getElementById("place6-6").onclick = () => {
        loadMenu("place6-6")
    };
    endMenu("place6-7", getCookie("place6-7"));
    document.getElementById("place6-7").onclick = () => {
        loadMenu("place6-7")
    };
    endMenu("place6-8", getCookie("place6-8"));
    document.getElementById("place6-8").onclick = () => {
        loadMenu("place6-8")
    };
    endMenu("place6-9", getCookie("place6-9"));
    document.getElementById("place6-9").onclick = () => {
        loadMenu("place6-9")
    };
    endMenu("place6-10", getCookie("place6-10"));
    document.getElementById("place6-10").onclick = () => {
        loadMenu("place6-10")
    };
    endMenu("place7-1", getCookie("place7-1"));
    document.getElementById("place7-1").onclick = () => {
        loadMenu("place7-1")
    };
    endMenu("place7-2", getCookie("place7-2"));
    document.getElementById("place7-2").onclick = () => {
        loadMenu("place7-2")
    };
    endMenu("place7-3", getCookie("place7-3"));
    document.getElementById("place7-3").onclick = () => {
        loadMenu("place7-3")
    };
    endMenu("place7-4", getCookie("place7-4"));
    document.getElementById("place7-4").onclick = () => {
        loadMenu("place7-4")
    };
    endMenu("place7-5", getCookie("place7-5"));
    document.getElementById("place7-5").onclick = () => {
        loadMenu("place7-5")
    };
    endMenu("place7-6", getCookie("place7-6"));
    document.getElementById("place7-6").onclick = () => {
        loadMenu("place7-6")
    };
    endMenu("place7-7", getCookie("place7-7"));
    document.getElementById("place7-7").onclick = () => {
        loadMenu("place7-7")
    };
    endMenu("place7-8", getCookie("place7-8"));
    document.getElementById("place7-8").onclick = () => {
        loadMenu("place7-8")
    };
    endMenu("place7-9", getCookie("place7-9"));
    document.getElementById("place7-9").onclick = () => {
        loadMenu("place7-9")
    };
    endMenu("place7-10", getCookie("place7-10"));
    document.getElementById("place7-10").onclick = () => {
        loadMenu("place7-10")
    };
    endMenu("place7-11", getCookie("place7-11"));
    document.getElementById("place7-11").onclick = () => {
        loadMenu("place7-11")
    };
    endMenu("place7-12", getCookie("place7-12"));
    document.getElementById("place7-12").onclick = () => {
        loadMenu("place7-12")
    };
    endMenu("place8-1", getCookie("place8-1"));
    document.getElementById("place8-1").onclick = () => {
        loadMenu("place8-1")
    };
    endMenu("place8-2", getCookie("place8-2"));
    document.getElementById("place8-2").onclick = () => {
        loadMenu("place8-2")
    };
    endMenu("place8-3", getCookie("place8-3"));
    document.getElementById("place8-3").onclick = () => {
        loadMenu("place8-3")
    };
    endMenu("place8-4", getCookie("place8-4"));
    document.getElementById("place8-4").onclick = () => {
        loadMenu("place8-4")
    };
    endMenu("place8-5", getCookie("place8-5"));
    document.getElementById("place8-5").onclick = () => {
        loadMenu("place8-5")
    };
    endMenu("place8-6", getCookie("place8-6"));
    document.getElementById("place8-6").onclick = () => {
        loadMenu("place8-6")
    };
    endMenu("place8-7", getCookie("place8-7"));
    document.getElementById("place8-7").onclick = () => {
        loadMenu("place8-7")
    };
    endMenu("place8-8", getCookie("place8-8"));
    document.getElementById("place8-8").onclick = () => {
        loadMenu("place8-8")
    };
    endMenu("place8-9", getCookie("place8-9"));
    document.getElementById("place8-9").onclick = () => {
        loadMenu("place8-9")
    };
    endMenu("place8-10", getCookie("place8-10"));
    document.getElementById("place8-10").onclick = () => {
        loadMenu("place8-10")
    };
    endMenu("place8-11", getCookie("place8-11"));
    document.getElementById("place8-11").onclick = () => {
        loadMenu("place8-11")
    };
    endMenu("place8-12", getCookie("place8-12"));
    document.getElementById("place8-12").onclick = () => {
        loadMenu("place8-12")
    };
    endMenu("place8-13", getCookie("place8-13"));
    document.getElementById("place8-13").onclick = () => {
        loadMenu("place8-13")
    };
    endMenu("place9-1", getCookie("place9-1"));
    document.getElementById("place9-1").onclick = () => {
        loadMenu("place9-1")
    };
    endMenu("place9-2", getCookie("place9-2"));
    document.getElementById("place9-2").onclick = () => {
        loadMenu("place9-2")
    };
    endMenu("place9-3", getCookie("place9-3"));
    document.getElementById("place9-3").onclick = () => {
        loadMenu("place9-3")
    };
    endMenu("place9-4", getCookie("place9-4"));
    document.getElementById("place9-4").onclick = () => {
        loadMenu("place9-4")
    };
    endMenu("place9-5", getCookie("place9-5"));
    document.getElementById("place9-5").onclick = () => {
        loadMenu("place9-5")
    };
    endMenu("place9-6", getCookie("place9-6"));
    document.getElementById("place9-6").onclick = () => {
        loadMenu("place9-6")
    };
    endMenu("place9-7", getCookie("place9-7"));
    document.getElementById("place9-7").onclick = () => {
        loadMenu("place9-7")
    };
    endMenu("place9-8", getCookie("place9-8"));
    document.getElementById("place9-8").onclick = () => {
        loadMenu("place9-8")
    };
    endMenu("place9-9", getCookie("place9-9"));
    document.getElementById("place9-9").onclick = () => {
        loadMenu("place9-9")
    };
    endMenu("place9-10", getCookie("place9-10"));
    document.getElementById("place9-10").onclick = () => {
        loadMenu("place9-10")
    };
    endMenu("place9-11", getCookie("place9-11"));
    document.getElementById("place9-11").onclick = () => {
        loadMenu("place9-11")
    };
    endMenu("place9-12", getCookie("place9-12"));
    document.getElementById("place9-12").onclick = () => {
        loadMenu("place9-12")
    };
    endMenu("place9-13", getCookie("place9-13"));
    document.getElementById("place9-13").onclick = () => {
        loadMenu("place9-13")
    };

}