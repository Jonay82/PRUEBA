let piramide=[];

for ( let i = 1; i <= 9; i++){
    piramide= [i];

    for( rep= 1; rep < i ; rep++){

        piramide += ('\n' , i);
        
    }
    piramide += ('\n');
    console.log (piramide);
}
