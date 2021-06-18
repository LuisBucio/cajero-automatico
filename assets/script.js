let quinientos = 30;
let doscientos = 30;
let cien = 30;
let cincuenta = 30;
let total500 = 500 * quinientos;
let total200 = 200 * doscientos;
let total100 = 100 * cien;
let total50 = 50*cincuenta;
let total = (quinientos*500) + (doscientos*200) + (cien*100) + (cincuenta*50);

console.log(total);

function mostrarDinero(){
    let dinero = document.getElementById('dinero').value // Lectura del dato a traves del HTML
    let a = dinero%50 ;
    let b = dinero/50;

    if(a == 0 && b >= 1){
        let c= dinero%500;            //Segundo if
        let d= dinero/500;//Primer if
        let e = c%200;
        let f = c/200;               //Segundo if
        let g = c%100;
        let h = c/100;
        let j = c%50;
        let k = c/50;

        if(Math.trunc(d) && d <= quinientos){
                 console.log(`Retiro ${Math.trunc(d)} billetes de 500.00`);

            }if(c >= 200 && Math.trunc(f) <= doscientos){
                console.log(`Retiro ${Math.trunc(f)} billetes de 200.00`);

             }if(e >= 100 && Math.trunc(h) <= cien){
                console.log(`Retiro ${Math.trunc(h)} billetes de 100.00`);

             }if((g >= 50 && g <= 100 && Math.trunc(k) <= cincuenta) || cien == 0){
                console.log(`Retiro ${Math.trunc(k)} billetes de 50.00`);
             }else{

        }    
    } else{
        alert('Ingresa una cantidad valida');
    }
}

