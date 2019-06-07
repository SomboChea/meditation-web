export  default  {
    ObjectToArr(obj){
        if (obj instanceof Array){
            return obj
        }
        return Object.keys(obj).reduce((result,el)=>{
            result.push(obj[el])
            return result
        },[])
    },
}
