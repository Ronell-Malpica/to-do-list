const    $list       =   document.querySelector('#list');
const    $idDate     =   document.getElementById('date');
const    $footerList =   document.querySelector('.to-do-list__footer');
const    $btnDelete  =   document.querySelector('#delete');
// lista para pode guardar  en el LOCALSTORE
const    list        = [];

$btnDelete.addEventListener('click', ()=> { 
    // borrando todo el local storage
    localStorage.clear();
    // vaciando la lista 
    $list.innerHTML = "" });

    // EVENTOS DE CARGA 
    document.addEventListener('DOMContentLoaded',listLocalStorage);

function listLocalStorage(){
    let datos = obtenerLocalStorage('ITEMS');
    // console.log( datos )
    datos.forEach( (valueInter)=>{
        showList( valueInter.text)
    })
}

// MOSTRAR FECHA
function  showDate( id ){
    const days = [ "Sunday" , "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const month =["January" ,"February","March","April","May","June","July" , "August","September" ,"October" , "November" ,"December"]
    let  fecha  = new Date();
    id.innerHTML = `${days[fecha.getDay() ]}  ,${ month[fecha.getMonth()] } ${fecha.getDate() } `
}
showDate( $idDate )


// PARA LOS EVNTOS DENTRO DE  LA  LISTA 
function showChnagesClass(){
    event.target.nextElementSibling.classList.toggle('line-t')
     event.target.classList.toggle('far')
     event.target.classList.toggle('fa-circle')
     event.target.classList.toggle('fas')
     event.target.classList.toggle('fa-check-circle')
     event.target.classList.toggle('icon-check')
}

$list.addEventListener('click', (event)=>{
    if( event.target.classList.contains('icon-circle' ) ){
        showChnagesClass();
    }
    if( event.target.classList.contains('fa-trash-alt') ){
            let  active = event.target.previousElementSibling.previousElementSibling.classList.contains('fa-check-circle');
            if( active ){
                // ELIMINANDO ITEM
                let $item = event.target.parentElement ;
                // eliminandolo  del LOCALSTORAGE
                deleteLocalStorage( event.target.previousElementSibling.textContent,'ITEMS')
                $item.remove();
            }else{
                alert('cumplir con la tarea para poder eliminarla')
            }
    }
})
    
//  FOOTER SCRIPTS
$footerList.addEventListener('click', (event)=>{
    //  ADD ITEMS
    if( event.target.tagName ==="I" ){
        let value = captureValue();
        if( value ){
            addLocalStorage({ text: value} ,'ITEMS')
            showList( value);
                    };
    }
})

function captureValue(){
    const  input     = document.querySelector('#input_add') ;
    const  valueText = input.value.trim();
    
    if( valueText !== "" ){
        input.value="";
        return   valueText;
    }
}
// PARA MOSTRAR LA LISTA
function showList( value){
    let format =  `
    <li class="list__item">
        <i class="far fa-circle icon icon-circle"></i>
        <p class="text">${value}</p>
        <i class="far fa-trash-alt icon icon-red "></i>
    </li>`
    $list.innerHTML += format
}

//  FUNCION  PARA LOCALSTORAGE
function obtenerLocalStorage( key ){
    let value ;
    if( localStorage.getItem( key )===null){
        value   = [];
    }else{
        value   = JSON.parse( localStorage.getItem( key) );
    }
    return value;
}
function addLocalStorage( item ,key){
    let data = obtenerLocalStorage( key);
    data.push( item );
    localStorage.setItem( key , JSON.stringify( data ) );
}
function deleteLocalStorage( item ,  key ){
    let data  = obtenerLocalStorage( key );
    data.forEach( (currentValue , index)=>{
        console.log('curren VALUE :', currentValue ," : ", item===currentValue)
        // console.log( item === currentValue)
        if( item === currentValue.text ){
            data.splice( index,1);
        }
    })
    localStorage.setItem(key , JSON.stringify(data ) );
}


