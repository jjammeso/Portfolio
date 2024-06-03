const { projects } = window

var lastScrollTop = 0;
navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-80px';
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
})

const menu = document.querySelector('.menu')
let element = document.querySelector('.navbar ul');

element.addEventListener('click', () => {
    if (window.innerWidth <= 400) {
        element.style.display = 'None'
        menu.src = './assets/icons8-menu.svg'
    }
})

function handleResize() {
    if (window.innerWidth > 400) {
        element.style.display = 'flex';
    } else {
        element.style.display = 'None';
        menu.src = './assets/icons8-menu.svg'
    }
}

function renderProjects() {
    if (window.innerWidth < 400) {
        element.style.display = 'none';
    }
    const projects = window.projects;

    const projectsContainer = document.getElementById('projects')


    projects.forEach(project => {
        const card = document.createElement('div')
        card.className = 'projects-card'

        card.innerHTML = `
    <h3> ${project.name}</h3>
    <div class="card">
        <div class="projects-card-left">
        
                    <img src="${project.image}" alt="Screenshot of ${project.name}" />
        </div>
            <div class="projects-card-right">
                <p><strong>Name:</strong> ${project.name}</p>
                <p><strong>Developers tools:</strong> ${project.tools.map((item) => `<span class='tools'>${item}</span>`
        ).join('  ')}</p>
                <p><strong>Description: </strong>${project.description}</p>
                <p class='links'><strong>Link:</strong> ${project.link.map((link) => (
            `<a target="_blank" href="${link}">${link}</a><br/>`
        )).join(' ')}</p>
                <p><strong>github:</strong> <a target="_blank" href='${project.github}'>${project.github}</a></p>
                <p class='note'><strong>*Note: </strong>${project.note}</p>
            </div>
    </div>
        `;
        projectsContainer.appendChild(card)
    });
    const note = document.querySelectorAll('.note')
    console.log(note)
    note.forEach((n)=>{
        if(n.outerText=="*Note:null") n.style.display = 'none';
    })
}


menu.addEventListener('click', () => {
    if (element.style.display == 'none') {
        menu.src = './assets/cross-svgrepo-com.svg'
        element.style.display = 'flex'
    } else {
        element.style.display = 'none'
        menu.src = './assets/icons8-menu.svg'
    }
})

function sendMail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var emailBody = 'Name: ' + encodeURIComponent(name) +
        '%0AEmail: ' + encodeURIComponent(email) +
        '%0A%0AMessage: ' + encodeURIComponent(message);

    var mailtoLink = 'mailto:sjjamtsho@gmail.com?subject=Message to Sonam &body=' + emailBody;

    window.location.href = mailtoLink;
}

document.addEventListener('DOMContentLoaded', renderProjects)
window.addEventListener('resize', handleResize)


