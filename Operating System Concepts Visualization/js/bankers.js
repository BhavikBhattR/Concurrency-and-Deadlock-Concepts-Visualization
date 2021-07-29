
let n = 0, m = 0;
let R0 =0 ,R1=0,R2=0;
m = 3; // Number of resources



function create(){
    let table = document.getElementById('table');

    if (table.style.display == 'none') {
        table.style.display = 'block';
    }
    else {
        table.style.display = 'none';
    }

    n = document.getElementById('P').value;

    R0 = document.getElementById('R0').value;
     R1 = document.getElementById('R1').value;
     R2= document.getElementById('R2').value;

     var alloctable = document.getElementById('alloc-table');
     var maxneedtable = document.getElementById('maxneed-table');


   for (var i = 0; i < n; i++) {
    var row = alloctable.insertRow(-1);
    var row1 = maxneedtable.insertRow(-1);

    var cell1alloc = row.insertCell(0);
    var cell1max = row1.insertCell(0);

    cell1alloc.innerHTML = `P${i}`;
    cell1max.innerHTML = `P${i}`;
       for (let j = 0; j < m; j++) {

         var cell2alloc = row.insertCell(j+1);
         var cell2max = row1.insertCell(j+1);
       
        cell2alloc.innerHTML = `<input type="number"  id="A${i}${j}" />`;
        cell2max.innerHTML = `<input type="number"  id="M${i}${j}" />`;
           
       }
       
   }
}
 
function getvalues(){
    let outtable = document.getElementById('out-table');

    if (outtable.style.display == 'none') {
        outtable.style.display = 'block';
    }
    else {
        outtable.style.display = 'none';
    }

    let needres = document.getElementById('need-res');
    let availres = document.getElementById('avail-res');
    
    const alloc = [];
    const max = [];
    const avail = [];

    for ( var i = 0; i < n; i++) {
        alloc.push([]);
        max.push([]);
        for (var j = 0; j < m; j++) {
            alloc[i][j] = 0;
            max[i][j] = 0;

            alloc[i][j] = document.getElementById(`A${i}${j}`).value;
            max[i][j] = document.getElementById(`M${i}${j}`).value;
            
        }
    }
    var allocR0 = 0;
    var allocR1 = 0;
    var allocR2 = 0;
    for (var i = 0; i < n; i++) {
        allocR0 += parseInt(alloc[i][0]) ;
        allocR1 += parseInt(alloc[i][1]);
        allocR2 += parseInt(alloc[i][2]);
    }
    
    
    avail[0] = R0 - allocR0;
    avail[1] = R1 - allocR1;
    avail[2] = R2 - allocR2;
    
        
        var row1 = availres.insertRow(-1);
        for (var i = 0; i < m; i++) {
            var cell1 = row1.insertCell(i);

            cell1.innerHTML = avail[i];
        
        }
        
        
var f = [], ans = [], ind = 0;
for (var k = 0; k < n; k++) {
    f[k] = 0;
}
const need = [];
for (var i = 0; i < n; i++) {
    need.push([]);
    for (var j = 0; j < m; j++) {
        need[i][j] = 0;
        need[i][j] = max[i][j] - alloc[i][j];
    }
}

var y = 0;
let count =0;
let status = document.getElementById('status');
status.innerHTML += `<h2 id="status-text">Execution of Processes</h2>`;


for (k = 0; k < 5; k++)  {
    
    count++;
    if(ans.length==n){
        break;
    }

    status.innerHTML += `<div id="iteration${count}"></div>`;
    document.getElementById(`iteration${count}`).innerHTML += `<h2 >iteration ${count} :-</h2>`
    for (i = 0; i < n; i++) {
        if(ans.length==n){
            break;
        }
       
        document.getElementById(`iteration${count}`).innerHTML += `<div id="proc${k}${i}" class="output-text" ></div>`
        document.getElementById(`proc${k}${i}`).innerHTML += `<h2 >Process ${i} :-</h2>`;

        if (f[i] == 0) {

            var flag = 0;
        
            document.getElementById(`proc${k}${i}`).innerHTML += `<div id="need${k}${i}"></div>`
            document.getElementById(`need${k}${i}`).innerHTML += `<h3 id="need${k}${i}" style=" display: inline;">Need :-</h3>`
            document.getElementById(`proc${k}${i}`).innerHTML += `<div id="avail${k}${i}"></div>`
            document.getElementById(`avail${k}${i}`).innerHTML += `<h3 id="avail${k}${i}" style=" display: inline;">Available :-</h3>`
            for (j = 0; j < m; j++) {

                document.getElementById(`need${k}${i}`).innerHTML += `<h3 class="list-text" >${need[i][j]}</h3>`

                if (need[i][j] > avail[j]) {
                    for (var a = 0; a < m; a++){
                        document.getElementById(`avail${k}${i}`).innerHTML += `<h3 class="list-text" >${avail[a]}</h3>`

                    }    
                    document.getElementById(`proc${k}${i}`).innerHTML += `<h3 >There are not enough of resources.</h3>`

                    flag = 1;
                    break;
                }
            }

            if (flag == 0) {
                ans[ind++] = i;
                for (var a = 0; a < m; a++){
                    document.getElementById(`avail${k}${i}`).innerHTML += `<h3 class="list-text" >${avail[a]}</h3>`
                } 
                document.getElementById(`proc${k}${i}`).innerHTML += `<h3 >There are enough resources.</h3>`
                for (y = 0; y < m; y++){
                    avail[y] += parseInt(alloc[i][y]);
                } 
                f[i] = 1;
            }
        }
    
    }
}


for (var i = 0; i < n; i++) {
    var row = needres.insertRow(-1);
    var cell1need = row.insertCell(0);

    cell1need.innerHTML = `P${i}`;
    
       for (let j = 0; j < m; j++) {

         var cell2need = row.insertCell(j+1);
         
       
        cell2need.innerHTML = need[i][j];
        
           
       }
       
   }


let outstat = document.getElementById('out');

if(ans.length == n){
    outstat.innerHTML += `<h3 >Safe State</h3>`;
    outstat.innerHTML += `<h3 >SAFE Sequence is :-</h3>`;
    outstat.innerHTML += `<div id="output"></div>`;

for (i = 0; i < n - 1; i++) {
    output.innerHTML+=`<h2 style=" display: inline;">${"P".concat(ans[i])}</h2>`
    output.innerHTML+=`<h2 style=" display: inline;"><i class='fas fa-arrow-right' style='font-size:21px;margin: 0px 8px;'></i></h2>`
}
output.innerHTML+=`<h2 style="display: inline;">${" P".concat(ans[n - 1])}</h2>`
}

if(ans.length != n){
    outstat.innerHTML += `<h3 style="color: white;">Unsafe State</h3>`;

}
}