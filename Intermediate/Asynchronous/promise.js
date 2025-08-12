// Promise

let janji = new Promise((resolve, reject)=> {
    try {
        resolve('Fullfilled');
    } catch (err) {
        reject(err);
    }
})

// console.log(typeof janji);

// janji.then(result => {
//     console.log(result);
// }).catch(err => {
//     console.error(err);
// })

function janjiManis(){
    return new Promise((resolve, reject)=>{
        try {
            resolve('Janji Manis Terpenuhi');
        } catch (error) {
            reject(error);
        }
    })
}

// console.log(janjiManis());

janjiManis().
    then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    });