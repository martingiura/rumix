module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "rumix-community":
          "url('https://i.ibb.co/Hh7BLD2/pagina-registro-rumix.jpg')",
      },
    },
  },
  plugins: [
    // ...
    require(`@tailwindcss/forms`),
  ],
};
