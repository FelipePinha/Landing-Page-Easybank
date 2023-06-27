const openMenuBtn = document.querySelectorAll(".show");

openMenuBtn.forEach(item => {
    item.addEventListener("click", () => {
        if (item.id === "open") {
            item.style.display = "none";
            let close = document.querySelector("#close");
            close.style.display = "block";
        } else {
            item.style.display = "none";
            let open = document.querySelector("#open");
            open.style.display = "block";
        }

        const mobileMenuItems = document.querySelector(".items-menu-mobile");

        mobileMenuItems.classList.toggle("open-menu-mobile");
    });
});
