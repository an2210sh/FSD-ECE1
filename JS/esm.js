const isVote = (age) => {
    if(age >= 18) {
        console.log("Eligible to vote");
    }
    else {
        console.log("Not Eligible");
    }
};
export default isVote;