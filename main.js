const switchDevEmail = (email) => {
    if(!email) {
        document.querySelector("#dev-email-div").remove();
        return;
    }
    const domElement = document.querySelector("#dev-email");
    domElement.innerText = email;
}

switchDevEmail("kaihsin.lin.id@gmail.com");