<<<<<<< HEAD


const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

// Load saved activities
let activities = JSON.parse(localStorage.getItem("activities")) || [];


// DISPLAY ACTIVITIES
function displayActivities() {

    activityList.innerHTML = "";

    activities.forEach(function (activity, index) {

        // Create list item
        const li = document.createElement("li");

        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = activity.completed || false;

        checkbox.addEventListener("change", function () {
            activities[index].completed = checkbox.checked;
            saveActivities();
        });

        // Create activity name
        const span = document.createElement("span");

        span.textContent =
            activity.name + " (" + (activity.category || "Uncategorized") + ")";

        if (activity.completed) {
            span.style.textDecoration = "line-through";
        }

        // CREATE EDIT BUTTON
        const editButton = document.createElement("button");

        editButton.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>
            </svg>
        `;

        editButton.classList.add("icon-button", "edit-button");

        editButton.addEventListener("click", function () {

            const newName = prompt("Edit your activity:", activity.name);

            if (newName !== null && newName.trim() !== "") {
                activities[index].name = newName.trim();
                saveActivities();
            }

        });


        // CREATE DELETE BUTTON
        const deleteButton = document.createElement("button");

        deleteButton.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14H6L5 6"/>
                <path d="M10 11v6"/>
                <path d="M14 11v6"/>
                <path d="M9 6V4h6v2"/>
            </svg>
        `;

        deleteButton.classList.add("icon-button", "delete-button");

        deleteButton.addEventListener("click", function () {

            const confirmDelete = window.confirm(
                "Are you sure you want to delete this activity?"
            );

            if (confirmDelete) {
                activities.splice(index, 1);
                saveActivities();
            }

        });


        // ADD ELEMENTS TO LIST
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        activityList.appendChild(li);

    });

    updateProgress();

}


// ADD NEW ACTIVITY
function addActivity() {

    const activityName = activityInput.value.trim();

    if (activityName === "") {
        alert("Please enter an activity!");
        return;
    }

    const category = categoryInput.value;

    activities.push({
        name: activityName,
        category: category,
        completed: false,
        date: new Date().toLocaleDateString()

    });

    activityInput.value = "";

    saveActivities();

}


// SAVE ACTIVITIES
function saveActivities() {

    localStorage.setItem("activities", JSON.stringify(activities));

    displayActivities();

}


// UPDATE PROGRESS AND STATISTICS
function updateProgress() {

    const total = activities.length;

    const completed = activities.filter(function (activity) {
        return activity.completed === true;
    }).length;

    const pending = total - completed;

    let percentage = 0;

    if (total > 0) {
        percentage = Math.round((completed / total) * 100);
    }

    progressText.textContent = percentage + "% Completed";

    progressBar.value = percentage;

    totalTasks.textContent = total;

    completedTasks.textContent = completed;

    pendingTasks.textContent = pending;

}


// DISPLAY CURRENT DATE AND TIME
function updateDateTime() {

    const now = new Date();

    const date = now.toLocaleDateString("en-KE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const time = now.toLocaleTimeString("en-KE");

    document.getElementById("currentDate").textContent = date;

    document.getElementById("currentTime").textContent = time;

}


// ADD BUTTON EVENT
addButton.addEventListener("click", addActivity);


// UPDATE DATE AND TIME
updateDateTime();

setInterval(updateDateTime, 1000);

// DISPLAY ACTIVITY HISTORY
function displayHistory() {

    // Clear previous history
    historyList.innerHTML = "";

    // Check whether activities exist
    if (activities.length === 0) {

        historyList.textContent = "No activities recorded yet.";
        return;

    }

    // Go through every saved activity
    activities.forEach(function(activity) {

        // Create a new list item
        const li = document.createElement("li");

        // Get activity details
        const name = activity.name || "Unnamed Activity";
        const category = activity.category || "Uncategorized";
        const date = activity.date || "Date unavailable";

        // Get completion status
        const status = activity.completed ? "Completed" : "Pending";

        // Display everything
        li.textContent =
            name + " - " +
            category + " - " +
            status + " - Created: " + date;

        // Add item to history
        historyList.appendChild(li);

    });

}

// NAVIGATION SYSTEM

const navButtons = document.querySelectorAll(".nav-btn");

const activitySection = document.querySelector(".activity-section");
const historyPage = document.getElementById("historyPage");
const historylist = document.getElementById("historyList");

// NAVIGATION
navButtons.forEach(function(button){

    button.addEventListener("click", function() {

        const page = button.getAttribute("data-page");

        if (page == "home") {

            activitySection.style.display = "block";
            historyPage.style.display = "none";
        } else if (page === "history") {

            activitySection.style.display = "nones"
            historyPage.style.display = "block";

            displayHistory();

        }


    });
});

// DISPLAY SAVED ACTIVITIES WHEN PAGE OPENS
displayActivities();
=======


const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

// Load saved activities
let activities = JSON.parse(localStorage.getItem("activities")) || [];


// DISPLAY ACTIVITIES
function displayActivities() {

    activityList.innerHTML = "";

    activities.forEach(function (activity, index) {

        // Create list item
        const li = document.createElement("li");

        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = activity.completed || false;

        checkbox.addEventListener("change", function () {
            activities[index].completed = checkbox.checked;
            saveActivities();
        });

        // Create activity name
        const span = document.createElement("span");

        span.textContent =
            activity.name + " (" + (activity.category || "Uncategorized") + ")";

        if (activity.completed) {
            span.style.textDecoration = "line-through";
        }

        // CREATE EDIT BUTTON
        const editButton = document.createElement("button");

        editButton.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>
            </svg>
        `;

        editButton.classList.add("icon-button", "edit-button");

        editButton.addEventListener("click", function () {

            const newName = prompt("Edit your activity:", activity.name);

            if (newName !== null && newName.trim() !== "") {
                activities[index].name = newName.trim();
                saveActivities();
            }

        });


        // CREATE DELETE BUTTON
        const deleteButton = document.createElement("button");

        deleteButton.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14H6L5 6"/>
                <path d="M10 11v6"/>
                <path d="M14 11v6"/>
                <path d="M9 6V4h6v2"/>
            </svg>
        `;

        deleteButton.classList.add("icon-button", "delete-button");

        deleteButton.addEventListener("click", function () {

            const confirmDelete = window.confirm(
                "Are you sure you want to delete this activity?"
            );

            if (confirmDelete) {
                activities.splice(index, 1);
                saveActivities();
            }

        });


        // ADD ELEMENTS TO LIST
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        activityList.appendChild(li);

    });

    updateProgress();

}


// ADD NEW ACTIVITY
function addActivity() {

    const activityName = activityInput.value.trim();

    if (activityName === "") {
        alert("Please enter an activity!");
        return;
    }

    const category = categoryInput.value;

    activities.push({
        name: activityName,
        category: category,
        completed: false,
        date: new Date().toLocaleDateString()

    });

    activityInput.value = "";

    saveActivities();

}


// SAVE ACTIVITIES
function saveActivities() {

    localStorage.setItem("activities", JSON.stringify(activities));

    displayActivities();

}


// UPDATE PROGRESS AND STATISTICS
function updateProgress() {

    const total = activities.length;

    const completed = activities.filter(function (activity) {
        return activity.completed === true;
    }).length;

    const pending = total - completed;

    let percentage = 0;

    if (total > 0) {
        percentage = Math.round((completed / total) * 100);
    }

    progressText.textContent = percentage + "% Completed";

    progressBar.value = percentage;

    totalTasks.textContent = total;

    completedTasks.textContent = completed;

    pendingTasks.textContent = pending;

}


// DISPLAY CURRENT DATE AND TIME
function updateDateTime() {

    const now = new Date();

    const date = now.toLocaleDateString("en-KE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const time = now.toLocaleTimeString("en-KE");

    document.getElementById("currentDate").textContent = date;

    document.getElementById("currentTime").textContent = time;

}


// ADD BUTTON EVENT
addButton.addEventListener("click", addActivity);


// UPDATE DATE AND TIME
updateDateTime();

setInterval(updateDateTime, 1000);

// DISPLAY ACTIVITY HISTORY
function displayHistory() {

    // Clear previous history
    historyList.innerHTML = "";

    // Check whether activities exist
    if (activities.length === 0) {

        historyList.textContent = "No activities recorded yet.";
        return;

    }

    // Go through every saved activity
    activities.forEach(function(activity) {

        // Create a new list item
        const li = document.createElement("li");

        // Get activity details
        const name = activity.name || "Unnamed Activity";
        const category = activity.category || "Uncategorized";
        const date = activity.date || "Date unavailable";

        // Get completion status
        const status = activity.completed ? "Completed" : "Pending";

        // Display everything
        li.textContent =
            name + " - " +
            category + " - " +
            status + " - Created: " + date;

        // Add item to history
        historyList.appendChild(li);

    });

}

// NAVIGATION SYSTEM

const navButtons = document.querySelectorAll(".nav-btn");

const activitySection = document.querySelector(".activity-section");
const historyPage = document.getElementById("historyPage");
const historylist = document.getElementById("historyList");

// NAVIGATION
navButtons.forEach(function(button){

    button.addEventListener("click", function() {

        const page = button.getAttribute("data-page");

        if (page == "home") {

            activitySection.style.display = "block";
            historyPage.style.display = "none";
        } else if (page === "history") {

            activitySection.style.display = "nones"
            historyPage.style.display = "block";

            displayHistory();

        }


    });
});

// DISPLAY SAVED ACTIVITIES WHEN PAGE OPENS
displayActivities();
>>>>>>> f0cad02e9b8215c5caf20e56af69299351763659
