export default defineAppConfig({
    ui: {
        formGroup: {
            wrapper: 'md:min-h-[80px] py-1',
            label: {
                wrapper: 'flex content-center items-center justify-between pl-4 pb-1 text-xxs',
                base: 'font-barlow font-normal text-xl leading-[1.2] text-black dark:text-white',
            },
            size: {
                sm: 'text-xxs ',
            },
            error: 'pl-4 font-barlow !text-xxs leading-[1.2] text-error text-left mt-1',
        },
        button: {
            rounded: 'rounded-3xl',
            base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 text-center flex justify-center',
            font: 'font-poppins',
            padding: {
                md: 'px-4 py-3',
            },
            size: {
                md: 'text-[22px] min-w-[200px] text-center',
            },
            color: {
                black: {
                    solid: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-white dark:text-gray-200 bg-btn-base disabled:!bg-btn-base hover:bg-btn-darker disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
                },
            }
        },
        input: {
            rounded: 'rounded-xl',
            base: 'font-poppins',
            placeholder: 'placeholder-[#666666CC] leading-[1.2] text-black::placeholder ',
            size: {
                sm: 'text-xxs',
                md: 'h-[56px] w-full'
            },
            padding: {
                sm: 'px-4 py-1.5',

            },
            color: {
                white: {
                    outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-grayborder dark:ring-gray-700 focus:ring-primary-500 dark:focus:ring-primary-400',
                },
                gray: {
                    outline: 'border-[#66666659] !bg-transparent',
                },
            },
            variant: {
                outline: 'border shadow-sm !bg-transparent ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-{color}-500 dark:focus:ring-{color}-400',
                none: 'bg-transparent focus:ring-0 focus:shadow-none',
            },
            default: {
                size: 'sm',
                color: 'gray',
                variant: 'outline',
                loadingIcon: 'i-heroicons-arrow-path-20-solid',
            },
        },
        checkbox: {
            background: 'bg-transparent dark:bg-gray-900',
            border: 'border border-[rgb(248, 243, 235) checked:!border-[rgb(248, 243, 235)',
            color: '!text-transparent',
            label: 'flex text-xs font-normal text-black leading-[1.2] dark:text-gray-200',
        },
        select: {
            rounded: 'rounded-3xl',
            padding: {
                xs: 'px-2 py-1',
            }

        },
        selectMenu: {
            base: '!relative focus:outline-none overflow-y-auto scroll-py-1 rounded-3xl !bg-transparent h-[56px]',
            variant: {
                outline: 'border shadow-sm !bg-transparent ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-{color}-500 dark:focus:ring-{color}-400',
                none: 'bg-transparent focus:ring-0 focus:shadow-none',

            }, 
            color: {
                gray: 'bg-transparent',
            },
            size: {
                sm: 'text-xxs',
                md: 'h-[56px] w-full'
            },
        },
        modal: {
            base: "z-50",
        },
        radioGroup: {
            fieldset: 'flex gap-4',
            legend: 'font-barlow font-normal !text-xxs leading-[1.2] text-black dark:text-white',
        },
        radio: {
            color: '!text-btn-base',
            label: 'font-barlow font-normal !text-xxs leading-[1.2] text-black dark:text-white',
        }
    }
});