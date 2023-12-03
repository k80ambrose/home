// Function to filter projects by tag
function filterProjects(tag) {
    // Convert the tag to lowercase to match the class names
    var filterClass = tag.toLowerCase();
    // Get all project boxes
    var projects = document.querySelectorAll('.projectbox');
    projects.forEach(project => {
      // Check if the project has the tag as one of its classes
      if (project.classList.contains(filterClass)) {
        project.style.display = 'block'; // Show the project
      } else {
        project.style.display = 'none'; // Hide the project
      }
    });
  }
  
  // Event listener for each tag
  document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
      filterProjects(this.textContent);
    });
  });
  