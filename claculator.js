// (function(){
// let screen=document.querySelector(".screen");
// let buttons=document.querySelectorAll(".btn");
// let clear =document.querySelector(".btn-clear");
// let equal =document.querySelector('.btn-equal');

// buttons.forEach(function(button)
// {
//     button.addEventListener('click',function(Event)
//     {
//         let value=Event.target.dataset.num;
//         screen.value+=value;

//     })

//     equal.addEventListener('click', function(Event){

//     if(screen.value===" "){screen.value="";}
//     else{let ans=eval(screen.value);}
//     screen.value=ans;
//     })
// });
// clear.addEventListener('click',function(event){screen.value="";})

// })();

(function(){
    let scr=document.querySelector("#screen");
    let buttons=document.querySelectorAll(".btn");
    let clear =document.querySelector(".btn-clear");
    let equal =document.querySelector('.btn-equal');
    
    buttons.forEach(function(button)
    {
        button.addEventListener('click',function(e)
        {
            let data=e.target.dataset.num;
            scr.value+=data;
            // console.group(data)
    
        })
    
        equal.addEventListener('click', function(){
    
        if(scr.value===""){scr.value="";}
        else{let ans=eval(scr.value);
        scr.value=ans;
        // console.log(scr.value)
    }
        })
    });
    clear.addEventListener('click',function(){scr.value="";})
    
    })();