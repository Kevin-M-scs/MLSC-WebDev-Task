//letsgoo

let num=0;//counter variable
function welcome(){
    var name=document.getElementById("username").value;
    if(name!=null){
        const l1=document.createElement('label');

        
        l1.textContent="Welcome "+name;
        document.getElementById('nameinput').appendChild(l1);
        var q=document.getElementById("q1");
        q.style.display='block';
    }
}

function display(n){
    /*this function makes the next question visible
    and handles the last case*/
    if(n!=5){
        var next="q"+String(n+1);
        var q=document.getElementById(next);
        q.style.display='block';
    }
    if(n==5){
        //displays score
        const l2=document.createElement('label');
        str="You have a score of "+String(num)+" out of 5";
        l2.textContent=str;
        document.getElementById('results').appendChild(l2);

    }
}


function check(n){
    if(n==1){
        const q=document.getElementsByName('input1');
        var s1=document.getElementById("status1");
        var flag=0;
        for(let i=0;i<q.length;i++){
            if(q[i].checked){
                if (q[i].value=="dennis ritchie"){
                    flag=1;
                    s1.textContent="Status:Correct";
                    s1.style.display='block';
                    num++;
                    break;
                }
            }
        }
        if(flag==0){
            s1.textContent="Status:Incorrect";
            s1.style.display='block';
        }
        display(n);
    }
    else if(n==2){
        const q=document.getElementsByName('input2');
        var s2=document.getElementById("status2");
        var flag=0;
        for(let i=0;i<q.length;i++){
            if(q[i].checked){
                if (q[i].value=="yes ofc duh"){
                    flag=1;
                    s2.textContent="Status:Correct";
                    s2.style.display='block';
                    num++;
                    break;
                }
            }
        }
        if(flag==0){
            s2.textContent="Status:Incorrect";
            s2.style.display='block';
        }
        display(n);
    }
    else if(n==3){
        var q=document.getElementsByName('input3');
        var s3=document.getElementById("status3");
        var flag=0;
        for(let i=0;i<q.length;i++){
            if(q[i].checked){
                if (q[i].value=="alto"){
                    flag=1;
                    s3.textContent="Status:Correct";
                    s3.style.display='block';
                    num++;
                    break;
                }
            }
        }
        if(flag==0){
            s3.textContent="Status:Incorrect";
            s3.style.display='block';
        }
        display(n);
    }
    else if(n==4){
        var q=document.getElementsByName('input4');
        var s4=document.getElementById("status4");
        var flag=0;
        for(let i=0;i<q.length;i++){
            if(q[i].checked){
                if (q[i].value=="cosx"){
                    flag=1;
                    s4.textContent="Status:Correct";
                    s4.style.display='block';
                    num++;
                    break;
                }
            }
        }
        if(flag==0){
            s4.textContent="Status:Incorrect";
            s4.style.display='block';
        }
        display(n);
        
    }
    else if(n==5){
        var q=document.getElementsByName('input5');
        var s5=document.getElementById("status5");
        var flag=0;
        for(let i=0;i<q.length;i++){
            if(q[i].checked){
                if (q[i].value=="Thapar"){
                    flag=1;
                    s5.textContent="Status:Correct";
                    s5.style.display='block';
                    num++;
                    break;
                }
            }
        }
        if(flag==0){
            s5.textContent="Status:Incorrect";
            s5.style.display='block';
        }
        display(n);
    }
}
