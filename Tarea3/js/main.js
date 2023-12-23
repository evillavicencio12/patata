class deberes{
    acuDivisores(n){
        let cont = 1, r = 0, acu = 0
        while (cont < n) {
            r = n % cont
            if (r == 0) {
                acu = acu + cont
                //resp.innerHTML+=cont+","
                console.log(cont)
            }
            cont = cont + 1
        }
        return acu
    }
    divisor(){
        let acud=0
        let num=document.getElementById("numero").value;
        let resp = document.getElementById("resp")
        num = parseInt(num)
        acud = this.acuDivisores(num)
        resp.innerHTML = acud
    }
    perfecto(){
        let acud=0
        let num=document.getElementById("numero").value;
        let resp = document.getElementById("resp")
        num = parseInt(num)
        acud = this.acuDivisores(num)
        if (acud==num){
            resp.innerHTML = `${num} es perfecto`
        }else{
            resp.innerHTML = `${num} no es perfecto`
        }
     }
    esPrimo(n){
        if (n <= 1) {
            return false;
        } else {
            for (let i = 2; i * i <= n; i++) {
                if (n % i === 0) {
                    return false;
                }
            }
            return true;
        }
    }
    primo(){
        let primo = parseInt(document.getElementById("primo").value);
        let resp = document.getElementById("resp")
        let resultado = this.esPrimo(primo)? `${primo} es primo`: `${primo} no es primo`;
        resp.innerHTML = resultado;
    }
    primoG(){
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let resp = document.getElementById("resp");
        if(this.esPrimo(num1) && this.esPrimo(num2) && ((num1 - num2 === 2) || (num2 - num1 === 2))){
            resp.innerHTML = `${num1} y ${num2} son primos gemelos`;
        }else{
            resp.innerHTML = `${num1} y ${num2} no son primos gemelos`;
        }
    }
    cadenaCont(cad1,cad2){
        return cad1 + " " + cad2;
    }
    concatenarBuscar(){
        let cad1 = document.getElementById("cad1").value;
        let cad2 = document.getElementById("cad2").value;
        let buscar = document.getElementById("buscar").value;

        let nuevaC = this.cadenaCont(cad1,cad2);
        let resp = document.getElementById("resp");
        resp.innerHTML = nuevaC
        let encontrada = false;
        for(let i = 0; i <= nuevaC.length - buscar.length; i++){
            let subcad = nuevaC.substring(i, i + buscar.length);
            if(subcad === buscar){
                encontrada = true;
                break;
            }
        }
        if (encontrada) {
            resp.innerHTML += `<br> La subcadena [${buscar}] SI se encuentra en la cadena concatenada`
        }else{
            resp.innerHTML += `<br> La subcadena [${buscar}] NO se encuentra en la cadena concatenada`
        }

    }
    insertar(){
        let cadena = "Hola, muy buenas";
        let subcadenaInsertar = document.getElementById("subcad").value;
        let posicion = parseInt(document.getElementById("pos").value);
    
        let nuevaCadena = '';
    
        for (let i = 0; i <= cadena.length; i++) {
            if (i === posicion) {
                nuevaCadena += subcadenaInsertar;
            }
    
            if (i < cadena.length) {
                nuevaCadena += cadena[i];
            }
        }
    
        let resp = document.getElementById("resp");
        resp.innerHTML = nuevaCadena;
    }
    eliminar() {
            let cadena = "Hola, muy buenas";
            let subcadenaEliminar = document.getElementById("subcad").value;
        
            let nuevaCadena = '';
        
            for (let i = 0; i < cadena.length; i++) {
                let coincide = true;
        
                for (let j = 0; j < subcadenaEliminar.length; j++) {
                    if (cadena[i + j] !== subcadenaEliminar[j]) {
                        coincide = false;
                        break;
                    }
                }
        
                if (!coincide) {
                    nuevaCadena += cadena[i];
                } else {
                    i += subcadenaEliminar.length - 1;
                }
            }
        
            let resp = document.getElementById("resp");
            resp.innerHTML = nuevaCadena;
    }
    arregloACadena(arreglo) {
        let cadenaResultante = '';
    
        for (let i = 0; i < arreglo.length; i++) {
            cadenaResultante += arreglo[i];
                if (i < arreglo.length - 1) {
                cadenaResultante += "";
            }
        }
    
        return cadenaResultante;
    }
    arreglo(){
        let miArreglo = ["1", "2", "3", "4", "5","6","7","8"];
        let cadenaConvertida = this.arregloACadena(miArreglo);
        document.getElementById("resp").innerHTML = `${cadenaConvertida} es la cadena`
    }
    cadenaArreglo(arreglo){
        let cadenaResultante = '';
    
        for (let i = 0; i < arreglo.length; i++) {
            cadenaResultante += arreglo[i];
                if (i < arreglo.length - 1) {
                cadenaResultante += ""+",";
            }
        }
    
        return cadenaResultante;
    }
    mayor(){
        let array = document.getElementById("arreglo").value;
        let array2 = this.cadenaArreglo(array);
        let mayor = parseInt(array2[0]);
        for(let i = 0; i < array2.length; i++){
            if(parseInt(array2[i]) > mayor){
                mayor = parseInt(array2[i]);
            }
        }
        document.getElementById("resp").innerHTML = `El mayor de este arreglo es: ${mayor}`
    }
    buscar(){
            let array =[4,45,60,23,2,6,9]
            let encontrar = parseInt(document.getElementById("encontrar").value);
            let encontrado = false
            for(let i = 0; i<array.length; i++){
                if(array[i] === encontrar){
                    encontrado = true
                  break;
                }
            }
            if (encontrado){
                document.getElementById("resp").innerHTML = `El valor ${encontrar} SI se encuentra en el arreglo [${array}]`
            }
            else{
                document.getElementById("resp").innerHTML = `El valor ${encontrar} NO se encuentra en el arreglo [${array}]`
            }
    }
    param(insertar,pos){
        let array =[6,7,4,8,2,6];
        pos = parseInt(pos);
        if(pos >= 0 && pos <= array.length){
            array[pos] = insertar;
            document.getElementById("resp").innerHTML = `Su nuevo arreglo es: [${array}]`
        }else{
            document.getElementById("resp").innerHTML = `La posición no es valida`
        }
        return array
    }
    insArray(){
        let insertar = document.getElementById("insertar").value;
        let pos = document.getElementById("pos").value;
        let modifi = this.param(insertar,pos);
    }
    elimArray(){
        let array = [6,40,50,34,45];
        let elim = parseInt(document.getElementById("elim").value);
        for(let i = 0; i < array.length; i++){
            if(array[i] === elim){
                array[i] = array[array.length -1];
                array.length--;
                document.getElementById("resp").innerHTML = `Su nuevo arreglo es: [${array}]`;
                return;
            }
        }
        document.getElementById("resp").innerHTML = `El valor ingresado no es valido`;
    }
    cadArr(){
        let array = document.getElementById("arreglo").value;
        let array2 = this.cadenaArreglo(array);
        document.getElementById("resp").innerHTML = `Su arreglo es: [${array2}]`
    }
    base(num,base){
        let binario = ""
        let residuo
        if (isNaN(num)) {
            resp.innerHTML = "ingresa un número válido.";
            return

         }
         let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        while(num > 0){
            residuo = num % base;
            binario = hex[residuo] + binario;
            num = Math.floor ( num / base);
        }
        return binario;
    }

    binario2(){
        let presentacion = document.getElementById("decimal").value
        let num = parseInt(presentacion)
        let sabe = this.base(num,2)
        let resp= document.getElementById("resp2")
        resp.innerHTML = "Decimal: " + presentacion + " = Binario: " + sabe;
    }
    binario8(){
        let presentacion = document.getElementById("decimal8").value
        let num = parseInt(presentacion)
        let sabe = this.base(num,8)
        let resp= document.getElementById("resp8")
        resp.innerHTML = "Decimal: " + presentacion + " = Octal: " + sabe;
    }
    binario16(){
        let presentacion = document.getElementById("decimal16").value
        let num = parseInt(presentacion)
        let sabe = this.base(num,16)
        let resp= document.getElementById("resp16")
        resp.innerHTML = "Decimal: " + presentacion + " = Hexadecimal: " + sabe;
    }
    baseEr(binario){
        let decimal = 0;
        let long = binario.length;
        for(let i = 0; i < long; i++){
            if(binario[i]==="0"||binario[i]==="1"){
                decimal += parseInt(binario[i]) * Math.pow(2, long - 1 -i);
            }else{
                document.getElementById("resp").innerHTML = "Entrada no válida";
                return;
            }
        }
        return decimal;
    }
    decimal(){
        let binario = document.getElementById("bin10").value;
        let baro = this.baseEr(binario);
        document.getElementById("resp10").innerHTML=`Su respuesta es: ${baro}`
    }
    octal(){
        let binario = document.getElementById("bin8").value;
        let baro = this.baseEr(binario);
        let octal = ""
        while(baro > 0){
            octal = (baro % 8) + octal;
            baro = Math.floor(baro / 8);
        }
        document.getElementById("resp8").innerHTML = `La respuesta es: ${octal}`
    }
    hexadecimal(){
        let binario = document.getElementById("bin16").value;
        let baro = this.baseEr(binario);
        let hdecimal = ""
        let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        while(baro > 0){
            let residuo = baro % 16;
            hdecimal = hex[residuo] + hdecimal;
            baro = Math.floor(baro / 16);
        }
        document.getElementById("resp16").innerHTML = `La respuesta es: ${hdecimal}`
    }
       
 }
let tarea = new deberes()
tarea.divisor()
tarea.perfecto()
tarea.primo()
tarea.primoG()
tarea.concatenarBuscar()
tarea.insertar()
tarea.eliminar()
tarea.arreglo()
tarea.mayor()
tarea.buscar()
tarea.insArray()
tarea.elimArray()
tarea.cadArr()
tarea.binario2()
tarea.binario16()
tarea.binario8()
tarea.decimal()
tarea.octal()
tarea.hexadecimal()