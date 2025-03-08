
/*
    EXERCISE Array Object

    Make Function to group the number of children who graduated from each class
    
    input 
    var students = [
        ["Charlie", "A", 87],
        ["Alice", "A", 75],
        ["Bob", "B", 85],
        ["David", "B", 95],
    ];

    Output
    [
        {
            class: "A",
            students: ["Charlie", "Alice"],
            scores: [87, 75],
        },
        {
            class: "B",
            children: ["Bob", "David"]
            scores: [85, 95],
        }
    ]


*/

var students = [
    ["Charlie", "A", 87],
    ["Alice", "A", 75],
    ["Bob", "B", 85],
    ["David", "B", 95],
]; 

function groupByClass(arr2D) {
    var result = [];
    var classA = {
        class: "A",
        students: [],
        scores: [],
        total_students: 0
    };
    var classB = {
        class: "B",
        students: [],
        scores: [],
        total_students: 0
    };

    for (var i = 0; i < arr2D.length; i++) {
        var studentName = arr2D[i][0];
        var className = arr2D[i][1];
        var score = arr2D[i][2];
        
        if (className === "A") {
            classA.students.push(studentName);
            classA.scores.push(score);
            classA.total_students++;
        } else {
            classB.students.push(studentName);
            classB.scores.push(score);
            classB.total_students++;
        }
    }

    result.push(classA);
    result.push(classB);

    return result;
}

console.log(groupByClass(students));

