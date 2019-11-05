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