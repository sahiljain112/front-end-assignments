/*
  Hotel Booking example

  1) User can input the number of rooms to book. Price calculation is done accordingly
  2) User can sort the options in increasing or decreasing order of price or name
*/

(function () {
  console.log('Inside booking options JS')
  let totalPrice = 0, totalRooms = 0, discount = '10'
  var optionsData = [
    {
      'name': 'Adjoining Room',
      'description': 'A single room and a double room which share a common boundary',
      'price': 5000,
      'type': 'Adjoining',
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

  var genericSortingFunction = (filter, arg0, arg1) => {
    console.log(
      'Arguments', arg0, arg1
    )
  //  return arg0.price - arg1.price
  return arg0[filter] - arg1[filter]
  }

  const sortByPrice = document.getElementById('sortByPrice')
  const sortByType = document.getElementById('sortByType')

  sortByPrice.onclick = () => {
    optionsData.sort(genericSortingFunction.bind(null, 'price'))
    console.log('Options sorted by Price', optionsData)
    renderRoomDetails()
  }

  sortByType.onclick = () => {
    optionsData.sort(genericSortingFunction.bind(null, 'type'))
    console.log('Options sorted by type ', optionsData)
    renderRoomDetails()
  }

  const replaceContent = (newRoomDetails) => {
    var previousRoomDetails = document.getElementById('rooms')
    var parent = previousRoomDetails.parentNode

    parent.insertBefore(newRoomDetails, previousRoomDetails)
    parent.removeChild(previousRoomDetails)
  }

  const checkoutButton = document.getElementById('checkout')
  console.log('checkout is ', checkout)

  checkoutButton.onclick = () => {
  //  alert('Hurray')
    totalPrice = totalRooms = 0
    const roomDetailsList = document.getElementsByClassName('roomDetails')
    optionsData.forEach((option) => {
      //console.log(document.getElementById(`${option.type}`))
      const roomsPerOption = parseInt(document.getElementById(`${option.type}`).value || 0, 10)
      console.log('Rooms per option', roomsPerOption)
      totalRooms = totalRooms + roomsPerOption
      totalPrice += (option.price * roomsPerOption)
    })
      console.log('Total price and rooms', totalPrice, totalRooms)
      console.log('Yp',document.getElementsByClassName('calculation__rooms'))
      document.getElementsByClassName('calculation__rooms')[0].innerHTML = totalRooms
      document.getElementsByClassName('calculation__price')[0].innerHTML = ` &#8377 ${totalPrice} /-`
      discountedPrice()
  }

  const discountedPrice = () => {
    const discountedPrice = totalPrice - (((discount) * totalPrice)/100).toFixed(2)
    document.getElementsByClassName('calculation__discount')[0].innerHTML = `${discount}%`
    document.getElementsByClassName('calculation__net')[0].innerHTML = ` &#8377 ${discountedPrice} /-`
  }

  const renderIndividualRoom = (option, newRooms) => {
    console.log('Rendering individual row')
    console.log(option)
    const roomDetails = document.createElement('div')
    roomDetails.className = 'roomDetails'

    const roomPicture = document.createElement('img')
    roomPicture.src = 'sprinklr.png'
    roomPicture.alt = option.name

    const roomGroup = document.createElement('div')
    roomGroup.id = 'roomGroup'

    const roomTitle = document.createElement('div')
    roomTitle.id = 'roomTitle'
    roomTitle.innerHTML = option.name

    const roomDescription = document.createElement('div')
    roomDescription.id = 'roomDescription'
    roomDescription.innerHTML = option.description

    const roomPrice = document.createElement('div')
    roomPrice.id = 'roomPrice'
    roomPrice.innerHTML = `&#8377 ${option.price} /-`

    roomGroup.append(roomTitle)
    roomGroup.append(roomDescription)
    roomGroup.append(roomPrice)

    const roomCountWrapper = document.createElement('div')
    roomCountWrapper.id = 'roomCountWrapper'
    // const upVote = document.createElement('button')
    // const downVote = document.createElement('button')
    //
    // upVote.id = 'upVote'
    // downVote.id = 'downVote'
    //
    // const upVoteIcon = document.createElement('span')
    // upVoteIcon.className = 'glyphicon glyphicon-chevron-up'
    //
    // const downVoteIcon = document.createElement('span')
    // downVoteIcon.className = 'glyphicon glyphicon-chevron-down'
    //
    // upVote.append(upVoteIcon)
    // downVote.append(downVoteIcon)

    const roomCountInput = document.createElement('input')
    roomCountInput.id = `${option.type}`

    const roomCount = document.createElement('h4')
    roomCount.innerHTML = 'Book rooms now!'

    roomCountWrapper.append(roomCount)
    roomCountWrapper.append(roomCountInput)

    roomDetails.append(roomPicture)
    roomDetails.append(roomGroup)
    roomDetails.append(roomCountWrapper)
    roomDetails.append(document.createElement('br'))
    newRooms.append(roomDetails)
  }

  // Rendering the data here
  const renderRoomDetails = () => {
    let newRooms = document.createElement('div')
    newRooms.id = 'rooms'

    optionsData.forEach((option) => {
      renderIndividualRoom(option, newRooms)
    })
    replaceContent(newRooms)
  }
  renderRoomDetails()
})()
