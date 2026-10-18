const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");

function closeNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  siteNavigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute(
    "aria-label",
    isExpanded ? "Open navigation" : "Close navigation",
  );
  siteNavigation.classList.toggle("is-open", !isExpanded);
});

siteNavigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNavigation();
  }
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const message = [
    "Hi TechFix, I'm " + formData.get("name") + ".",
    "My email is " + formData.get("email") + ".",
    "I need help with: " + formData.get("message"),
  ].join("\n");
  const whatsappUrl =
    "https://wa.me/2347018342302?text=" + encodeURIComponent(message);

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
