// script.js

// Function to format numbers for display
function formatNumber(value) {
    if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M'; // Convert to Millions
    } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'K'; // Convert to Thousands
    } else {
        return value.toString(); // Keep as is
    }
}

// Function to animate numbers
function animateNumbers(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const increment = target / 100; // Adjust the speed
    let current = 0;

    const updateNumber = () => {
        current += increment;

        if (current >= target) {
            element.innerText = formatNumber(target);
        } else {
            element.innerText = formatNumber(current);
            requestAnimationFrame(updateNumber);
        }
    };

    updateNumber();
}

// Intersection Observer to detect when stats section is in view
const statsObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const numbers = document.querySelectorAll('.stat-number');
                numbers.forEach((number) => {
                    if (!number.classList.contains('animated')) {
                        animateNumbers(number);
                        number.classList.add('animated'); // Prevent re-animation
                    }
                });
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    },
    {
        threshold: 0.2, // Trigger when 20% of the section is visible
    }
);

// Start observing the milestones section
const milestonesSection = document.getElementById('milestones');
statsObserver.observe(milestonesSection);




// script.js

// Feature switching logic
const features = document.querySelectorAll('.feature-item');
const featureImage = document.querySelector('.feature-image');
const featureDescription = document.querySelector('.feature-description');

// Data for each feature
const featureData = {
    1: {
        image: './images/fea1.jpg',
    },
    2: {
        image: './images/fea2.jpg',
    },
    3: {
        image: './images/fea3.jpg',
    },
    4: {
        image: './images/fea4.jpg',
    },
    5: {
        image: './images/fea5.jpg',
    },
};

// Event listener for switching features
features.forEach((feature) => {
    feature.addEventListener('click', () => {
        // Remove active class from all items
        features.forEach((item) => item.classList.remove('active'));

        // Add active class to the clicked item
        feature.classList.add('active');

        // Update image and description
        const featureId = feature.getAttribute('data-feature');
        featureImage.src = featureData[featureId].image;
        featureDescription.textContent = featureData[featureId].description;
    });
});



// Data for each feature
const featureData1 = {
    1: {
        image: "./images/doctor.jpg", // Replace with your image path
        title: "Consult Doctor",
        description: "Choose experts from any department",
        doctorName: "Dr. Shahid Iqbal",
        sessionTime: "03:00 PM - 05:00 PM",
    },
    2: {
        image: "./images/medicine.jpg", // Replace with your image path
        title: "Medicine",
        description: "Walk 150 minutes per week; 5 days x 30 min.",
        doctorName: "Dr. Sarah Connor",
        sessionTime: "09:00 AM - 11:00 AM",
    },
    3: {
        image: "./images/pharmacy.jpg", // Replace with your image path
        title: "Pharmacy",
        description: "coughs, colds, sore throats, ear infections and aches and pains. ",
        doctorName: "Dr. Alex Ford",
        sessionTime: "01:00 PM - 03:00 PM",
    },
    4: {
        image: "./images/vital.jpg", // Replace with your image path
        title: "Vitals",
        description: "measurable values that indicate a person's overall state of health.",
        doctorName: "Dr. Emma Stone",
        sessionTime: "05:00 PM - 07:00 PM",
    },
};

// Select all feature list items
const featuresList = document.querySelectorAll('.features-list1 li');

// Update content dynamically
featuresList.forEach((feature) => {
    feature.addEventListener('click', () => {
        // Get the data-feature attribute value
        const featureId = feature.getAttribute('data-feature');

        // Get the corresponding data from the featureData object
        const data = featureData1[featureId];

        // Update the left column content
        document.querySelector('.doctor-image1').src = data.image;
        document.querySelector('.doctor-info1 h4').textContent = data.doctorName;
        document.querySelector('.doctor-info1 p').textContent = data.sessionTime;
        document.querySelector('.card1 p').textContent = data.description;

        // Highlight the selected feature
        featuresList.forEach((item) => item.classList.remove('active'));
        feature.classList.add('active');
    });
});



const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


