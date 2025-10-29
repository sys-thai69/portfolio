# Portfolio TODO List

This file contains all the placeholders and items you need to customize in your portfolio.

## 🎯 High Priority

### Home Page (`app/page.tsx`)
- [ ] **Profile Photo on Homepage**: Add your profile picture
  - **Location**: Line ~147 in `app/page.tsx`
  - **Steps**:
    1. Add your photo to the `public` folder (e.g., `public/profile.jpg` or `public/profile.png`)
    2. Import Next.js Image component at the top: `import Image from 'next/image';`
    3. Replace the placeholder div (lines 147-153) with:
       ```tsx
       <Image 
         src="/profile.jpg" 
         alt="Pheav Chhengthai" 
         width={384} 
         height={384} 
         className="object-cover w-full h-full"
         priority
       />
       ```
  - **Recommended**: Square photo, at least 800x800px, professional headshot
  - **Current**: Shows "PC" initials as placeholder

### About Page (`app/about/page.tsx`)
- [ ] **Profile Image**: Replace the "PC" placeholder circle with your actual profile photo
  - Update the div with class `w-48 h-48` to include an `<Image>` component
  - Recommended size: 400x400px, square format
  
- [ ] **Download CV Button**: Add link to your CV/Resume PDF
  - Line ~150: Replace `href="#"` with link to your CV file
  - Place your CV in the `public` folder (e.g., `/public/cv/pheav-chhengthai-cv.pdf`)

- [ ] **Twitter/X Link**: Add your Twitter/X profile URL
  - Line ~145: Replace `href="#"` with your Twitter profile URL
  - Or remove this social link if you don't use Twitter

### Projects Page (`app/projects/page.tsx`)
- [ ] **Project Links**: Add actual URLs for all projects
  - Update `link: '#'` with live project URLs
  - Update `github: '#'` with GitHub repository URLs
  
- [ ] **Project Images**: Consider adding actual project screenshots
  - Replace emoji placeholders with real images
  - Recommended approach: Use Next.js Image component

### Contact Page (`app/contact/page.tsx`)
- [ ] **Form Submission**: Implement actual form handling
  - Line ~85: Add backend endpoint or use a service like:
    - Formspree (https://formspree.io/)
    - EmailJS (https://www.emailjs.com/)
    - Netlify Forms
    - Your own API endpoint

## 📝 Medium Priority

### Email Address
✅ **UPDATED**: Now using `p.chhengthai@gmail.com` across all pages:
  - `app/about/page.tsx`
  - `app/contact/page.tsx`
  - `app/components.tsx` (Footer)

### Home Page (`app/page.tsx`)
- [ ] **Stats Verification**: Update the statistics to match your actual experience
  - Years Coding
  - Projects Built count
  - Technologies count

### Education & Experience Pages
- [ ] Verify all information is up to date
- [ ] Add any new achievements or education milestones

### Skills Page
- [ ] Update skills list with any new technologies you've learned
- [ ] Organize by proficiency level (optional enhancement)

## 🎨 Design Enhancements (Optional)

### Images & Media
- [ ] Add favicon (`public/favicon.ico`)
- [ ] Add Open Graph image for social sharing (`public/og-image.png`)
- [ ] Add project screenshots to `/public/projects/`

### SEO
- [ ] Update `app/layout.tsx` metadata with more detailed descriptions
- [ ] Add keywords
- [ ] Add structured data (JSON-LD) for better search results

### Analytics (Optional)
- [ ] Add Google Analytics or alternative
- [ ] Add privacy policy page if tracking users

### Performance
- [ ] Optimize images (use WebP format)
- [ ] Add loading states for form submission
- [ ] Test on mobile devices

## 🚀 Deployment

### Before Deploying
- [ ] Test all pages thoroughly
- [ ] Check all links work correctly
- [ ] Verify mobile responsiveness
- [ ] Test contact form
- [ ] Review all content for typos

### Deployment Options
- [ ] **Vercel** (Recommended for Next.js)
  - Connect your GitHub repository
  - Auto-deploys on push to main
  
- [ ] **Netlify**
  - Similar to Vercel, great for static sites
  
- [ ] **GitHub Pages**
  - Free hosting for static sites

### Post-Deployment
- [ ] Update LinkedIn with portfolio link
- [ ] Update GitHub profile README
- [ ] Share on social media
- [ ] Add to resume/CV

## 📧 Contact Form Services

If you don't want to build a backend, use one of these:

1. **Formspree** (Free tier available)
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **EmailJS** (Free tier: 200 emails/month)
   - Sign up and get credentials
   - Add emailjs-com package
   - Configure in contact form

3. **Netlify Forms** (If deploying to Netlify)
   - Add `netlify` attribute to form
   - Automatically handles submissions

## 💡 Future Enhancements

- [ ] Add a blog section
- [ ] Add testimonials/recommendations
- [ ] Add a resume/CV viewer
- [ ] Add animations with Framer Motion
- [ ] Add dark/light theme toggle
- [ ] Add language switcher (Khmer/English)
- [ ] Add project filtering by technology
- [ ] Add search functionality
- [ ] Add Google Maps for location
- [ ] Add downloadable portfolio PDF

---

## 🎉 Notes

Your portfolio now has:
- ✅ Modern, professional design
- ✅ Smooth animations and transitions
- ✅ Glass morphism effects
- ✅ Gradient backgrounds
- ✅ Responsive layout
- ✅ Accessible components
- ✅ SEO-friendly structure
- ✅ Fast performance with Next.js 14

Good luck with your portfolio! 🚀
