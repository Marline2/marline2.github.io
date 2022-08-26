const introduce = document.getElementById("introduce");
const project = document.getElementById("project");
const intro_page = document.getElementById("introduce_page");
const proj_page =  document.getElementById("project_page");

function change(id) {
  if (id === "project") {
    introduce.removeAttribute("target");
    project.setAttribute("target", "yes");
    intro_page.style.display='none';
    proj_page.style.display='flex';
    proj_page.style.animation = 'show 1s'
    
  } else {
    project.removeAttribute("target");
    introduce.setAttribute("target", "yes");
    intro_page.style.display='flex';
    proj_page.style.display='none';
    intro_page.style.animation = 'show 1s'
  }
}
