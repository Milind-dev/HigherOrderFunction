function program(input){
    input = input.split(" ")
    var mapping = input.map(function(element){
        return Number(element)
    })
        // console.log(mapping);

    var sum_odd = mapping.filter(function(elem,idx,array){
        // if(elem%2===1){
        //     return 
        // }
        return (elem%2===1)
    })
        // console.log(sum_odd);

    var odd_sum = sum_odd.reduce(function(ac,el){
        return ac + el
    },0)
    console.log(odd_sum);
 };

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   program(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    program(read);
    process.exit(0);
});