const TButton = {
  baseClass: 'rounded-md border block inline-flex items-center justify-center rounded-full shadow-md text-primary-dark font-bold',
  primaryClass: 'text-white bg-primary-light border-primary-light hover:bg-primary hover:border-primary hover:text-white'
}

const TCard = {
  baseClass: 'bg-primary rounded shadow-md',
  headerClass: 'px-6 py-3 text-xl border-b',
  bodyClass: 'p-5',
  footerClass: 'px-6 py-3 border-t'
}

const TInput = {
  baseClass: 'border block w-full rounded bg-primary-dark border-primary',
  defaultStatusClass: 'bg-primary-light border-primary',
  errorStatusClass: 'border-red-300 bg-red-100',
  warningStatusClass: 'border-yellow-400 bg-yellow-100',
  successStatusClass: 'border-green-300 bg-green-100',
  disabledClass: 'bg-gray-100 cursor-not-allowed opacity-75',
  defaultSizeClass: 'p-3',
  largeSizeClass: 'p-4 text-lg',
  smallSizeClass: 'p-2 text-sm'
}

const TTextarea = {
  baseClass: 'border block w-full rounded bg-transparent border-primary',
  defaultStatusClass: 'bg-primary-light border-primary',
  errorStatusClass: 'border-red-300 bg-red-100',
  warningStatusClass: 'border-yellow-400 bg-yellow-100',
  successStatusClass: 'border-green-300 bg-green-100',
  disabledClass: 'bg-gray-100 cursor-not-allowed opacity-75',
  defaultSizeClass: 'p-3',
  largeSizeClass: 'p-4 text-lg',
  smallSizeClass: 'p-2 text-sm'
}

const TSelect = {
  baseClass: 'block appearance-none w-full border pr-8 rounded leading-tight',
  baseClassMultiple: 'block appearance-none w-full border rounded leading-tight',
  defaultStatusClass: 'bg-transparent border-primary',
  errorStatusClass: 'border-red-300 bg-red-100',
  successStatusClass: 'border-green-300 bg-green-100',
  warningStatusClass: 'border-yellow-400 bg-yellow-100',
  disabledClass: 'bg-gray-100 cursor-not-allowed opacity-75',
  defaultSizeClass: 'p-3',
  largeSizeClass: 'p-4 text-lg',
  smallSizeClass: 'p-2 text-sm',
  wrapperClass: 'relative',
  arrowWrapperClass: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700',
  arrowClass: 'fill-current h-4 w-4'
}

const TDropdown = {
  baseClass: '',
  dropdownClass: 'w-40 bg-primary-light rounded border border-primary-light shadow-md z-10',
  disabledClass: ''
}

const TailwindTheme = {
  TButton,
  TCard,
  TInput,
  TTextarea,
  TSelect,
  TDropdown
}

export default TailwindTheme
