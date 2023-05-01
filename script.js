const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navEls = document.querySelectorAll(".nav");
const mainLogo = document.querySelector(".logo-big");
const aboutBtn = document.getElementById("about");
const portfolioBtn = document.getElementById("portfolio");
const contactsBtn = document.getElementById("contacts");
const aboutBtnPhone = document.getElementById("phone-about");
const portfolioBtnPhone = document.getElementById("phone-portfolio");
const contactsBtnPhone = document.getElementById("phone-contacts");
const aboutContent = document.querySelector(".content-about");
const portfolioContent = document.querySelector(".content-portfolio");
const contactsContent = document.querySelector(".content-contacts");
const allContent = document.querySelectorAll(".content");
const aboutHeaderHello = document.querySelector(".hello");
const aboutHeaderDev = document.querySelector(".developer");
const socialIcons = document.querySelectorAll(".social-icon");
const panels = document.querySelectorAll(".panel");

const aboutHeaderElements = [aboutHeaderHello, aboutHeaderDev];

function toggleNav() {
  navEls.forEach((navEl) => navEl.classList.toggle("visible"));
  mainLogo.classList.toggle("show-logo");
  allContent.forEach((contentEl) => contentEl.classList.remove("show"));
}

function showContent(content) {
  allContent.forEach((contentEl) => contentEl.classList.remove("show"));
  content.classList.add("show");
}

function aboutHeaderAppearance() {
  aboutHeaderElements.forEach((element) => element.classList.add("active"));
}

function showSocialIcons() {
  socialIcons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add("active");
    }, index * 500);
  });
}

openBtn.addEventListener("click", () => {
  toggleNav();
  setTimeout(() => {
    showContent(aboutContent);
    aboutHeaderElements.forEach((element) => element.classList.add("active"));
  }, "1000");
});
closeBtn.addEventListener("click", () => {
  toggleNav();
});

portfolioBtn.addEventListener("click", () => {
  showContent(portfolioContent);
  mainLogo.classList.remove("show-logo");
});

contactsBtn.addEventListener("click", () => {
  showContent(contactsContent);
  showSocialIcons();
  mainLogo.classList.remove("show-logo");
});

aboutBtn.addEventListener("click", () => {
  showContent(aboutContent);
  mainLogo.classList.remove("show-logo");
});

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

aboutBtnPhone.addEventListener("click", () => {
  showContent(aboutContent);
  aboutHeaderAppearance();
  mainLogo.classList.remove("show-logo");
});

portfolioBtnPhone.addEventListener("click", () => {
  showContent(portfolioContent);
  mainLogo.classList.remove("show-logo");
});

contactsBtnPhone.addEventListener("click", () => {
  mainLogo.classList.remove("show-logo");
  showContent(contactsContent);
  showSocialIcons();
});
