const { response } = require("express");

const mahasiswaNim = '3';
const updateData = {
    nama: 'Linan',
    gender: 'P',
    prodi: 'TI',
    alamat: 'Cibatu',
}

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error)