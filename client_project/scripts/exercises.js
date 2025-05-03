document.addEventListener("DOMContentLoaded", () => {
    
    console.log("Code is running");

    const content = {
        1: `<div class="test-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>`,
        2: {content: `<div>test</div>`},
        3: {}
    };
    
    const mainContent= document.getElementById("main-content");
    const items = document.getElementsByClassName("sidebar-item");
    
    Array.from(items).forEach((item) => {
        item.addEventListener("click", () => {
            const id = item.dataset.id;
            mainContent.innerHTML = content[id].content;
        });
    });

});