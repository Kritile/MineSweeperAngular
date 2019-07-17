function randInt(min, max){
    let rand = min-0.5+ Math.random()*(max-min +1)
    rand = Math.round(rand)
    return rand
}
function createField(width, height, bombs){
  let map= []
  for(let i = 0;i<height;i++){
    map[i] = []
    for(let j=0;j<width;j++){
      map[i][j] = {contain:0,visibility:false}
    }
  }
  let mapExt= []
  for(let i = 0;i<height++;i++){
    mapExt[i] = []
    for(let j=0;j<width++;j++){
      mapExt[i][j] = {contain:0,visibility:false}
    }
  }
  map.forEach((i,index)=>i.forEach((j,indexj)=>mapExt[index+1][indexj+1]=j))
  return map
}
function setBomb(map,width, height, bombs) {
  let q = 0
  for(let i = 0;i<=bombs;i++){
    let x = randInt(0,width-1)
    let y = randInt(0,height-1)
    map[y][x]['contain'] !== "b"?map[y][x]['contain'] = "b":map[randInt(0,width-1)][randInt(0,height-1)]['contain']="b"
  }
  map.forEach(i=>i.forEach(j=> j['contain']==="b"?q++:''));
  if(q!==bombs){
    Generatop(width, height, bombs);
  }
  return map
}
function Generatop(width, height, bombs){
    if(!isNaN(width)&&!isNaN(height)&&!isNaN(bombs)){
        let map = setBomb(createField(width, height, bombs),width, height, bombs)
        for(let i = 0;i<height;i++){
            for(let j=0;j<width;j++){
                // if(map[i][j]==="b"){
                //   map[i+2][j]++
                //   map[i-2][j]++
                //   map[i][j+2]++
                //   map[i][j-2]++
                //   map[i+2][j+2]++
                //   map[i-2][j-2]++
                //   map[i+2][j-2]++
                //   map[i-2][j+2]++
                // }

                try{
                    if(map[i+1][j]['contain'] === 'b' & map[i][j]['contain'] !== 'b'){
                        map[i][j]['contain']++
                    }
                }catch(TypeError){}try
                {
                    if(map[i-1][j]['contain'] === 'b' & map[i][j]['contain'] !== 'b'){
                        map[i][j]['contain']++
                    }
                }catch(TypeError){}
                try{
                    if(map[i][j+1]['contain'] === 'b' & map[i][j]['contain'] !== 'b'){
                        map[i][j]['contain']++
                    }
                }catch(TypeError){

                }try{
                    if(map[i][j-1]['contain'] === 'b' & map[i][j]['contain'] !== 'b'){
                        map[i][j]['contain']++
                    }
                }catch(TypeError){

                }try{
                    if(map[i+1][j+1]['contain'] === 'b' & map[i][j]['contain'] !== 'b'){
                        map[i][j]['contain']++
                    }
                }catch(TypeError){

                }try{
                    if(map[i-1][j-1]['contain'] === 'b' & map[i][j]['contain'] !== 'b'){
                        map[i][j]['contain']++
                    }
                }catch(TypeError){

                }try{
                    if(map[i+1][j-1]['contain'] === 'b' & map[i][j]['contain'] !== 'b'){
                        map[i][j]['contain']++
                    }
                }catch(TypeError){

                }try{
                    if(map[i-1][j+1]['contain'] === 'b' & map[i][j]['contain'] !== 'b'){
                        map[i][j]['contain']++
                    }
                }catch(TypeError){

                }
            }
        }
        return map
    }else{
        alert("Поля высота ширина и бомбы болжны быть числами")
        let map = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]
        return map
    }
}
export default Generatop
