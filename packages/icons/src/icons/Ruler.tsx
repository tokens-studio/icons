import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRuler = ({
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
			d='M10.6667 4.66671V1.73337C10.6667 1.51246 10.4876 1.33337 10.2667 1.33337H5.73337C5.51246 1.33337 5.33337 1.51246 5.33337 1.73337V14.2667C5.33337 14.4876 5.51246 14.6667 5.73337 14.6667H10.2667C10.4876 14.6667 10.6667 14.4876 10.6667 14.2667V11.3334M10.6667 4.66671H8.66671M10.6667 4.66671V8.00004M10.6667 11.3334V8.00004M10.6667 11.3334H8.66671M10.6667 8.00004H8.66671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgRuler;
