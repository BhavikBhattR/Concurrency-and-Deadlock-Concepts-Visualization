
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var N = 8; //maximum slots in buffer
var count = 0;//items in the buffer
var position = ['1', '1', '1', '1', '1', '1', '1', '1'];
var item = 0; //global variable

function create_ani() {
    var icon = document.getElementById('box');
    var boxes = document.getElementById('generator');
    var buffer = document.getElementById("S1").value;
    var arrow = document.getElementById('arrow-container')
    var counter = document.getElementById('counter')


    boxes.innerHTML += `<div id="producer">Producer</div>`
    boxes.innerHTML += `<div id="consumer">Consumer</div>`
    counter.innerHTML += `<div class="counter" id="tv">0</div>`
    

    var prod = document.getElementById('producer');
    console.log(prod);
    for (var i = 1; i <= buffer; i++) {
        icon.innerHTML += `<div id="B${i}"></div>`
        prod.innerHTML += `<div id="C${i}"></div>`
    }

    arrow.innerHTML += `<i class='fas fa-arrow-up' id="A${1}"style='font-size:24px'></i>`
}

function visible() {
    
    let visible = document.getElementById('Animation');
     
    if (visible.style.display == 'none') {
        visible.style.display = 'block';
    }
    else {
        visible.style.display = 'none';
    }

}




async function insert_item() {
    console.log("insert_item");
    document.getElementById('A1');

    let TV = document.getElementById('tv');
    setTimeout(() => {
        TV.innerHTML = "1";
    }, 2000);


    if (position[0] == '1') {

        position[0] = '0';
        if (S1.value == 1) {

            if (window.item == 1) {

                document.getElementById("C1").style.color = "white";
                document.getElementById("C1").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C1").style.animation = `C1in_n 3s ease forwards`;
                console.log(document.getElementById("C1"));
                console.log('c1_in');
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
        }

        else if (S1.value == 2) {

            if (item == 1) {
                document.getElementById("C1").style.color = "white";
                document.getElementById("C1").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C1").style.animation = `C1in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }

            else if (item == 2) {
                await sleep(7000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C2").style.color = "white";
                document.getElementById("C2").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C2").style.animation = `C2in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
        }

        else if (S1.value == 3) {
            if (item == 1) {
                document.getElementById("C1").style.color = "white";
                document.getElementById("C1").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C1").style.animation = `C1in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 2) {
                await sleep(7000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C2").style.color = "white";
                document.getElementById("C2").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C2").style.animation = `C2in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 3) {
                await sleep(14000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C3").style.color = "white";
                document.getElementById("C3").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C3").style.animation = `C3in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);

            }
        }
        else if (S1.value == 4) {
            if (item == 1) {
                document.getElementById("C1").style.color = "white";
                document.getElementById("C1").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C1").style.animation = `C1in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 2) {
                await sleep(7000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C2").style.color = "white";
                document.getElementById("C2").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C2").style.animation = `C2in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 3) {
                await sleep(14000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C3").style.color = "white";
                document.getElementById("C3").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C3").style.animation = `C3in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 4) {
                await sleep(21000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C4").style.color = "white";
                document.getElementById("C4").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C4").style.animation = `C4in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
        }

        else if (S1.value == 5) {
            if (item == 1) {
                document.getElementById("C1").style.color = "white";
                document.getElementById("C1").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C1").style.animation = `C1in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 2) {
                await sleep(7000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C2").style.color = "white";
                document.getElementById("C2").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C2").style.animation = `C2in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 3) {
                await sleep(14000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C3").style.color = "white";
                document.getElementById("C3").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C3").style.animation = `C3in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 4) {
                await sleep(21000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C4").style.color = "white";
                document.getElementById("C4").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C4").style.animation = `C4in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);

            }
            else if (item == 5) {
                await sleep(28000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C5").style.color = "white";
                document.getElementById("C5").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C5").style.animation = `C5in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
        }

        else if (S1.value == 6) {
            if (item == 1) {
                document.getElementById("C1").style.color = "white";
                document.getElementById("C1").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C1").style.animation = `C1in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 2) {
                await sleep(7000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C2").style.color = "white";
                document.getElementById("C2").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C2").style.animation = `C2in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 3) {
                await sleep(14000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C3").style.color = "white";
                document.getElementById("C3").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C3").style.animation = `C3in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 4) {
                await sleep(21000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C4").style.color = "white";
                document.getElementById("C4").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C4").style.animation = `C4in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 5) {
                await sleep(28000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C5").style.color = "white";
                document.getElementById("C5").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C5").style.animation = `C5in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 6) {
                await sleep(35000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C6").style.color = "white";
                document.getElementById("C6").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C6").style.animation = `C6in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
        }

        else if (S1.value == 7) {
            if (item == 1) {
                document.getElementById("C1").style.color = "white";
                document.getElementById("C1").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C1").style.animation = `C1in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 2) {
                await sleep(7000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C2").style.color = "white";
                document.getElementById("C2").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C2").style.animation = `C2in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 3) {
                await sleep(14000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C3").style.color = "white";
                document.getElementById("C3").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C3").style.animation = `C3in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 4) {
                await sleep(21000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C4").style.color = "white";
                document.getElementById("C4").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C4").style.animation = `C4in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 5) {
                await sleep(28000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C5").style.color = "white";
                document.getElementById("C5").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C5").style.animation = `C5in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 6) {
                await sleep(35000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C6").style.color = "white";
                document.getElementById("C6").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C6").style.animation = `C6in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 7) {
                await sleep(42000);

                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C7").style.color = "white";
                document.getElementById("C7").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C7").style.animation = `C7in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);

            }
        }

        else if (S1.value == 8) {
            if (item == 1) {
                document.getElementById("C1").style.color = "white";
                document.getElementById("C1").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C1").style.animation = `C1in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 2) {
                await sleep(7000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C2").style.color = "white";
                document.getElementById("C2").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C2").style.animation = `C2in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 3) {
                await sleep(14000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C3").style.color = "white";
                document.getElementById("C3").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C3").style.animation = `C3in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 4) {
                await sleep(21000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C4").style.color = "white";
                document.getElementById("C4").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C4").style.animation = `C4in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 5) {
                await sleep(28000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C5").style.color = "white";
                document.getElementById("C5").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C5").style.animation = `C5in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);
            }
            else if (item == 6) {
                await sleep(35000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C6").style.color = "white";
                document.getElementById("C6").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C6").style.animation = `C6in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);

            }
            else if (item == 7) {
                await sleep(42000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C7").style.color = "white";
                document.getElementById("C7").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C7").style.animation = `C7in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);

            }
            else if (item == 8) {
                await sleep(49000);
                let TV = document.getElementById('tv');
                setTimeout(() => {
                    TV.innerHTML = "1";
                }, 2000);
                document.getElementById("C8").style.color = "white";
                document.getElementById("C8").style.backgroundColor = "#F4B400";
                document.getElementById('executor ').innerHTML = "Executor : Producer";
                document.getElementById('action').innerHTML = "Action : writing";
                document.getElementById("C8").style.animation = `C8in_n 3s ease forwards`;
                setTimeout(() => {
                    A1.style.color = "white";
                }, 2000);

            }
        }
    }
}



async function remove_item() {



    console.log('remove_item')
    // var removing_item = document.getElementById(`C${item}`);

    if (position[0] = '0') {
        position[0] = '1';
        if (item == 1) {
            await sleep(4000);
            var tv1 = document.getElementById('tv');
            tv1.innerHTML = "0";

            document.getElementById("C1").style.color = "white";
            document.getElementById("C1").style.backgroundColor = "#F4B400";
            document.getElementById('executor ').innerHTML = "Executor : Consumer";
            document.getElementById('action').innerHTML = "Action : Reading";
            document.getElementById("C1").style.animation = `C1out_n 3s ease forwards`;
            setTimeout(() => {
                document.getElementById("C1").style.backgroundColor = "black";
            }, 2500);
            setTimeout(() => {
                A1.style.color = "black";
            }, 300);
        }

        else if (item == 2) {
            await sleep(11000);
            var tv1 = document.getElementById('tv');
            tv1.innerHTML = "0";
            document.getElementById("C2").style.color = "white";
            document.getElementById("C2").style.backgroundColor = "#F4B400";
            document.getElementById("C2").style.animation = `C2out_n 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Consumer";
            document.getElementById('action').innerHTML = "Action : Reading";
            setTimeout(() => {
                document.getElementById("C2").style.backgroundColor = "black";
            }, 2500);
            setTimeout(() => {
                A1.style.color = "black";
            }, 300);
        }

        else if (item == 3) {
            await sleep(18000);
            var tv1 = document.getElementById('tv');
            tv1.innerHTML = "0";
            document.getElementById("C3").style.color = "white";
            document.getElementById("C3").style.backgroundColor = "#F4B400";
            document.getElementById("C3").style.animation = `C3out_n 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Consumer";
            document.getElementById('action').innerHTML = "Action : Reading";
            setTimeout(() => {
                document.getElementById("C3").style.backgroundColor = "black";
            }, 2500);
            setTimeout(() => {
                A1.style.color = "black";
            }, 300);
        }

        else if (item == 4) {
            await sleep(25000);
            var tv1 = document.getElementById('tv');
            tv1.innerHTML = "0";
            document.getElementById("C4").style.color = "white";
            document.getElementById("C4").style.backgroundColor = "#F4B400";
            document.getElementById("C4").style.animation = `C4out_n 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Consumer";
            document.getElementById('action').innerHTML = "Action : Reading";
            setTimeout(() => {
                document.getElementById("C4").style.backgroundColor = "black";
            }, 2500);
            setTimeout(() => {
                A1.style.color = "black";
            }, 300);
        }

        else if (item == 5) {
            await sleep(32000);
            var tv1 = document.getElementById('tv');
            tv1.innerHTML = "0";
            document.getElementById("C5").style.color = "white";
            document.getElementById("C5").style.backgroundColor = "#F4B400";
            document.getElementById('executor ').innerHTML = "Executor : Consumer";
            document.getElementById('action').innerHTML = "Action : Reading";
            document.getElementById("C5").style.animation = `C5out_n 3s ease forwards`;
            setTimeout(() => {
                document.getElementById("C5").style.backgroundColor = "black";
            }, 2500);
            setTimeout(() => {
                A1.style.color = "black";
            }, 300);
        }

        else if (item == 6) {
            await sleep(39000);
            var tv1 = document.getElementById('tv');
            tv1.innerHTML = "0";
            document.getElementById("C6").style.color = "white";
            document.getElementById("C6").style.backgroundColor = "#F4B400";
            A1.style.color = "black";
            document.getElementById("C6").style.animation = `C6out_n 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Consumer";
            document.getElementById('action').innerHTML = "Action : Reading";
            setTimeout(() => {
                document.getElementById("C6").style.backgroundColor = "black";
            }, 2500);
            setTimeout(() => {
                A1.style.color = "black";
            }, 300);

        }

        else if (item == 7) {
            await sleep(46000);
            var tv1 = document.getElementById('tv');
            tv1.innerHTML = "0";
            document.getElementById("C7").style.color = "white";
            document.getElementById("C7").style.backgroundColor = "#F4B400";
            document.getElementById("C7").style.animation = `C7out_n 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Consumer";
            document.getElementById('action').innerHTML = "Action : Reading";
            setTimeout(() => {
                document.getElementById("C7").style.backgroundColor = "black";
            }, 2500);
            setTimeout(() => {
                A1.style.color = "black";
            }, 300);
        }

        else if (item == 8) {
            await sleep(53000);
            var tv1 = document.getElementById('tv');
            tv1.innerHTML = "0";
            document.getElementById("C8").style.color = "white";
            document.getElementById("C8").style.backgroundColor = "#F4B400";
            document.getElementById("C8").style.animation = `C8out_n 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Consumer";
            document.getElementById('action').innerHTML = "Action : Reading";
            setTimeout(() => {
                document.getElementById("C8").style.backgroundColor = "black";
            }, 2500);
            setTimeout(() => {
                A1.style.color = "black";
            }, 300);
        }
    }
}



async function producer() {
    console.log(document.getElementById('executor '));
    // document.getElementById('executor ').innerHTML = "Executor : Producer";
    // document.getElementById('action').innerHTML = "Action : writing";
    console.log("producer");
    while (window.item <= 8) {
        if (count == N) { //if the buffer is full then the producer will sleep
            await sleep();
        }
        window.item = window.item + 1;
        insert_item(); //the item is inserted into buffer
        count = count + 1;
        if (count == 1) { //The producer will wake up the
            //consumer if there is at least 1 item in the buffer

            consumer();

            console.log('producer_if')

        }

    }
}

async function consumer() {

    // document.getElementById('executor ').innerHTML = "Executor : Consumer";
    // document.getElementById('action').innerHTML = "Action : Reading";

    console.log("consumer");
    while (window.item <= 8) {

        if (count == 0) //The consumer will sleep if the buffer is empty.
            await sleep();
        count = count - 1;
        if (count == N - 1) //if there is at least one slot available in the buffer
            //then the consumer will wake up producer
            setTimeout(() => {
                producer();
            }, 4000);
        remove_item(); //the item is read by consumer.
        producer();
    }
}



// async function remove_item_p() {

//     console.log('remove_item_p')
//     // var removing_item = document.getElementById(`C${item}`);
//         console.log(item);
//         if (item == 8) {
//             console.log('arynout')
//             await sleep(4000);
//             var tv1 = document.getElementById('tv');
//             tv1.innerHTML = "0";

//             document.getElementById("C1").style.color = "white";
//             document.getElementById("C1").style.backgroundColor = "#F4B400";
//             document.getElementById("C1").style.animation = `C1out 3s ease forwards`;
//             setTimeout(() => {
//                 document.getElementById("C1").style.backgroundColor = "black";
//             }, 2500);
//             setTimeout(() => {
//                 A1.style.color = "black";
//             }, 300);
//         }

//         else if (item == 10) {
//             await sleep(11000);
//             var tv1 = document.getElementById('tv');
//             tv1.innerHTML = "0";
//             document.getElementById("C2").style.color = "white";
//             document.getElementById("C2").style.backgroundColor = "#F4B400";
//             document.getElementById("C2").style.animation = `C2out 3s ease forwards`;
//             setTimeout(() => {
//                 document.getElementById("C2").style.backgroundColor = "black";
//             }, 2500);
//             setTimeout(() => {
//                 A1.style.color = "black";
//             }, 300);
//         }

//         else if (item == 3) {
//             await sleep(18000);
//             var tv1 = document.getElementById('tv');
//             tv1.innerHTML = "0";
//             document.getElementById("C3").style.color = "white";
//             document.getElementById("C3").style.backgroundColor = "#F4B400";
//             document.getElementById("C3").style.animation = `C3out 3s ease forwards`;
//             setTimeout(() => {
//                 document.getElementById("C3").style.backgroundColor = "black";
//             }, 2500);
//             setTimeout(() => {
//                 A1.style.color = "black";
//             }, 300);
//         }

//         else if (item == 4) {
//             await sleep(25000);
//             var tv1 = document.getElementById('tv');
//             tv1.innerHTML = "0";
//             document.getElementById("C4").style.color = "white";
//             document.getElementById("C4").style.backgroundColor = "#F4B400";
//             document.getElementById("C4").style.animation = `C4out 3s ease forwards`;
//             setTimeout(() => {
//                 document.getElementById("C4").style.backgroundColor = "black";
//             }, 2500);
//             setTimeout(() => {
//                 A1.style.color = "black";
//             }, 300);
//         }

//         else if (item == 5) {
//             await sleep(32000);
//             var tv1 = document.getElementById('tv');
//             tv1.innerHTML = "0";
//             document.getElementById("C5").style.color = "white";
//             document.getElementById("C5").style.backgroundColor = "#F4B400";
//             document.getElementById("C5").style.animation = `C5out 3s ease forwards`;
//             setTimeout(() => {
//                 document.getElementById("C5").style.backgroundColor = "black";
//             }, 2500);
//             setTimeout(() => {
//                 A1.style.color = "black";
//             }, 300);
//         }

//         else if (item == 6) {
//             await sleep(39000);
//             var tv1 = document.getElementById('tv');
//             tv1.innerHTML = "0";
//             document.getElementById("C6").style.color = "white";
//             document.getElementById("C6").style.backgroundColor = "#F4B400";
//             A1.style.color = "black";
//             document.getElementById("C6").style.animation = `C6out 3s ease forwards`;
//             setTimeout(() => {
//                 document.getElementById("C6").style.backgroundColor = "black";
//             }, 2500);
//             setTimeout(() => {
//                 A1.style.color = "black";
//             }, 300);

//         }

//         else if (item == 7) {
//             await sleep(46000);
//             var tv1 = document.getElementById('tv');
//             tv1.innerHTML = "0";
//             document.getElementById("C7").style.color = "white";
//             document.getElementById("C7").style.backgroundColor = "#F4B400";
//             document.getElementById("C7").style.animation = `C7out 3s ease forwards`;
//             setTimeout(() => {
//                 document.getElementById("C7").style.backgroundColor = "black";
//             }, 2500);
//             setTimeout(() => {
//                 A1.style.color = "black";
//             }, 300);
//         }

//         else if (item == 8) {
//             await sleep(53000);
//             var tv1 = document.getElementById('tv');
//             tv1.innerHTML = "0";
//             document.getElementById("C8").style.color = "white";
//             document.getElementById("C8").style.backgroundColor = "#F4B400";
//             document.getElementById("C8").style.animation = `C8out 3s ease forwards`;
//             setTimeout(() => {
//                 document.getElementById("C8").style.backgroundColor = "black";
//             }, 2500);
//             setTimeout(() => {
//                 A1.style.color = "black";
//             }, 300);
//         }
//     }

// // async function insert_item_q() {
// //     console.log("insert_item_q");
// //     document.getElementById('A1');

// //     let TV = document.getElementById('tv');
//     setTimeout(() => {
//         TV.innerHTML = "1";
//     }, 2000);

//         if (S1.value == 1) {

//             if (window.item == 1) {

//                 document.getElementById("C1").style.color = "white";
//                 document.getElementById("C1").style.backgroundColor = "#F4B400";
//                 document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
//                 console.log(document.getElementById("C1"));
//                 console.log('c1_in');
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//         }

//         else if (S1.value == 2) {

//             if (item == 1) {
//                 document.getElementById("C1").style.color = "white";
//                 document.getElementById("C1").style.backgroundColor = "#F4B400";
//                 document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }

//             else if (item == 2) {
//                 await sleep(7000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C2").style.color = "white";
//                 document.getElementById("C2").style.backgroundColor = "#F4B400";
//                 document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//         }

//         else if (S1.value == 3) {
//             if (item == 1) {
//                 document.getElementById("C1").style.color = "white";
//                 document.getElementById("C1").style.backgroundColor = "#F4B400";
//                 document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 2) {
//                 await sleep(7000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C2").style.color = "white";
//                 document.getElementById("C2").style.backgroundColor = "#F4B400";
//                 document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 3) {
//                 await sleep(14000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C3").style.color = "white";
//                 document.getElementById("C3").style.backgroundColor = "#F4B400";
//                 document.getElementById("C3").style.animation = `C3in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);

//             }
//         }
//         else if (S1.value == 4) {
//             if (item == 1) {
//                 document.getElementById("C1").style.color = "white";
//                 document.getElementById("C1").style.backgroundColor = "#F4B400";
//                 document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 2) {
//                 await sleep(7000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C2").style.color = "white";
//                 document.getElementById("C2").style.backgroundColor = "#F4B400";
//                 document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 3) {
//                 await sleep(14000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C3").style.color = "white";
//                 document.getElementById("C3").style.backgroundColor = "#F4B400";
//                 document.getElementById("C3").style.animation = `C3in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 4) {
//                 await sleep(21000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C4").style.color = "white";
//                 document.getElementById("C4").style.backgroundColor = "#F4B400";
//                 document.getElementById("C4").style.animation = `C4in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//         }

//         else if (S1.value == 5) {
//             if (item == 1) {
//                 document.getElementById("C1").style.color = "white";
//                 document.getElementById("C1").style.backgroundColor = "#F4B400";
//                 document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 2) {
//                 await sleep(7000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C2").style.color = "white";
//                 document.getElementById("C2").style.backgroundColor = "#F4B400";
//                 document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 3) {
//                 await sleep(14000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C3").style.color = "white";
//                 document.getElementById("C3").style.backgroundColor = "#F4B400";
//                 document.getElementById("C3").style.animation = `C3in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 4) {
//                 await sleep(21000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C4").style.color = "white";
//                 document.getElementById("C4").style.backgroundColor = "#F4B400";
//                 document.getElementById("C4").style.animation = `C4in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);

//             }
//             else if (item == 5) {
//                 await sleep(28000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C5").style.color = "white";
//                 document.getElementById("C5").style.backgroundColor = "#F4B400";
//                 document.getElementById("C5").style.animation = `C5in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//         }

//         else if (S1.value == 6) {
//             if (item == 1) {
//                 document.getElementById("C1").style.color = "white";
//                 document.getElementById("C1").style.backgroundColor = "#F4B400";
//                 document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 2) {
//                 await sleep(7000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C2").style.color = "white";
//                 document.getElementById("C2").style.backgroundColor = "#F4B400";
//                 document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 3) {
//                 await sleep(14000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C3").style.color = "white";
//                 document.getElementById("C3").style.backgroundColor = "#F4B400";
//                 document.getElementById("C3").style.animation = `C3in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 4) {
//                 await sleep(21000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C4").style.color = "white";
//                 document.getElementById("C4").style.backgroundColor = "#F4B400";
//                 document.getElementById("C4").style.animation = `C4in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 5) {
//                 await sleep(28000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C5").style.color = "white";
//                 document.getElementById("C5").style.backgroundColor = "#F4B400";
//                 document.getElementById("C5").style.animation = `C5in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 6) {
//                 await sleep(35000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C6").style.color = "white";
//                 document.getElementById("C6").style.backgroundColor = "#F4B400";
//                 document.getElementById("C6").style.animation = `C6in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//         }

//         else if (S1.value == 7) {
//             if (item == 1) {
//                 document.getElementById("C1").style.color = "white";
//                 document.getElementById("C1").style.backgroundColor = "#F4B400";
//                 document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 2) {
//                 await sleep(7000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C2").style.color = "white";
//                 document.getElementById("C2").style.backgroundColor = "#F4B400";
//                 document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 3) {
//                 await sleep(14000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C3").style.color = "white";
//                 document.getElementById("C3").style.backgroundColor = "#F4B400";
//                 document.getElementById("C3").style.animation = `C3in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 4) {
//                 await sleep(21000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C4").style.color = "white";
//                 document.getElementById("C4").style.backgroundColor = "#F4B400";
//                 document.getElementById("C4").style.animation = `C4in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 5) {
//                 await sleep(28000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C5").style.color = "white";
//                 document.getElementById("C5").style.backgroundColor = "#F4B400";
//                 document.getElementById("C5").style.animation = `C5in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 6) {
//                 await sleep(35000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C6").style.color = "white";
//                 document.getElementById("C6").style.backgroundColor = "#F4B400";
//                 document.getElementById("C6").style.animation = `C6in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 7) {
//                 await sleep(42000);

//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C7").style.color = "white";
//                 document.getElementById("C7").style.backgroundColor = "#F4B400";
//                 document.getElementById("C7").style.animation = `C7in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);

//             }
//         }

//         else if (S1.value == 8) {
//             if (item == 1) {
//                 document.getElementById("C1").style.color = "white";
//                 document.getElementById("C1").style.backgroundColor = "#F4B400";
//                 document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 2) {
//                 await sleep(7000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C2").style.color = "white";
//                 document.getElementById("C2").style.backgroundColor = "#F4B400";
//                 document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 3) {
//                 await sleep(14000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C3").style.color = "white";
//                 document.getElementById("C3").style.backgroundColor = "#F4B400";
//                 document.getElementById("C3").style.animation = `C3in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 4) {
//                 await sleep(21000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C4").style.color = "white";
//                 document.getElementById("C4").style.backgroundColor = "#F4B400";
//                 document.getElementById("C4").style.animation = `C4in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 5) {
//                 await sleep(28000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C5").style.color = "white";
//                 document.getElementById("C5").style.backgroundColor = "#F4B400";
//                 document.getElementById("C5").style.animation = `C5in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);
//             }
//             else if (item == 6) {
//                 await sleep(35000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C6").style.color = "white";
//                 document.getElementById("C6").style.backgroundColor = "#F4B400";
//                 document.getElementById("C6").style.animation = `C6in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);

//             }
//             else if (item == 7) {
//                 await sleep(42000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C7").style.color = "white";
//                 document.getElementById("C7").style.backgroundColor = "#F4B400";
//                 document.getElementById("C7").style.animation = `C7in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);

//             }
//             else if (item == 8) {
//                 await sleep(49000);
//                 let TV = document.getElementById('tv');
//                 setTimeout(() => {
//                     TV.innerHTML = "1";
//                 }, 2000);
//                 document.getElementById("C8").style.color = "white";
//                 document.getElementById("C8").style.backgroundColor = "#F4B400";
//                 document.getElementById("C8").style.animation = `C8in 3s ease forwards`;
//                 setTimeout(() => {
//                     A1.style.color = "white";
//                 }, 2000);

//             }
//         }
//     }


async function insert_item_p() {
    console.log("insert_item_p");
    // await sleep(3000);
    let TV = document.getElementById('tv');
    document.getElementById('A1');
    console.log('bhavik');
    position[0] = '0';
    if (S1.value == 1) {
        console.log('aryan');
        console.log(window.item);
        if (window.item == 1) {
            console.log('jaimin');
            document.getElementById("C1").style.color = "white";
            document.getElementById("C1").style.backgroundColor = "#F4B400";
            document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            console.log(document.getElementById("C1"));
            console.log('c1_in');
            setTimeout(() => {
                A1.style.color = "white";
                TV.innerHTML = "1";
            }, 2000);


        }
    }

    else if (S1.value == 2) {

        if (item == 1) {
            document.getElementById("C1").style.color = "white";
            document.getElementById("C1").style.backgroundColor = "#F4B400";
            document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                TV.innerHTML = "1";
            }, 2000);
        }

        else if (item == 2) {
            await sleep(4000);

            document.getElementById("C2").style.color = "white";
            document.getElementById("C2").style.backgroundColor = "#F4B400";
            document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.left = "-18px";
                A1.style.color = "white";
                TV.innerHTML = "2";
            }, 2000);
        }
    }

    else if (S1.value == 3) {
        if (item == 1) {
            document.getElementById("C1").style.color = "white";
            document.getElementById("C1").style.backgroundColor = "#F4B400";
            document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                TV.innerHTML = "1";
            }, 2000);
        }
        else if (item == 2) {
            await sleep(4000);


            document.getElementById("C2").style.color = "white";
            document.getElementById("C2").style.backgroundColor = "#F4B400";
            document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "-18px";
                TV.innerHTML = "2";
            }, 2000);
        }
        else if (item == 3) {
            await sleep(8000);


            document.getElementById("C3").style.color = "white";
            document.getElementById("C3").style.backgroundColor = "#F4B400";
            document.getElementById("C3").style.animation = `C3in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "33px";
                TV.innerHTML = "3";
            }, 2000);

        }
    }
    else if (S1.value == 4) {
        if (item == 1) {
            document.getElementById("C1").style.color = "white";
            document.getElementById("C1").style.backgroundColor = "#F4B400";
            document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                TV.innerHTML = "1";
            }, 2000);
        }
        else if (item == 2) {
            await sleep(4000);


            document.getElementById("C2").style.color = "white";
            document.getElementById("C2").style.backgroundColor = "#F4B400";
            document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "-18px";
                TV.innerHTML = "2";
            }, 2000);
        }
        else if (item == 3) {
            await sleep(8000);


            document.getElementById("C3").style.color = "white";
            document.getElementById("C3").style.backgroundColor = "#F4B400";
            document.getElementById("C3").style.animation = `C3in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "33px";
                TV.innerHTML = "3";
            }, 2000);
        }
        else if (item == 4) {
            await sleep(12000);


            document.getElementById("C4").style.color = "white";
            document.getElementById("C4").style.backgroundColor = "#F4B400";
            document.getElementById("C4").style.animation = `C4in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "84px";
                TV.innerHTML = "4";
            }, 2000);
        }
    }

    else if (S1.value == 5) {
        if (item == 1) {
            document.getElementById("C1").style.color = "white";
            document.getElementById("C1").style.backgroundColor = "#F4B400";
            document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                TV.innerHTML = "1";
            }, 2000);
        }
        else if (item == 2) {
            await sleep(4000);


            document.getElementById("C2").style.color = "white";
            document.getElementById("C2").style.backgroundColor = "#F4B400";
            document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "-18px";
                TV.innerHTML = "2";
            }, 2000);
        }
        else if (item == 3) {
            await sleep(8000);


            document.getElementById("C3").style.color = "white";
            document.getElementById("C3").style.backgroundColor = "#F4B400";
            document.getElementById("C3").style.animation = `C3in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "33px";
                TV.innerHTML = "3";
            }, 2000);
        }
        else if (item == 4) {
            await sleep(12000);


            document.getElementById("C4").style.color = "white";
            document.getElementById("C4").style.backgroundColor = "#F4B400";
            document.getElementById("C4").style.animation = `C4in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "84px";
                TV.innerHTML = "4";
            }, 2000);

        }
        else if (item == 5) {
            await sleep(16000);


            document.getElementById("C5").style.color = "white";
            document.getElementById("C5").style.backgroundColor = "#F4B400";
            document.getElementById("C5").style.animation = `C5in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "134px";
                TV.innerHTML = "5";
            }, 2000);
        }
    }

    else if (S1.value == 6) {
        if (item == 1) {
            document.getElementById("C1").style.color = "white";
            document.getElementById("C1").style.backgroundColor = "#F4B400";
            document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                TV.innerHTML = "1";
            }, 2000);
        }
        else if (item == 2) {
            await sleep(4000);


            document.getElementById("C2").style.color = "white";
            document.getElementById("C2").style.backgroundColor = "#F4B400";
            document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "-18px";
                TV.innerHTML = "2";
            }, 2000);
        }
        else if (item == 3) {
            await sleep(8000);


            document.getElementById("C3").style.color = "white";
            document.getElementById("C3").style.backgroundColor = "#F4B400";
            document.getElementById("C3").style.animation = `C3in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "33px";
                TV.innerHTML = "3";
            }, 2000);
        }
        else if (item == 4) {
            await sleep(12000);


            document.getElementById("C4").style.color = "white";
            document.getElementById("C4").style.backgroundColor = "#F4B400";
            document.getElementById("C4").style.animation = `C4in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "84px";
                TV.innerHTML = "4";
            }, 2000);
        }
        else if (item == 5) {
            await sleep(16000);


            document.getElementById("C5").style.color = "white";
            document.getElementById("C5").style.backgroundColor = "#F4B400";
            document.getElementById("C5").style.animation = `C5in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "134px";
                TV.innerHTML = "5";
            }, 2000);
        }
        else if (item == 6) {
            await sleep(20000);


            document.getElementById("C6").style.color = "white";
            document.getElementById("C6").style.backgroundColor = "#F4B400";
            document.getElementById("C6").style.animation = `C6in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "183px";
                TV.innerHTML = "6";
            }, 2000);
        }
    }

    else if (S1.value == 7) {
        if (item == 1) {
            document.getElementById("C1").style.color = "white";
            document.getElementById("C1").style.backgroundColor = "#F4B400";
            document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                TV.innerHTML = "1";
            }, 2000);
        }
        else if (item == 2) {
            await sleep(4000);


            document.getElementById("C2").style.color = "white";
            document.getElementById("C2").style.backgroundColor = "#F4B400";
            document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "-18px";
                TV.innerHTML = "2";
            }, 2000);
        }
        else if (item == 3) {
            await sleep(8000);


            document.getElementById("C3").style.color = "white";
            document.getElementById("C3").style.backgroundColor = "#F4B400";
            document.getElementById("C3").style.animation = `C3in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "33px";
                TV.innerHTML = "3";
            }, 2000);
        }
        else if (item == 4) {
            await sleep(12000);


            document.getElementById("C4").style.color = "white";
            document.getElementById("C4").style.backgroundColor = "#F4B400";
            document.getElementById("C4").style.animation = `C4in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "84px";
                TV.innerHTML = "4";
            }, 2000);
        }
        else if (item == 5) {
            await sleep(16000);


            document.getElementById("C5").style.color = "white";
            document.getElementById("C5").style.backgroundColor = "#F4B400";
            document.getElementById("C5").style.animation = `C5in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "134px";
                TV.innerHTML = "5";
            }, 2000);
        }
        else if (item == 6) {
            await sleep(20000);


            document.getElementById("C6").style.color = "white";
            document.getElementById("C6").style.backgroundColor = "#F4B400";
            document.getElementById("C6").style.animation = `C6in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "183px";
                TV.innerHTML = "6";
            }, 2000);
        }
        else if (item == 7) {
            await sleep(24000);



            document.getElementById("C7").style.color = "white";
            document.getElementById("C7").style.backgroundColor = "#F4B400";
            document.getElementById("C7").style.animation = `C7in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "234px";
                TV.innerHTML = "7";
            }, 2000);

        }
    }

    else if (S1.value == 8) {
        if (item == 1) {
            document.getElementById("C1").style.color = "white";
            document.getElementById("C1").style.backgroundColor = "#F4B400";
            document.getElementById("C1").style.animation = `C1in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                TV.innerHTML = "1";
            }, 2000);
        }
        else if (item == 2) {
            await sleep(4000);

            document.getElementById("C2").style.color = "white";
            document.getElementById("C2").style.backgroundColor = "#F4B400";
            document.getElementById("C2").style.animation = `C2in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "-8px";
                TV.innerHTML = "2";
            }, 2000);
        }
        else if (item == 3) {
            await sleep(8000);


            document.getElementById("C3").style.color = "white";
            document.getElementById("C3").style.backgroundColor = "#F4B400";
            document.getElementById("C3").style.animation = `C3in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "33px";
                TV.innerHTML = "3";
            }, 2000);
        }
        else if (item == 4) {
            await sleep(12000);


            document.getElementById("C4").style.color = "white";
            document.getElementById("C4").style.backgroundColor = "#F4B400";
            document.getElementById("C4").style.animation = `C4in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "84px";
                TV.innerHTML = "4";
            }, 2000);
        }
        else if (item == 5) {
            await sleep(16000);


            document.getElementById("C5").style.color = "white";
            document.getElementById("C5").style.backgroundColor = "#F4B400";
            document.getElementById("C5").style.animation = `C5in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "134px";
                TV.innerHTML = "5";
            }, 2000);
        }
        else if (item == 6) {
            await sleep(20000);


            document.getElementById("C6").style.color = "white";
            document.getElementById("C6").style.backgroundColor = "#F4B400";
            document.getElementById("C6").style.animation = `C6in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "183px";
                TV.innerHTML = "6";
            }, 2000);

        }
        else if (item == 7) {
            await sleep(24000);


            document.getElementById("C7").style.color = "white";
            document.getElementById("C7").style.backgroundColor = "#F4B400";
            document.getElementById("C7").style.animation = `C7in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "234px";
                TV.innerHTML = "7";
            }, 2000);

        }
        else if (item == 8) {
            await sleep(28000);
            document.getElementById("C8").style.color = "white";
            document.getElementById("C8").style.backgroundColor = "#F4B400";
            document.getElementById("C8").style.animation = `C8in 3s ease forwards`;
            document.getElementById('executor ').innerHTML = "Executor : Producer";
            document.getElementById('action').innerHTML = "Action : writing";
            setTimeout(() => {
                A1.style.color = "white";
                A1.style.left = "282px";
                TV.innerHTML = "8";
            }, 2000);

        }
    }
}


// async function consumer_p() {
//     console.log("consumer_p");
//     while (window.item <= 8) {

//         if (count == 0) //The consumer will sleep if the buffer is empty.
//             await sleep();
//         count = count - 1;
//         if (count == N - 1) //if there is at least one slot available in the buffer
//             //then the consumer will wake up producer
//             setTimeout(() => {
//                 producer_p();
//             }, 4000);
//         remove_item_p(); //the item is read by consumer.
//         producer_p();
//     }
// }

// async function producer_p() {
//     console.log("producer_p");
//     while (item<10) {
//         if (count == N) { //if the buffer is full then the producer will sleep
//             await sleep();
//         }
//         window.item = window.item + 1;
//         insert_item_q(); //the item is inserted into buffer
//         count = count + 1;
//         if (count == 1) { //The producer will wake up the
//             //consumer if there is at least 1 item in the buffer

//             consumer_p();

//             console.log('producer_if')

//         }

//     }
// }



async function problem() {
    document.getElementById('executor ').innerHTML = "Executor : Consumer";
    document.getElementById('action').innerHTML = "Action : Sleeping";
    setTimeout(() => {
        document.getElementById('action1').innerHTML ="Premption before sleep()"
        }, 2000);
    console.log("problem");

    for (var i = 1; i <= S1.value; i++) {
        await sleep(3000);
        document.getElementById('action1').innerHTML =""
        window.item = window.item + 1;
        insert_item_p(); //the item is inserted into buffer
        setTimeout(() => {
        document.getElementById('executor ').innerHTML = "Executor : Consumer";
        document.getElementById('action').innerHTML = "Action : Sleeping";
        }, item*4000);
       
        count = count + 1;
        console.log("babal");
        if (count == N) { //if the buffer is full then the producer will sleep
            await sleep();
        }
    }
}

async function final() {

    document.getElementById('live').innerHTML += `<h2 id="executor " style="color: white;"></h2> </br>`;
    document.getElementById('live').innerHTML += `<h2 id="action" style="color: white;"></h2> </br>`;
    document.getElementById('live').innerHTML += `<h2 id="action1" style="color: white;"></h2>`;
    // var type=console.log(document.getElementsByName('mode').value);
    // console.log(type);
    var bsize = S1.value;
    var text = document.getElementById('text2');
    if (document.getElementById('mode').value == "pre-emptive") {
        // text.innerHTML += `<div  id="text40" id="">Mode : Pre-emptive </br></div>` ;
        // text.innerHTML += `<div  id="text42"> Buffer size : ${bsize}</div>`;
        text.innerHTML +=`<h3 class="stat-text" style="color: white;">Mode : Pre-emptive</h3>`
        text.innerHTML +=`<h3 class="stat-text" style="color: white;">Buffer size : ${bsize}</h3>`
        problem();
    }
    else if (document.getElementById('mode').value == 'non-preemptive') {
        // text.innerHTML += `<div  id="text40">Mode : Non pre-emptive </br></div>`;
        // text.innerHTML += `<div  id="text42"> Buffer size : ${bsize}</div>`;

        text.innerHTML +=`<h3 class="stat-text" style="color: white;">Mode : Non pre-emptive</h3>`
        text.innerHTML +=`<h3 class="stat-text" style="color: white;">Buffer size : ${bsize}</h3>`
        producer();
    }
}
