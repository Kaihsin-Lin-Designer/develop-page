const switchDevEmail = (email) => {
    if(!email) {
        document.querySelector("#dev-email-div").remove();
        return;
    }
    const domElement = document.querySelector("#dev-email");
    domElement.innerText = email;
    return;
}

const switchSiteName = (siteNameEn, siteNameZh) => {
    const enEls = document.querySelectorAll(".site-name-en");
    const zhEls = document.querySelectorAll(".site-name-zh");
    if(!siteNameEn || !siteNameZh) {
        enEls.forEach((enEl) => {
            enEl.innerText = "The Site";
        })
        zhEls.forEach((zhEl) => {
            zhEl.innerText = "網站";
        })
        return;
    }
    enEls.forEach((enEl) => {
        enEl.innerText = siteNameEn;
    })
    zhEls.forEach((zhEl) => {
        zhEl.innerText = siteNameZh;
    })
    return;
}

const switchPicture = (imgSrc, imgAlt) => {
    const imgEl = document.querySelector("#img");
    imgEl.setAttribute("src", imgSrc);
    imgEl.setAttribute("alt", imgAlt);
    return;
}

switchDevEmail("kaihsin.lin.id@gmail.com");
switchSiteName("NCKU Badminton Official Website", "成大羽球隊官網");
switchPicture("/picture/ncku-badminton-logo-1.svg", "NCKU Badminton Logo");