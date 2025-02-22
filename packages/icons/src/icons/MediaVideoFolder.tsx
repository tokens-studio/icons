import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMediaVideoFolder = ({
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
			d='M14.6667 8.4V13.6C14.6667 13.8209 14.4877 14 14.2667 14H9.06675C8.84581 14 8.66675 13.8209 8.66675 13.6V8.4C8.66675 8.17907 8.84581 8 9.06675 8H14.2667C14.4877 8 14.6667 8.17907 14.6667 8.4Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.2787 9.71583C11.0123 9.54937 10.6667 9.7409 10.6667 10.055V11.945C10.6667 12.2592 11.0123 12.4507 11.2787 12.2842L12.7907 11.3392C13.0413 11.1826 13.0413 10.8175 12.7907 10.6608L11.2787 9.71583Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33325 6.66667V2.4C1.33325 2.17909 1.51234 2 1.73325 2H5.85195C5.94743 2 6.03976 2.03416 6.11226 2.0963L8.22092 3.9037C8.29338 3.96584 8.38572 4 8.48125 4H14.2666C14.4875 4 14.6666 4.17909 14.6666 4.4V6M1.33325 6.66667V12.2667C1.33325 12.4876 1.51234 12.6667 1.73325 12.6667H6.66658M1.33325 6.66667H6.66658'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMediaVideoFolder;
