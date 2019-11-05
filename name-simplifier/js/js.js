function simplifyName() {
    var complexName = document.getElementById("complexName").value.replace(/\s/g, '');;
    var simpleLength = complexName.length - 2;
    if (complexName == "" || simpleLength < 0) {
      document.getElementById("simpleName").value = "Your name is too simple!";
    } else {
        var simpleName = complexName[0] + simpleLength.toString() + complexName[simpleLength + 1];
        document.getElementById("simpleName").value = simpleName;
    }
}

var input = document.getElementById("complexName");

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("simplifyBtn").click();
        document.getElementById("simpleName").focus();
    }
});