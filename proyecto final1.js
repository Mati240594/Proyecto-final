class Microorganismo{
    constructor(nombre,clasificacion,informacion,imagen){
        this.nombre=nombre;
        this.clasificacion=clasificacion;
        this.informacion=informacion;
        this.imagen=imagen;

    }

}
function MO1(){
    let primerMicroorganismo= new Microorganismo(
        "Escherichia coli",
        "Es un bacilo gram negativo, anaerobio facultativo de la familia Enterobacteriaceae",
        "Acá va información a desarrollar sobre el MO",
        "https://images.app.goo.gl/q6WaktZbNqu3w5Lp9",

    );
    return primerMicroorganismo;
    console.log(primerMicroorganismo);
    
}
function MO2(){
    let segundoMicroorganismo= new Microorganismo(
        "Salmonella typhi",
        "Son bacilos gramnegativos anaerobios facultativos pertencientes de la familia Enterobacteriaceae",
        "Acá va información a desarrollar sobre el MO",
        "https://images.app.goo.gl/ZR3uobKXS2z9hpBg8",
    );
    return segundoMicroorganismo;
    console.log(segundoMicroorganismo);
    
}
function MO3(){
    let tercerMicroorganismo=new Microorganismo(
        "Helicobacter pylori",
        " Es una bacteria de forma espiral gramnegativa, microaerófila perteneciente a la familia Helicobacteraceae",
        "https://images.app.goo.gl/X7dPsCmheEmaPyhG8",

    );
    return(tercerMicroorganismo);
    console.log(tercerMicroorganismo);
    
}
MO1();
MO2();
MO3();


