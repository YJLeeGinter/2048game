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

var dragStart = false;
var draging = false;
var startCoordinate;
var endCoordinate;

window.addEventListener('mousedown', function(event){
    this.console.log('mousedown', event);
    dragStart = true;
    startCoordinate = [event.clientX, event.clientY];

} );

window.addEventListener('mousemove', function(event){
    if(dragStart){
        this.console.log('mousemove', event);
        draging = true;
    }

} );

window.addEventListener('mouseup', function(event){
    this.console.log('mouseup', event);
    dragStart = false;
    endCoordinate = [event.clientX, event.clientY];
    if(draging){
        
    }
    var direction;
    var xDifference = endCoordinate[0] - startCoordinate[0];
    var yDifference = endCoordinate[1] - startCoordinate[1];
    if(xDifference < 0  && Math.abs(xDifference)/ Math.abs(yDifference)> 1){
        direction = 'left';
    }else if(xDifference > 0  && Math.abs(xDifference)/ Math.abs(yDifference)>1){
        direction = 'right';
    }else if(yDifference > 0  && Math.abs(xDifference)/ Math.abs(yDifference)<1){
        direction = 'down';
    }else if(yDifference < 0  && Math.abs(xDifference)/ Math.abs(yDifference)<1) {
        direction = 'up';
    }
    this.console.log(xDifference, yDifference, direction);
} );