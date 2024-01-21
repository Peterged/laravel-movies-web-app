/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
