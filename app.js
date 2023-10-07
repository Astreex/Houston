// const word = document.querySelector('.beginning')
// console.log(word)

// setTimeout(() => {
//     addStyleTo(word)},
//     500
// )
// function addStyleTo(node) {
//     node.style.color = 'red'
//     node.style.outline = '2px solid #fff'
//     node.style.margin = '150px 20px 20px'
//     node.style.border = '2px solid #fff'
//     node.style.cursor = 'pointer'
//     node.ondragstart = noselect
//     node.onselectstart = noselect
//     node.oncontextmenu = noselect
//     function noselect() {return false;}
// }
// word.onclick = () => {
//     if (word.style.color === 'red') {
//         word.style.fontSize = '5rem'
//         word.style.color = 'yellow'
//     } else {
//         word.style.color = 'red'
//         word.style.fontSize = '2rem'
//     }
// }
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            domain: '.com'
        }
        resolve(backendData)
    }, 2000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    }).then(clientData => {
        console.log('Data received', clientData)
    })
})