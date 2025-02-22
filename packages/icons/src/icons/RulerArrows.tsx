import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRulerArrows = ({
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
			d='M11.2667 14.6667H6.73337C6.51246 14.6667 6.33337 14.4876 6.33337 14.2667V1.73337C6.33337 1.51246 6.51246 1.33337 6.73337 1.33337H11.2667C11.4876 1.33337 11.6667 1.51246 11.6667 1.73337V14.2667C11.6667 14.4876 11.4876 14.6667 11.2667 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6666 11.3334H9.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6666 4.66663H9.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66663 7.99996H16.3333M16.3333 7.99996L15 9.33329M16.3333 7.99996L15 6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66663 7.99996L2.99996 6.66663M1.66663 7.99996L2.99996 9.33329M1.66663 7.99996H6.33329'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgRulerArrows;
