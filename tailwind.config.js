/** @type {import('tailwindcss').Config} */
module.exports = {
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
