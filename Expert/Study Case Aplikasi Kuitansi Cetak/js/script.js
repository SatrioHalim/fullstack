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
    document.getElementById('namaCart').innerHTML = namaValue;
    carts.push(tempObj);
    getCarts();
    // console.log(carts);
}

function getCarts(){
    let tBody = document.getElementById('tBody');
    tBody.innerHTML = '';
    carts.forEach(cart => {
        tBody.innerHTML += `<tr>
            <td>${cart.id}</td>
            <td>${cart.nama}</td>
            <td>${cart.harga}</td>
        </tr>`
    })
}
BtnSubmit.addEventListener('click', submitHandler);

let BtnPrint = document.getElementById('btnPrint');

function printHandler(){
    // console.log("Cetak");
    document.querySelector('.form-box').style.display = 'none';
    BtnPrint.style.display = 'none';    
    window.print();
}
BtnPrint.addEventListener('click', printHandler);