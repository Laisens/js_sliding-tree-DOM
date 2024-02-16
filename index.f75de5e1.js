"use strict";
document.addEventListener("click", (e)=>{
    if (e.target === document.body) return;
    if (!e.target.firstElementChild) return;
    e.target.firstElementChild.hidden = !e.target.firstElementChild.hidden;
});

//# sourceMappingURL=index.f75de5e1.js.map
