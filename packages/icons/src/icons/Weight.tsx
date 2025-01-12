import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWeight = ({
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
			d='M11 3.33325H13.6C13.8209 3.33325 14 3.51234 14 3.73325V13.5999C14 13.8209 13.8209 13.9999 13.6 13.9999H2.4C2.17909 13.9999 2 13.8209 2 13.5999V3.73325C2 3.51234 2.17909 3.33325 2.4 3.33325H5'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.8523 4.21912L10.9891 3.39901C10.9963 3.35547 10.9963 3.31103 10.9891 3.26749L10.8523 2.44739C10.7452 1.80447 10.1889 1.33325 9.53714 1.33325H6.46284C5.81106 1.33325 5.2548 1.80447 5.14765 2.44739L5.01096 3.26749C5.00371 3.31103 5.00371 3.35547 5.01096 3.39901L5.14765 4.21912C5.2548 4.86203 5.81106 5.33325 6.46284 5.33325H9.53714C10.1889 5.33325 10.7452 4.86203 10.8523 4.21912Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00001 5.33341L7.33334 3.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWeight;
