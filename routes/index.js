const express = require('express');
const router = express.Router();

// Projects data
const projects = [
    {
        name: 'Eco Marketplace',
        description: 'Create a full-stack web application called "EcoMarketplace" that aims to promote sustainable living by connecting eco-conscious consumers with local eco-friendly businesses. Users can browse and purchase products from a variety of categories such as organic food, sustainable fashion, renewable energy solutions, and more. The application will feature user profiles, a rating and review system for products and businesses, secure payment processing, and integration with maps to help users locate nearby eco-friendly stores.'
    },
    // Add more project entries as needed
];

// Home Page
router.get('/', (req, res) => {
    res.render('home', {
        logoSrc: '/images/logo.png',
        name: 'Shivam Kishorbhai Balar',
        bio: 'I have expertise in creating brand-new responsive websites for many platforms using HTML5, CSS3, and JavaScript. I am very motivated and detail-oriented. I have practical experience building application-level code to deal with APIs and a solid understanding of the Software Development Life Cycle and Agile Methodology. I have exceptional problem-solving abilities, and the capacity to resolve client disputes and accurately manage crisis situations in accordance with corporate policies and procedures. I am well-organized and have good time management abilities. I can prioritize my tasks and operate under pressure in a demanding setting while still meeting deadlines.',
        email: 'shivambalar786@gmail.com',
        phone: '6478306878',
        address: 'Toronto, ON'
        
    });
});

// About Me Page
router.get('/about', (req, res) => {
    res.render('about', {
        name: 'Shivam Kishorbhai Balar',
        bio: 'Shivam is a versatile web designer due to his extensive history in graphic and web design. His dedication to continuously learning about new web design trends and concepts has made him a valuable member of the team. With eight years of experience and a master\'s in web design, his expertise can help customers modernize with websites and appeal to expanding customer populations.',
        resumeLink: 'https://drive.google.com/file/d/1_g1sA8aRMnq8VcMwQanCoibVNxyTw7w4/view?usp=sharing',
        logoSrc: '/images/logo.png'
        
    });
});

// Projects Page
router.get('/projects', (req, res) => {
    res.render('projects', { projects, logoSrc: '/images/logo.png' });
});

// Services Page
router.get('/services', (req, res) => {
    const services = ['Web Development', 'Programming Languages: C#, Java'];
    res.render('services', { services, logoSrc: '/images/logo.png' });
});

// Contact Page (GET request)
router.get('/contact', (req, res) => {
    res.render('contact', { logoSrc: '/images/logo.png', bio: 'Shivam is a versatile web designer due to his extensive history in graphic and web design. His dedication to continuously learning about new web design trends and concepts has made him a valuable member of the team. With eight years of experience and a master\'s in web design, his expertise can help customers modernize with websites and appeal to expanding customer populations.',});
});

// Contact Page (POST request, form submission)
router.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Process the form data (you can add your logic here)

    // For now, just redirect to the home page
    res.redirect('/');
});

module.exports = router;
