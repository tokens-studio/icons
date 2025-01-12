import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPenTablet = ({
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
			d='M14.6666 3.33333V12.6667C14.6666 13.4031 14.0697 14 13.3333 14H2.66665C1.93027 14 1.33331 13.4031 1.33331 12.6667V3.33333C1.33331 2.59695 1.93027 2 2.66665 2H13.3333C14.0697 2 14.6666 2.59695 14.6666 3.33333Z'
			stroke='currentColor'
		/>
		<path d='M1.33331 8H3.99998' stroke='currentColor' />
		<path d='M4 2V14' stroke='currentColor' />
		<path
			d='M10.3333 7.66663L8 9.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 6.6733L11.34 6.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPenTablet;
