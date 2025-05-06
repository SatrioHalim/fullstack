let BtnSubmit = document.getElementById('btnSubmit');
// console.log(BtnSubmit);

let carts = [];

function submitHandler(){
    let id;
    if(carts.length === 0){
        id = 1;
    } else {
        id =carts[carts.length - 1].id + 1;
    }
    let namaValue = document.getElementById('nama').value;
    let barangValue = document.getElementById('barang').value;
    let hargaValue = document.getElementById('harga').value;

    let tempObj = {
        id,
        nama : barangValue,
        harga : +hargaValue // + buat convert ke integer
    }
    carts.push(tempObj);
    console.log(carts);
}

BtnSubmit.addEventListener('click', submitHandler);