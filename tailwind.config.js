/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./componets/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                burtons: "burtons",
            },
        },
    },
    plugins: [],
};
