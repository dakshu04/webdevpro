function fetchUserData() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve({
                name: "chaicode", url: "https://chaicode.com"
            })
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log("Fetching the data...");
        const userData = await fetchUserData();
        console.log("User data fetched successfully");
        console.log("User Data : ", userData);
    } catch (error) {
        console.log("Error fetching data", error);
    }
}
getUserData()