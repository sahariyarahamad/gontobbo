
document.getElementById("icon-linkedin").src = "https://www.google.com/s2/favicons?sz=64&domain=linkedin.com";
document.getElementById("icon-facebook").src = "https://www.google.com/s2/favicons?sz=64&domain=facebook.com";
document.getElementById("icon-github").src = "https://www.google.com/s2/favicons?sz=64&domain=github.com";

document.getElementById("img-app-current-version").src="https://img.shields.io/github/v/release/sahariyarahamad/alnova-news-app";

document.getElementById("link-linkedin").href = "https://www.linkedin.com/in/sahariyarahamadbd";
document.getElementById("link-github").href = "https://www.github.com/sahariyarahamad/";
document.getElementById("link-facebook").href = "https://www.facebook.com/sahariyarahamadbd/";

const latestVersionURL = "#"

document.getElementById("app-download").href = latestVersionURL;
document.getElementById("app-download-bottom").href = latestVersionURL;



// for tester version and desc
document.getElementById("tv-tester-version").textContent = "Tester version: 1.0 - Tester";
document.getElementById("tv-tester-description").textContent = "Description: 1.Some bug fixed, 2. Added change bus route option";
document.getElementById("tester-app-download").href = "https://github.com/sahariyarahamad/sahariyarhost/raw/refs/heads/main/gontobbo-app/gontobbo_test.apk";

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