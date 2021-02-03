function myFunction() {
    var per = document.getElementById("value").value;

    if (per >= 80 && per <= 100) {
        document.getElementById("demo").innerHTML = "you've got A grade";
    } else if (per >= 60 && per < 80) {
        document.getElementById("demo").innerHTML = "you've got B grade";
    } else if (per >= 45 && per < 60) {
        document.getElementById("demo").innerHTML = "you've got C grade";
    } else if (per >= 33 && per < 45) {
        document.getElementById("demo").innerHTML = "you've got D grade";
    } else if (per < 33 ) {
        document.getElementById("demo").innerHTML = "you're Failed";
    } else {
        document.getElementById("demo").innerHTML = "Invalid";
    }

}










/*

function myFunction() {
    try {
        var per = document.getElementById("value").value;

        if (!per) {
            throw new Error("Invalid")
        }

        if (per >= 80 && per <= 100) {
            throw new Error("you've got A grade")
        } else if (per >= 60 && per < 80) {
            throw new Error("you've got B grade")
        } else if (per >= 45 && per < 60) {
            throw new Error("you've got C grade")
        } else if (per >= 33 && per < 45) {
            throw new Error("you've got D grade")
        } else if (per < 33 ) {
            throw new Error("you're Failed")
        }

        throw new Error("Invalid")
    } catch (err) {
        document.getElementById("demo").innerHTML = err.message;
    }

}

*/






























