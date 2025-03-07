import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRulerMinus = ({
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
			d='M10 3.33337H12H14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33333 4.66671V1.73337C7.33333 1.51246 7.15427 1.33337 6.93333 1.33337H2.4C2.17909 1.33337 2 1.51246 2 1.73337V14.2667C2 14.4876 2.17909 14.6667 2.4 14.6667H6.93333C7.15427 14.6667 7.33333 14.4876 7.33333 14.2667V11.3334M7.33333 4.66671H5.33333M7.33333 4.66671V8.00004M7.33333 11.3334V8.00004M7.33333 11.3334H5.33333M7.33333 8.00004H5.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgRulerMinus;
