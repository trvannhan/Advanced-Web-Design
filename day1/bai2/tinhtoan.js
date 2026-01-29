function myFunction1() {
    var a = parseFloat(document.getElementById("text_1").value);
    var b = parseFloat(document.getElementById("text_2").value);
    var c = document.getElementById("select");
    var value = parseInt(c.options[c.selectedIndex].value);

    var n;
    switch (value) {
        case 1: {
            n = (a + (b * 2)) / 3;
            n = parseFloat(n);
            document.getElementById("result").value = n;
            break;
        }
        case 2: {
            n = ((a * 2) + (b * 3)) / 5;
            n = parseFloat(n);
            document.getElementById("result").value = n;
            break;
        }
        case 3: {
            n = ((a * 3) + (b * 4)) / 7;
            n = parseFloat(n);
            document.getElementById("result").value = n;
            break;
        }
    }
    if (n >= 9) {
        document.getElementById("display").innerHTML = "Hoc Sinh Gioi";
        document.getElementById("display").style.color = "green";
    } else if (n >= 7 && n < 9) {
        document.getElementById("display").innerHTML = "Hoc Sinh kha";
        document.getElementById("display").style.color = "#d97706";
    } else if (n >= 5 && n < 7) {
        document.getElementById("display").innerHTML = "Hoc Sinh Trung Binh";
        document.getElementById("display").style.color = "blue";
    } else {
        document.getElementById("display").innerHTML = "Hoc Sinh Yeu";
        document.getElementById("display").style.color = "red";
    }
}
function myFunction2() {
    document.getElementById("text_1").value = "";
    document.getElementById("text_2").value = "";
    document.getElementById("select").value = "1";
    document.getElementById("result").value = "";
    document.getElementById("display").innerHTML = "";
}