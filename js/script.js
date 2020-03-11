const  $idDate = document.getElementById('date');
function  showDate(id){
    let  fecha  = new Date();
    id.innerHTML = `${fecha.getDay()}  ,${fecha.getMonth() } ${fecha.getDay() + 1} `
}
showDate( $idDate )
