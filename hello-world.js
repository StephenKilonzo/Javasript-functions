function consoleMarks(){
    let marks = 68

if (marks > 50){
    console.log('pass');
}else{
    console.log('Fail');
}

marks = [65,70,85,90]

for (let i = 0; i < marks.length; i++){
    console.log(marks[i])
}
console.log('******************')
marks.forEach((mark )=> {
    console.log(mark);
});
}

consoleMarks();
