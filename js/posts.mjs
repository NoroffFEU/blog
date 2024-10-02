import { POSTS_URL } from "./api/constants.mjs";
import { authFetch } from "./api/authFetch.mjs";

async function getPosts () {
    console.log("getting posts");
    const posts = await authFetch(POSTS_URL, true)
    console.log(posts);

}

function main () {
    getPosts();
    console.log("/posts/")
    console.log("hello")
}

main();







