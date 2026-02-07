# How to Add Your Profile Photo 📸

## Quick Guide

### 1. Prepare Your Photo

- **Format**: JPG or PNG
- **Size**: At least 800x800px (square)
- **Aspect Ratio**: 1:1 (square)
- **Type**: Professional headshot or portrait
- **File Size**: Keep under 500KB for best performance

### 2. Add Photo to Project

1. Place your photo in the `public` folder
2. Rename it to something simple like `profile.jpg` or `photo.png`
3. Full path should be: `F:\Portfolio - Pheav Chhengthai\my-portfolio\public\profile.jpg`

### 3. Update Homepage Code

Open `app/page.tsx` and find this section (around line 140):

**BEFORE (Current Placeholder):**

```tsx
{
  /* TODO: Replace with your actual image */
}
{
  /* <Image src="/profile.jpg" alt="Pheav Chhengthai" width={384} height={384} className="object-cover" /> */
}

{
  /* Placeholder - Replace this div with Image component above */
}
<div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
  <div className="text-center">
    <div className="text-8xl font-bold text-white mb-2">PC</div>
    <div className="text-white/80 text-sm">Your Photo Here</div>
  </div>
</div>;
```

**AFTER (With Your Photo):**

```tsx
{
  /* Your Profile Photo */
}
<Image
  src="/profile.jpg"
  alt="Pheav Chhengthai"
  width={384}
  height={384}
  className="object-cover w-full h-full"
  priority
/>;
```

### 4. Import Image Component

At the top of `app/page.tsx` (around line 1-3), add:

```tsx
"use client";

import React from "react";
import Image from "next/image"; // ← Add this line
```

### 5. Test It!

1. Save the file
2. Your dev server will auto-reload
3. Visit http://localhost:3000
4. You should see your photo in a beautiful circular frame with:
   - Gradient glow effect
   - "Open to Work" badge (green)
   - Cambodia flag badge
   - Hover effects

## The Profile Photo Appears In:

1. **Homepage** - Large circular image (384x384px)
2. **About Page** - You can also add it there (currently has "PC" initials)

## Troubleshooting

### Photo not showing?

- Check the file path is correct: `/profile.jpg` (no `public/` in the path)
- Make sure the file is actually in the `public` folder
- Check the browser console for errors
- Try a different image format

### Photo looks stretched?

- Use the `object-cover` class (already included)
- Make sure your photo is square (1:1 aspect ratio)

### Photo is too large?

- Compress it using: https://tinypng.com/
- Or resize it to exactly 800x800px

## Optional: Add to About Page Too

In `app/about/page.tsx` (around line 72), replace the "PC" circle with:

```tsx
<Image
  src="/profile.jpg"
  alt="Pheav Chhengthai"
  width={192}
  height={192}
  className="object-cover rounded-full"
/>
```

---

**That's it!** Your professional photo will now be displayed on your portfolio. 🎉
