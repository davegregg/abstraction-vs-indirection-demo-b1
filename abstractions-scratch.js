const pets = ["Ghost", "Parafin the Goldfish", "Jennifer the Croc"]

function displayPet (petName) {
  document.body.append(`Today, we celebrate the pet "${petName}."`)
}

// This is an example of indirection, but a poor example of abstraction.

function forEach (array, thenDoSomethingWith) {
  for (let index = 0; index < array.length; index += 1) {
    const currentItem = array[index]
    thenDoSomethingWith(currentItem)
}

// forEach(pets, displayPet)
pets.forEach(displayPet)

// "There are two hard things in Computer Science: cache invalidation and naming things."