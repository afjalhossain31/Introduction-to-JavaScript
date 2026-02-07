function gonoVote(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    if (votes.length === 0) {
        return "Invalid";
    }

    let haCount = 0;
    let naCount = 0;

    for (let v of votes) {
        if (v === "ha") {
            haCount++;
        } else if (v === "na") {
            naCount++;
        }
    }

    if (haCount > naCount) {
        return true;
    } else if (haCount === naCount) {
        return "equal";
    } else {
        return false;
    }
}

console.log(gonoVote(["ha", "na", "ha"]));       
console.log(gonoVote(["na", "na", "ha"]));      
console.log(gonoVote(["ha", "na"]));            
console.log(gonoVote("ha,na,ha"));          
console.log(gonoVote({ vote: "ha" }));          
console.log(gonoVote([]));      
