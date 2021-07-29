function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function createPrecedance() {
    let show = document.getElementById("show")
    var table = document.getElementById("myTable");
    window.p = document.getElementById("number").value;
    var box = document.getElementById("box");

    var selecthtml = "";
    var j;
    for (var i = 1; i <= p; i++) {

        show.style.display = "block";
        box.style.height = "auto";
        await sleep(500);

        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = `P${i}`;
        cell2.innerHTML = `<input type="number" min="1" max="${p}" id="P${i}" />`;
    }
}


function ani_items() {

    let stat = document.getElementById('live-stat');

    if (stat.style.display == 'none') {
        stat.style.display = 'block';
    } else {
        stat.style.display = 'none';
    }

    stat.innerHTML += '<div id="executor"></div>';
    stat.innerHTML += '<div id="executing"></div>';
    stat.innerHTML += '<div id="action"> </div>';
    stat.innerHTML += '<div id="waiting-queue"> </div>';
    stat.innerHTML += '<div id="deadlock"> </div>';





    var queue_container = document.getElementById('queue-container');
    var item_container = document.getElementById('item-container');
    var code_tank = document.getElementById('code_tank');
    window.p = document.getElementById("number").value;
    var semaphore = document.getElementById('semaphore');
    var values = document.getElementById('values');
    var block_container = document.getElementById('block-container');
    for (var i = 1; i <= p; i++) {
        queue_container.innerHTML += `<div id="index${i}"></div>`




        item_container.innerHTML += `<div id="p${i}">P${i}</div>`
    }

    // var x = document.getElementById("sno").selectedIndex;
    // console.log(x);
    // var get = document.getElementsByName("sno")[x].value;
    // console.log(document.getElementsByName("sno")[x].value);
    // console.log(get);
    // semaphore.innerHTML = `<div id="tv">${get}</div>`
    values.innerHTML += `<div class="show_values" id="svalue">semaphore value</div>`
    block_container.innerHTML += '<div class="sblocks" id="ps"><h2>P(s)</h2></div>'
    block_container.innerHTML += '<div class="sblocks" id="cs"><h2>CS</h2></div>'
    block_container.innerHTML += '<div class="sblocks" id="vs"><h2>V(s)</h2></div>'
    code_tank.innerHTML += `<div class="pcode" id="p1code"><div class="pcodehead">P1</div>    
    <div class="codecontent">
            <span>While(true)</span><br>
            <span>DOWN(semaphore s)</span><br>
            <span>{CS}</span><br>
            <span>UP(semaphore s)</span><br>
        </div></div>`
    code_tank.innerHTML += `<div class="pcode" id="p2code"><div class="pcodehead">P2</div>
        <div class="codecontent">
            <span>While(true)</span><br>
            <span>UP(semaphore s)</span><br>
            <span>{CS}</span><br>
            <span>DOWN(semaphore s)</span><br>
        </div></div>`
        values.innerHTML += `<div class="show_values" id="qvalue">waiting queue</div>`
        // code_tank.innerHTML += `<div class="pcode" id="p3code"><div class="pcodehead">P3</div>
        // <div class="codecontent">
        //     <span>While(true)</span><br>
        //     <span>UP(semaphore s)</span><br>
        //     <span>{CS}</span><br>
        //     <span>UP(semaphore s)</span><br>
        // </div></div>`
        // code_tank.innerHTML += `<div class="pcode" id="p4code"><div class="pcodehead">P4</div>
        // <div class="codecontent">
        //     <span>While(true)</span><br>
        //     <span>DOWN(semaphore s)</span><br>
        //     <span>{CS}</span><br>
        //     <span>DOWN(semaphore s)</span><br>
        // </div></div>`

}



function execution() {
    let p1 = document.getElementById('p1');
    console.log(p1);
    // window.x = document.getElementById('sno').value;
     window.s = document.getElementById('sno').value;

    let executor = document.getElementById('executor');
    let executing = document.getElementById('executing');
    let action = document.getElementById('action');
    let waitingqueue = document.getElementById('waiting-queue');
    let deadlock = document.getElementById('deadlock');
    // var x = document.getElementById("sno").selectedIndex;
    // var l = document.getElementsByName("sno")[x].value;
    var l=window.s;
    semaphore.innerHTML = `<div id="tv">${l}</div>`

    // Code for NON PREEMPTIVE

    if (document.getElementById('mode').value == "non pre-emptive") {
        

        // Code for SEMAPHORE < 0 AND PRIORITY 1

        if (document.getElementById('number').value == 2 && document.getElementById('P1').value == 1 && s < 0) {

            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                l = l - 1;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                deadlock.innerHTML = `<h3>Deadlock: possible</h3>`;

                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 1000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inq1 3s ease forwards`;

                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if() </h3>`;

            }, 4000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                l = l + 1;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 7000);
            setTimeout(() => {
               
                document.getElementById('p2').style.animation = `p2inq2 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if()</h3>`;
               
            }, 10000);

            setInterval(() => {
                setTimeout(() => {
                    l = l - 1;
                    document.getElementById('p1').style.animation = `p1inq1back 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                    action.innerHTML = `<h3>action: entering down semaphore()</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1 ,P2</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 13000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1inq1 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if()</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`
                }, 16000);
                setTimeout(() => {
                    l = l + 1;
                    document.getElementById('p2').style.animation = `p2inq2back 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                    action.innerHTML = `<h3>action: entering down semaphore()</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 19000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2inq2 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: Up semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if()</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`
                }, 22000);

            }, 12000);

            setTimeout(() => {
                l=l-1;
                document.getElementById('p1').style.animation = `p1inq1back 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                action.innerHTML = `<h3>action: entering downsemaphore()</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 13000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inq1 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if()</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`
            }, 16000);
            setTimeout(() => {
                l=l+1;
                document.getElementById('p2').style.animation = `p2inq2back 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                action.innerHTML = `<h3>action: entering down semaphore()</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 19000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inq2 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: Up semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if()</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`
            }, 22000);
        }

        else if (document.getElementById('number').value == 2 && document.getElementById('P1').value == 1 && s == 0) {
            l=l-1;
            l=l+1;
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                l = l - 1;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                deadlock.innerHTML = `<h3>Deadlock: possible</h3>`;

                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 1000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inq1 3s ease forwards`;

                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if() </h3>`;

            }, 4000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                l = l + 1;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 7000);
            setTimeout(() => {
               
                document.getElementById('p2').style.animation = `p2inq2 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if()</h3>`;
               
            }, 10000);

            setInterval(() => {
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1inq1back 3s ease forwards`;
                    l=l-1;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 13000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1inq1 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if()</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`
                }, 16000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2inq2back 3s ease forwards`;
                    l=l+1;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 19000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2inq2 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: Up semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if()</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`
                }, 22000);

            }, 12000);

            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inq1back 3s ease forwards`;
                l=l-1;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 13000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inq1 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if()</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`
            }, 16000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inq2back 3s ease forwards`;
                l=l+1;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 19000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inq2 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: Up semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if()</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`
            }, 22000);
        }

        else if (document.getElementById('number').value == 2 && document.getElementById('P1').value == 2 && s == 0) {
            l=l-1;
            l=l+1;
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                l = l + 1;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                deadlock.innerHTML = `<h3>Deadlock: not possible</h3>`;

                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 1000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2incs 3s ease forwards`;

                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if() </h3>`;

            }, 4000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inps 3s ease forwards`;
                l = l - 1;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 7000);
            setTimeout(() => {
               
                document.getElementById('p2').style.animation = `p2back 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if()</h3>`;
               
            }, 10000);

            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                l = l - 1;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 13000);

                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1inq1 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if()</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`
                }, 16000);
                

                    setInterval(() => {
                        setTimeout(() => {
                            document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                            l = l + 1;
                            executor.innerHTML = `<h3>Executor: Process2</h3>`;
                            executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                            action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                            waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                            deadlock.innerHTML = `<h3>Deadlock: not possible</h3>`;
            
                            setTimeout(() => {
                                semaphore.innerHTML = `<div id="tv">${l}</div>`
                            }, 2000);
                        }, 1000);
                        setTimeout(() => {
                            document.getElementById('p2').style.animation = `p2incs 3s ease forwards`;
            
                            executor.innerHTML = `<h3>Executor: Process2</h3>`;
                            executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                            action.innerHTML = `<h3>action: checked if() </h3>`;
            
                        }, 4000);
                        setTimeout(() => {
                            document.getElementById('p2').style.animation = `p2inps 3s ease forwards`;
                            l = l - 1;
                            executor.innerHTML = `<h3>Executor: Process2</h3>`;
                            executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                            action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                            waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                            setTimeout(() => {
                                semaphore.innerHTML = `<div id="tv">${l}</div>`
                            }, 2000);
                        }, 7000);
                        setTimeout(() => {
                           
                            document.getElementById('p2').style.animation = `p2back 3s ease forwards`;
                            executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                            action.innerHTML = `<h3>action: checked if()</h3>`;
                           
                        }, 10000);
                        setTimeout(() => {
                            document.getElementById('p1').style.animation = `p1inq1back 3s ease forwards`;
                            l=l-1;
                            executor.innerHTML = `<h3>Executor: Process1</h3>`;
                            executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                            action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                            waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                            setTimeout(() => {
                                semaphore.innerHTML = `<div id="tv">${l}</div>`
                            }, 2000);
                        }, 13000);
                        setTimeout(() => {
                            document.getElementById('p1').style.animation = `p1inq1 3s ease forwards`;
                            executor.innerHTML = `<h3>Executor: Process1</h3>`;
                            executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                            action.innerHTML = `<h3>action: checked if()</h3>`;
                            waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`
                        }, 16000);
                }, 19000);


        }


        // Code for SEMAPHORE < 0 AND PRIORITY 2
        else if (document.getElementById('number').value == 2 && document.getElementById('P1').value == 2 && s < 0) {
            l=l-1;
            l=l+1;
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                l = l + 1;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                deadlock.innerHTML = `<h3>Deadlock: possible</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 1000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inq1 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                deadlock.innerHTML = `<h3>Deadlock: possible</h3>`;
            }, 4000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                l = l - 1;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 7000);
            setTimeout(() => {
               
                document.getElementById('p1').style.animation = `p1inq2 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
               
            }, 10000);

            setInterval(() => {
                setTimeout(() => {
                    l=l+1;
                    document.getElementById('p2').style.animation = `p2inq1back 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                    action.innerHTML = `<h3>action: entering UP semaphore().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 13000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2inq1 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                }, 16000);
                setTimeout(() => {
                    l=l-1;
                    document.getElementById('p1').style.animation = `p1inq2back 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                    action.innerHTML = `<h3>action: entering down semaphore().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 19000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1inq2 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                }, 22000);
            }, 12000);

            setTimeout(() => {
                l=l+1;
                document.getElementById('p2').style.animation = `p2inq1back 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                action.innerHTML = `<h3>action: entering UP semaphore().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 13000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inq1 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
            }, 16000);
            setTimeout(() => {
                l=l-1;
                document.getElementById('p1').style.animation = `p1inq2back 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                action.innerHTML = `<h3>action: entering down semaphore().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 19000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inq2 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
            }, 22000);
        }




        // Code for SEMAPHORE > 0 AND PRIORITY 1
        else if (document.getElementById('number').value == 2 && document.getElementById('P1').value == 1 && s > 0) {
            l=l-1;
            l=l+1;
            deadlock.innerHTML = `<h3>Deadlock: not possible</h3>`;
            waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                l = l - 1;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
        
            }, 1000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1incs 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;

            }, 4000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1invs 3s ease forwards`;
                l = l + 1;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value().</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 7000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1back 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 10000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                l = l + 1;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 13000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2incs 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 16000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inps 3s ease forwards`;
                l = l - 1;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 19000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2back 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 22000);

            setInterval(() => {
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                    l = l - 1;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 1000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1incs 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;

                }, 4000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1invs 3s ease forwards`;
                    l = l + 1;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: increasing semaphore value().</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 7000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1back 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 10000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                    l = l + 1;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 13000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2incs 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 16000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2inps 3s ease forwards`;
                    l = l - 1;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 19000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2back 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 22000);

            }, 25000);

        }

        // Code for SEMAPHORE > 0 AND PRIORITY 2
        else if (document.getElementById('number').value == 2 && document.getElementById('P1').value == 2 && s > 0) {
            l=l-1;
            l=l+1;
            waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
            deadlock.innerHTML = `<h3>Deadlock: not possible</h3>`;
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                l = l + 1;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 1000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2incs 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 4000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inps 3s ease forwards`;
                l = l - 1;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 7000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2back 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 10000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                l = l - 1;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 13000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1incs 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action:  checked if().</h3>`;
            }, 16000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1invs 3s ease forwards`;
                l = l + 1;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 19000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1back 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 22000);

            setInterval(() => {
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                    l = l + 1;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 1000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2incs 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 4000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2inps 3s ease forwards`;
                    l = l - 1;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 7000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2back 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 10000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                    l = l - 1;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 13000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1incs 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action:  checked if().</h3>`;
                }, 16000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1invs 3s ease forwards`;
                    l = l + 1;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 19000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1back 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 22000);
            }, 25000);
        }
    } else if (document.getElementById('mode').value == "pre-emptive") {

        // Code for SEMAPHORE > 0 AND PRIORITY 1

        if (document.getElementById('number').value == 2 && document.getElementById('P1').value == 1 && s >= 0) {
            l=l-1;
            l=l+1;
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                l = l - 1;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                deadlock.innerHTML = `<h3>Deadlock: not possible</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 1000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                l = l + 1;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 4000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1incs 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 7000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1invs 3s ease forwards`;
                l = l + 1;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 10000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1back 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action:checked if().</h3>`;
            }, 13000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2incs 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 16000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inps 3s ease forwards`;
                l = l - 1;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 19000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2back 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 22000);

            setInterval(() => {
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                    l = l - 1;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                    deadlock.innerHTML = `<h3>Deadlock: not possible</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 1000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                    l = l + 1;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 4000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1incs 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 7000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1invs 3s ease forwards`;
                    l = l + 1;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 10000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1back 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action:checked if().</h3>`;
                }, 13000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2incs 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 16000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2inps 3s ease forwards`;
                    l = l - 1;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 19000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2back 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 22000);
            }, 25000);

        } else if (document.getElementById('number').value == 2 && document.getElementById('P1').value == 2 && s > 0) {
            l=l-1;
            l=l+1;
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                l = l + 1;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                deadlock.innerHTML = `<h3>Deadlock: not possible</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 1000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                l = l - 1;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                deadlock.innerHTML = `<h3>Deadlock: not possible</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 4000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2incs 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 7000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inps 3s ease forwards`;
                l = l - 1;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 10000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2back 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 13000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1incs 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 16000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1invs 3s ease forwards`;
                l = l + 1;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 19000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1back 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 22000);

            setInterval(() => {
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                    l = l + 1;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                    deadlock.innerHTML = `<h3>Deadlock: not possible</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 1000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                    l = l - 1;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                    deadlock.innerHTML = `<h3>Deadlock: not possible</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 4000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2incs 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 7000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2inps 3s ease forwards`;
                    l = l - 1;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 10000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2back 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 13000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1incs 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 16000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1invs 3s ease forwards`;
                    l = l + 1;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 19000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1back 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 22000);
            }, 25000);

        } else if (document.getElementById('number').value == 2 && document.getElementById('P1').value == 2 && s == 0) {
            l=l-1;
            l=l+1;

            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                l = l + 1;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                deadlock.innerHTML = `<h3>Deadlock: not possible</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 1000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                l = l - 1;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 4000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inq1 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 7000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1incs 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
            }, 10000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1invs 3s ease forwards`;
                l = l + 1;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 13000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1back 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
            }, 16000);
            setTimeout(() => {
                l=l+1;
                document.getElementById('p2').style.animation = `p2inq1back 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                action.innerHTML = `<h3>action: entering UP semaphore().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 19000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2incs 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
            }, 22000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inps 3s ease forwards`;
                l = l - 1;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 25000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2back 3s ease forwards`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 28000);

            setInterval(() => {

                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                    l = l + 1;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                    deadlock.innerHTML = `<h3>Deadlock: not possible</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 1000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                    l = l - 1;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 4000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2inq1 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 7000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1incs 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                }, 10000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1invs 3s ease forwards`;
                    l = l + 1;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 13000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1back 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                }, 16000);
                setTimeout(() => {
                    l=l+1;
                    document.getElementById('p2').style.animation = `p2inq1back 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                    action.innerHTML = `<h3>action: entering UP semaphore().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 19000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2incs 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                }, 22000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2inps 3s ease forwards`;
                    l = l - 1;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 25000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2back 3s ease forwards`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 28000);
            }, 31000);

        } else if (document.getElementById('number').value == 2 && document.getElementById('P1').value == 1 && s < 0) {
            l=l-1;
            l=l+1;

            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                l = l - 1;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                deadlock.innerHTML = `<h3>Deadlock: possible</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 1000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                l = l + 1;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 4000);


            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inq1 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 7000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inq2 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
            }, 10000);
            setTimeout(() => {
                l=l-1;
                document.getElementById('p1').style.animation = `p1inq1back 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                action.innerHTML = `<h3>action: returning down semaphore().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 13000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inq1 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
            }, 16000);
            setTimeout(() => {
                l=l+1;
                document.getElementById('p2').style.animation = `p2inq2back 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                action.innerHTML = `<h3>action:returning UP semaphore().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 19000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inq2 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                setTimeout(() => {
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                }, 3000);
            }, 22000);


            setInterval(() => {

                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1inq1 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                }, 7000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2inq2 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                }, 10000);
                setTimeout(() => {
                    l=l-1;
                    document.getElementById('p1').style.animation = `p1inq1back 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                    action.innerHTML = `<h3>action: returning down semaphore().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 13000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1inq1 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                }, 16000);
                setTimeout(() => {
                    l=l+1;
                    document.getElementById('p2').style.animation = `p2inq2back 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                    action.innerHTML = `<h3>action:returning UP semaphore().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 19000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2inq2 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                    setTimeout(() => {
                        waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                    }, 3000);
                }, 22000);
            }, 12000);

        } else if (document.getElementById('number').value == 2 && document.getElementById('P1').value == 2 && s < 0) {
            l=l-1;
            l=l+1;

            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2invs 3s ease forwards`;
                l = l + 1;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: increasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                deadlock.innerHTML = `<h3>Deadlock: possible</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 1000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inps 3s ease forwards`;
                l = l + 1;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: decreasing semaphore value.</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: ---</h3>`;
                deadlock.innerHTML = `<h3>Deadlock: possible</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 4000);


            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inq1 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
            }, 7000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inq2 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
            }, 10000);
            setTimeout(() => {
                l=l+1;
                document.getElementById('p2').style.animation = `p2inq1back 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                action.innerHTML = `<h3>action: returning UP semaphore().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 13000);
            setTimeout(() => {
                document.getElementById('p2').style.animation = `p2inq1 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process2</h3>`;
                executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
            }, 16000);
            setTimeout(() => {
                l=l-1;
                document.getElementById('p1').style.animation = `p1inq2back 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                action.innerHTML = `<h3>action: returning down semaphore().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                setTimeout(() => {
                    semaphore.innerHTML = `<div id="tv">${l}</div>`
                }, 2000);
            }, 19000);
            setTimeout(() => {
                document.getElementById('p1').style.animation = `p1inq2 3s ease forwards`;
                executor.innerHTML = `<h3>Executor: Process1</h3>`;
                executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                action.innerHTML = `<h3>action: checked if().</h3>`;
                waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                setTimeout(() => {
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                }, 3000);
            }, 22000);


            setInterval(() => {

                setTimeout(() => {
                    l=l+1;
                    document.getElementById('p2').style.animation = `p2inq1back 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                    action.innerHTML = `<h3>action: returning UP semaphore().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 13000);
                setTimeout(() => {
                    document.getElementById('p2').style.animation = `p2inq1 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process2</h3>`;
                    executing.innerHTML = `<h3>Executing: UP semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                }, 16000);
                setTimeout(() => {
                    l=l-1;
                    document.getElementById('p1').style.animation = `p1inq2back 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: wake up()</h3>`;
                    action.innerHTML = `<h3>action: returning down semaphore().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                    setTimeout(() => {
                        semaphore.innerHTML = `<div id="tv">${l}</div>`
                    }, 2000);
                }, 19000);
                setTimeout(() => {
                    document.getElementById('p1').style.animation = `p1inq2 3s ease forwards`;
                    executor.innerHTML = `<h3>Executor: Process1</h3>`;
                    executing.innerHTML = `<h3>Executing: down semaphore()</h3>`;
                    action.innerHTML = `<h3>action: checked if().</h3>`;
                    waitingqueue.innerHTML = `<h3>Processes in waiting queue: P2</h3>`;
                    setTimeout(() => {
                        waitingqueue.innerHTML = `<h3>Processes in waiting queue: P1</h3>`;
                    }, 3000);
                }, 22000);
            }, 12000);

        }

    }
}