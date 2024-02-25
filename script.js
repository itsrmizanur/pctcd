let rank = [
    {
        imgLink: "",
        fName: "Mir Hamid",
        classRoll: 1120161,
        section: "B",
        presentCount: 30,
        contestCount: 2,
        solveCount: 12,
        timeCount: 500
    },
    {
        imgLink: "",
        fName: "Humayun Kabir",
        classRoll: 1120161,
        section: "B",
        presentCount: 30,
        contestCount: 2,
        solveCount: 12,
        timeCount: 300
    },
    {
        imgLink: "",
        fName: "Abdul Bari",
        classRoll: 23233,
        section: "B",
        presentCount: 23,
        contestCount: 53,
        solveCount: 132,
        timeCount: 345
    },
    {
        imgLink: "",
        fName: "Karim Sarkar",
        classRoll: 2233,
        section: "B",
        presentCount: 65,
        contestCount: 336,
        solveCount: 33,
        timeCount: 345
    },
];

rank.sort ( (a, b) => {
    if( (a.presentCount + a.contestCount) * 10 + a.solveCount*5 > (b.presentCount + b.contestCount) * 10 + b.solveCount*5) {
        return -1;
    }
    else if( ((a.presentCount + a.contestCount) * 10 + a.solveCount*5) < (b.presentCount + b.contestCount) * 10 + b.solveCount*5) {
        return 1;
    }
    else {
        return 0;
    }
});

let i = 0, j = 0;
for(i; i < rank.length; i++) {
    let i_temp_score = (rank[i].presentCount + rank[i].contestCount) * 10 + rank[i].solveCount * 5;
    for(j = i; j < rank.length; j++ ){
        let j_temp_score = (rank[j].presentCount + rank[j].contestCount) * 10 + rank[j].solveCount * 5;
        if (i_temp_score == j_temp_score && (rank[i].timeCount > rank[j].timeCount)) {
            let temp_rank = rank[i];
            rank[i] = rank[j];
            rank[j] = temp_rank;
        }
    }
}

let index = 1;
let tableData = document.getElementById("student-rank");

rank.map((s) => {
    let temp_score = (s.presentCount + s.contestCount) * 10 + s.solveCount * 5;
    let temp = `
        <tr class="card">
            <td>${index++}</td>
            <td>${temp_score}</td>
            <td>${s.fName}</td>
            <td>${s.classRoll}</td>
            <td>${s.presentCount}</td>
            <td>${s.contestCount}</td>
            <td>${s.solveCount}</td>
            <td>${s.timeCount}</td>
        </tr>`;
    tableData.innerHTML = tableData.innerHTML + temp;
    
});




