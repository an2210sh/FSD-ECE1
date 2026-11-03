function getuser(id, callback) {
    setTimeout(() => {
        console.log("user fetched");
        const user = {
            id: 101,
            username: "Gaurav"
        };
        callback(null, user);
    }, 1000);
}

function getprofile(id, callback) {
    setTimeout(() => {
        console.log("profile fetched");
        const profile = {
            id: 101,
            username: "Gaurav",
            location: "India"
        };
        callback(null, profile);
    }, 1000);
}

function getposts(username, callback) {
    setTimeout(() => {
        console.log("posts fetched");
        const posts = {
            username: "Gaurav",
            posts: ["post1", "post2", "post3"]
        };
        callback(null, posts);
    }, 1000);
}

getuser(1, function (error, user) {
    if (error) {
        console.error(error);
        return;
    }

    getprofile(user.id, function (error, profile) {
        if (error) {
            console.error(error);
            return;
        }

        getposts(profile.username, function (error, posts) {
            if (error) {
                console.error(error);
                return;
            }

            console.log(`Fetched Posts ${JSON.stringify(posts)}`);
        });
    });
});