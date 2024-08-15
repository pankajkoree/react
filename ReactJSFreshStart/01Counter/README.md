# React with Vite

## Steps to install

```
1. npm create vite@latest
2. give your project name and choose the language and framework
3. cd projectDirectory
4. npm install
5. npm run dev
```

# Integrated tailwind CSS too

## Steps after above steps

```
1. npm install -D tailwindcss
2. npm install -D tailwindcss
3. in the tailwind.config.js change the content as :
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
4. add below code in index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
