import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCloset = ({
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
			d='M6.00004 9.33331H5.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 9.33331H10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 1.33331H13.6C13.8209 1.33331 14 1.5124 14 1.73331V14.2666C14 14.4876 13.8209 14.6666 13.6 14.6666H8M8 1.33331H2.4C2.17909 1.33331 2 1.5124 2 1.73331V14.2666C2 14.4876 2.17909 14.6666 2.4 14.6666H8M8 1.33331V14.6666'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgCloset;
