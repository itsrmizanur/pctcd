let rank = [
    {
        id: 3,
        imgLink: "",
        fName: "Ahamad Ferdos Sami",
        classRoll: 2301039,
        presentCount: 1,
        contestCount: 0,
        solveCount: 0,
        timeCount: 0,
    },
    {
        id: 4,
        imgLink: "",
        fName: "Ahsanul Emon Shezan",
        classRoll: 2301025,
        presentCount: 2,
        contestCount: 0,
        solveCount: 0,
        timeCount: 0,
    },
    {
        id: 5,
        imgLink: "",
        fName: "Aiman Noushin Tithy",
        classRoll: 2301041,
        presentCount: 0,
        contestCount: 0,
        solveCount: 0,
        timeCount: 0,
    },
    {
        id: 6,
        imgLink: "",
        fName: "Anamul Haque",
        classRoll: 2301015,
        presentCount: 0,
        contestCount: 0,
        solveCount: 0,
        timeCount: 0,
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




