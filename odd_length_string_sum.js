function program(input){
    input = input.split(" ")
    var sum = 0;
    var str_1 = input.map(function(element){
        return element.length
    })
    var str_length = str_1.filter(function(ac,el){
            if(ac%2===1){
                return ac
            }
    })
    var total_Str_length = str_length.reduce(function(element,idx){
        sum = element+idx;
        return sum
    },0)
    console.log(total_Str_length)

    // console.log(str_length)
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