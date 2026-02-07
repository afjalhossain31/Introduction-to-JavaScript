function finalScore(result) {
    if (typeof result !== "object" || result === null) {
        return "Invalid";
    }

    let { right, wrong, skip } = result;

    if (!Number.isFinite(right) || !Number.isFinite(wrong) || !Number.isFinite(skip)) {
        return "Invalid";
    }

    if (right + wrong + skip !== 100) {
        return "Invalid";
    }

    let bcsScore = (right * 1) + (wrong * -0.5);
    return Math.round(bcsScore);
}

console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));
console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
