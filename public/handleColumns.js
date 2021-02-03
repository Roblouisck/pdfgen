var columns = Number('{{ columns }}')
// const tables = Array.from(document.getElementsByClassName('table'))
// const tables = document.getElementsByClassName('table')
// const tableArray = tables.map((table) => {
//     return table
// })

// const body = document.getElementById('body')

const tables = document.querySelectorAll('.table')
const tablesArray = Array.prototype.slice.call(tables);

// const title = document.getElementById('title')
// title.remove()

const columns = 2

for (var index = 0; index < tablesArray.length; index++) {
    const element = tablesArray[index];
    // element.style.border = "5px solid red"

    switch (columns) {
        case 1:
            // table.style.width = '104mm'
            element.style.border = '5px solid red'
            break;
        case 2:
            // table.style.width = '84mm'
            element.style.border = '5px solid blue'
            break;
        case 3:
            // table.style.width = '54mm'
            element.style.border = '5px solid purple'
            break;
        default:
    }
}

// tablesArray.forEach(function (table) {
//     switch (columns) {
//         case 1:
//             // table.style.width = '104mm'
//             title.style.border = '5px solid red'
//             break;
//         case 2:
//             // table.style.width = '84mm'
//             title.style.border = '5px solid blue'
//             break;
//         case 3:
//             // table.style.width = '54mm'
//             title.style.border = '5px solid purple'
//             break;
//         default:
//     }
// })


// var myobj = document.getElementById("title");
// myobj.remove();