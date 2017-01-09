/*
  Hotel Booking example

  1) User can input the number of rooms to book. Price calculation is done accordingly
  2) User can sort the options in increasing or decreasing order of price or name
*/

(function () {
  console.log('Inside booking options JS')

  var optionsData = [
    {
      'name': 'Adjoining Room',
      'description': 'A single room and a double room which share a common boundary',
      'price': 5000,
      'type': 'Suite',
      'roomsBooked': 0
    },

    {
      'name': 'Single Room',
      'description': 'A room with a queen size bed',
      'price': 1000,
      'type': 'Single',
      'roomsBooked': 0
    },

    {
      'name': 'Suite Room',
      'description': 'A room with a single bed, a double bed, a living room and a dining area',
      'price': 4000,
      'type': 'Suite',
      'roomsBooked': 0
    },

    {
      'name': 'Double Room',
      'description': 'A room with a king size double bed',
      'price': 2000,
      'type': 'Double',
      'roomsBooked': 0
    }
  ]

  console.log('Initial data', optionsData)

  var genericSortingFunction = (filter,arg0, arg1) => {
    console.log(
      'Arguments', arg0, arg1
    )
  //  return arg0.price - arg1.price
  return arg0[filter].attr - arg1[filter].attr
  }

  const sortByPrice = document.getElementById('sortByPrice')
  const sortByType = document.getElementById('sortByType')

  sortByPrice.onclick = () => {
    alert('sort by price clicked')
    optionsData.sort(genericSortingFunction.bind(null, 'price'))
    console.log('Options sorted by Price', optionsData)
  }

  sortByType.onclick = () => {
    alert('sort by room clicked')
    optionsData.sort(genericSortingFunction.bind(null,'type'))
    console.log('Options sorted by type ',optionsData)
  }

  const renderContent = (option) => {
    console.log('Rendering individual row')

    console.log(option)
    const tableWrapper = document.getElementById('table-wrapper')
    const roomDetails = document.createElement('div')
    roomDetails.id = 'roomDetails'

    const roomPicture = document.createElement('img')
  //  roomPicture.src = './myImage'
    roomPicture.alt = option.name

    const roomTitle = document.createElement('div')
    roomTitle.id = 'roomTitle'
    roomTitle.innerHTML = option.name

    const roomDescription = document.createElement('div')
    roomDescription.id = 'roomDescription'
    roomDescription.innerHTML = option.description

    const roomPrice = document.createElement('div')
    roomPrice.id = 'roomPrice'
    roomPrice.innerHTML = option.price

    roomDetails.append(roomPicture)
    roomDetails.append(roomTitle)
    roomDetails.append(roomDescription)
    roomDetails.append(roomPrice)

    tableWrapper.append(roomDetails)
    tableWrapper.append(document.createElement('br'))
  }

  //Rendering the data here

  optionsData.forEach((option) => {
    renderContent(option)
  })

})()
