const $list =    document.querySelector('#list');
const list  = [];


function showChnagesClass(){
    event.target.nextElementSibling.classList.toggle('line-t')
     event.target.classList.toggle('far')
     event.target.classList.toggle('fa-circle')
     event.target.classList.toggle('fas')
     event.target.classList.toggle('fa-check-circle')
     event.target.classList.toggle('icon-check')
}
// PARA LOS EVNTOS DENTRO DE  LA  LISTA 

$list.addEventListener('click',(event)=>{
    // console.log('funciona el evento')
    
  if( event.target.classList.contains('icon-circle' ) ){
    showChnagesClass();
  }
  if( event.target.classList.contains('fa-trash-alt') ){
        let  active = event.target.previousElementSibling.previousElementSibling.classList.contains('fa-check-circle');
        if( active ){
            let $item = event.target.parentElement ;
            console.log( $item)
            $item.remove();

        }else{
            alert('cumplir con la tarea para poder eliminarla')
        }
  }
})

// FUNCTION  PARA MOSTRAR FECHA 
const  $idDate = document.getElementById('date');
function  showDate(id){
    const days = [  "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday" ]
    const month =["Sunday" ,"February","March","April","May","June","July" , "August","September" ,"October" , "November" ,"December"]
    let  fecha  = new Date();
    id.innerHTML = `${days[fecha.getDay() ]}  ,${ month[fecha.getMonth()] } ${fecha.getDay() + 1} `
}
showDate( $idDate )

//  FOOTER SCRIPTS

const $footerList= document.querySelector('.to-do-list__footer');
$footerList.addEventListener('click', (event)=>{
    //  ADD ITEM
    if( event.target.tagName ==="I" ){
        let value =captureValue();
        if( value ){
            
            showList( value);
        }
    }
})
        
function captureValue(){
    const input   = document.querySelector('#input_add') ;
    const  valueText = input.value.trim();
    
    if( valueText !== "" ){
        input.value="";
        return   valueText;
    }
}
    

        
    
function showList( value){
    let format =  `
    <li class="list__item">
        <i class="far fa-circle icon icon-circle"></i>
        <p class="text">${value}</p>
        <i class="far fa-trash-alt icon icon-red "></i>
    </li>`
    $list.innerHTML += format
}
//  FUNCTON PAR  BORRAR 
const $btnDelete    = document.querySelector('#delete');
$btnDelete.addEventListener('click', deleteList );
function deleteList (){
    $list.innerHTML =""
}
