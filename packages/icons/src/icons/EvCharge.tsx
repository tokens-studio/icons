import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEvCharge = ({
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
			d='M4 6V12.6667C4 13.4031 4.59695 14 5.33333 14H11.3333C12.0697 14 12.6667 13.4031 12.6667 12.6667V9.33333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M6 3.73331V4.66665C6 5.40303 5.40305 5.99998 4.66667 5.99998H3.33333C2.59695 5.99998 2 5.40303 2 4.66665V3.73331C2 3.5124 2.17909 3.33331 2.4 3.33331H5.6C5.82091 3.33331 6 3.5124 6 3.73331Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M2.66667 3.33333V2' stroke='currentColor' strokeLinecap='round' />
		<path d='M5.33333 3.33333V2' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M12.1111 2.66669L11 4.66669H13.6667L12.5555 6.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEvCharge;
