var table = document.getElementById('table');
var data = [];
var scoreChart = document.getElementById('score');

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
    if(emptylColumArr.length === 0){
        alert('Game Over: ' + scoreChart.textContent);
        table.innerHTML = '';
        scoreChart.innerHTML = '0';
        initialize();
    }else{
        var randomColum = emptylColumArr[Math.floor(Math.random() * emptylColumArr.length)] ;
        data[randomColum[0]][randomColum[1]] = 2;
        draw();  
    }     
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
    dragStart = true;
    startCoordinate = [event.clientX, event.clientY];

} );

window.addEventListener('mousemove', function(event){
    if(dragStart){
        draging = true;
    }

} );

window.addEventListener('mouseup', function(event){
    endCoordinate = [event.clientX, event.clientY];
    if(draging){
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
    }
   
    dragStart = false;
    draging = false;

    switch(direction){
        case 'left': 
        var newData = [
            [],
            [],
            [],
            []
        ];
            data.forEach(function(columData,i){
                columData.forEach(function(rowData,j){
                  if(rowData)  {
                      if(newData[i][newData[i].length - 1] && newData[i][newData[i].length - 1] === rowData ){
                        newData[i][newData[i].length - 1] *=2;
                     var currentScore = parseInt(scoreChart.textContent, 10); 
                     scoreChart.textContent = currentScore + newData[i][newData[i].length -1];
                    } 
                    else{
                        newData[i].push(rowData);
                } 
                }
                });
            });
     this.console.log(newData);
     [1,2,3,4].forEach(function(columData,i){
         [1,2,3,4].forEach(function(rowData,j){
            data[i][j] = newData[i][j] || 0;
         })
     }) 
        break;  
        case 'right':
             var newData = [
                    [],
                    [],
                    [],
                    []
                ];
                    data.forEach(function(columData,i){
                        columData.forEach(function(rowData,j){
                          if(rowData){
                            if(newData[i][newData[i].length - 1] && newData[i][newData[i].length - 1] === rowData ){
                                newData[i][newData[i].length - 1] *=2;
                             var currentScore = parseInt(scoreChart.textContent, 10); 
                             scoreChart.textContent = currentScore + newData[i][newData[i].length -1];
                            } 
                            else{
                                newData[i].unshift(rowData);
                        } 
                        }
                        });
                    });
             this.console.log(newData);
             [1,2,3,4].forEach(function(columData,i){
                 [1,2,3,4].forEach(function(rowData,j){
                    data[i][3-j] = newData[i][j] || 0;
                 })
             }) 
        break;
        case 'up':
            var newData = [
                [],
                [],
                [],
                []
            ];
                data.forEach(function(columData,i){
                    columData.forEach(function(rowData,j){
                      if(rowData){                      
                       if(newData[j][newData[j].length - 1] && newData[j][newData[j].length - 1] === rowData ){
                        newData[j][newData[j].length - 1] *=2;
                     var currentScore = parseInt(scoreChart.textContent, 10); 
                     scoreChart.textContent = currentScore + newData[j][newData[j].length -1];
                    } 
                    else{
                        newData[j].push(rowData);
                } 
                    }
                    });
                });
         this.console.log(newData);
         [1,2,3,4].forEach(function(rowData,i){
             [1,2,3,4].forEach(function(columData,j){
                data[j][i] = newData[i][j] || 0;
             })
         })       
        break;
        case 'down':
                var newData = [
                    [],
                    [],
                    [],
                    []
                ];
                    data.forEach(function(columData,i){
                        columData.forEach(function(rowData,j){
                          if(rowData){
                            if(newData[j][0] && newData[j][0] === rowData ){
                                newData[j][0] *=2;
                             var currentScore = parseInt(scoreChart.textContent, 10); 
                             scoreChart.textContent = currentScore + newData[j][0];
                            } 
                            else{
                                newData[j].unshift(rowData);
                        }                         }
                        });
                    });
             this.console.log(newData);
             [1,2,3,4].forEach(function(rowData,i){
                 [1,2,3,4].forEach(function(columData,j){
                    data[3-j][i] = newData[i][j] || 0;
                 })
             }) 
        break;
    }
    draw();
     createRandom();
} );