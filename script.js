var questionTypes = []
var questionValues = []

function kenston() {
  questionTypes = ["tim", "atb", "bac", "ari", "nih", "pat", "aff", "ari", "cry", "ari", "ari", "ari", "nih", "ari", "cry", "bac", "ari", "cae", "ari"]
  questionValues = [200, 100, 250, 350, 300, 500, 125, 350, 250, 300, 300, 250, 300, 300, 315, 500, 600, 120, 400]
  console.log(questionTypes)
  table()
}
var bonusQuestion = 0

function table() {
  console.log(questionTypes)
  var str = "<table> \n <tr> \n <th>Question</th> \n <th>Type</th> \n <th>Value</th> \n <th> Incorrect Letters </th> \n <th> Score </th> \n <th> Special Bonus </th> </tr>"
  for (var i = 0; i < questionTypes.length; i++) {
    if ((questionTypes[i] == "ari") || (questionTypes[i] == "pat") || (questionTypes[i] == "aff") || (questionTypes[i] == "bac") || (questionTypes[i] == "nih") || (questionTypes[i] == "cae") || (questionTypes[i] == "atb")) {
    str = str + "<tr> \n <td>" + i + "</td> \n" + "<td>" + questionTypes[i] + "</td> \n" + "<td>" + questionValues[i] + "</td> \n" + "<td><input id='" + i + "'></input></td> \n" + "<td id='" + (i + 100)+ "'></td>" + "<td><input type='checkbox' id='" + (i+200) + "'></input</td>"+ "</tr>"
    } else {
      if (questionTypes[i] == "tim") {
      str = str + "<tr> \n <td>" + i + "</td> \n" + "<td>" + questionTypes[i] + "</td> \n" + "<td>" + questionValues[i] + "</td> \n" + "<td><input placeholder = 'min:sec' id='" + i + "'></input></td> \n" + "<td id='" + (i + 100)+ "'></td>"+ "<td><input type='checkbox' id='" + (i+200) + "'></input</td>"+ "</tr>"
      } else {
      str = str + "<tr> \n <td>" + i + "</td> \n" + "<td>" + questionTypes[i] + "</td> \n" + "<td>" + questionValues[i] + "</td> \n" + "<td><input type = 'checkbox' id='" + i + "'></input></td> \n" + "<td id='" + (i + 100)+ "'></td>"+ "<td><input type='checkbox' id='" + (i+200) + "'></input></td>"+ "</tr>"
    }
  }
  }
  str = str + "</table>" + "\n" + "<button onClick = submit()> Submit </button>"
  console.log(str)
  document.getElementById("table").innerHTML = str
}


function submit() {
  var scores = []
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
        if (input == "") {
          score = 0
        } else {
        score = questionValues[i]
        }
      }
    document.getElementById(i + 100).innerHTML = score
  } else {
      if (questionTypes[i] == "tim") {
        if (input == "") {
          score = 0
        } else {
          console.log(input)
          var split = input.split(":")
          var seconds = parseInt(split[0]) * 60 + parseInt(split[1])
          score = 2 * (600 - seconds) + 200
        }
      } else {
      if (document.getElementById(i).checked == true) {
        score = questionValues[i]
      } else {
        score = 0
      }
      }
  }
    document.getElementById(i + 100).innerHTML = score

    if (document.getElementById(i + 200).checked == true) {
      if (score == questionValues[i]) {
        bonusQuestion = bonusQuestion + 1
      }
    }
    scores.push(score)
}

  var bonusScore = 0
  if (bonusQuestion == 1) {
    bonusScore = 150
  } else {
    if (bonusQuestion == 2) {
      bonusScore = 400
    if (bonusQuestion == 3) {
      bonusScore = 750
      }
    }
  }
  
  var totalScore = 0
  for (var i = 0; i < scores.length; i++) {
    totalScore = totalScore + scores[i]
  }
  totalScore = totalScore + bonusScore
  if (scores[0] > questionValues[0]) {
    document.getElementById("scores").innerHTML = "Timed Bonus: " + (scores[0] - questionValues[0]) + ", Special Bonus: " + bonusScore + ", Total Score: " + totalScore
  } else {
    document.getElementById("scores").innerHTML = "Timed Bonus: 0, Special Bonus: " + bonusScore + ", Total Score: " + totalScore
  }
  
}