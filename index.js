// async/await

// function f() {
//    let promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve('done');
//       }, 1000);
//    });

//    let result = await promise;

//    console.log(result);
// }


// f();

async function showAvatar() {
    try {
        // read our JSON
    let response = await fetch('./data.json');
    let user = await response.json();
    console.log(user)
    
    // read github user

    let githubResponse = await fetch(`https://api.github.com/users/${user.data[0].username}`);
    let githubUser = await githubResponse.json();

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.classList.add('avatar');
    document.body.appendChild(img);

    await new Promise(resolve => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
    } catch (e) {
        console.log(e);
    } 
}

showAvatar();

console.log(1)