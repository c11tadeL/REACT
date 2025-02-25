const testimonials = [
    {
        text: "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
        name: "Jenny Wilson",
        role: "Vice President",
        avatar: "images/jenny.png"
    },
    {
        text: "Amazing experience! Their team is professional and delivers high-quality work every time.",
        name: "Paul Paul",
        role: "CEO, Tech Corp",
        avatar: "images/paul.jpg"
    },
    {
        text: "A pleasure to work with. They take the time to understand our needs and execute flawlessly.",
        name: "Sylvana Johnson",
        role: "Marketing Director",
        avatar: "images/sylvana.jpg"
    }
];

let currentIndex = 0;

function updateTestimonial() {
    document.getElementById("testimonial-text").textContent = testimonials[currentIndex].text;
    document.getElementById("testimonial-name").textContent = testimonials[currentIndex].name;
    document.getElementById("testimonial-role").textContent = testimonials[currentIndex].role;
    document.getElementById("testimonial-avatar").src = testimonials[currentIndex].avatar;
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}



