document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year')
  if (yearEl) yearEl.textContent = new Date().getFullYear()

  const toggle = document.getElementById('nav-toggle')
  const navList = document.getElementById('nav-list')
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      const showing = navList.style.display === 'flex'
      navList.style.display = showing ? 'none' : 'flex'
      navList.style.flexDirection = 'column'
    })
  }

  const resumeLink = document.getElementById('resume-download')
  if (resumeLink && resumeLink.getAttribute('href').includes('assets/resume.pdf')) {
    resumeLink.addEventListener('click', () => {
      console.info('Replace assets/resume.pdf with your actual resume before submission.')
    })
  }
})