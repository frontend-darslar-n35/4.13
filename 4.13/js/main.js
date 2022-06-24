const numbers = [12, 14, 16, 132, 14, 212];

// function isOdd(value) {
//     if (value % 2 === 0) return true
//     return false
// }

// const result = numbers.some(isOdd)
// const resultEvery = numbers.every(isOdd)
// console.log(resultEvery)


// function findLarger(arr, index) {
//     let largerNumber = arr[index];
//     for (let i = index; i < arr.length; i++) {
//         if (largerNumber < arr[i]) {
//             largerNumber = arr[i];
//             break;
//         }
//     }

//     if (largerNumber === arr[index]) return -1;
//     return largerNumber
// }

// console.log(findLarger(numbers, 3))'


// var boxEl = document.querySelector('.box')


// let pEl = document.createElement('p')
// pEl.textContent = "Lorem"
// boxEl.appendChild("Lorem")
// boxEl.append("ipsum")

// class Player {
//     #x = 0;
//     #y = 0;
//     #name;
//     constructor(name) {
//         this.#name = name
//         console.log(`${name}:Men tug'ildim`)
//     }
//     get name() {
//         return this.#name
//     }

//     move() {
//         console.log(`${this.#name}:Men yuryapman`)
//     }


// }

// class Horse extends Player {
//     #color
//     constructor(color) {
//         super("OT")
//         this.#color = color;
//     }
//     get color() {
//         return this.#color;
//     }
//     move() {
//         console.log(`${this.name}:Men boshqa katakka o'tyapman`);
//     }
// }

// class Piyoda extends Player {
//     #color
//     constructor(color) {
//         super("Piyoda")
//         this.#color = color;
//     }
//     get color() {
//         return this.#color;
//     }
//     move() {
//         console.log(`${this.name}:Men boshqa katakka yuryapman`);
//     }
// }


// const horse1 = new Horse("Red")
// const piyoda1 = new Piyoda("White")

// console.log(piyoda1.color)
// console.log(piyoda1.name)



// horse1.setname = "Piyoda"
// console.log(horse1.setname)
// horse1.move()
// const player1 = new Player("Piyoda1");
// const player2 = new Player("Piyoda2");
// player2.move();
// player1.move()




