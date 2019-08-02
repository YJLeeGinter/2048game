var table = document.getElementById('table');
var data = [];

function initialize(){
    var fragment = document.createDocumentFragment();
    [1,2,3,4].forEach(function(){
        var columData = [];
        data.push(columData);
        var tr = document.createElement('tr');
        [1,2,3,4].forEach(function(){
            columData.push(0);
            var td = document.createElement('td');
            tr.appendChild(td);
        });
        fragment.appendChild(tr);
    });
    table.appendChild(fragment);
    console.log(data);
}

function createRandom(){
    var emptylColumArr =[];
    data.forEach(function(columData,i){
        columData.forEach(function(rowData,j){
          if(!rowData){
              emptylColumArr.push([i,j]);
          }
        });
    });
    console.log(emptylColumArr);
    var randomColum = emptylColumArr[Math.floor(Math.random() * emptylColumArr.length)] ;
    data[randomColum[0]][randomColum[1]] = 2;
    draw();   
}

function draw(){
    data.forEach(function(columData,i){
        columData.forEach(function(rowData,j){
            if(rowData > 0){
                table.children[i].children[j].textContent = rowData;
            }else{
                table.children[i].children[j].textContent = '';
            }
        });
    });
}

initialize();
createRandom();
draw();