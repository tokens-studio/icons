import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMediaImageFolder = ({
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
			d='M13 9.67329L13.0067 9.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66675 12.1334L11.0001 11.3334L14.6667 12.6667'
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
export default SvgMediaImageFolder;
