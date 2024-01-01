/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {}
    },
<<<<<<< HEAD
    plugins: [require("tailwind-scrollbar")]
=======
    plugins: [
        // ...
        require("tailwind-scrollbar")
    ]
>>>>>>> b28984dbae57012e2f2e03a3463dfe8439fcb926
};
