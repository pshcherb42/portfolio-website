// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Hamburger animation
hamburger.addEventListener('click', function() {
    const bars = this.querySelectorAll('.bar');
    bars[0].style.transform = hamburger.classList.contains('active') ? 
        'rotate(-45deg) translate(-5px, 6px)' : 'none';
    bars[1].style.opacity = hamburger.classList.contains('active') ? '0' : '1';
    bars[2].style.transform = hamburger.classList.contains('active') ? 
        'rotate(45deg) translate(-5px, -6px)' : 'none';
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
    }
    
    lastScroll = currentScroll;
});

// Skill bars animation on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
});

// Observe all blog cards
document.querySelectorAll('.blog-card').forEach(card => {
    observer.observe(card);
});

// Observe all testimonial cards
document.querySelectorAll('.testimonial-card').forEach(card => {
    observer.observe(card);
});

// Booking form handling
const bookingForm = document.getElementById('bookingForm');
const fileInput = document.getElementById('reference');
const fileList = document.getElementById('fileList');
let selectedFiles = [];

// File upload handling
if (fileInput) {
    fileInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        
        files.forEach(file => {
            // Check file type
            const validTypes = ['image/jpeg', 'image/png', 'application/pdf', 'text/plain'];
            const validExtensions = ['.jpg', '.jpeg', '.png', '.pdf', '.txt'];
            const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
            
            if (validTypes.includes(file.type) || validExtensions.includes(fileExtension)) {
                selectedFiles.push(file);
            } else {
                alert(`File "${file.name}" is not a valid format. Please use JPEG, PNG, PDF, or TXT files.`);
            }
        });
        
        displayFileList();
        e.target.value = ''; // Reset input to allow selecting the same file again
    });
}

function displayFileList() {
    if (!fileList) return;
    
    fileList.innerHTML = '';
    
    selectedFiles.forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        
        const fileName = document.createElement('div');
        fileName.className = 'file-name';
        fileName.innerHTML = `<i class="fas fa-file"></i> ${file.name} (${formatFileSize(file.size)})`;
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'file-remove';
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.type = 'button';
        removeBtn.onclick = () => removeFile(index);
        
        fileItem.appendChild(fileName);
        fileItem.appendChild(removeBtn);
        fileList.appendChild(fileItem);
    });
}

function removeFile(index) {
    selectedFiles.splice(index, 1);
    displayFileList();
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Drag and drop for file upload
const fileUploadLabel = document.querySelector('.file-upload-label');

if (fileUploadLabel) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        fileUploadLabel.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    ['dragenter', 'dragover'].forEach(eventName => {
        fileUploadLabel.addEventListener(eventName, () => {
            fileUploadLabel.style.borderColor = 'var(--primary-color)';
            fileUploadLabel.style.backgroundColor = 'white';
        });
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        fileUploadLabel.addEventListener(eventName, () => {
            fileUploadLabel.style.borderColor = 'var(--border-color)';
            fileUploadLabel.style.backgroundColor = 'var(--bg-light)';
        });
    });
    
    fileUploadLabel.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = Array.from(dt.files);
        
        files.forEach(file => {
            const validTypes = ['image/jpeg', 'image/png', 'application/pdf', 'text/plain'];
            const validExtensions = ['.jpg', '.jpeg', '.png', '.pdf', '.txt'];
            const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
            
            if (validTypes.includes(file.type) || validExtensions.includes(fileExtension)) {
                selectedFiles.push(file);
            } else {
                alert(`File "${file.name}" is not a valid format. Please use JPEG, PNG, PDF, or TXT files.`);
            }
        });
        
        displayFileList();
    });
}

// Booking form submission
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(bookingForm);
        
        // Add files to form data
        selectedFiles.forEach(file => {
            formData.append('reference', file);
        });
        
        // Basic validation
        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const phone = formData.get('phone')?.trim();
        const city = formData.get('city')?.trim();
        const previousClient = formData.get('previous-client');
        const placement = formData.get('placement')?.trim();
        const size = formData.get('size')?.trim();
        const description = formData.get('description')?.trim();
        
        if (name && email && phone && city && previousClient && placement && size && description) {
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert with summary
            let summary = `Booking Request Summary:\n\n`;
            summary += `Name: ${name}\n`;
            summary += `Email: ${email}\n`;
            summary += `Phone: ${phone}\n`;
            summary += `City: ${city}\n`;
            summary += `Previous Client: ${previousClient}\n`;
            summary += `Placement: ${placement}\n`;
            summary += `Size: ${size}\n`;
            summary += `Files: ${selectedFiles.length} file(s) attached\n\n`;
            summary += `Thank you! I will review your request and get back to you within 24-48 hours.`;
            
            alert(summary);
            
            // Reset form
            bookingForm.reset();
            selectedFiles = [];
            displayFileList();
        } else {
            alert('Please fill in all required fields marked with *');
        }
    });
}

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add fade-in animation to sections on scroll
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(section);
});

// Prevent navbar from hiding content when clicking on anchor links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        setTimeout(() => {
            window.scrollBy(0, -70); // Offset for fixed navbar
        }, 10);
    });
});

// Console message for developers
console.log('%c👋 Hello, Developer!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository!', 'font-size: 14px; color: #8b5cf6;');
