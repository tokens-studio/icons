import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyXmark = ({
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
			d='M10.5806 13.4142L11.9948 12M11.9948 12L13.409 10.5858M11.9948 12L10.5806 10.5858M11.9948 12L13.409 13.4142'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.27475 6.89539C9.31615 7.93679 11.0046 7.93679 12.046 6.89539C13.0874 5.85402 13.0874 4.16558 12.046 3.12418C11.0046 2.08279 9.31615 2.08279 8.27475 3.12418C7.23335 4.16558 7.23335 5.85402 8.27475 6.89539ZM8.27475 6.89539L2.61792 12.5523L4.03213 13.9665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.50366 10.6666L5.91788 12.0808'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgKeyXmark;
