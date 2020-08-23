function program(input){
    input = input.split(" ")

    var sqr_multi = input.filter(function(element,index){
        if(element%3===0){
            sum = element
            return  sum
        }
        // return  element
    })
    var mapping = sqr_multi.map(function(element){
            return Number(element**3);
    })
    var sum_map = mapping.reduce(function(ac,el){
        return ac + el
    })
    // var sq
    console.log(sum_map)

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