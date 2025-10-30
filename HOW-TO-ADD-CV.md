# 📄 How to Add Your CV/Resume

The Download CV button is now configured! Follow these steps to add your actual CV file:

## 🎯 Quick Steps

### 1. Prepare Your CV File

- **Export your CV as PDF** (recommended format)
- **Rename the file** to: `Pheav_Chhengthai_CV.pdf`
- Make sure the file size is reasonable (< 5MB recommended)

### 2. Add CV to Your Project

**Place the PDF file in the `public` folder:**

```
my-portfolio/
  ├── public/
  │   ├── Pheav_Chhengthai_CV.pdf  ← Put your CV here
  │   └── ... (other files)
  ├── app/
  └── ...
```

### 3. Test Locally

```powershell
# In your project directory
cd "F:\Portfolio - Pheav Chhengthai\my-portfolio"

# Start dev server
npm run dev

# Visit http://localhost:3000/about
# Click "Download CV" button to test
```

### 4. Push to GitHub

```powershell
git add public/Pheav_Chhengthai_CV.pdf
git commit -m "Add CV/Resume file"
git push origin main
```

### 5. Update Live Server

**In MobaXterm (connect to your server):**

```bash
cd ~/portfolio
git pull origin main
pm2 restart portfolio
```

**That's it!** Your CV will be downloadable at:
- https://portfolio.chhengthai.tech/about

---

## 🎨 Optional: Use a Different Filename

If you want to use a different filename, update the link in `app/about/page.tsx`:

**Find this line (around line 150):**
```tsx
<a href="/Pheav_Chhengthai_CV.pdf" download="Pheav_Chhengthai_CV.pdf" ...>
```

**Change both instances of the filename:**
```tsx
<a href="/Your_Custom_Name.pdf" download="Your_Custom_Name.pdf" ...>
```

Then place your PDF with that name in the `public` folder.

---

## 🔗 How It Works

- Files in the `public/` folder are **automatically accessible** at the root URL
- `public/Pheav_Chhengthai_CV.pdf` → `https://portfolio.chhengthai.tech/Pheav_Chhengthai_CV.pdf`
- The `download` attribute forces the browser to download instead of opening in a new tab

---

## 📋 Checklist

- [ ] Create/export your CV as PDF
- [ ] Rename to `Pheav_Chhengthai_CV.pdf`
- [ ] Place in `my-portfolio/public/` folder
- [ ] Test locally with `npm run dev`
- [ ] Commit and push to GitHub
- [ ] Pull changes on server and restart PM2

---

## 💡 Tips

1. **Keep it updated**: Update your CV regularly and push changes
2. **File size**: Keep PDF under 5MB for faster downloads
3. **Privacy**: Make sure you're comfortable with the information being public
4. **Backup**: Keep the original CV source file (Word/Google Docs) separate

---

**Need help?** The download button is already configured in:
- `app/about/page.tsx` (line ~150)
