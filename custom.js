var questionTypes = []
var questionValues = []

function addFunction() {
  questionTypes.push(document.getElementById("point").value)
  questionValues.push(document.getElementById("code").value)
  document.getElementById("point").value = ""
  document.getElementById("code").value = "ari"
  console.log(questionTypes)
  table()
}

function table() {
  console.log(questionTypes)
  var str = "<table> \n <tr> \n <th>Question</th> \n <th>Type</th> \n <th>Value</th> \n <th> Incorrect Letters </th> \n <th> Score </th> \n </tr>"
  for (var i = 0; i < questionTypes.length; i++) {
    str = str + "<tr> \n <td>" + i + "</td> \n" + "<td>" + questionTypes[i] + "</td> \n" + "<td>" + questionValues[i] + "</td> \n" + "<td><input id='" + i + "'></input></td> \n" + "<td id='" + (i + 100)+ "'></td>" + "</tr>"
  }
  str = str + "</table>" + "\n" + "<button onClick = submit()> Submit </button>"
  console.log(str)
  document.getElementById("table").innerHTML = str
}

function submit() {
  for (var i = 0; i < questionTypes.length; i++) {
    var score = 0
    var input = document.getElementById(i).value
    if ((questionTypes[i] == "ari") || (questionTypes[i] == "pat") || (questionTypes[i] == "aff") || (questionTypes[i] == "bac") || (questionTypes[i] == "nih") || (questionTypes[i] == "cae") || (questionTypes[i] == "atb")) {
      if (parseInt(input) > 2) {
        score = questionValues[i] -  ((parseInt(input) - 2) * 100) 
        if (score < 0) {
          score = 0
        }
      } else {
        score = questionValues[i]
      }
    var text1 = "'score" + i + "'"
    document.getElementById(i + 100).innerHTML = score
  }
}
}


