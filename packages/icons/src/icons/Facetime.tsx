import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFacetime = ({
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
			d='M1.33337 10.6666V5.33331C1.33337 3.12417 3.12423 1.33331 5.33337 1.33331H10.6667C12.8758 1.33331 14.6667 3.12417 14.6667 5.33331V10.6666C14.6667 12.8758 12.8758 14.6666 10.6667 14.6666H5.33337C3.12423 14.6666 1.33337 12.8758 1.33337 10.6666Z'
			stroke='currentColor'
		/>
		<path
			d='M4 8.66667V7.33333C4 6.59695 4.59695 6 5.33333 6H7.33333C8.06973 6 8.66667 6.59695 8.66667 7.33333V8.66667C8.66667 9.40307 8.06973 10 7.33333 10H5.33333C4.59695 10 4 9.40307 4 8.66667Z'
			stroke='currentColor'
		/>
		<path
			d='M11.3599 6.14665L9.31552 7.67998C9.10218 7.83998 9.10218 8.15998 9.31552 8.31998L11.3599 9.85331C11.6237 10.0511 11.9999 9.86291 11.9999 9.53331V6.46665C11.9999 6.13703 11.6237 5.94887 11.3599 6.14665Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFacetime;
