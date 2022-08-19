    function printChar(s){
        let map=new Map();
        s.split('').forEach((element)=>{
            if(map.has(element)){
                map.set(element,map.get(element)+1)
            }
            else{
                map.set(element,1)
            }
        });
        s.split('').forEach((i)=>{
            if(map.has(i) && map.get(i)!=0){
                console.log(i + "="+map.get(i)+' ');
                map.set(i,0)
            }
        })
    
    }
    var s="abcdefedcba";
    printChar(s);