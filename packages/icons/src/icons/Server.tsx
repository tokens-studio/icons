import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgServer = ({
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
			d='M4 12.0067L4.00667 11.9993'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 4.00667L4.00667 3.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33337 6.26671V1.73337C1.33337 1.51246 1.51246 1.33337 1.73337 1.33337H14.2667C14.4876 1.33337 14.6667 1.51246 14.6667 1.73337V6.26671C14.6667 6.48762 14.4876 6.66671 14.2667 6.66671H1.73337C1.51246 6.66671 1.33337 6.48762 1.33337 6.26671Z'
			stroke='currentColor'
		/>
		<path
			d='M1.33337 14.2667V9.73337C1.33337 9.51244 1.51246 9.33337 1.73337 9.33337H14.2667C14.4876 9.33337 14.6667 9.51244 14.6667 9.73337V14.2667C14.6667 14.4876 14.4876 14.6667 14.2667 14.6667H1.73337C1.51246 14.6667 1.33337 14.4876 1.33337 14.2667Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgServer;
