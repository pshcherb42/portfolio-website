# Portfolio Website

A beautiful, responsive, and modern portfolio website to showcase your skills, projects, and experience. Perfect for developers, designers, and creative professionals.

## ✨ Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean and professional design with smooth animations
- **Easy to Customize** - Simple HTML, CSS, and JavaScript that's easy to modify
- **Sections Include:**
  - Hero section with introduction
  - About Me section
  - Skills showcase with progress bars
  - Projects portfolio
  - Contact form
  - Social media links

## 🚀 Quick Start

### Option 1: View Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies required.

### Option 2: Host Online

You can host this website for free using:

- **GitHub Pages**: 
  1. Go to your repository settings
  2. Navigate to "Pages" section
  3. Select your branch (usually `main`) and click Save
  4. Your site will be available at `https://yourusername.github.io/portfolio-website`

- **Netlify**:
  1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
  2. Your site will be live instantly

- **Vercel**:
  1. Import your repository to [Vercel](https://vercel.com)
  2. Deploy with one click

## 🎨 Customization Guide

### 1. Personal Information

Edit `index.html` and replace the following placeholders:

- **Your Name**: Replace "Your Name" in the hero section (line ~34) and footer (line ~268)
- **Your Title**: Update "Web Developer | Designer | Problem Solver" (line ~35)
- **Email**: Replace "your.email@example.com" throughout the file
- **Phone**: Update "+1 (123) 456-7890" in the contact section
- **Location**: Change "Your City, Country" to your actual location
- **Education**: Update "Your Degree/Education" in the about section

### 2. About Section

Replace the placeholder text in the About section (lines ~60-62) with your own story:
- Your background
- What you're passionate about
- Your experience and interests

### 3. Skills

Modify the skills in the Skills section (lines ~80-133):
- Change the skill names
- Update the icon classes (using [Font Awesome icons](https://fontawesome.com/icons))
- Adjust the skill progress bar widths (e.g., `style="width: 90%"`)

### 4. Projects

Update the Projects section (lines ~143-218) with your actual projects:
- Replace project titles and descriptions
- Update technology tags
- Add links to your GitHub repositories and live demos
- To add project images, replace the placeholder divs with: `<img src="path/to/image.jpg" alt="Project">`

### 5. Contact Information

Update the Contact section (lines ~233-260):
- Add your real email, phone, and location
- Update social media links (GitHub, LinkedIn, Twitter, etc.)
- The form currently shows an alert - to make it functional, integrate with a service like:
  - [Formspree](https://formspree.io/)
  - [EmailJS](https://www.emailjs.com/)
  - Your own backend

### 6. Colors and Styling

To change the color scheme, edit the CSS variables in `styles.css` (lines ~7-15):

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary brand color */
    --text-color: #1f2937;         /* Main text color */
    --text-light: #6b7280;         /* Light text color */
    /* ... other colors */
}
```

### 7. Profile Image

To add a real profile photo:

1. Add your image to the project folder (e.g., `profile.jpg`)
2. In `index.html`, replace this:
   ```html
   <div class="profile-placeholder">
       <i class="fas fa-user"></i>
   </div>
   ```
   
   With this:
   ```html
   <img src="profile.jpg" alt="Your Name" style="width: 250px; height: 250px; border-radius: 50%; object-fit: cover;">
   ```

### 8. Project Images

To add project screenshots:

1. Add your images to the project folder (or create an `images` folder)
2. Replace the project placeholder divs with:
   ```html
   <img src="images/project1.jpg" alt="Project Name">
   ```

## 📁 File Structure

```
portfolio-website/
│
├── index.html      # Main HTML file with all content
├── styles.css      # All styling and responsive design
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript** - Interactive features
- **Font Awesome** - Icons (loaded via CDN)

## 🎯 Browser Support

This website works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## 💡 Tips for Beginners

1. **Start Small**: First, just update your personal information
2. **One Section at a Time**: Customize each section individually
3. **Test Often**: Open the file in your browser after each change
4. **Use Browser DevTools**: Right-click and "Inspect" to see how things work
5. **Backup**: Keep a copy of the original files before making changes

## 🎓 Learning Resources

If you're new to web development, here are some helpful resources:

- [HTML Tutorial - W3Schools](https://www.w3schools.com/html/)
- [CSS Tutorial - W3Schools](https://www.w3schools.com/css/)
- [JavaScript Tutorial - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Responsive Design - Google](https://web.dev/responsive-web-design-basics/)

## 📄 License

Feel free to use this template for your personal portfolio. No attribution required.

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to open an issue or submit a pull request!

## 📧 Contact

If you have questions about customizing this template, feel free to reach out!

---

**Good luck with your portfolio! 🚀**
