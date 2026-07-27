const siteContent = {
  brandName: "Sandra Lim",
  heroTitle: "Perhaps you have always carried more wisdom than you realised.",
  heroSubtitle:
    "This website is being shaped as a quiet home for philosophy, reflection, and work that helps people trust themselves more deeply.",
  philosophyTitle: "We do not need to be fixed.",
  philosophySubheading: "We need to be remembered.",
  philosophyText:
    "The work begins with the belief that every person already possesses an inner core of wisdom. What is needed is space, reflection and the courage to listen more closely.",
  philosophyQuote:
    "A quiet conviction, made visible.",
  forAudience: [
    "People who feel successful yet disconnected.",
    "People who think deeply and sense there is another way of living.",
    "People who are ready to take responsibility for what they discover."
  ],
  notForAudience: [
    "People looking for a quick fix or motivational hype.",
    "Anyone seeking someone to give them answers.",
    "Visitors who want dependency rather than self-leadership."
  ],
  approach: [
    { title: "Inner clarity", text: "Create space for reflection so people can hear what has long been waiting to be heard." },
    { title: "Self-trust", text: "Support the return of trust in one's own judgment, values and inner authority." },
    { title: "Courageous action", text: "Help people move forward with steadiness, not force, once clarity has emerged." }
  ],
  contactTitle: "A conversation can begin here",
  contactText:
    "Reach out via email or book directly through Calendly. Complimentary discovery sessions are available for those who are genuinely interested in exploring this work."
};

function populateContent() {
  document.getElementById("heroTitle").textContent = siteContent.heroTitle;
  document.getElementById("heroSubtitle").textContent = siteContent.heroSubtitle;
  document.getElementById("philosophyTitle").textContent = siteContent.philosophyTitle;
  document.getElementById("philosophySubheading").textContent = siteContent.philosophySubheading;
  document.getElementById("philosophyText").textContent = siteContent.philosophyText;
  document.getElementById("philosophyQuote").textContent = siteContent.philosophyQuote;
  document.getElementById("contactTitle").textContent = siteContent.contactTitle;
  document.getElementById("contactText").textContent = siteContent.contactText;
  document.getElementById("brandName").textContent = siteContent.brandName;
  document.getElementById("year").textContent = new Date().getFullYear();

  const forList = document.getElementById("forList");
  forList.innerHTML = siteContent.forAudience.map((item) => `<li>${item}</li>`).join("");

  const notForList = document.getElementById("notForList");
  notForList.innerHTML = siteContent.notForAudience.map((item) => `<li>${item}</li>`).join("");

  const approachList = document.getElementById("approachList");
  approachList.innerHTML = siteContent.approach
    .map(
      (item) => `
        <article class="card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", populateContent);
