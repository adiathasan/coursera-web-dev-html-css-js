let go = document.querySelector('#hide');

function fire(){
    if(go.classList.contains('hidden')){
        go.classList.remove('hidden');
        document.querySelector('.burger h3').innerHTML = "--X--"
    }else{
        go.classList.add('hidden');
        document.querySelector('.burger h3').innerHTML = "=="
    }
}
