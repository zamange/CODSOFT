function toggleAboutBox() {
    var aboutBox = document.getElementById("aboutBox");
    if (aboutBox.style.display === "none") {
        aboutBox.style.display = "block";
    } else {
        aboutBox.style.display = "none";
    }
}


function toggleSkillsBox() {
    var skillsContainer = document.getElementById("skillscontainer");
    if (skillsContainer.style.display === "none") {
        skillsContainer.style.display = "block";
        skillsContainer.classList.add("glow");
    } else {
        skillsContainer.style.display = "none";
        skillsContainer.classList.remove("glow");
    }
}

function toggleProjectsBox() {
    var projectsContainer = document.getElementById("projectsContainer");
    if (projectsContainer.style.display === "none") {
        projectsContainer.style.display = "block";
    } else {
        projectsContainer.style.display = "none";
    }
}

function toggleContactMeBox() {
    var ContactBox = document.getElementById("ContactBox");
    if (ContactBox.style.display === "none") {
        ContactBox.style.display = "block";
    } else {
        ContactBox.style.display = "none";
    }
}

