import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	theme: {
		extend: {
			fontSize: {
				'4xs': '.5rem', //8px
				xxxs: '.625rem', //10px
				xxs: '.75rem', //12px
				xs: '.813rem', //13px
				sm: '.875rem', //14px
				md: '.938rem', //15px
				base: '1rem', //16px
				lg: '1.125rem', // 18px
				xl: '1.25rem', //20px
				'2xl': '1.5rem', //24px
				'3xl': '1.875rem', //30px
				'4xl': '2.25rem', //36px
				'5xl': '3rem', //48px
			},
			fontFamily: {
				'barlow': ['Barlow'],
				'poppins': ['Poppins']
			},
		},
	},
};
