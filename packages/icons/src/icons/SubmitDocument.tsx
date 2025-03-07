import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSubmitDocument = ({
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
			d='M13.3334 8.66658V3.83227C13.3334 3.72619 13.2913 3.62445 13.2163 3.54943L11.1172 1.45041C11.0422 1.37539 10.9405 1.33325 10.8344 1.33325H3.06675C2.84583 1.33325 2.66675 1.51234 2.66675 1.73325V14.2666C2.66675 14.4875 2.84583 14.6666 3.06675 14.6666H9.33341'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 1.33325V3.59992C10.6667 3.82083 10.8458 3.99992 11.0667 3.99992H13.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 12.6667H14.6667M14.6667 12.6667L12.6667 10.6667M14.6667 12.6667L12.6667 14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSubmitDocument;
