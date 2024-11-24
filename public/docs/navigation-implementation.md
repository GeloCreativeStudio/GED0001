# Navigation Component Implementation Guide

## Overview
This document details the implementation of the responsive navigation component used in the GED0085 Advocacy Campaign website. The navigation features a modern, responsive design with mobile support, animations, and clean state management.

## Dependencies
```json
{
  "next": "latest",
  "framer-motion": "latest",
  "tailwindcss": "latest",
  "@heroicons/react": "latest",
  "tailwind-merge": "latest"
}
```

## Component Structure

### Navigation Items
The navigation items are defined as a constant array of objects, making it easy to modify or extend:

```typescript
const navigationItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/about', icon: UserGroupIcon },
  { name: 'Issues', href: '/issues', icon: NewspaperIcon },
  { name: 'Campaigns', href: '/campaigns', icon: AcademicCapIcon },
  { name: 'Resources', href: '/resources', icon: BookOpenIcon },
];
```

### State Management
The component uses React hooks for state management:
```typescript
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const pathname = usePathname(); // For active link detection
```

## Key Features

### 1. Desktop Navigation
- Horizontal layout with consistent spacing
- Active link highlighting with bottom border
- Hover effects for better user interaction
- Icon + text combination
- Fixed position with optional background blur on scroll

#### Desktop Link Styling
```typescript
<Link
  href={item.href}
  className={`inline-flex items-center px-1 pt-1 text-sm nav:text-base font-medium
    ${
      pathname === item.href
        ? 'text-[#1C5310] border-b-2 border-[#1C5310]'
        : 'text-gray-500 hover:text-[#1C5310] hover:border-b-2 hover:border-[#1C5310]/50'
    }
    transition-colors duration-200
  `}
>
```

### 2. Mobile Navigation
- Hamburger menu toggle
- Animated slide-in menu
- Vertical stack layout
- Left border for active state
- Full-width touch targets

#### Mobile Menu Animation
```typescript
<AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="nav:hidden bg-white border-t border-gray-200"
    >
```

## Styling Guide

### Colors
- Primary Brand Color: `#1C5310` (Forest Green)
- Text Colors:
  - Primary: Gray-500 (`text-gray-500`)
  - Active: Brand Color (`text-[#1C5310]`)
  - Hover: Brand Color with opacity

### Typography
- Base text size: `text-sm` (mobile), `text-base` (desktop)
- Font: System font stack with Della Robbia for brand text
- Font weights: `font-medium` for navigation items

### Spacing
- Desktop nav spacing: `space-x-8`
- Mobile padding: `px-4 py-2`
- Container max width: `max-w-7xl`

## Responsive Design

### Breakpoints
Custom `nav` breakpoint for navigation-specific responsive design:
```typescript
// Tailwind config suggestion
module.exports = {
  theme: {
    screens: {
      'nav': '768px', // Customize this value based on your needs
    }
  }
}
```

### Mobile-First Approach
- Base styles for mobile
- `nav:` prefix for desktop styles
- Hidden/visible classes: `nav:hidden` and `nav:flex`

## Accessibility Features
- Semantic HTML with `nav` element
- ARIA labels for mobile menu button
- Keyboard navigation support
- Sufficient color contrast
- Interactive elements have hover/focus states

## Implementation Steps

1. **Setup Dependencies**
   - Install required npm packages
   - Configure Tailwind CSS
   - Import necessary icons

2. **Create Navigation Component**
   - Create `Navigation.tsx` in components directory
   - Import required dependencies
   - Define navigation items

3. **Implement Desktop Navigation**
   - Create fixed header
   - Add logo/brand
   - Implement horizontal navigation links
   - Add active state styling

4. **Add Mobile Navigation**
   - Create hamburger menu button
   - Implement mobile menu
   - Add animations
   - Style mobile links

5. **Add Responsive Behavior**
   - Configure breakpoints
   - Add responsive classes
   - Test across different screen sizes

## Best Practices

1. **Performance**
   - Use `next/link` for client-side navigation
   - Implement proper code splitting
   - Optimize animations for performance

2. **Maintainability**
   - Keep navigation items in a separate constant
   - Use consistent naming conventions
   - Comment complex logic
   - Use TypeScript for better type safety

3. **Accessibility**
   - Use semantic HTML
   - Include ARIA labels
   - Ensure keyboard navigation
   - Maintain color contrast

## Common Customizations

### Changing Colors
```typescript
// Example of color customization
const customColors = {
  primary: '#YOUR_COLOR',
  hover: '#YOUR_HOVER_COLOR',
  active: '#YOUR_ACTIVE_COLOR',
};
```

### Adding New Navigation Items
```typescript
// Add to navigationItems array
{
  name: 'New Page',
  href: '/new-page',
  icon: YourIcon,
}
```

### Modifying Animations
```typescript
// Custom animation variants
const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};
```

## Troubleshooting

### Common Issues
1. Mobile menu not showing
   - Check z-index values
   - Verify state management
   - Check breakpoint configuration

2. Animations not working
   - Ensure Framer Motion is properly installed
   - Check AnimatePresence implementation
   - Verify animation properties

3. Active states not updating
   - Check pathname comparison
   - Verify Next.js routing setup
   - Check class conditional logic

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Heroicons](https://heroicons.com/)

# Navigation Implementation Guide

## Overview
This document outlines the implementation of our enhanced navigation system for the Digital Reading Portfolio website. The navigation is designed to be intuitive, responsive, and aligned with FEU's brand identity.

## Design Principles
1. **Brand Consistency**
   - Use FEU's official colors:
     - Primary: Green (#1C5310)
     - Accent: Gold (#FFB81C)
   - Maintain visual hierarchy
   - Ensure consistent spacing

2. **Accessibility**
   - High contrast ratios
   - Clear hover states
   - Mobile-friendly touch targets
   - Keyboard navigation support

3. **Responsiveness**
   - Desktop navigation with full menu
   - Mobile navigation with hamburger menu
   - Smooth transitions between states
   - Consistent experience across devices

## Implementation Details

### Desktop Navigation
```tsx
<nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image 
          src="/feu-logo.png" 
          alt="FEU Logo" 
          width={40} 
          height={40}
        />
        <span className="text-[#1C5310] font-bold text-xl">
          Digital Reading Portfolio
        </span>
      </Link>

      {/* Main Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/rpw">Reading Process</NavLink>
        <NavLink href="/reflections">Reflections</NavLink>
        <NavLink href="/icare">iCARE</NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open menu</span>
        <MenuIcon className="h-6 w-6 text-[#1C5310]" />
      </button>
    </div>
  </div>
</nav>
```

### Mobile Navigation
```tsx
<div className={`
  fixed inset-0 z-50 transform transition-transform duration-300
  ${isOpen ? 'translate-x-0' : 'translate-x-full'}
`}>
  {/* Overlay */}
  <div 
    className="absolute inset-0 bg-black/20 backdrop-blur-sm"
    onClick={onClose}
  />

  {/* Menu Content */}
  <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl">
    <div className="p-4 border-b">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#1C5310]">Menu</h2>
        <button onClick={onClose}>
          <XIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>

    <nav className="p-4">
      <div className="space-y-4">
        <MobileNavLink href="/rpw">Reading Process</MobileNavLink>
        <MobileNavLink href="/reflections">Reflections</MobileNavLink>
        <MobileNavLink href="/icare">iCARE</MobileNavLink>
      </div>
    </nav>
  </div>
</div>
```

### Navigation Components

#### NavLink Component
```tsx
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        px-3 py-2 rounded-lg transition-colors
        ${isActive 
          ? 'text-[#1C5310] font-semibold bg-[#FFB81C]/10' 
          : 'text-gray-600 hover:text-[#1C5310] hover:underline decoration-[#FFB81C] decoration-2 underline-offset-4'
        }
      `}
    >
      {children}
    </Link>
  );
}
```

#### MobileNavLink Component
```tsx
function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        block px-4 py-2 rounded-lg transition-colors
        ${isActive 
          ? 'text-[#1C5310] font-semibold bg-[#FFB81C]/10' 
          : 'text-gray-600 hover:text-[#1C5310] hover:bg-gray-50'
        }
      `}
    >
      {children}
    </Link>
  );
}
```

## Features
1. **Active State Indicators**
   - Visual feedback for current page
   - Gold background for active items
   - Bold text for active items

2. **Hover Effects**
   - Color transitions
   - Underline decorations
   - Background color changes

3. **Mobile Optimizations**
   - Smooth slide-in animation
   - Backdrop blur effect
   - Touch-friendly hit areas

4. **Performance**
   - Minimal re-renders
   - Optimized transitions
   - Efficient state management

## Best Practices
1. Use semantic HTML elements
2. Maintain consistent spacing
3. Ensure keyboard accessibility
4. Optimize for touch devices
5. Test across different viewports
6. Keep animations smooth and subtle
