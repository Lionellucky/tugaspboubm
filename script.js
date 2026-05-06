function hitung(){
    let p = document.getElementById("panjang").value
    let l = document.getElementById("lebar").value
    console.log(p)
    console.log(l)

    let luas = p * l
    alert("luas persegi = " + luas)
    return luas
}