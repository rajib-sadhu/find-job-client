// use local storage to manage cart data
const addToDb = id => {
    const appliedJobs = getAppliedJobs();
    appliedJobs.push(id);
    const jsonPlayer = JSON.stringify(appliedJobs)
    localStorage.setItem('applied-jobs', jsonPlayer);
}

const getAppliedJobs = () => {
    let playerSign = [];
    const playerStored = localStorage.getItem('applied-jobs');

    if (playerStored) {
            playerSign = JSON.parse(playerStored);
    }
    return playerSign;
}

const removeFromDb = id => {
    const appliedJobs = getAppliedJobs();
    if (id in appliedJobs) {
        delete appliedJobs[id];
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
    }
}


const deleteAppliedJobs = () => {
    localStorage.removeItem('applied-jobs');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJobs,
    deleteAppliedJobs
}
