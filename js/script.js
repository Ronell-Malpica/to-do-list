const  $idDate = document.getElementById('date');
function  showDate(id){
    const days = [  "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday" ]
    const month =["Sunday" ,"February","March","April","May","June","July" , "August","September" ,"October" , "November" ,"December"]
    let  fecha  = new Date();
    id.innerHTML = `${days[fecha.getDay() ]}  ,${ month[fecha.getMonth()] } ${fecha.getDay() + 1} `
}
showDate( $idDate )
