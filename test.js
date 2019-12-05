async function go() {
    setTimeout(() => {console.log("Second")}, 0)
}

go();
console.log("First")
