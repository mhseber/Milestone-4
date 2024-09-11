//object 

const person1 = {
    name: "jojo",
    honors: 40,
    hsc: 30,
    isFFfamily: true
}
const person2 = {
    name: "nobita",
    honors: 45,
    hsc: 32,
    isFFfamily: false
}
//function

function jobSelection(info) {
    if (typeof info !== "object") {
        return "invalid object"
    }
    let total_marks = info.honors + info.hsc;

    if (info.isFFfamily) {
        total_marks = total_marks + (total_marks * 0.2)
    }

    console.log(total_marks)
    if (total_marks >= 80) {
        return "You got the job"
    } else {
        return "you failed"
    }
}
console.log(jobSelection(person1))
