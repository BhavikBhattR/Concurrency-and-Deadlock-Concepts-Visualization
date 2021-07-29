function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function createPrecedance() {
    let show = document.getElementById("show")
    var table = document.getElementById("myTable");
    window.p = document.getElementById("Process").value;

    var selecthtml = "";
    var j;
    console.log(p);
    for (var i = 1; i <= p; i++) {
        show.style.display = "block";
        await sleep(500);
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = `P${i}`;
        cell2.innerHTML = `<input type="number" min="1" max="${p}" id="P${i}" />`;
    }
}

console.log(window.p);


function animation() {
    let start = document.getElementById('start');
    let a = document.getElementById('SQUARE');

    console.log(start);
    console.log(a);
    if (a.style.display == 'none') {
        a.style.display = 'block';
    }
    else {
        a.style.display = 'none';
    }

}

function createicon() {
    let icon = document.getElementById('icons');
    console.log(window.p);
    for (var i = 1; i <= window.p; i++) {
        icon.innerHTML += `<div id="p${i}">P${i}</div>`
    }
}



async function myfunction() {
    const newLocal = 0;
    var availability = newLocal;
    document.getElementById('state').innerHTML = `<div id="live"></div>`;
    document.getElementById('state2').innerHTML = `<div id="live1"></div>`;
    document.getElementById('live').innerHTML += `<div id="space" style="color: white;"></br></div>`;
    document.getElementById('live').innerHTML += `<div id="space2" style="color: white;"></br></div>`;
    document.getElementById('live').innerHTML += `<div id="space3" style="color: white;"></br></div>`;
    document.getElementById('live').innerHTML += `<h2 id="something" style="color: white;"></h2>`;
    document.getElementById('live').innerHTML += `<div id="space4" style="color: white;"></br></div>`;
    document.getElementById('live').innerHTML += `<h2 id="Cs_update" style="color: white;"></h2>`;
    document.getElementById('live').innerHTML += `<div id="space5" style="color: white;"></br></div>`;
    
    document.getElementById('live').innerHTML += `<div id="space6" style="color: white;"></br></div>`;
    
    document.getElementById('live').innerHTML += `<div id="space7" style="color: white;"></br></div>`;
    
    document.getElementById('live1').innerHTML += `<h3 id="exclusion1"<br>"></h3>`;
    document.getElementById('live1').innerHTML += `<h3 id="exclusion2"<br>"></h3>`;
    document.getElementById('live1').innerHTML += `<h3 id="exclusion" style="color: white;"></h3>`;
    var space=document.getElementById('space');
    var space2=document.getElementById('space2');
    var space3=document.getElementById('space3');
    var space4=document.getElementById('space4');
    var space5=document.getElementById('space5');
    var space5=document.getElementById('space6');
    var space5=document.getElementById('space7');


    if (document.getElementById('mode').value == 'non-preemptive' && document.getElementById('lock').value == '0') {
        document.getElementById('exclusion').innerHTML += "Here in non pre-emption mode, no process can interrupt each other and one process will be executed after another is completely executed.";
        for(var i=1; i<=document.getElementById("Process").value; i++){
       
            if(document.getElementById('P1').value==i){  
               
                
        setTimeout(()=>{
            document.getElementById('something').innerHTML="P1 is being executed!";
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p1 = document.getElementById('p1');
            p1.style.color="white"
            p1.style.backgroundColor="#7FFF00";
            p1.style.animation = 'p1in 3s ease forwards';
            
        },i*2000);
    
        await sleep(2000);
        
        setTimeout(()=>{
            let p1 = document.getElementById('p1');
            p1.style.animation = 'p1stays 3s ease forwards';
            document.getElementById('Cs_update').innerHTML= "P1 is in critical section!";
         },i*2000);  
          
    
          await sleep(2000);
    
        setTimeout(async ()=>{
            document.getElementById('Cs_update').innerHTML= "critical section is free";
           
            let p1 = document.getElementById('p1');
            p1.style.color="white"
            p1.style.backgroundColor="#7FFF00";
            p1.style.animation = 'p1out 3s ease forwards';
            await sleep(2000);
            p1.style.color="black"
            p1.style.backgroundColor="#BDB76B";;
            
        },i*2000);  
         }
      else if(document.getElementById('P2').value==i){
        
        setTimeout(()=>{
            document.getElementById('something').innerHTML= "P2 is being executed!";
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p2 = document.getElementById('p2');
            p2.style.color="white"
            p2.style.backgroundColor="#7FFF00";
            p2.style.animation = 'p2in 3s ease forwards';
            
        },i*2000);
    
        await sleep(2000);
    
        setTimeout(()=>{
            let p1 = document.getElementById('p2');
            p1.style.animation = 'p2stays 3s ease forwards';
            document.getElementById('Cs_update').innerHTML= "P2 is in critical section!";
         },i*2000);  
          
    
          await sleep(2000);
    
        setTimeout(async ()=>{
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p2 = document.getElementById('p2');
            p2.style.color="white"
            p2.style.backgroundColor="#7FFF00";
            p2.style.animation = 'p2out 3s ease forwards';
            await sleep(2000);
            p2.style.color="black"
            p2.style.backgroundColor="#BDB76B";;
        },i*2000); }
    
        else if(document.getElementById('P3').value==i){
            
        setTimeout(()=>{
            document.getElementById('something').innerHTML= "P3 is being executed!";
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p3 = document.getElementById('p3');
            p3.style.color="white"
            p3.style.backgroundColor="#7FFF00";
            p3.style.animation = 'p3in 3s ease forwards';
        },i*2000);
    
        await sleep(2000);
    
        setTimeout(()=>{
            let p1 = document.getElementById('p3');
            p1.style.animation = 'p3stays 3s ease forwards';
            document.getElementById('Cs_update').innerHTML= "P3 is in critical section!";
         },i*2000);  
          
    
          await sleep(2000);
    
        setTimeout(async ()=>{
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p3 = document.getElementById('p3');
            p3.style.color="white"
            p3.style.backgroundColor="#7FFF00";
            p3.style.animation = 'p3out 3s ease forwards';
            await sleep(2000);
            p3.style.color="black";
            p3.style.backgroundColor="#BDB76B";
    
        },i*2000); }
    
        else if(document.getElementById('P4').value==i){
            
        setTimeout(()=>{
            document.getElementById('something').innerHTML= "P4 is being executed!";
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p4 = document.getElementById('p4');
            p4.style.color="white"
            p4.style.backgroundColor="#7FFF00";
            p4.style.animation = 'p4in 3s ease forwards';
        },i*2000);
    
        await sleep(2000);
    
        setTimeout(()=>{
            let p1 = document.getElementById('p4');
            p1.style.animation = 'p4stays 3s ease forwards';
            document.getElementById('Cs_update').innerHTML= "P4 is in critical section!";
         },i*2000);  
          
    
          await sleep(2000);
    
        setTimeout(async ()=>{
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p4 = document.getElementById('p4');
            p4.style.color="white"
            p4.style.backgroundColor="#7FFF00";
            p4.style.animation = 'p4out 3s ease forwards';
            await sleep(2000);
            p4.style.color="black"
            p4.style.backgroundColor="#BDB76B";;
        },i*2000); }
    
        else if(document.getElementById('P5').value==i){
            
        setTimeout(()=>{
            document.getElementById('something').innerHTML= "P5 is being executed!";
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p5 = document.getElementById('p5');
            p5.style.color="white"
            p5.style.backgroundColor="#7FFF00";
            p5.style.animation = 'p5in 3s ease forwards';
        },i*2000);
    
        await sleep(2000);
    
        setTimeout(()=>{
            let p1 = document.getElementById('p5');
            p1.style.animation = 'p5stays 3s ease forwards';
            document.getElementById('Cs_update').innerHTML= "P5 is in critical section!";
         },i*2000);  
          
    
          await sleep(2000);
    
    
        setTimeout(async ()=>{
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p5 = document.getElementById('p5');
            p5.style.color="white"
            p5.style.backgroundColor="#7FFF00";
            p5.style.animation = 'p5out 3s ease forwards';
            await sleep(2000);
            p5.style.color="black"
            p5.style.backgroundColor="#BDB76B";;
        },i*2000); }
    
        else if(document.getElementById('P6').value==i){
           
        setTimeout(()=>{
            document.getElementById('something').innerHTML= "P6 is being executed!";
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p6 = document.getElementById('p6');
            p6.style.color="white"
            p6.style.backgroundColor="#7FFF00";
            p6.style.animation = 'p6in 3s ease forwards';
        },i*2000);
    
        await sleep(2000);
    
       setTimeout(()=>{
            let p1 = document.getElementById('p6');
            p1.style.animation = 'p6stays 3s ease forwards';
            document.getElementById('Cs_update').innerHTML= "P6 is in critical section!";
         },i*2000);  
          
    
          await sleep(2000);
    
    
        setTimeout(async ()=>{
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p6 = document.getElementById('p6');
            p6.style.color="white"
            p6.style.backgroundColor="#7FFF00";
            p6.style.animation = 'p6out 3s ease forwards';
            await sleep(2000);
            p6.style.color="black"
            p6.style.backgroundColor="#BDB76B";;
        },i*2000); }
    
        else if(document.getElementById('P7').value==i){
        setTimeout(()=>{
            document.getElementById('something').innerHTML= "P7 is being executed!";
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p7 = document.getElementById('p7');
            p7.style.color="white"
            p7.style.backgroundColor="#7FFF00";
            p7.style.animation = 'p7in 3s ease forwards';
        },i*2000);
    
        await sleep(2000);
    
        setTimeout(()=>{
            let p1 = document.getElementById('p7');
            p1.style.animation = 'p7stays 3s ease forwards';
            document.getElementById('Cs_update').innerHTML= "P7 is in critical section!";
         },i*2000);  
          
    
          await sleep(2000);
    
    
        setTimeout(async ()=>{
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p7 = document.getElementById('p7');
            p7.style.color="white"
            p7.style.backgroundColor="#7FFF00";
            p7.style.animation = 'p7out 3s ease forwards';
            await sleep(2000);
            p7.style.color="black"
            p7.style.backgroundColor="#BDB76B";;
        },i*2000); }
    
        else if(document.getElementById('P8').value==i){
        setTimeout(()=>{
            document.getElementById('something').innerHTML= "P8 is being executed!";
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p8 = document.getElementById('p8');
            p8.style.color="white"
            p8.style.backgroundColor="#7FFF00";
            p8.style.animation = 'p8in 3s ease forwards';
        },i*2000);
    
        await sleep(2000);
    
        setTimeout(()=>{
            let p1 = document.getElementById('p8');
            p1.style.animation = 'p8stays 3s ease forwards';
            document.getElementById('Cs_update').innerHTML= "P8 is in critical section!";
         },i*2000);  
          
    
          await sleep(2000);
    
        setTimeout(async ()=>{
            document.getElementById('Cs_update').innerHTML= "critical section is free";
            let p8 = document.getElementById('p8');
            p8.style.color="white"
            p8.style.backgroundColor="#7FFF00";
            p8.style.animation = 'p8out 3s ease forwards';
            await sleep(2000);
            p8.style.color="black"
            p8.style.backgroundColor="#BDB76B";;
        },i*2000);
    }
    
     if(i==document.getElementById("Process").value){
            await sleep(i*1999);
            document.getElementById('something').innerHTML="All Processes finished their execution!";    
    }
        }
    }
    // finish


    else if (document.getElementById('mode').value == 'pre-emptive' && document.getElementById('lock').value == '0') {
        document.getElementById('exclusion').innerHTML += "Here in pre-emption mode, one process' execution can be inturrupted by other process and execution of process will be switched.";

        var s = document.getElementById('Process').value;

            if(s==1){
            var x = document.getElementById('P1').value;
           
            for (var i = 1; i <= ((document.getElementById('Process').value)*2); i++) {
                if (document.getElementById('P1').value == 1 && i == 1) {
                    availability = document.getElementById('P1').value;
                    console.log(availability);
                      
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P1').value + document.getElementById('Process').value == i || (document.getElementById('P1').value == i)) || document.getElementById('P1').value + 2*document.getElementById('Process').value == i || document.getElementById('P1').value + 3*document.getElementById('Process').value == i || document.getElementById('P1').value + 4*document.getElementById('Process').value == i || document.getElementById('P1').value + 5*document.getElementById('Process').value == i || document.getElementById('P1').value + 6*document.getElementById('Process').value == i || document.getElementById('P1').value + 7*document.getElementById('Process').value == i || document.getElementById('P1').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P1').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (availability == x) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00"
                        p1.style.animation = 'p1in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p1 = document.getElementById('p1');
                        p1.style.animation = 'p1stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1out 3s ease forwards';
                    }, i * 2000);
                    await sleep(6000);
                    document.getElementById('something').innerHTML="All Processes finished their execution!";  
                }
            }
            }
            else if(s==2){
            var x = document.getElementById('P1').value;
            var y = document.getElementById('P2').value;

            for (var i = 1; i <= ((document.getElementById('Process').value)*2); i++) {
                if (document.getElementById('P1').value == 1 && i == 1) {
                    availability = document.getElementById('P1').value;
                    console.log(availability);
                    //document.getElementById("something").innerHTML = "new text";  
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (document.getElementById('P2').value == 1 && i == 1) {
                    availability = document.getElementById('P2').value;
                    document.getElementById("something").innerHTML = "new text";
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P1').value + document.getElementById('Process').value == i || (document.getElementById('P1').value == i)) || document.getElementById('P1').value + 2*document.getElementById('Process').value == i || document.getElementById('P1').value + 3*document.getElementById('Process').value == i || document.getElementById('P1').value + 4*document.getElementById('Process').value == i || document.getElementById('P1').value + 5*document.getElementById('Process').value == i || document.getElementById('P1').value + 6*document.getElementById('Process').value == i || document.getElementById('P1').value + 7*document.getElementById('Process').value == i || document.getElementById('P1').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P1').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P2').value + document.getElementById('Process').value == i || (document.getElementById('P2').value == i)) || document.getElementById('P2').value + 2*document.getElementById('Process').value == i || document.getElementById('P2').value + 3*document.getElementById('Process').value == i || document.getElementById('P2').value + 4*document.getElementById('Process').value == i || document.getElementById('P2').value + 5*document.getElementById('Process').value == i || document.getElementById('P2').value + 6*document.getElementById('Process').value == i || document.getElementById('P2').value + 7*document.getElementById('Process').value == i || document.getElementById('P2').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P2').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (availability == x) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00"
                        p1.style.animation = 'p1in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p1 = document.getElementById('p1');
                        p1.style.animation = 'p1stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1out 3s ease forwards';
                    }, i * 2000);
                }
                else if ((availability == y)) {
    
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00"
                        p2.style.animation = 'p2in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P2 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
                    availability++;
                    setTimeout(() => {
                        let p2 = document.getElementById('p2');
                        p2.style.animation = 'p2stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P2 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2out 3s ease forwards';
                    }, i * 2000);
                    await sleep(10000);
                    document.getElementById('something').innerHTML="All Processes finished their execution!";  
                }
            }
            }
            else if(s==3){
            var x = document.getElementById('P1').value;
             var y = document.getElementById('P2').value;
             var z = document.getElementById('P3').value;
            
             for (var i = 1; i <= ((document.getElementById('Process').value)*2); i++) {
                if (document.getElementById('P1').value == 1 && i == 1) {
                    availability = document.getElementById('P1').value;
                    console.log(availability);
                      
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (document.getElementById('P2').value == 1 && i == 1) {
                    availability = document.getElementById('P2').value;
                    document.getElementById("something").innerHTML = "new text";
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (document.getElementById('P3').value == 1 && i == 1) {
                    availability = document.getElementById('P3').value;
                    console.log(availability);
                      
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P1').value + document.getElementById('Process').value == i || (document.getElementById('P1').value == i)) || document.getElementById('P1').value + 2*document.getElementById('Process').value == i || document.getElementById('P1').value + 3*document.getElementById('Process').value == i || document.getElementById('P1').value + 4*document.getElementById('Process').value == i || document.getElementById('P1').value + 5*document.getElementById('Process').value == i || document.getElementById('P1').value + 6*document.getElementById('Process').value == i || document.getElementById('P1').value + 7*document.getElementById('Process').value == i || document.getElementById('P1').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P1').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P2').value + document.getElementById('Process').value == i || (document.getElementById('P2').value == i)) || document.getElementById('P2').value + 2*document.getElementById('Process').value == i || document.getElementById('P2').value + 3*document.getElementById('Process').value == i || document.getElementById('P2').value + 4*document.getElementById('Process').value == i || document.getElementById('P2').value + 5*document.getElementById('Process').value == i || document.getElementById('P2').value + 6*document.getElementById('Process').value == i || document.getElementById('P2').value + 7*document.getElementById('Process').value == i || document.getElementById('P2').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P2').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P3').value + document.getElementById('Process').value == i || (document.getElementById('P3').value == i)) || document.getElementById('P3').value + 2*document.getElementById('Process').value == i || document.getElementById('P3').value + 3*document.getElementById('Process').value == i || document.getElementById('P3').value + 4*document.getElementById('Process').value == i || document.getElementById('P3').value + 5*document.getElementById('Process').value == i || document.getElementById('P3').value + 6*document.getElementById('Process').value == i || document.getElementById('P3').value + 7*document.getElementById('Process').value == i || document.getElementById('P3').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P3').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (availability == x) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00"
                        p1.style.animation = 'p1in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p1 = document.getElementById('p1');
                        p1.style.animation = 'p1stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1out 3s ease forwards';
                    }, i * 2000);
                }
                else if ((availability == y)) {
    
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00"
                        p2.style.animation = 'p2in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P2 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
                    availability++;
                    setTimeout(() => {
                        let p2 = document.getElementById('p2');
                        p2.style.animation = 'p2stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P2 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == z) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00"
                        p3.style.animation = 'p3in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P3 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p3 = document.getElementById('p3');
                        p3.style.animation = 'p3stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P3 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3out 3s ease forwards';
                    }, i * 2000);
                    await sleep(14000);
                    document.getElementById('something').innerHTML="All Processes finished their execution!"; 
                }
             }
            }
            else if(s==4){
            var x = document.getElementById('P1').value;
            var y = document.getElementById('P2').value;
            var z = document.getElementById('P3').value;
            var a = document.getElementById('P4').value;
            
            for (var i = 1; i <= ((document.getElementById('Process').value)*2); i++) {
                if (document.getElementById('P1').value == 1 && i == 1) {
                    availability = document.getElementById('P1').value;
                    console.log(availability);
                      
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (document.getElementById('P2').value == 1 && i == 1) {
                    availability = document.getElementById('P2').value;
                    document.getElementById("something").innerHTML = "new text";
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (document.getElementById('P3').value == 1 && i == 1) {
                    availability = document.getElementById('P3').value;
                    console.log(availability);
                      
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (document.getElementById('P4').value == 1 && i == 1) {
                    availability = document.getElementById('P4').value;
                    console.log(availability);
                      
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P4 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00";
                        p4.style.animation = 'p4buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P1').value + document.getElementById('Process').value == i || (document.getElementById('P1').value == i)) || document.getElementById('P1').value + 2*document.getElementById('Process').value == i || document.getElementById('P1').value + 3*document.getElementById('Process').value == i || document.getElementById('P1').value + 4*document.getElementById('Process').value == i || document.getElementById('P1').value + 5*document.getElementById('Process').value == i || document.getElementById('P1').value + 6*document.getElementById('Process').value == i || document.getElementById('P1').value + 7*document.getElementById('Process').value == i || document.getElementById('P1').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P1').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P2').value + document.getElementById('Process').value == i || (document.getElementById('P2').value == i)) || document.getElementById('P2').value + 2*document.getElementById('Process').value == i || document.getElementById('P2').value + 3*document.getElementById('Process').value == i || document.getElementById('P2').value + 4*document.getElementById('Process').value == i || document.getElementById('P2').value + 5*document.getElementById('Process').value == i || document.getElementById('P2').value + 6*document.getElementById('Process').value == i || document.getElementById('P2').value + 7*document.getElementById('Process').value == i || document.getElementById('P2').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P2').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P3').value + document.getElementById('Process').value == i || (document.getElementById('P3').value == i)) || document.getElementById('P3').value + 2*document.getElementById('Process').value == i || document.getElementById('P3').value + 3*document.getElementById('Process').value == i || document.getElementById('P3').value + 4*document.getElementById('Process').value == i || document.getElementById('P3').value + 5*document.getElementById('Process').value == i || document.getElementById('P3').value + 6*document.getElementById('Process').value == i || document.getElementById('P3').value + 7*document.getElementById('Process').value == i || document.getElementById('P3').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P3').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if ((document.getElementById('P4').value + document.getElementById('Process').value == i || (document.getElementById('P4').value == i)) || document.getElementById('P4').value + 2*document.getElementById('Process').value == i || document.getElementById('P4').value + 3*document.getElementById('Process').value == i || document.getElementById('P4').value + 4*document.getElementById('Process').value == i || document.getElementById('P4').value + 5*document.getElementById('Process').value == i || document.getElementById('P4').value + 6*document.getElementById('Process').value == i || document.getElementById('P4').value + 7*document.getElementById('Process').value == i || document.getElementById('P4').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P4').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P4 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00";
                        p4.style.animation = 'p4buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (availability == x) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00"
                        p1.style.animation = 'p1in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p1 = document.getElementById('p1');
                        p1.style.animation = 'p1stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1out 3s ease forwards';
                    }, i * 2000);
                }
                else if ((availability == y)) {
    
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00"
                        p2.style.animation = 'p2in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P2 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
                    availability++;
                    setTimeout(() => {
                        let p2 = document.getElementById('p2');
                        p2.style.animation = 'p2stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P2 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == z) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00"
                        p3.style.animation = 'p3in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P3 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p3 = document.getElementById('p3');
                        p3.style.animation = 'p3stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P3 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == a) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P4 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00"
                        p4.style.animation = 'p4in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P4 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p4 = document.getElementById('p4');
                        p4.style.animation = 'p4stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P4 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00";
                        p4.style.animation = 'p4out 3s ease forwards';
                    }, i * 2000);
                    await sleep(18000);
                    document.getElementById('something').innerHTML="All Processes finished their execution!"; 
                }
            }    
            }
            else if(s==5){
            var x = document.getElementById('P1').value;
            var y = document.getElementById('P2').value;
            var z = document.getElementById('P3').value;
            var a = document.getElementById('P4').value;
            var b = document.getElementById('P5').value;
           
            for (var i = 1; i <= ((document.getElementById('Process').value)*2); i++) {
                if (document.getElementById('P1').value == 1 && i == 1) {
                    availability = document.getElementById('P1').value;
                    console.log(availability);
                      
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (document.getElementById('P2').value == 1 && i == 1) {
                    availability = document.getElementById('P2').value;
                    document.getElementById("something").innerHTML = "new text";
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (document.getElementById('P3').value == 1 && i == 1) {
                    availability = document.getElementById('P3').value;
                    console.log(availability);
                      
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (document.getElementById('P4').value == 1 && i == 1) {
                    availability = document.getElementById('P4').value;
                    console.log(availability);
                      
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P4 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00";
                        p4.style.animation = 'p4buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (document.getElementById('P5').value == 1 && i == 1) {
                    availability = document.getElementById('P5').value;
                    console.log(availability);  
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P5 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p5 = document.getElementById('p5');
                        p5.style.color = "white"
                        p5.style.backgroundColor = "#7FFF00";
                        p5.style.animation = 'p5buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P1').value + document.getElementById('Process').value == i || (document.getElementById('P1').value == i)) || document.getElementById('P1').value + 2*document.getElementById('Process').value == i || document.getElementById('P1').value + 3*document.getElementById('Process').value == i || document.getElementById('P1').value + 4*document.getElementById('Process').value == i || document.getElementById('P1').value + 5*document.getElementById('Process').value == i || document.getElementById('P1').value + 6*document.getElementById('Process').value == i || document.getElementById('P1').value + 7*document.getElementById('Process').value == i || document.getElementById('P1').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P1').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P2').value + document.getElementById('Process').value == i || (document.getElementById('P2').value == i)) || document.getElementById('P2').value + 2*document.getElementById('Process').value == i || document.getElementById('P2').value + 3*document.getElementById('Process').value == i || document.getElementById('P2').value + 4*document.getElementById('Process').value == i || document.getElementById('P2').value + 5*document.getElementById('Process').value == i || document.getElementById('P2').value + 6*document.getElementById('Process').value == i || document.getElementById('P2').value + 7*document.getElementById('Process').value == i || document.getElementById('P2').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P2').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P3').value + document.getElementById('Process').value == i || (document.getElementById('P3').value == i)) || document.getElementById('P3').value + 2*document.getElementById('Process').value == i || document.getElementById('P3').value + 3*document.getElementById('Process').value == i || document.getElementById('P3').value + 4*document.getElementById('Process').value == i || document.getElementById('P3').value + 5*document.getElementById('Process').value == i || document.getElementById('P3').value + 6*document.getElementById('Process').value == i || document.getElementById('P3').value + 7*document.getElementById('Process').value == i || document.getElementById('P3').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P3').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if ((document.getElementById('P4').value + document.getElementById('Process').value == i || (document.getElementById('P4').value == i)) || document.getElementById('P4').value + 2*document.getElementById('Process').value == i || document.getElementById('P4').value + 3*document.getElementById('Process').value == i || document.getElementById('P4').value + 4*document.getElementById('Process').value == i || document.getElementById('P4').value + 5*document.getElementById('Process').value == i || document.getElementById('P4').value + 6*document.getElementById('Process').value == i || document.getElementById('P4').value + 7*document.getElementById('Process').value == i || document.getElementById('P4').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P4').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P4 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00";
                        p4.style.animation = 'p4buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if ((document.getElementById('P5').value + document.getElementById('Process').value == i || (document.getElementById('P5').value == i)) || document.getElementById('P5').value + 2*document.getElementById('Process').value == i || document.getElementById('P5').value + 3*document.getElementById('Process').value == i || document.getElementById('P5').value + 4*document.getElementById('Process').value == i || document.getElementById('P5').value + 5*document.getElementById('Process').value == i || document.getElementById('P5').value + 6*document.getElementById('Process').value == i || document.getElementById('P5').value + 7*document.getElementById('Process').value == i || document.getElementById('P5').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P5').value) && i != 1) {
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P5 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p5 = document.getElementById('p5');
                        p5.style.color = "white"
                        p5.style.backgroundColor = "#7FFF00";
                        p5.style.animation = 'p5buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (availability == x) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00"
                        p1.style.animation = 'p1in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p1 = document.getElementById('p1');
                        p1.style.animation = 'p1stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1out 3s ease forwards';
                    }, i * 2000);
                }
                else if ((availability == y)) {
    
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00"
                        p2.style.animation = 'p2in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P2 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
                    availability++;
                    setTimeout(() => {
                        let p2 = document.getElementById('p2');
                        p2.style.animation = 'p2stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P2 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == z) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00"
                        p3.style.animation = 'p3in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P3 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p3 = document.getElementById('p3');
                        p3.style.animation = 'p3stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P3 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == a) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P4 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00"
                        p4.style.animation = 'p4in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P4 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p4 = document.getElementById('p4');
                        p4.style.animation = 'p4stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P4 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00";
                        p4.style.animation = 'p4out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == b) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P5 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p5 = document.getElementById('p5');
                        p5.style.color = "white"
                        p5.style.backgroundColor = "#7FFF00"
                        p5.style.animation = 'p5in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P5 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p5 = document.getElementById('p5');
                        p5.style.animation = 'p5stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P5 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p5 = document.getElementById('p5');
                        p5.style.color = "white"
                        p5.style.backgroundColor = "#7FFF00";
                        p5.style.animation = 'p5out 3s ease forwards';
                    }, i * 2000);
                    await sleep(22000);
                    document.getElementById('something').innerHTML="All Processes finished their execution!"; 
                }
            }
            }
            else if(s==6){
            var x = document.getElementById('P1').value;
            var y = document.getElementById('P2').value;
            var z = document.getElementById('P3').value;
            var a = document.getElementById('P4').value;
            var b = document.getElementById('P5').value;
            var c = document.getElementById('P6').value;
            
            for (var i = 1; i <= ((document.getElementById('Process').value)*2); i++) {
                if (document.getElementById('P1').value == 1 && i == 1) {
                    availability = document.getElementById('P1').value;
                    console.log(availability);
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (document.getElementById('P2').value == 1 && i == 1) {
                    availability = document.getElementById('P2').value;
                    document.getElementById("something").innerHTML = "new text";
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (document.getElementById('P3').value == 1 && i == 1) {
                    availability = document.getElementById('P3').value;
                    console.log(availability);  
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (document.getElementById('P4').value == 1 && i == 1) {
                    availability = document.getElementById('P4').value;
                    console.log(availability);
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P4 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00";
                        p4.style.animation = 'p4buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (document.getElementById('P5').value == 1 && i == 1) {
                    availability = document.getElementById('P5').value;
                    console.log(availability);
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P5 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p5 = document.getElementById('p5');
                        p5.style.color = "white"
                        p5.style.backgroundColor = "#7FFF00";
                        p5.style.animation = 'p5buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (document.getElementById('P6').value == 1 && i == 1) {
                    availability = document.getElementById('P6').value;
                    console.log(availability);
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P6 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p6 = document.getElementById('p6');
                        p6.style.color = "white"
                        p6.style.backgroundColor = "#7FFF00";
                        p6.style.animation = 'p6buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P1').value + document.getElementById('Process').value == i || (document.getElementById('P1').value == i)) || document.getElementById('P1').value + 2*document.getElementById('Process').value == i || document.getElementById('P1').value + 3*document.getElementById('Process').value == i || document.getElementById('P1').value + 4*document.getElementById('Process').value == i || document.getElementById('P1').value + 5*document.getElementById('Process').value == i || document.getElementById('P1').value + 6*document.getElementById('Process').value == i || document.getElementById('P1').value + 7*document.getElementById('Process').value == i || document.getElementById('P1').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P1').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P2').value + document.getElementById('Process').value == i || (document.getElementById('P2').value == i)) || document.getElementById('P2').value + 2*document.getElementById('Process').value == i || document.getElementById('P2').value + 3*document.getElementById('Process').value == i || document.getElementById('P2').value + 4*document.getElementById('Process').value == i || document.getElementById('P2').value + 5*document.getElementById('Process').value == i || document.getElementById('P2').value + 6*document.getElementById('Process').value == i || document.getElementById('P2').value + 7*document.getElementById('Process').value == i || document.getElementById('P2').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P2').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P3').value + document.getElementById('Process').value == i || (document.getElementById('P3').value == i)) || document.getElementById('P3').value + 2*document.getElementById('Process').value == i || document.getElementById('P3').value + 3*document.getElementById('Process').value == i || document.getElementById('P3').value + 4*document.getElementById('Process').value == i || document.getElementById('P3').value + 5*document.getElementById('Process').value == i || document.getElementById('P3').value + 6*document.getElementById('Process').value == i || document.getElementById('P3').value + 7*document.getElementById('Process').value == i || document.getElementById('P3').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P3').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if ((document.getElementById('P4').value + document.getElementById('Process').value == i || (document.getElementById('P4').value == i)) || document.getElementById('P4').value + 2*document.getElementById('Process').value == i || document.getElementById('P4').value + 3*document.getElementById('Process').value == i || document.getElementById('P4').value + 4*document.getElementById('Process').value == i || document.getElementById('P4').value + 5*document.getElementById('Process').value == i || document.getElementById('P4').value + 6*document.getElementById('Process').value == i || document.getElementById('P4').value + 7*document.getElementById('Process').value == i || document.getElementById('P4').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P4').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P4 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00";
                        p4.style.animation = 'p4buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if ((document.getElementById('P5').value + document.getElementById('Process').value == i || (document.getElementById('P5').value == i)) || document.getElementById('P5').value + 2*document.getElementById('Process').value == i || document.getElementById('P5').value + 3*document.getElementById('Process').value == i || document.getElementById('P5').value + 4*document.getElementById('Process').value == i || document.getElementById('P5').value + 5*document.getElementById('Process').value == i || document.getElementById('P5').value + 6*document.getElementById('Process').value == i || document.getElementById('P5').value + 7*document.getElementById('Process').value == i || document.getElementById('P5').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P5').value) && i != 1) {
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P5 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p5 = document.getElementById('p5');
                        p5.style.color = "white"
                        p5.style.backgroundColor = "#7FFF00";
                        p5.style.animation = 'p5buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P6').value + document.getElementById('Process').value == i || (document.getElementById('P6').value == i)) || document.getElementById('P6').value + 2*document.getElementById('Process').value == i || document.getElementById('P6').value + 3*document.getElementById('Process').value == i || document.getElementById('P6').value + 4*document.getElementById('Process').value == i || document.getElementById('P6').value + 5*document.getElementById('Process').value == i || document.getElementById('P6').value + 6*document.getElementById('Process').value == i || document.getElementById('P6').value + 7*document.getElementById('Process').value == i || document.getElementById('P6').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P6').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P6 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p6 = document.getElementById('p6');
                        p6.style.color = "white"
                        p6.style.backgroundColor = "#7FFF00";
                        p6.style.animation = 'p6buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (availability == x) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00"
                        p1.style.animation = 'p1in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p1 = document.getElementById('p1');
                        p1.style.animation = 'p1stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1out 3s ease forwards';
                    }, i * 2000);
                }
                else if ((availability == y)) {
    
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00"
                        p2.style.animation = 'p2in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P2 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
                    availability++;
                    setTimeout(() => {
                        let p2 = document.getElementById('p2');
                        p2.style.animation = 'p2stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P2 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == z) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00"
                        p3.style.animation = 'p3in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P3 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p3 = document.getElementById('p3');
                        p3.style.animation = 'p3stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P3 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == a) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P4 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00"
                        p4.style.animation = 'p4in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P4 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p4 = document.getElementById('p4');
                        p4.style.animation = 'p4stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P4 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00";
                        p4.style.animation = 'p4out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == b) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P5 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p5 = document.getElementById('p5');
                        p5.style.color = "white"
                        p5.style.backgroundColor = "#7FFF00"
                        p5.style.animation = 'p5in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P5 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p5 = document.getElementById('p5');
                        p5.style.animation = 'p5stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P5 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p5 = document.getElementById('p5');
                        p5.style.color = "white"
                        p5.style.backgroundColor = "#7FFF00";
                        p5.style.animation = 'p5out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == c) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P6 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p6 = document.getElementById('p6');
                        p6.style.color = "white"
                        p6.style.backgroundColor = "#7FFF00"
                        p6.style.animation = 'p6in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P6 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p6 = document.getElementById('p6');
                        p6.style.animation = 'p6stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P6 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p6 = document.getElementById('p6');
                        p6.style.color = "white"
                        p6.style.backgroundColor = "#7FFF00";
                        p6.style.animation = 'p6out 3s ease forwards';
                    }, i * 2000);
                    await sleep(26000);
                    document.getElementById('something').innerHTML="All Processes finished their execution!"; 
                }
            }
            }
            else if(s==7){
            var x = document.getElementById('P1').value;
            var y = document.getElementById('P2').value;
            var z = document.getElementById('P3').value;
            var a = document.getElementById('P4').value;
            var b = document.getElementById('P5').value;
            var c = document.getElementById('P6').value;
            var d = document.getElementById('P7').value;
           
            for (var i = 1; i <= ((document.getElementById('Process').value)*2); i++) {
                if (document.getElementById('P1').value == 1 && i == 1) {
                    availability = document.getElementById('P1').value;
                    console.log(availability);
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (document.getElementById('P2').value == 1 && i == 1) {
                    availability = document.getElementById('P2').value;
                    document.getElementById("something").innerHTML = "new text";
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (document.getElementById('P3').value == 1 && i == 1) {
                    availability = document.getElementById('P3').value;
                    console.log(availability);
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (document.getElementById('P4').value == 1 && i == 1) {
                    availability = document.getElementById('P4').value;
                    console.log(availability);
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P4 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00";
                        p4.style.animation = 'p4buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (document.getElementById('P5').value == 1 && i == 1) {
                    availability = document.getElementById('P5').value;
                    console.log(availability);
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P5 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p5 = document.getElementById('p5');
                        p5.style.color = "white"
                        p5.style.backgroundColor = "#7FFF00";
                        p5.style.animation = 'p5buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (document.getElementById('P6').value == 1 && i == 1) {
                    availability = document.getElementById('P6').value;
                    console.log(availability);
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P6 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p6 = document.getElementById('p6');
                        p6.style.color = "white"
                        p6.style.backgroundColor = "#7FFF00";
                        p6.style.animation = 'p6buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (document.getElementById('P7').value == 1 && i == 1) {
                    availability = document.getElementById('P7').value;
                    console.log(availability);
                    setTimeout(() => {
    
                        document.getElementById('something').innerHTML = "P7 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p7 = document.getElementById('p7');
                        p7.style.color = "white"
                        p7.style.backgroundColor = "#7FFF00";
                        p7.style.animation = 'p7buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P1').value + document.getElementById('Process').value == i || (document.getElementById('P1').value == i)) || document.getElementById('P1').value + 2*document.getElementById('Process').value == i || document.getElementById('P1').value + 3*document.getElementById('Process').value == i || document.getElementById('P1').value + 4*document.getElementById('Process').value == i || document.getElementById('P1').value + 5*document.getElementById('Process').value == i || document.getElementById('P1').value + 6*document.getElementById('Process').value == i || document.getElementById('P1').value + 7*document.getElementById('Process').value == i || document.getElementById('P1').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P1').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P2').value + document.getElementById('Process').value == i || (document.getElementById('P2').value == i)) || document.getElementById('P2').value + 2*document.getElementById('Process').value == i || document.getElementById('P2').value + 3*document.getElementById('Process').value == i || document.getElementById('P2').value + 4*document.getElementById('Process').value == i || document.getElementById('P2').value + 5*document.getElementById('Process').value == i || document.getElementById('P2').value + 6*document.getElementById('Process').value == i || document.getElementById('P2').value + 7*document.getElementById('Process').value == i || document.getElementById('P2').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P2').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P3').value + document.getElementById('Process').value == i || (document.getElementById('P3').value == i)) || document.getElementById('P3').value + 2*document.getElementById('Process').value == i || document.getElementById('P3').value + 3*document.getElementById('Process').value == i || document.getElementById('P3').value + 4*document.getElementById('Process').value == i || document.getElementById('P3').value + 5*document.getElementById('Process').value == i || document.getElementById('P3').value + 6*document.getElementById('Process').value == i || document.getElementById('P3').value + 7*document.getElementById('Process').value == i || document.getElementById('P3').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P3').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if ((document.getElementById('P4').value + document.getElementById('Process').value == i || (document.getElementById('P4').value == i)) || document.getElementById('P4').value + 2*document.getElementById('Process').value == i || document.getElementById('P4').value + 3*document.getElementById('Process').value == i || document.getElementById('P4').value + 4*document.getElementById('Process').value == i || document.getElementById('P4').value + 5*document.getElementById('Process').value == i || document.getElementById('P4').value + 6*document.getElementById('Process').value == i || document.getElementById('P4').value + 7*document.getElementById('Process').value == i || document.getElementById('P4').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P4').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P4 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00";
                        p4.style.animation = 'p4buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if ((document.getElementById('P5').value + document.getElementById('Process').value == i || (document.getElementById('P5').value == i)) || document.getElementById('P5').value + 2*document.getElementById('Process').value == i || document.getElementById('P5').value + 3*document.getElementById('Process').value == i || document.getElementById('P5').value + 4*document.getElementById('Process').value == i || document.getElementById('P5').value + 5*document.getElementById('Process').value == i || document.getElementById('P5').value + 6*document.getElementById('Process').value == i || document.getElementById('P5').value + 7*document.getElementById('Process').value == i || document.getElementById('P5').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P5').value) && i != 1) {
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P5 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p5 = document.getElementById('p5');
                        p5.style.color = "white"
                        p5.style.backgroundColor = "#7FFF00";
                        p5.style.animation = 'p5buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if ((document.getElementById('P6').value + document.getElementById('Process').value == i || (document.getElementById('P6').value == i)) || document.getElementById('P6').value + 2*document.getElementById('Process').value == i || document.getElementById('P6').value + 3*document.getElementById('Process').value == i || document.getElementById('P6').value + 4*document.getElementById('Process').value == i || document.getElementById('P6').value + 5*document.getElementById('Process').value == i || document.getElementById('P6').value + 6*document.getElementById('Process').value == i || document.getElementById('P6').value + 7*document.getElementById('Process').value == i || document.getElementById('P6').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P6').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P6 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p6 = document.getElementById('p6');
                        p6.style.color = "white"
                        p6.style.backgroundColor = "#7FFF00";
                        p6.style.animation = 'p6buzz 3s ease forwards';
                    }, i * 2000);
                }
    
                else if ((document.getElementById('P7').value + document.getElementById('Process').value == i || (document.getElementById('P7').value == i)) || document.getElementById('P7').value + 2*document.getElementById('Process').value == i || document.getElementById('P7').value + 3*document.getElementById('Process').value == i || document.getElementById('P7').value + 4*document.getElementById('Process').value == i || document.getElementById('P7').value + 5*document.getElementById('Process').value == i || document.getElementById('P7').value + 6*document.getElementById('Process').value == i || document.getElementById('P7').value + 7*document.getElementById('Process').value == i || document.getElementById('P7').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P7').value) && i != 1) {
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P7 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p7 = document.getElementById('p7');
                        p7.style.color = "white"
                        p7.style.backgroundColor = "#7FFF00";
                        p7.style.animation = 'p7buzz 3s ease forwards';
                    }, i * 2000);
                }
                else if (availability == x) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P1 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00"
                        p1.style.animation = 'p1in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p1 = document.getElementById('p1');
                        p1.style.animation = 'p1stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P1 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p1 = document.getElementById('p1');
                        p1.style.color = "white"
                        p1.style.backgroundColor = "#7FFF00";
                        p1.style.animation = 'p1out 3s ease forwards';
                    }, i * 2000);
                }
                else if ((availability == y)) {
    
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P2 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00"
                        p2.style.animation = 'p2in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P2 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
                    availability++;
                    setTimeout(() => {
                        let p2 = document.getElementById('p2');
                        p2.style.animation = 'p2stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P2 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p2 = document.getElementById('p2');
                        p2.style.color = "white"
                        p2.style.backgroundColor = "#7FFF00";
                        p2.style.animation = 'p2out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == z) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P3 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00"
                        p3.style.animation = 'p3in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P3 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p3 = document.getElementById('p3');
                        p3.style.animation = 'p3stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P3 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p3 = document.getElementById('p3');
                        p3.style.color = "white"
                        p3.style.backgroundColor = "#7FFF00";
                        p3.style.animation = 'p3out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == a) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P4 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00"
                        p4.style.animation = 'p4in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P4 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p4 = document.getElementById('p4');
                        p4.style.animation = 'p4stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P4 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p4 = document.getElementById('p4');
                        p4.style.color = "white"
                        p4.style.backgroundColor = "#7FFF00";
                        p4.style.animation = 'p4out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == b) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P5 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p5 = document.getElementById('p5');
                        p5.style.color = "white"
                        p5.style.backgroundColor = "#7FFF00"
                        p5.style.animation = 'p5in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P5 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p5 = document.getElementById('p5');
                        p5.style.animation = 'p5stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P5 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p5 = document.getElementById('p5');
                        p5.style.color = "white"
                        p5.style.backgroundColor = "#7FFF00";
                        p5.style.animation = 'p5out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == c) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P6 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p6 = document.getElementById('p6');
                        p6.style.color = "white"
                        p6.style.backgroundColor = "#7FFF00"
                        p6.style.animation = 'p6in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P6 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p6 = document.getElementById('p6');
                        p6.style.animation = 'p6stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P6 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p6 = document.getElementById('p6');
                        p6.style.color = "white"
                        p6.style.backgroundColor = "#7FFF00";
                        p6.style.animation = 'p6out 3s ease forwards';
                    }, i * 2000);
                }
    
                else if (availability == d) {
                    availability++;
                    console.log(availability);
                    setTimeout(() => {
                        document.getElementById('something').innerHTML = "P7 is being executed!";
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p7 = document.getElementById('p7');
                        p7.style.color = "white"
                        p7.style.backgroundColor = "#7FFF00"
                        p7.style.animation = 'p7in 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P7 is to enter critical section!";
    
                    }, i * 2000);
                    await sleep(2000);
    
                    setTimeout(() => {
                        let p7 = document.getElementById('p7');
                        p7.style.animation = 'p7stays 3s ease forwards';
                        document.getElementById('Cs_update').innerHTML = "P7 is in critical section!";
                    }, i * 2000);
    
    
                    await sleep(2000);
    
                    setTimeout(() => {
                        document.getElementById('Cs_update').innerHTML = "critical section is free";
                        let p7 = document.getElementById('p7');
                        p7.style.color = "white"
                        p7.style.backgroundColor = "#7FFF00";
                        p7.style.animation = 'p7out 3s ease forwards';
                    }, i * 2000);
                    await sleep(30000);
                    document.getElementById('something').innerHTML="All Processes finished their execution!"; 
                }
            }
            }
            else{
            var x = document.getElementById('P1').value;
            var y = document.getElementById('P2').value;
            var z = document.getElementById('P3').value;
            var a = document.getElementById('P4').value;
            var b = document.getElementById('P5').value;
            var c = document.getElementById('P6').value;
            var d = document.getElementById('P7').value;
            var e = document.getElementById('P8').value;
           
        for (var i = 1; i <= ((document.getElementById('Process').value)*2); i++) {
            if (document.getElementById('P1').value == 1 && i == 1) {
                availability = document.getElementById('P1').value;
                console.log(availability);
                setTimeout(() => {

                    document.getElementById('something').innerHTML = "P1 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p1 = document.getElementById('p1');
                    p1.style.color = "white"
                    p1.style.backgroundColor = "#7FFF00";
                    p1.style.animation = 'p1buzz 3s ease forwards';
                }, i * 2000);
            }
            else if (document.getElementById('P2').value == 1 && i == 1) {
                availability = document.getElementById('P2').value;
                document.getElementById("something").innerHTML = "new text";
                setTimeout(() => {

                    document.getElementById('something').innerHTML = "P2 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p2 = document.getElementById('p2');
                    p2.style.color = "white"
                    p2.style.backgroundColor = "#7FFF00";
                    p2.style.animation = 'p2buzz 3s ease forwards';
                }, i * 2000);
            }

            else if (document.getElementById('P3').value == 1 && i == 1) {
                availability = document.getElementById('P3').value;
                console.log(availability);
                setTimeout(() => {

                    document.getElementById('something').innerHTML = "P3 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p3 = document.getElementById('p3');
                    p3.style.color = "white"
                    p3.style.backgroundColor = "#7FFF00";
                    p3.style.animation = 'p3buzz 3s ease forwards';
                }, i * 2000);
            }

            else if (document.getElementById('P4').value == 1 && i == 1) {
                availability = document.getElementById('P4').value;
                console.log(availability);
                setTimeout(() => {

                    document.getElementById('something').innerHTML = "P4 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p4 = document.getElementById('p4');
                    p4.style.color = "white"
                    p4.style.backgroundColor = "#7FFF00";
                    p4.style.animation = 'p4buzz 3s ease forwards';
                }, i * 2000);
            }
            else if (document.getElementById('P5').value == 1 && i == 1) {
                availability = document.getElementById('P5').value;
                console.log(availability);
                setTimeout(() => {

                    document.getElementById('something').innerHTML = "P5 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p5 = document.getElementById('p5');
                    p5.style.color = "white"
                    p5.style.backgroundColor = "#7FFF00";
                    p5.style.animation = 'p5buzz 3s ease forwards';
                }, i * 2000);
            }

            else if (document.getElementById('P6').value == 1 && i == 1) {
                availability = document.getElementById('P6').value;
                console.log(availability);
                //document.getElementById("something").innerHTML = "new text";  
                setTimeout(() => {

                    document.getElementById('something').innerHTML = "P6 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p6 = document.getElementById('p6');
                    p6.style.color = "white"
                    p6.style.backgroundColor = "#7FFF00";
                    p6.style.animation = 'p6buzz 3s ease forwards';
                }, i * 2000);
            }
            else if (document.getElementById('P7').value == 1 && i == 1) {
                availability = document.getElementById('P7').value;
                console.log(availability);
                //document.getElementById("something").innerHTML = "new text";  
                setTimeout(() => {

                    document.getElementById('something').innerHTML = "P7 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p7 = document.getElementById('p7');
                    p7.style.color = "white"
                    p7.style.backgroundColor = "#7FFF00";
                    p7.style.animation = 'p7buzz 3s ease forwards';
                }, i * 2000);
            }

            else if (document.getElementById('P8').value == 1 && i == 1) {
                availability = document.getElementById('P8').value;
                console.log(availability);
                //document.getElementById("something").innerHTML = "new text";  
                setTimeout(() => {

                    document.getElementById('something').innerHTML = "P8 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p8 = document.getElementById('p8');
                    p8.style.color = "white"
                    p8.style.backgroundColor = "#7FFF00";
                    p8.style.animation = 'p8buzz 3s ease forwards';
                }, i * 2000);
            }


            else if ((document.getElementById('P1').value + document.getElementById('Process').value == i || (document.getElementById('P1').value == i)) || document.getElementById('P1').value + 2*document.getElementById('Process').value == i || document.getElementById('P1').value + 3*document.getElementById('Process').value == i || document.getElementById('P1').value + 4*document.getElementById('Process').value == i || document.getElementById('P1').value + 5*document.getElementById('Process').value == i || document.getElementById('P1').value + 6*document.getElementById('Process').value == i || document.getElementById('P1').value + 7*document.getElementById('Process').value == i || document.getElementById('P1').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P1').value) && i != 1) {
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P1 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p1 = document.getElementById('p1');
                    p1.style.color = "white"
                    p1.style.backgroundColor = "#7FFF00";
                    p1.style.animation = 'p1buzz 3s ease forwards';
                }, i * 2000);
            }
            else if ((document.getElementById('P2').value + document.getElementById('Process').value == i || (document.getElementById('P2').value == i)) || document.getElementById('P2').value + 2*document.getElementById('Process').value == i || document.getElementById('P2').value + 3*document.getElementById('Process').value == i || document.getElementById('P2').value + 4*document.getElementById('Process').value == i || document.getElementById('P2').value + 5*document.getElementById('Process').value == i || document.getElementById('P2').value + 6*document.getElementById('Process').value == i || document.getElementById('P2').value + 7*document.getElementById('Process').value == i || document.getElementById('P2').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P2').value) && i != 1) {
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P2 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p2 = document.getElementById('p2');
                    p2.style.color = "white"
                    p2.style.backgroundColor = "#7FFF00";
                    p2.style.animation = 'p2buzz 3s ease forwards';
                }, i * 2000);
            }
            else if ((document.getElementById('P3').value + document.getElementById('Process').value == i || (document.getElementById('P3').value == i)) || document.getElementById('P3').value + 2*document.getElementById('Process').value == i || document.getElementById('P3').value + 3*document.getElementById('Process').value == i || document.getElementById('P3').value + 4*document.getElementById('Process').value == i || document.getElementById('P3').value + 5*document.getElementById('Process').value == i || document.getElementById('P3').value + 6*document.getElementById('Process').value == i || document.getElementById('P3').value + 7*document.getElementById('Process').value == i || document.getElementById('P3').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P3').value) && i != 1) {
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P3 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p3 = document.getElementById('p3');
                    p3.style.color = "white"
                    p3.style.backgroundColor = "#7FFF00";
                    p3.style.animation = 'p3buzz 3s ease forwards';
                }, i * 2000);
            }

            else if ((document.getElementById('P4').value + document.getElementById('Process').value == i || (document.getElementById('P4').value == i)) || document.getElementById('P4').value + 2*document.getElementById('Process').value == i || document.getElementById('P4').value + 3*document.getElementById('Process').value == i || document.getElementById('P4').value + 4*document.getElementById('Process').value == i || document.getElementById('P4').value + 5*document.getElementById('Process').value == i || document.getElementById('P4').value + 6*document.getElementById('Process').value == i || document.getElementById('P4').value + 7*document.getElementById('Process').value == i || document.getElementById('P4').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P4').value) && i != 1) {
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P4 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p4 = document.getElementById('p4');
                    p4.style.color = "white"
                    p4.style.backgroundColor = "#7FFF00";
                    p4.style.animation = 'p4buzz 3s ease forwards';
                }, i * 2000);
            }

            else if ((document.getElementById('P5').value + document.getElementById('Process').value == i || (document.getElementById('P5').value == i)) || document.getElementById('P5').value + 2*document.getElementById('Process').value == i || document.getElementById('P5').value + 3*document.getElementById('Process').value == i || document.getElementById('P5').value + 4*document.getElementById('Process').value == i || document.getElementById('P5').value + 5*document.getElementById('Process').value == i || document.getElementById('P5').value + 6*document.getElementById('Process').value == i || document.getElementById('P5').value + 7*document.getElementById('Process').value == i || document.getElementById('P5').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P5').value) && i != 1) {
                console.log(availability);
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P5 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p5 = document.getElementById('p5');
                    p5.style.color = "white"
                    p5.style.backgroundColor = "#7FFF00";
                    p5.style.animation = 'p5buzz 3s ease forwards';
                }, i * 2000);
            }
            else if ((document.getElementById('P6').value + document.getElementById('Process').value == i || (document.getElementById('P6').value == i)) || document.getElementById('P6').value + 2*document.getElementById('Process').value == i || document.getElementById('P6').value + 3*document.getElementById('Process').value == i || document.getElementById('P6').value + 4*document.getElementById('Process').value == i || document.getElementById('P6').value + 5*document.getElementById('Process').value == i || document.getElementById('P6').value + 6*document.getElementById('Process').value == i || document.getElementById('P6').value + 7*document.getElementById('Process').value == i || document.getElementById('P6').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P6').value) && i != 1) {
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P6 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p6 = document.getElementById('p6');
                    p6.style.color = "white"
                    p6.style.backgroundColor = "#7FFF00";
                    p6.style.animation = 'p6buzz 3s ease forwards';
                }, i * 2000);
            }

            else if ((document.getElementById('P7').value + document.getElementById('Process').value == i || (document.getElementById('P7').value == i)) || document.getElementById('P7').value + 2*document.getElementById('Process').value == i || document.getElementById('P7').value + 3*document.getElementById('Process').value == i || document.getElementById('P7').value + 4*document.getElementById('Process').value == i || document.getElementById('P7').value + 5*document.getElementById('Process').value == i || document.getElementById('P7').value + 6*document.getElementById('Process').value == i || document.getElementById('P7').value + 7*document.getElementById('Process').value == i || document.getElementById('P7').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P7').value) && i != 1) {
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P7 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p7 = document.getElementById('p7');
                    p7.style.color = "white"
                    p7.style.backgroundColor = "#7FFF00";
                    p7.style.animation = 'p7buzz 3s ease forwards';
                }, i * 2000);
            }
            else if ((document.getElementById('P8').value + document.getElementById('Process').value == i || (document.getElementById('P8').value == i)) || document.getElementById('P8').value + 2*document.getElementById('Process').value == i || document.getElementById('P8').value + 3*document.getElementById('Process').value == i || document.getElementById('P8').value + 4*document.getElementById('Process').value == i || document.getElementById('P8').value + 5*document.getElementById('Process').value == i || document.getElementById('P8').value + 6*document.getElementById('Process').value == i || document.getElementById('P8').value + 7*document.getElementById('Process').value == i || document.getElementById('P8').value + 8*document.getElementById('Process').value == i && (availability != document.getElementById('P8').value) && i != 1) {
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P8 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p8 = document.getElementById('p8');
                    p8.style.color = "white"
                    p8.style.backgroundColor = "#7FFF00";
                    p8.style.animation = 'p8buzz 3s ease forwards';
                }, i * 2000);
            }


            else if (availability == x) {
                availability++;
                console.log(availability);
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P1 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p1 = document.getElementById('p1');
                    p1.style.color = "white"
                    p1.style.backgroundColor = "#7FFF00"
                    p1.style.animation = 'p1in 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P1 is to enter critical section!";

                }, i * 2000);
                await sleep(2000);

                setTimeout(() => {
                    let p1 = document.getElementById('p1');
                    p1.style.animation = 'p1stays 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P1 is in critical section!";
                }, i * 2000);


                await sleep(2000);

                setTimeout(() => {
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p1 = document.getElementById('p1');
                    p1.style.color = "white"
                    p1.style.backgroundColor = "#7FFF00";
                    p1.style.animation = 'p1out 3s ease forwards';
                }, i * 2000);
            }
            else if ((availability == y)) {

                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P2 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p2 = document.getElementById('p2');
                    p2.style.color = "white"
                    p2.style.backgroundColor = "#7FFF00"
                    p2.style.animation = 'p2in 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P2 is to enter critical section!";

                }, i * 2000);
                await sleep(2000);
                availability++;
                setTimeout(() => {
                    let p2 = document.getElementById('p2');
                    p2.style.animation = 'p2stays 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P2 is in critical section!";
                }, i * 2000);


                await sleep(2000);

                setTimeout(() => {
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p2 = document.getElementById('p2');
                    p2.style.color = "white"
                    p2.style.backgroundColor = "#7FFF00";
                    p2.style.animation = 'p2out 3s ease forwards';
                }, i * 2000);
            }

            else if (availability == z) {
                availability++;
                console.log(availability);
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P3 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p3 = document.getElementById('p3');
                    p3.style.color = "white"
                    p3.style.backgroundColor = "#7FFF00"
                    p3.style.animation = 'p3in 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P3 is to enter critical section!";

                }, i * 2000);
                await sleep(2000);

                setTimeout(() => {
                    let p3 = document.getElementById('p3');
                    p3.style.animation = 'p3stays 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P3 is in critical section!";
                }, i * 2000);


                await sleep(2000);

                setTimeout(() => {
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    // document.getElementById('something').innerHTML= "P3 is being executed!";
                    let p3 = document.getElementById('p3');
                    p3.style.color = "white"
                    p3.style.backgroundColor = "#7FFF00";
                    p3.style.animation = 'p3out 3s ease forwards';
                }, i * 2000);
            }

            else if (availability == a) {
                availability++;
                console.log(availability);
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P4 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p4 = document.getElementById('p4');
                    p4.style.color = "white"
                    p4.style.backgroundColor = "#7FFF00"
                    p4.style.animation = 'p4in 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P4 is to enter critical section!";

                }, i * 2000);
                await sleep(2000);

                setTimeout(() => {
                    let p4 = document.getElementById('p4');
                    p4.style.animation = 'p4stays 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P4 is in critical section!";
                }, i * 2000);


                await sleep(2000);

                setTimeout(() => {
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    // document.getElementById('something').innerHTML= "P2 is being executed!";
                    let p4 = document.getElementById('p4');
                    p4.style.color = "white"
                    p4.style.backgroundColor = "#7FFF00";
                    p4.style.animation = 'p4out 3s ease forwards';
                }, i * 2000);
            }

            else if (availability == b) {
                availability++;
                console.log(availability);
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P5 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p5 = document.getElementById('p5');
                    p5.style.color = "white"
                    p5.style.backgroundColor = "#7FFF00"
                    p5.style.animation = 'p5in 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P5 is to enter critical section!";

                }, i * 2000);
                await sleep(2000);

                setTimeout(() => {
                    let p5 = document.getElementById('p5');
                    p5.style.animation = 'p5stays 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P5 is in critical section!";
                }, i * 2000);


                await sleep(2000);

                setTimeout(() => {
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    // document.getElementById('something').innerHTML= "P5 is being executed!";
                    let p5 = document.getElementById('p5');
                    p5.style.color = "white"
                    p5.style.backgroundColor = "#7FFF00";
                    p5.style.animation = 'p5out 3s ease forwards';
                }, i * 2000);
            }

            else if (availability == c) {
                availability++;
                console.log(availability);
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P6 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p6 = document.getElementById('p6');
                    p6.style.color = "white"
                    p6.style.backgroundColor = "#7FFF00"
                    p6.style.animation = 'p6in 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P6 is to enter critical section!";

                }, i * 2000);
                await sleep(2000);

                setTimeout(() => {
                    let p6 = document.getElementById('p6');
                    p6.style.animation = 'p6stays 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P6 is in critical section!";
                }, i * 2000);


                await sleep(2000);

                setTimeout(() => {
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    // document.getElementById('something').innerHTML= "P2 is being executed!";
                    let p6 = document.getElementById('p6');
                    p6.style.color = "white"
                    p6.style.backgroundColor = "#7FFF00";
                    p6.style.animation = 'p6out 3s ease forwards';
                }, i * 2000);
            }

            else if (availability == d) {
                availability++;
                console.log(availability);
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P7 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p7 = document.getElementById('p7');
                    p7.style.color = "white"
                    p7.style.backgroundColor = "#7FFF00"
                    p7.style.animation = 'p7in 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P7 is to enter critical section!";

                }, i * 2000);
                await sleep(2000);

                setTimeout(() => {
                    let p7 = document.getElementById('p7');
                    p7.style.animation = 'p7stays 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P7 is in critical section!";
                }, i * 2000);


                await sleep(2000);

                setTimeout(() => {
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    // document.getElementById('something').innerHTML= "P7 is being executed!";
                    let p7 = document.getElementById('p7');
                    p7.style.color = "white"
                    p7.style.backgroundColor = "#7FFF00";
                    p7.style.animation = 'p7out 3s ease forwards';
                }, i * 2000);
            }

            else if (availability == e) {
                availability++;
                console.log(availability);
                setTimeout(() => {
                    document.getElementById('something').innerHTML = "P8 is being executed!";
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    let p8 = document.getElementById('p8');
                    p8.style.color = "white"
                    p8.style.backgroundColor = "#7FFF00"
                    p8.style.animation = 'p8in 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P8 is to enter critical section!";

                }, i * 2000);
                await sleep(2000);

                setTimeout(() => {
                    let p8 = document.getElementById('p8');
                    p8.style.animation = 'p8stays 3s ease forwards';
                    document.getElementById('Cs_update').innerHTML = "P8 is in critical section!";
                }, i * 2000);


                await sleep(2000);

                setTimeout(() => {
                    document.getElementById('Cs_update').innerHTML = "critical section is free";
                    // document.getElementById('something').innerHTML= "P2 is being executed!";
                    let p8 = document.getElementById('p8');
                    p8.style.color = "white"
                    p8.style.backgroundColor = "#7FFF00";
                    p8.style.animation = 'p8out 3s ease forwards';
                }, i * 2000);
            }
        }
        }

    }
    else {
        document.getElementById('exclusion').innerHTML += "Due to lock variable all the processes will not be able to enter into critical section";
        for (var i = 1; i <= window.p; i++) {

            setTimeout(() => {
                if (window.p == 8) {
                    let p8 = document.getElementById('p8');
                    p8.style.color = "white"
                    p8.style.backgroundColor = "#7FFF00";
                    p8.style.animation = 'p8buzz 5s ease forwards';
                    let p7 = document.getElementById('p7');
                    p7.style.color = "white"
                    p7.style.backgroundColor = "#7FFF00";
                    p7.style.animation = 'p7buzz 5s ease forwards';
                    let p6 = document.getElementById('p6');
                    p6.style.color = "white"
                    p6.style.backgroundColor = "#7FFF00";
                    p6.style.animation = 'p6buzz 5s ease forwards';
                    let p5 = document.getElementById('p5');
                    p5.style.color = "white"
                    p5.style.backgroundColor = "#7FFF00";
                    p5.style.animation = 'p5buzz 5s ease forwards';
                    let p4 = document.getElementById('p4');
                    p4.style.color = "white"
                    p4.style.backgroundColor = "#7FFF00";
                    p4.style.animation = 'p4buzz 5s ease forwards';
                    let p3 = document.getElementById('p3');
                    p3.style.color = "white"
                    p3.style.backgroundColor = "#7FFF00";
                    p3.style.animation = 'p3buzz 5s ease forwards';
                    let p2 = document.getElementById('p2');
                    p2.style.color = "white"
                    p2.style.backgroundColor = "#7FFF00";
                    p2.style.animation = 'p2buzz 5s ease forwards';
                    let p1 = document.getElementById('p1');
                    p1.style.color = "white"
                    p1.style.backgroundColor = "#7FFF00";
                    p1.style.animation = 'p1buzz 5s ease forwards';
                    document.getElementById('something').innerHTML = "*Intial lock value is 1 !";
                    document.getElementById('Cs_update').innerHTML = "* Deadlock Ocuured!";
                    document.getElementById('random').innerHTML = "* No process can enter Critical section";
                    document.getElementById('random1').innerHTML = "* All processes are stucked in while loop";
                    document.getElementById('random2').innerHTML = "* Set initial lock to 0";
                }
                else if (window.p == 7) {
                    let p7 = document.getElementById('p7');
                    p7.style.color = "white"
                    p7.style.backgroundColor = "#7FFF00";
                    p7.style.animation = 'p7buzz 5s ease forwards';
                    let p6 = document.getElementById('p6');
                    p6.style.color = "white"
                    p6.style.backgroundColor = "#7FFF00";
                    p6.style.animation = 'p6buzz 5s ease forwards';
                    let p5 = document.getElementById('p5');
                    p5.style.color = "white"
                    p5.style.backgroundColor = "#7FFF00";
                    p5.style.animation = 'p5buzz 5s ease forwards';
                    let p4 = document.getElementById('p4');
                    p4.style.color = "white"
                    p4.style.backgroundColor = "#7FFF00";
                    p4.style.animation = 'p4buzz 5s ease forwards';
                    let p3 = document.getElementById('p3');
                    p3.style.color = "white"
                    p3.style.backgroundColor = "#7FFF00";
                    p3.style.animation = 'p3buzz 5s ease forwards';
                    let p2 = document.getElementById('p2');
                    p2.style.color = "white"
                    p2.style.backgroundColor = "#7FFF00";
                    p2.style.animation = 'p2buzz 3s ease forwards';
                    let p1 = document.getElementById('p1');
                    p1.style.color = "white"
                    p1.style.backgroundColor = "#7FFF00";
                    p1.style.animation = 'p1buzz 5s ease forwards';
                    document.getElementById('something').innerHTML = "*Intial lock value is 1 !";
                    document.getElementById('Cs_update').innerHTML = "* Deadlock Ocuured!";
                    document.getElementById('random').innerHTML = "* No process can enter Critical section";
                    document.getElementById('random1').innerHTML = "* All processes are stucked in while loop";
                    document.getElementById('random2').innerHTML = "* Set initial lock to 0";
                }
                else if (window.p == 6) {
                    let p6 = document.getElementById('p6');
                    p6.style.color = "white"
                    p6.style.backgroundColor = "#7FFF00";
                    p6.style.animation = 'p6buzz 5s ease forwards';
                    let p5 = document.getElementById('p5');
                    p5.style.color = "white"
                    p5.style.backgroundColor = "#7FFF00";
                    p5.style.animation = 'p5buzz 5s ease forwards';
                    let p4 = document.getElementById('p4');
                    p4.style.color = "white"
                    p4.style.backgroundColor = "#7FFF00";
                    p4.style.animation = 'p4buzz 5s ease forwards';
                    let p3 = document.getElementById('p3');
                    p3.style.color = "white"
                    p3.style.backgroundColor = "#7FFF00";
                    p3.style.animation = 'p3buzz 5s ease forwards';
                    let p2 = document.getElementById('p2');
                    p2.style.color = "white"
                    p2.style.backgroundColor = "#7FFF00";
                    p2.style.animation = 'p2buzz 5s ease forwards';
                    let p1 = document.getElementById('p1');
                    p1.style.color = "white"
                    p1.style.backgroundColor = "#7FFF00";
                    p1.style.animation = 'p1buzz 5s ease forwards';
                    document.getElementById('something').innerHTML = "*Intial lock value is 1 !";
                    document.getElementById('Cs_update').innerHTML = "* Deadlock Ocuured!";
                    document.getElementById('random').innerHTML = "* No process can enter Critical section";
                    document.getElementById('random1').innerHTML = "* All processes are stucked in while loop";
                    document.getElementById('random2').innerHTML = "* Set initial lock to 0";
                }
                else if (window.p == 5) {
                    let p5 = document.getElementById('p5');
                    p5.style.color = "white"
                    p5.style.backgroundColor = "#7FFF00";
                    p5.style.animation = 'p5buzz 5s ease forwards';
                    let p4 = document.getElementById('p4');
                    p4.style.color = "white"
                    p4.style.backgroundColor = "#7FFF00";
                    p4.style.animation = 'p4buzz 5s ease forwards';
                    let p3 = document.getElementById('p3');
                    p3.style.color = "white"
                    p3.style.backgroundColor = "#7FFF00";
                    p3.style.animation = 'p3buzz 5s ease forwards';
                    let p2 = document.getElementById('p2');
                    p2.style.color = "white"
                    p2.style.backgroundColor = "#7FFF00";
                    p2.style.animation = 'p2buzz 5s ease forwards';
                    let p1 = document.getElementById('p1');
                    p1.style.color = "white"
                    p1.style.backgroundColor = "#7FFF00";
                    p1.style.animation = 'p1buzz 5s ease forwards';
                    document.getElementById('something').innerHTML = "*Intial lock value is 1 !";
                    document.getElementById('Cs_update').innerHTML = "* Deadlock Ocuured!";
                    document.getElementById('random').innerHTML = "* No process can enter Critical section";
                    document.getElementById('random1').innerHTML = "* All processes are stucked in while loop";
                    document.getElementById('random2').innerHTML = "* Set initial lock to 0";
                }
                else if (window.p == 4) {
                    let p4 = document.getElementById('p4');
                    p4.style.color = "white"
                    p4.style.backgroundColor = "#7FFF00";
                    p4.style.animation = 'p4buzz 5s ease forwards';
                    let p3 = document.getElementById('p3');
                    p3.style.color = "white"
                    p3.style.backgroundColor = "#7FFF00";
                    p3.style.animation = 'p3buzz 5s ease forwards';
                    let p2 = document.getElementById('p2');
                    p2.style.color = "white"
                    p2.style.backgroundColor = "#7FFF00";
                    p2.style.animation = 'p2buzz 5s ease forwards';
                    let p1 = document.getElementById('p1');
                    p1.style.color = "white"
                    p1.style.backgroundColor = "#7FFF00";
                    p1.style.animation = 'p1buzz 5s ease forwards';
                    document.getElementById('something').innerHTML = "*Intial lock value is 1 !";
                    document.getElementById('Cs_update').innerHTML = "* Deadlock Ocuured!";
                    document.getElementById('random').innerHTML = "* No process can enter Critical section";
                    document.getElementById('random1').innerHTML = "* All processes are stucked in while loop";
                    document.getElementById('random2').innerHTML = "* Set initial lock to 0";
                }
                else if (window.p == 3) {
                    let p3 = document.getElementById('p3');
                    p3.style.color = "white"
                    p3.style.backgroundColor = "#7FFF00";
                    p3.style.animation = 'p3buzz 5s ease forwards';
                    let p2 = document.getElementById('p2');
                    p2.style.color = "white"
                    p2.style.backgroundColor = "#7FFF00";
                    p2.style.animation = 'p2buzz 5s ease forwards';
                    let p1 = document.getElementById('p1');
                    p1.style.color = "white"
                    p1.style.backgroundColor = "#7FFF00";
                    p1.style.animation = 'p1buzz 5s ease forwards';
                    document.getElementById('something').innerHTML = "*Intial lock value is 1 !";
                    document.getElementById('Cs_update').innerHTML = "* Deadlock Ocuured!";
                    document.getElementById('random').innerHTML = "* No process can enter Critical section";
                    document.getElementById('random1').innerHTML = "* All processes are stucked in while loop";
                    document.getElementById('random2').innerHTML = "* Set initial lock to 0";
                }
                else if (window.p == 2) {
                    let p2 = document.getElementById('p2');
                    p2.style.color = "white"
                    p2.style.backgroundColor = "#7FFF00";
                    p2.style.animation = 'p2buzz 5s ease forwards';
                    let p1 = document.getElementById('p1');
                    p1.style.color = "white"
                    p1.style.backgroundColor = "#7FFF00";
                    p1.style.animation = 'p1buzz 5s ease forwards';
                    document.getElementById('something').innerHTML = "*Intial lock value is 1 !";
                    document.getElementById('Cs_update').innerHTML = "* Deadlock Ocuured!";
                    document.getElementById('random').innerHTML = "* No process can enter Critical section";
                    document.getElementById('random1').innerHTML = "* All processes are stucked in while loop";
                    document.getElementById('random2').innerHTML = "* Set initial lock to 0";
                }
                else {
                    document.getElementById('live').innerHTML='<div id="yes" style="color: white;"></div>';
                    document.getElementById('yes').innerHTML+=`<div id="random1" style="color: white;"></div>`;
                    document.getElementById('live').innerHTML+=`<div id="random2" style="color: white;"></div>`;
                    let p1 = document.getElementById('p1');
                    p1.style.color = "white"
                    p1.style.backgroundColor = "#7FFF00";
                    p1.style.animation = 'p1buzz 5s ease forwards';
                    document.getElementById('something').innerHTML = "*Intial lock value is 1 !";
                    document.getElementById('Cs_update').innerHTML = "* Deadlock Ocuured!";
                    document.getElementById('random').innerHTML += "* No process can enter Critical section";
                    document.getElementById('random1').innerHTML += "* All processes are stucked in while loop";
                    document.getElementById('random2').innerHTML += "* Set initial lock to 0";
                }
            }, 1000);
        }
    }
}