# GemStore - E-Commerce SPA (Lab Work #6)

## Project Overview

GemStore is a professional React-based Single Page Application (SPA) for an e-commerce platform specializing in premium precious gemstones. This project demonstrates modern React development practices with a focus on component-based architecture, responsive design, and professional styling.

## Technologies Used

- **Framework**: React 18.x
- **Styling**: CSS3 with advanced features (Gradients, Animations, Flexbox, Grid)
- **Component Architecture**: Functional Components
- **Build Tool**: Create React App

## Project Structure

```
web_6/
├── public/
│   ├── index.html                 # Main HTML file
│   └── images/                    # Gem showcase images
│       ├── ruby.svg
│       ├── emerald.svg
│       └── sapphire.svg
├── src/
│   ├── components/                # React components (5+ files)
│   │   ├── Header.jsx             # Navigation header with logo and menu
│   │   ├── HeroSection.jsx        # Welcome banner and call-to-action
│   │   ├── FeaturedGems.jsx       # Gem showcase with descriptions
│   │   ├── WhyChooseUs.jsx        # Benefits and features section
│   │   └── Footer.jsx             # Footer with links and social media
│   ├── styles/                    # CSS stylesheets
│   │   ├── Header.css
│   │   ├── HeroSection.css
│   │   ├── FeaturedGems.css
│   │   ├── WhyChooseUs.css
│   │   └── Footer.css
│   ├── App.js                     # Main application component
│   ├── App.css                    # Global styles
│   └── index.js                   # React entry point
├── package.json                   # Project dependencies
├── .gitignore                     # Git ignore rules
└── README.md                      # This file
```

## Component Details

### 1. **Header Component** (`Header.jsx`)
- Sticky navigation bar with logo
- Navigation menu (Home, Catalog, About, Contact)
- Cart button with hover effects
- Responsive design for mobile devices

### 2. **HeroSection Component** (`HeroSection.jsx`)
- Welcome banner with gradient background
- Call-to-action button
- Three gem showcase boxes with interactive hover effects
- Animations (slide-in effects)
- Responsive grid layout

### 3. **FeaturedGems Component** (`FeaturedGems.jsx`)
- Displays 3 featured precious gems (Ruby, Emerald, Sapphire)
- Each gem card contains:
  - High-quality image (SVG)
  - Gem name and specifications (carat weight, price)
  - Detailed description from the gems database
  - "View Details" button
- Hover animations and effects
- Responsive grid layout
- "View More Gems" call-to-action button

### 4. **WhyChooseUs Component** (`WhyChooseUs.jsx`)
- 6 benefit cards highlighting company advantages:
  - Authenticity Guaranteed
  - Premium Quality
  - Secure Transactions
  - Fast Shipping
  - Expert Support
  - Custom Packaging
- Icon-based visual indicators
- Hover animations with glassmorphism effect

### 5. **Footer Component** (`Footer.jsx`)
- Company branding and description
- Quick links section
- Gem categories links
- Social media links (Facebook, Twitter, LinkedIn, Instagram)
- Copyright information
- Responsive multi-column layout

## Gem Database

The project includes a gem database with the following structure:

```javascript
gems['1001'] = {
  'id': '1001',
  'name': 'Ruby',
  'carat': 1.2,
  'price': 1200.0,
  'description': 'Premium ruby gemstone with deep crimson color...'
}

gems['1002'] = {
  'id': '1002',
  'name': 'Emerald',
  'carat': 0.8,
  'price': 900.0,
  'description': 'Stunning emerald with rich green color...'
}

gems['1003'] = {
  'id': '1003',
  'name': 'Sapphire',
  'carat': 1.5,
  'price': 1500.0,
  'description': 'Exquisite sapphire with mesmerizing blue color...'
}
```

## Design Features

### Modern Styling
- **Gradients**: Linear and radial gradients for visual appeal
- **Animations**: Smooth transitions and keyframe animations
- **Hover Effects**: Interactive elements with transform and shadow effects
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Responsive Design**: Mobile-first approach with media queries

### Color Palette
- Primary: Dark Blue/Purple (`#1a1a2e`, `#667eea`)
- Accent: Gold (`#ffd700`)
- Gem Colors: Ruby Red, Emerald Green, Sapphire Blue
- Backgrounds: Gradients and light grays

### Typography
- Font Family: 'Segoe UI', 'Roboto', system fonts
- Heading: Bold, large sizes with letter-spacing
- Body: Clean, readable fonts with proper line-height

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd web_6
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

4. **Build for production**:
   ```bash
   npm run build
   ```

## Usage

This is a **view-only** application. All components are purely presentational with no functional interactions yet. The following are not implemented:
- Cart functionality
- Navigation routing
- Product filtering or sorting
- User authentication
- Add to cart operations

All buttons and links are placeholder elements for future implementation.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Code Quality

- **Component Structure**: Logical separation with dedicated CSS files
- **Naming Conventions**: Clear, descriptive component and class names
- **CSS Organization**: Organized by component with utility classes
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized animations and transitions

## Future Enhancements

- Product detail pages
- Shopping cart functionality
- User authentication
- Search and filter capabilities
- Payment processing
- Order tracking
- Customer reviews
- Wishlist feature

## Requirements Compliance

✅ Technology: React.js with create-react-app structure
✅ Components: Functional Components ONLY (no Class components)
✅ Project Structure: 5+ separate component files
✅ Styling: Professional CSS with gradients, animations, and layouts
✅ Layout: Header, Hero Section, Content, Footer
✅ Functionality: View-only (no modifications to index.html)
✅ Gem Data: Database with description, carat, price, ID

## Author

Created for Lab Work #6: Landing (Home) Page - E-commerce SPA

## License

Educational Project - All Rights Reserved
