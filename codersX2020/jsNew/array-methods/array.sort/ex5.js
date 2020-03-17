// Sort the objects in the array by age

var arr = [{
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]

function byAge(arr) {
    return arr.sort(function (a, b) {
        return a.age - b.age
    })
}
console.log(byAge(arr))


// [{ name: 'Misunderstood Observer', age: 2 }, { name: 'Quiet Samurai', age: 22 }, { name: 'Unlucky Swami', age: 77 }, { name: 'Arrogant Ambassador', age: 100 }]