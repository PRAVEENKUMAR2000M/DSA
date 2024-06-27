
const url = "https://dog.ceo/api/breeds/list/all"

let result
// fetch(url).then(res => res.json()).then(data => {
//     console.log(data)
//     result = data.message
//     printData("")

// })

async function myFunc() {
    const res = await fetch(url)
    result = await res.json()
    result = result.message
    printData()
}

myFunc()

const inele = document.createElement("input")
inele.type = "text"
const body = document.getElementsByTagName("body")[0]
console.log(body)
body.append(inele)

const table = document.createElement("table")
body.append(table)
function printData(searchText) {
    // console.log(result)
    let data1 = Object.keys(result)
    if (searchText) {
        data1 = data1.filter(val => val.startsWith(searchText))
    }
    table.innerHTML = "";
    for (let i of data1) {
        // console.log(i)
        const tr = document.createElement("tr")
        const td = document.createElement("td")
        const td1 = document.createElement("td")

        td.innerHTML = i.toUpperCase()
        td1.innerHTML = result[i].join("").toUpperCase()
        tr.append(td, td1)
        table.append(tr)
    }
}

inele.addEventListener("keyup", (event) => {
    console.log(event.target.value)
    printData(event.target.value)

})
//     .then(res => res.json())
//     .then(data => {
//         // const strdata = JSON.stringify(data)
//         // const ele = document.getElementById("main")
//         // ele.append(strdata)
//         result.push(data)
//         return data
//     })
     
// function printData() {
//         console.log(data)
//     }