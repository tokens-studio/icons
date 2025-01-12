import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPolarSh = ({
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
			d='M7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8.00004C1.33331 4.31814 4.31808 1.33337 7.99998 1.33337C11.6818 1.33337 14.6666 4.31814 14.6666 8.00004C14.6666 11.6819 11.6818 14.6667 7.99998 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99998 14.6667C6.52722 14.6667 5.33331 11.6819 5.33331 8.00004C5.33331 4.31814 6.52722 1.33337 7.99998 1.33337C9.47271 1.33337 10.6666 4.31814 10.6666 8.00004C10.6666 11.6819 9.47271 14.6667 7.99998 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.99998 14C3.99998 13.3333 3.33331 10.4073 3.33331 8.33333C3.33331 6.25936 4.33331 3.66667 6.66665 2'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.99998 2C12 2.66667 12.6666 5.59269 12.6666 7.66667C12.6666 9.74067 11.6666 12.3333 9.33331 14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPolarSh;
