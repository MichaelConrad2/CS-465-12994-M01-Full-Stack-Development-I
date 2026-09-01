# CS 465 Module 1 - Travlr Express Static Website

This folder is a completed Module 1 Express shell with the Travlr static mockup placed under `public/`.

## Run

```powershell
npm install
npm audit
npm start
```

Then open:

- Express shell: http://localhost:3000
- Travlr Getaways static site: http://localhost:3000/index.html

## Required Git workflow

From the repository root, create/use the Module 1 branch before committing:

```powershell
git checkout -b module1
git status
git add .
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git commit -m "Baseline Express Website - static only"
git push --set-upstream origin module1
```

Take a screenshot of the Travlr page rendered in the browser at `localhost:3000/index.html`. Keep the terminal visible too if your instructor expects evidence that `npm start` is running.
