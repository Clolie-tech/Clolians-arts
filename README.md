# Sketch Art Portfolio Website

A modern, responsive portfolio website designed to showcase sketch art and illustrations.

## Live Demo

https://clolie-tech.github.io/Clolians-arts/

## Features

✨ **Modern Design**
- Clean and professional layout
- Smooth animations and transitions
- Responsive grid gallery

🌙 **Dark Mode**
- Toggle between light and dark themes
- Preference saved in local storage

📱 **Fully Responsive**
- Optimized for desktop, tablet, and mobile devices
- Adaptive layouts using CSS Grid and Flexbox

🎨 **Interactive Gallery**
- Click to view artwork details
- Modal popup with full artwork information
- Smooth hover effects

📧 **Contact Form**
- Easy-to-use contact section
- Form validation
- Call-to-action buttons

🔗 **Social Media Links**
- Quick access to social profiles
- Instagram, Twitter, Pinterest, LinkedIn integration

## Project Structure

```
SketchArtPortfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling and responsive design
├── js/
│   └── main.js         # JavaScript functionality
├── images/
│   └── gallery/        # Gallery images folder
└── README.md           # This file
```

## How to Use

1. **Open the website**: Simply open `index.html` in your web browser
2. **Add your artwork**: Replace the sample artworks in `js/main.js` with your own
3. **Customize**: Edit the content in `index.html` with your information
4. **Styling**: Modify `css/style.css` to match your preferred colors and style

## Customization

### Add Your Artworks

Edit the `artworks` array in `js/main.js`:

```javascript
const artworks = [
    {
        id: 1,
        title: "Your Artwork Title",
        category: "Your Category",
        description: "Your artwork description"
    },
    // Add more artworks...
];
```

### Update Personal Information

Edit sections in `index.html`:
- Hero section: Customize the welcome message
- About section: Add your bio and statistics
- Contact section: Update social media links

### Change Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... more colors */
}
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

You can deploy this website to:
- **GitHub Pages**: Free static hosting
- **Netlify**: Easy deployment from Git
- **Vercel**: Optimized for static sites
- **Any web hosting**: Upload files via FTP

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (Vanilla)**: No dependencies, lightweight interactivity
- **Font Awesome**: Icons library

## Future Enhancements

Consider adding:
- High-resolution image uploads
- Backend for form submissions
- Search/filter functionality
- Blog section for art process posts
- E-commerce for prints/commissions
- Social media feed integration

## License

This template is free to use and modify for your personal portfolio.

## Support

For issues or questions, feel free to customize the code as needed. This is a static website template with no backend requirements.

---

Happy showcasing your sketch art! 🎨
