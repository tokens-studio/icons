import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabaseTag = ({
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
			d='M1.33337 10V6C1.33337 3.79086 3.12423 2 5.33337 2H10.6667C12.8758 2 14.6667 3.79086 14.6667 6V10C14.6667 12.2091 12.8758 14 10.6667 14H5.33337C3.12423 14 1.33337 12.2091 1.33337 10Z'
			stroke='currentColor'
		/>
		<path
			d='M10.9047 7.99998C11.3809 7.99998 12.3333 7.99998 12.3333 6.66665C12.3333 5.33331 11.3809 5.33331 10.9047 5.33331H9V7.99998M10.9047 7.99998C10.1429 7.99998 9.31747 7.99998 9 7.99998M10.9047 7.99998C11.3809 7.99998 12.3333 7.99998 12.3333 9.33331C12.3333 10.6666 11.3809 10.6666 10.9047 10.6666H9V7.99998'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.57139 5.33331H3.66663V7.99998V10.6666H5.57139C6.04758 10.6666 6.99996 10.6666 6.99996 9.33331V6.66665C6.99996 5.33331 6.04758 5.33331 5.57139 5.33331Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDatabaseTag;
