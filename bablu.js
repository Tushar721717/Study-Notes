function searchNotes() {

    let search = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    if (search === "") {
        alert("Please enter something to search.");
        return;
    }

    if (
        search.includes("math") ||
        search.includes("mathematics")
    ) {
        window.location.href = "notes/mathematics.html";
    }

    else if (search.includes("java")) {
        window.location.href = "notes/java.html";
    }

    else if (search.includes("python")) {
        window.location.href = "notes/python.html";
    }

    else {
        alert("No notes found for: " + search);
        
    }
}