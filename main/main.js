module.exports = function main(distance,stopminutes) {
    if(distance<=2){
        let fee = parseInt(Math.round(6 +stopminutes * 0.25));
        let result= "The taxi fee is : "+ fee + "(元)\n"
        return result;
    }
    if(distance >2 && distance <8){
        let fee = parseInt(Math.round(6+(distance-2)*0.8 +stopminutes * 0.25));
        let result= "The taxi fee is : "+ fee + "(元)\n"
        return result;
    }
    if(distance >=8){
        let fee = parseInt(Math.round(6+5*0.8 +(distance-8+1)*0.8*1.5+stopminutes * 0.25));
        let result= "The taxi fee is : "+ fee + "(元)\n"
        return result;
    }
};