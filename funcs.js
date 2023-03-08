function open_url (url) {
    window.open(url, "_blank").focus()
}

function copy (args) {
    navigator.clipboard.writeText(args).then(function() {
        alert("Copied to clipboard");
    }, function(err) {
        alert("Cant copy tag to buffer (.ZΞRO#4731).");
    });

}

function go_home() {
    window.location.href = "index.html";
}

function go_contacts() {
    window.location.href = "contacts.html";
}

function go_projects() {
    window.location.href = "projects.html";
}