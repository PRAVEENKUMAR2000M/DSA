
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })



// const apiUrl = "https://jsonplaceholder.typicode.com/posts"
// async function getData(api, cb) {
//     const res = await fetch(api)
//     const data = await res.json()
//     cb(data)
// }

// function displayData(data) {
//     const withoutDes = data.map((value, index, arry) => {
//         let obj = { ...value }
//         delete obj["title"]
//         return obj
//     })
//     console.log(withoutDes)
//     const relese2020 = withoutDes.filter((value, index, arry) => value.userId == 3)
//     console.log(relese2020)
// }

// const data = getData(apiUrl, displayData)
// console.log(data)


const apiUrl = "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"

async function getData(api, cb1, cb2) {
    const res = await fetch(apiUrl)
    const response = await res.json()
    cb1(response)
    cb2(response)
}

function displayData(response) {
    const rul = response.map((value, index, array) => {
        const obj = { ...value }
        delete obj["description"]
        return obj
    })
    console.log(rul)

    // const result = response.filter((value, index, array) => value.year == 2020)
    // console.log(result)
}

// function thirdData(response) {
//     const result2 = response.filter((value, index, array) => index % 4 == 0)
//     console.log(result2)
// }

function thirdData(response) {
    const relese2020 = response.filter((value, index) => value.year == 2020)
    console.log(relese2020)
    // const totalVote = relese2020.reduce((accumulator, value) => {
    //    return accumulator + value.votes
    // },0)
    // console.log("votes", totalVote)

    const genreobj = relese2020.reduce((accumulator, value) => {
        value.genreIds.forEach(element => {
            if (accumulator[element]) {
                accumulator[element].push(value)
            } else {
                accumulator[element] = [value]
            }
        })
        return accumulator
    }, {})
    console.log(genreobj)
}


const res = getData(apiUrl, displayData, thirdData)
console.log(res)