const createTabellone = function () {
  const cells = document.getElementById('tabellone')

  for (let i = 0; i < 76; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')

    const cellValue = document.createElement('h3')
    cellValue.innerText = i + 1

    cell.appendChild(cellValue)
    cells.appendChild(cell)
  }
}

let numbers = []
for (let i = 0; i < 76; i++) {
  numbers[i] = i + 1
}

const createTabellina = function (choice) {
  const main = document.getElementsByTagName('main')[0]

  for (let i = 0; i < choice; i++) {
    newTabellina = document.createElement('section')
    let numberArray = [...numbers]

    for (let j = 0; j < 24; j++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      const cellValue = document.createElement('h3')

      cellValue.innerText =
        numberArray[Math.floor(Math.random() * numberArray.length)]
      numberArray = numberArray.filter(function (item) {
        return item !== Number(cellValue.innerText)
      })
      cell.appendChild(cellValue)
      newTabellina.appendChild(cell)
      newTabellina.classList.add('tabellina')
    }
    console.log(numberArray)
    main.appendChild(newTabellina)
  }
}

const extractNumber = function () {
  const n = numbers[Math.floor(Math.random() * numbers.length)]
  numbers = numbers.filter(function (item) {
    return item !== n
  })
  const cellValue = document.querySelectorAll('h3')
  const div = document.querySelectorAll('div')
  for (let i = 0; i < cellValue.length; i++) {
    if (Number(cellValue[i].innerText) === n) {
      div[i].classList.add('drawn')
    }
  }
}

let x = 0

const form = document.getElementById('form')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  const input = document.getElementById('choice').value
  x = input
  form.style.display = 'none'
  createTabellone()
  createTabellina(x)
})

const button = document.getElementById('numberButton')
button.addEventListener('click', extractNumber)
