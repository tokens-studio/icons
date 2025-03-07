import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCoinsSwap = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M6.01263 5.99998C6.00426 5.88997 6 5.77881 6 5.66665C6 3.27341 7.94007 1.33331 10.3333 1.33331C12.7266 1.33331 14.6667 3.27341 14.6667 5.66665C14.6667 8.05991 12.7266 9.99998 10.3333 9.99998C10.2212 9.99998 10.11 9.99571 10 9.98738'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66659 14.6667C3.27335 14.6667 1.33325 12.7266 1.33325 10.3333C1.33325 7.94007 3.27335 6 5.66659 6C8.05985 6 9.99992 7.94007 9.99992 10.3333C9.99992 12.7266 8.05985 14.6667 5.66659 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6666 11.3333C14.6666 12.4379 13.7712 13.3333 12.6666 13.3333H11.3333M11.3333 13.3333L12.6666 12M11.3333 13.3333L12.6666 14.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33325 4.66665C1.33325 3.56208 2.22869 2.66665 3.33325 2.66665H4.66659M4.66659 2.66665L3.33325 3.99998M4.66659 2.66665L3.33325 1.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCoinsSwap;
