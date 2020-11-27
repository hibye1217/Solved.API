async function addUserTier(){
    const aList = document.getElementsByTagName('a');

    for (let idx = 0; idx < aList.length; idx++){
        const tag = aList[idx];
        //console.log(idx, aList.length);
        if (tag.href.indexOf("/user/") == -1) continue;
        if (tag.href[ tag.href.length-1 ] == '#') continue;
        
        let userName = tag.href.substring( tag.href.indexOf("/user/") + "/user/".length );
        //console.log("user", userName);
        const userData = await( await fetch("https://api.solved.ac/v2/users/show.json?id=" + userName) ).json();
        //console.log("data", userData);

        if (userName == "startlink" || userName == "baekjoon" || userName == "solvedac"){
            tag.innerHTML = "<span style=\"color: " + getTierColor(0) + "; font-weight: bold;\">"
             + userName + "</span>";
        }
        else if (userData.success == false || userData.result.user.length == 0){
            tag.innerHTML = "<span style=\"color: " + getTierColor(0) + "\">"
             + userName + "</span>";
        }
        else{
            const user = userData.result.user[0];
            //console.log("api", user);

            tag.innerHTML = "<img class=\"solvedac-tier\" src=\"" + getFileName(user.level, false) + "\">" + "</img>"
             + " " + "<span style=\"color: " + getTierColor(user.level) + "; font-weight: bold\">"
             + userName + "</span>";
        }
    }
}

addUserTier();