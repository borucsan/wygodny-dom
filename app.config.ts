export default defineAppConfig({
    ui: {
        formGroup: {
            wrapper: 'md:min-h-[80px] py-1',
            label: {
                wrapper: 'flex content-center items-center justify-between pl-4 pb-1 text-xxs',
                base: 'font-barlow font-normal text-xxs leading-[1.2] text-black dark:text-white',
            },
            size: {
                sm: 'text-xxs ',
              },
            error: 'pl-4 font-barlow !text-xxs leading-[1.2] text-error text-left mt-1',
        },
        button: {
            rounded: 'rounded-3xl',
            base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
            font: 'font-barlow font-black uppercase',
            color: {
                gray: {
                  solid: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-white dark:text-gray-200 bg-btn-base disabled:!bg-btn-base hover:bg-btn-darker disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
                },
            }
        },
        input: {
            rounded: 'rounded-3xl',
            base: 'font-barlow !text-xxs text-black leading-[1.2]relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 ',
            placeholder: 'font-barlow text-xxs placeholder-black leading-[1.2] text-black::placeholder ',
            size: {
                sm: 'text-xxs',
              },
            padding: {
                sm: 'px-4 py-1.5',
            },
            color: {
                white: {
                    outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-grayborder dark:ring-gray-700 focus:ring-primary-500 dark:focus:ring-primary-400',
                },
                gray: {
                    outline: 'shadow-sm bg-[#d9d9d9] dark:bg-graybg text-black dark:text-white ring-1 ring-inset ring-grayborder dark:ring-gray-700 focus:ring-primary-500 dark:focus:ring-primary-400',
                },
            },
            variant: {
                outline: 'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-{color}-500 dark:focus:ring-{color}-400',
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
            background: 'bg-footer dark:bg-gray-900',
            border: 'border border-[rgb(248, 243, 235) checked:!border-[rgb(248, 243, 235)',
            color: '!text-transparent',
            label: 'flex font-barlow text-sm font-medium text-text1 leading-[1.2] dark:text-gray-200',
        },
        select: {
            rounded: 'rounded-3xl',
            padding: {
                xs: 'px-2 py-1',
            }
            
        },
        selectMenu: {
            base: 'relative focus:outline-none overflow-y-auto scroll-py-1 rounded-3xl',
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