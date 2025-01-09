/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'Arial', 'sans-serif'],
            },
            colors: {
                black: '#000',
                white: '#FFFFFF',
                'dark-purple': '#362B40',
                yellow: '#FFED00',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '12px',
                    'md-768': '24px',
                    'md-1024': '84px',
                },
                screens: {
                    xl: '1440px',
                },
            },
            backgroundImage: {
                'custom-gradient': 'linear-gradient(45deg, #FEEE91 0%, #FFED00 100%)',
                'custom-radial-gradient': 'radial-gradient(circle, rgba(254,238,145,1) 34%, rgba(255,237,0,1) 70%);',
                'custom-radial-gradient-purple': 'radial-gradient(circle, rgba(64,58,95,0.3) 33%, rgba(33,30,46,1) 100%);',
            },
        },
    },
    plugins: [],
};
