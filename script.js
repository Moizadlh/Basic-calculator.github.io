let str="";
let inputs=document.querySelectorAll('button');
Array.from(inputs).forEach((element) => {element.addEventListener('click',input)   
});

function input(e){
    if (e.target.innerHTML == '='){
        str = eval(str)
        document.querySelector('input').value=str;
    }
    else{
        str = str + e.target.innerHTML;
    console.log(e.target);
    document.querySelector('input').value=str;
    }
}