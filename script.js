
// var names
const testerVersionName = "1.0 - Tester",
testerVersionDescription = "<ol> <li>Some bug fixed</li> <li>Permission request handle</li>",
testerVersionDownloadLink = "https://github.com/sahariyarahamad/sahariyarhost/raw/refs/heads/main/gontobbo-app/gontobbo_test.apk";


document.getElementById("icon-linkedin").src = "https://www.google.com/s2/favicons?sz=64&domain=linkedin.com";
document.getElementById("icon-facebook").src = "https://www.google.com/s2/favicons?sz=64&domain=facebook.com";
document.getElementById("icon-github").src = "https://www.google.com/s2/favicons?sz=64&domain=github.com";

document.getElementById("img-app-current-version").src="https://img.shields.io/github/v/release/sahariyarahamad/gontobbo";

document.getElementById("link-linkedin").href = "https://www.linkedin.com/in/sahariyarahamadbd";
document.getElementById("link-github").href = "https://www.github.com/sahariyarahamad/";
document.getElementById("link-facebook").href = "https://www.facebook.com/sahariyarahamadbd/";

const latestVersionURL = "https://github.com/sahariyarahamad/gontobbo/releases/download/v1.0/gontobbo.apk"

document.getElementById("app-download").href = latestVersionURL;
document.getElementById("app-download-bottom").href = latestVersionURL;



// for tester version and desc
document.getElementById("tv-tester-version").innerHTML = "<strong>Version name:</strong><br>" + testerVersionName;
document.getElementById("tv-tester-description").innerHTML = "<strong>Description:</strong><br>" + testerVersionDescription;
document.getElementById("tester-app-download").href = testerVersionDownloadLink;

const isTesterShow = true;


if (isTesterShow){

    window.addEventListener('DOMContentLoaded', () => {
        const params = new URLSearchParams(window.location.search);
        const sectionTester = document.getElementById('section-tester');
        if (params.has('t')){
            sectionTester.style.display = "block";
        }else{
            sectionTester.style.display = "none";
        }
    });
}else{
    document.getElementById('section-tester').style.display = "none";
}
