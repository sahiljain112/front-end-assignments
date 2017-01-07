/*
  This example implements the modern day theory of state transitions by replace the entire state with next state!

  1) Create Table creates a new table with the date. Can be retrieved from external JSON file returned from network request too.
  2) There are two functions. One calculates the sum and the other calculates the percentage
  3) The buttons are automatically disabled to prevent addition to duplicate rows to the table
  4) The two functions add content to the tableData object. The object is then passed to the createTable method. This ensure
    that the table element is updated with this tableData object values.
 */

(function () {
  var TOTAL_SCORE = 500
  var headers = ['', 'Physics', 'Chemistry', 'Maths', 'English', 'Comp-Sc' ]
  var totalSumArray = []

  var tableData = {
    'Sahil': {
      'Physics': 99,
      'Chemistry': 99,
      'Maths': 100,
      'English': 99,
      'CS': 100
    },

    'Gaurav': {
      'Physics': 99,
      'Chemistry': 99,
      'Maths': 99,
      'English': 97,
      'CS': 100
    },

    'Karan': {
      'Physics': 98,
      'Chemistry': 96,
      'Maths': 95,
      'English': 98,
      'CS': 100
    },

    'DAP': {
      'Physics': 96,
      'Chemistry': 94,
      'Maths': 99,
      'English': 95,
      'CS': 100
    },

    'Komal': {
      'Physics': 96,
      'Chemistry': 98,
      'Maths': 95,
      'English': 99,
      'CS': 100
    }
  }

  // console.log(tableData)

  function findSumValue (scoreTable) {
    var totalSumArray = []
    var rowLength = scoreTable.rows.length
    for (var i = 1; i < rowLength; i++) {
      var cells = scoreTable.rows.item(i).cells
      var cellLength = cells.length

      var sumValue = 0
      for (var j = 1; j < cellLength; j++) {
        var cellVal = cells.item(j).innerHTML
        sumValue += parseInt(cellVal)
        console.log(cellVal)
      }
      console.log('SUM Value', sumValue)
      totalSumArray.push(sumValue)
    }
    return totalSumArray
  }

  var totalButton = document.getElementById('total')
  var percentageButton = document.getElementById('percentage')
  var resetButton = document.getElementById('reset')

  totalButton.onclick = function () {
    // alert('Inside total')
    percentageButton.disabled = false
    totalButton.disabled = true
    console.log('Total clicked')

    var scoreTable = document.getElementById('scoreTable')
    totalSumArray = findSumValue(scoreTable)
    console.log('Final Sum', totalSumArray)

    var incr = 0
    for (var i in tableData) {
      tableData[i].sum = totalSumArray[incr++]
    }
    headers.push('TOTAL')
    createNewTable()
  }

  percentageButton.onclick = function () {
    percentageButton.disabled = true
    console.log('Percentage clicked')
    var percentageArray = totalSumArray.map(function (sum) {
      return (sum * 0.2).toFixed(2)
    })
    console.log('PercentageArray', percentageArray)
    var incr = 0
    for (var i in tableData) {
      tableData[i].percentage = percentageArray[incr++]
    }
    headers.push('PERCENTAGE')
    createNewTable()
  }

  resetButton.onclick = function () {
    location.reload()
  }

  function createNewTable () {
    var scoreTable = document.getElementById('scoreTable')
    var parent = scoreTable.parentNode

    var newTable = document.createElement('table')
    newTable.id = 'scoreTable'
    var rows = scoreTable.rows.length

    var trHead = document.createElement('tr')
    trHead.id = 'tr-head'
    headers.forEach(function (heading) {
      var tdHead = document.createElement('td')
      tdHead.innerText = heading
      trHead.append(tdHead)
    })

    newTable.append(trHead)

    Object.keys(tableData).forEach(function (key) {
      var tr = document.createElement('tr')

      var name = document.createElement('td')
      name.id = 'table-heading'
      name.innerText = key
      var nameObject = tableData[key]
      tr.append(name)

      Object.keys(nameObject).forEach(function (key) {
        var marks = nameObject[key]
        var myMarker = document.createElement('td')
        myMarker.innerText = marks
        tr.append(myMarker)
      })
      newTable.append(tr)
    })

    parent.insertBefore(newTable, scoreTable)
    parent.removeChild(scoreTable)
  }
  createNewTable()
})()
