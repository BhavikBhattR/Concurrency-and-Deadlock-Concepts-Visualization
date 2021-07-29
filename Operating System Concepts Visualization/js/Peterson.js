function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var N = 2; //maximum slots in buffer
var interested = ['0', '0'];
var turn = 0; //global variable

function create_ani() {
    document.getElementById('status').innerHTML += `<div id="live" style="color: white;"></div> </br>`;
    document.getElementById('live').innerHTML += `<h2 id="executor " style="color: white;"></h2> </br>`;
    document.getElementById('platform').innerHTML = ` <div>
    <div class="cyllinder" id="cylinder1">
    <div class="bottom_side"></div>
    <div class="middle_side"></div>
    <div class="top_side"></div>  
</div> 
<div class="cyllinder" id="cylinder2">
    <div class="bottom_side"></div>
    <div class="middle_side"></div>
    <div class="top_side"></div> 
</div>  
<div class="cyllinder" id="cylinder3">
    <div class="bottom_side"></div>
    <div class="middle_side"></div>
    <div class="top_side"></div> 
</div>        
</div> `;
    document.getElementById('Upar').innerHTML += `<span id="queue">PROCESS</span>`;
    document.getElementById('Upar1').innerHTML += `<span id="queue1">CONTAINER</span>`;
    document.getElementById('counter').innerHTML += ` <span id="entry_sec">ENTRY SECTION</span>
<span id="critical_sec">CRITICAL SECTION</span>
<span id="exit_sec">EXIT SECTION</span>`;
    document.getElementById('pcontainer').innerHTML += `<div id="process"></div>`
    document.getElementById('container').innerHTML += `<div id="p1" >P1</div>`;
    document.getElementById('container').innerHTML += `<div id="p2">P2</div>`;
    document.getElementById('completion_queue').innerHTML += `<div id="for1"></div>`;
    document.getElementById('counter3').innerHTML += `<div id="q">COMPLETION QUEUE</div>`;
    document.getElementById('statements').innerHTML += `<div id="stat1"></div>`;
    document.getElementById('statements').innerHTML += `<div id="stat2"></div>`;
    document.getElementById('statistic').innerHTML += `<div id="live_statements">CURRENT EXECUTION STATUS</div>`;
    document.getElementById('stat1').innerHTML += `<div id="statement1"></div>`;
    document.getElementById('stat1').innerHTML += `<div id="statement7"></div>`;
    document.getElementById('stat1').innerHTML += `<div id="statement2"> </div>`;
    document.getElementById('stat1').innerHTML += `<div id="statement3"></div>`;
    document.getElementById('stat1').innerHTML += `<div id="statement4"></div>`;
    document.getElementById('stat1').innerHTML += `<div id="statement5"> </div>`;
    document.getElementById('stat1').innerHTML += `<div id="statement6"></div>`;
    if (document.getElementById('mode').value == 'non pre-emptive') {
        if (document.getElementById('priority').value == 'process-1') {
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1entry1 4s ease forwards`;
               
            }, 2000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1entry2 3s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process1</pre>";
                document.getElementById('statement7').innerHTML = "<pre>Process in Wait-mode     : ---</pre>";
                document.getElementById('statement2').innerHTML = "<pre>variable 'process' value : 0</pre>";
                document.getElementById('statement3').innerHTML = "<pre>variable 'other' value   : 1</pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 0 </pre>";
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : False</pre>";
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";

            }, 6000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1entry3 3s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process1</pre>";
                document.getElementById('statement2').innerHTML = "<pre>variable 'process' value : 0</pre>";
                document.getElementById('statement3').innerHTML = "<pre>variable 'other' value   : 1</pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 0 </pre>";
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : True</pre>";
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";
                


            }, 9000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1cs1 4s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process1</pre>";
                document.getElementById('statement2').innerHTML = "<pre>variable 'process' value : 0</pre>";
                document.getElementById('statement3').innerHTML = "<pre>variable 'other' value   : 1 </pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 0 </pre>";
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : True</pre>";
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";

            }, 12000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1cs2 3s ease forwards`;

            }, 16000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1cs3 3s ease forwards`;

            }, 19000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1exit1 4s ease forwards`;

            }, 22000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1exit3 3s ease forwards`;
               
            }, 26000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1inq1st 3s ease forwards`;
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : False</pre>";

            }, 29000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2entry1 4s ease forwards`;
               

            }, 32000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2entry2 3s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process2</pre>";
                document.getElementById('statement2').innerHTML = "<pre>variable 'process' value : 1</pre>";
                document.getElementById('statement3').innerHTML = "<pre>variable 'other' value   : 0 </pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 0 </pre>";
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : False</pre>";
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";
               

            }, 36000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2entry3 3s ease forwards`;
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : True</pre>";

            }, 39000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2cs1 4s ease forwards`;
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 1 </pre>";
            }, 42000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2cs2 3s ease forwards`;

            }, 46000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2cs3 3s ease forwards`;

            }, 49000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2exit1 4s ease forwards`;

            }, 52000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2exit3 3s ease forwards`;
               

            }, 56000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2inq2nd 3s ease forwards`;
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";
                setTimeout(() => {
                    document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : ---</pre>";
                }, 2000);
                
            }, 59000);
        }
        else if (document.getElementById('priority').value == 'process-2') {
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2entry1 4s ease forwards`;
               
            }, 2000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2entry2 3s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process2</pre>";
                document.getElementById('statement7').innerHTML = "<pre>Process in Wait-mode     : ---</pre>";
                document.getElementById('statement2').innerHTML = "<pre>variable 'process' value : 1</pre>";
                document.getElementById('statement3').innerHTML = "<pre>variable 'other' value   : 0 </pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 0 </pre>";
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : False</pre>";
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";
                
            }, 6000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2entry3 3s ease forwards`;
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : True</pre>";
               
            }, 9000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2cs1 4s ease forwards`;
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 1 </pre>";
            }, 12000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2cs2 3s ease forwards`;
            }, 16000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2cs3 3s ease forwards`;
            }, 19000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2exit1 4s ease forwards`;
            }, 22000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2exit3 3s ease forwards`;
               
            }, 26000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2inq1st 3s ease forwards`;
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";
            }, 29000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1entry1 4s ease forwards`;
               
            }, 32000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1entry2 3s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process1</pre>";
                document.getElementById('statement7').innerHTML = "<pre>Process in Wait-mode     : ---</pre>";
                document.getElementById('statement2').innerHTML = "<pre>variable 'process' value : 0</pre>";
                document.getElementById('statement3').innerHTML = "<pre>variable 'other' value   : 1</pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 1 </pre>";
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : False</pre>";
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";
               
            }, 36000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1entry3 3s ease forwards`;
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : True</pre>";
               
            }, 39000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1cs1 4s ease forwards`;
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 0 </pre>";
            }, 42000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1cs2 3s ease forwards`;
            }, 46000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1cs3 3s ease forwards`;
            }, 49000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1exit1 4s ease forwards`;
            }, 52000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1exit3 3s ease forwards`;
               

            }, 56000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1inq2nd 3s ease forwards`;
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : False</pre>";
                setTimeout(() => {
                    document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : ---</pre>";
                }, 2000);
            }, 59000);
            
        }
    }
    else if (document.getElementById('mode').value == 'pre-emptive') {
        if (document.getElementById('priority').value == 'process-1') {
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1entry1p 4s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process1</pre>";
                document.getElementById('statement2').innerHTML = "<pre>variable 'process' value : 0</pre>";
                document.getElementById('statement7').innerHTML = "<pre>Process in Wait-mode     : ---</pre>";
                document.getElementById('statement3').innerHTML = "<pre>variable 'other' value   : 0</pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 0 </pre>";
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : False</pre>";
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";
               
            }, 2000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1entry2p 3s ease forwards`;
                
                document.getElementById('statement3').innerHTML = "<pre>variable 'other' value   : 1</pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 0 </pre>";
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : False</pre>";
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";
                
            }, 6000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2entry1p 4s ease forwards`;
                
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : True</pre>";
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process2</pre>";
                document.getElementById('statement2').innerHTML = "<pre>variable 'process' value : 1</pre>";
               
            }, 9000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2entry2p 3s ease forwards`;
                document.getElementById('statement3').innerHTML = "<pre>variable 'other' value   : 0</pre>";
               
            }, 13000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2entry3p 3s ease forwards`;
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : True</pre>";
                
            }, 16000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1entry3p 3s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process1</pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 1 </pre>";
                
            }, 19000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2cs1p 4s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process2</pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 0 </pre>";
            }, 22000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2cs2p 3s ease forwards`;
            }, 26000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2cs3p 3s ease forwards`;
            }, 29000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1waitp 3s ease forwards`;
                document.getElementById('statement7').innerHTML = "<pre>Process in Wait-mode     : process1</pre>";
                p1.style.backgroundColor= "black";
                p1.style.color="white";
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process1</pre>";
            }, 32000);
            setTimeout(() => {
                document.getElementById('statement7').innerHTML = "<pre>Process in Wait-mode     : ---</pre>";
                document.getElementById("p2").style.animation = `p2exit1p 4s ease forwards`;
                p1.style.backgroundColor= "white";
                p1.style.color="black";
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process2</pre>";
            }, 35000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2exit3p 3s ease forwards`;
               

            }, 39000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2inqp1st 3s ease forwards`;
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";
            }, 42000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1cs1p 4s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process1</pre>";
            }, 45000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1cs2p 3s ease forwards`;
            }, 49000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1cs3p 3s ease forwards`;
            }, 52000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1exit1p 3s ease forwards`;
            }, 55000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1exit3p 3s ease forwards`;
            }, 58000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1inqp2nd 3s ease forwards`;
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : False</pre>";
                setTimeout(() => {
                    document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : ---</pre>";
                }, 2000);
            }, 61000);
        }
        else if (document.getElementById('priority').value == 'process-2') {
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2entry1p 4s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process2</pre>";
                document.getElementById('statement2').innerHTML = "<pre>variable 'process' value : 1</pre>";
                document.getElementById('statement7').innerHTML = "<pre>Process in Wait-mode     : ---</pre>";
                document.getElementById('statement3').innerHTML = "<pre>variable 'other' value   : 0</pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 0 </pre>";
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : False</pre>";
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";
               
                
            }, 2000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2entry2p 3s ease forwards`;
                document.getElementById('statement3').innerHTML = "<pre>variable 'other' value   : 0</pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 0 </pre>";
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : False</pre>";
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";
                
            }, 6000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1entry1p 4s ease forwards`;
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : True</pre>";
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process1</pre>";
                document.getElementById('statement2').innerHTML = "<pre>variable 'process' value : 0</pre>";
            }, 9000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1entry2p 3s ease forwards`;
               
                
                document.getElementById('statement3').innerHTML = "<pre>variable 'other' value   : 1</pre>";
                
            }, 13000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1entry3p 3s ease forwards`;
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : True</pre>";
                
            }, 16000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2entry3p 3s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process2</pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 0 </pre>";
               
            }, 19000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1cs1p 4s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process1</pre>";
                document.getElementById('statement4').innerHTML = "<pre>variable 'turn' value    : 1 </pre>";
            }, 22000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1cs2p 3s ease forwards`;
            }, 26000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1cs3p 3s ease forwards`;
            }, 29000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2waitp 3s ease forwards`;
                document.getElementById('statement7').innerHTML = "<pre>Process in Wait-mode     : process2</pre>";
                p2.style.backgroundColor= "black";
                p2.style.color="white";
            }, 32000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1exit1p 4s ease forwards`;
                document.getElementById('statement7').innerHTML = "<pre>Process in Wait-mode     : ---</pre>";
                p2.style.backgroundColor= "white";
                p2.style.color="black";
            }, 35000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1exit3p 3s ease forwards`;

            }, 39000);
            setTimeout(() => {
                document.getElementById("p1").style.animation = `p1inqp1st 3s ease forwards`;
                document.getElementById('statement5').innerHTML = "<pre>Interest of Process1     : False</pre>";
            }, 42000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2cs1p 4s ease forwards`;
                document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : process2</pre>";
            }, 45000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2cs2p 3s ease forwards`;
            }, 49000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2cs3p 3s ease forwards`;
            }, 52000);

            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2exit1p 3s ease forwards`;
            }, 55000);


            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2exit3p 3s ease forwards`;
                

            }, 58000);
            setTimeout(() => {
                document.getElementById("p2").style.animation = `p2inqp2nd 3s ease forwards`;
                document.getElementById('statement6').innerHTML = "<pre>Interest of Process2     : False</pre>";
                setTimeout(() => {
                    document.getElementById('statement1').innerHTML = "<pre>Process in Execution     : ---</pre>";
                }, 2000);
            }, 61000);
        }
    }
}


// async function Entry_Section()
// {
//     setTimeout(() => {
//         document.getElementById("p1").style.animation = `p1entry1 3s ease forwards`;
//     }, 5000);
//     setTimeout(() => {
//         document.getElementById("p1").style.animation = `p1entry2 3s ease forwards`;
//     }, 5000);
//     setTimeout(() => {
//         document.getElementById("p1").style.animation = `p1entry3 3s ease forwards`;
//     }, 5000);
// other = 1-process;
// interested[process]=TRUE;
// turn=process;
// while(interested[other]==TRUE && TURN==process)
// {
//   await sleep(2000);
// }
// }