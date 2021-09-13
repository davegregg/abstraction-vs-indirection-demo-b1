const playerModel = { rowIndex: null, cellIndex: null }
const mazeModel = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W   W",
  "W W W WWW WWWWW W WWW",
  "W W W  W      W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW"
]
const cellTypes = {    // These map to CSS classes.
  "W": "wall",
  " ": "floor",
  "S": "start",
  "F": "finish",
}
const mainElement = document.querySelector("main")

function createCellElement (cellModel, rowIndex, cellIndex) {
  const cellElement = document.createElement("span")
  cellElement.classList.add("cell", cellTypes[cellModel])
  cellElement.dataset.rowIndex = rowIndex
  cellElement.dataset.cellIndex = cellIndex

  return cellElement
}


// const actualResult = createCellElement("W", 3, 1) 
// if (actualResult.constructor !== HTMLElement) {
//   console.error("createCellElement is broken!")
// }

// Test-Driven Development (TDD)



for (let rowIndex = 0; rowIndex < mazeModel.length; rowIndex += 1) {
  const rowModel = mazeModel[rowIndex]
  const rowElement = document.createElement("div")
  rowElement.classList.add("row")
  mainElement.append(rowElement)

  for (let cellIndex = 0; cellIndex < rowModel.length; cellIndex += 1) {
    const cellModel = rowModel[cellIndex] // "W" or "S" or " "
    console.log(cellModel)
    const cellElement = createCellElement(cellModel, rowIndex, cellIndex)
    rowElement.append(cellElement)
  }
}

`
  What tools do we have to give us information about our code
  OTHER THAN just staring at the code itself?
    - Behavior on the page itself
    - Syntax errors caught by the editor
    - Error Messages
    - Deliberate Logging
      - Ensuring that my expectations about the data reflect reality.
    - Writing unit tests (code which tests the correctness of your code)
    - Debugger

  What do we do when we try to track the location of something?
    - Gather ANY information about the bug/problem/evidence.
    - Break down the scope of the problem into smaller areas to focus on one at a time.
    - And then start ruling out the possibilities. (Process of Elimination)
    - When you have looked everywhere you thought to look, it is time to start looking where you did not think to look: List your assumptions. Then start proving your assumptions true, starting from the easiest to prove. Confirm your expectations.

  Known knowns
  Known unknowns
  Unknown unknowns
  Unknown knowns
`