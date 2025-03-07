import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBrightness = ({
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
			d='M8.00008 4.66666L9.02055 5.53631L10.3571 5.64297L10.4637 6.97952L11.3334 7.99999L10.4637 9.02046L10.3571 10.357L9.02055 10.4637L8.00008 11.3333L6.97961 10.4637L5.64306 10.357L5.5364 9.02046L4.66675 7.99999L5.5364 6.97952L5.64306 5.64297L6.97961 5.53631L8.00008 4.66666Z'
			stroke='currentColor'
		/>
		<path
			d='M6.97961 10.4637L8.00008 11.3333V4.66666L6.97961 5.53631L5.64306 5.64297L5.5364 6.97952L4.66675 7.99999L5.5364 9.02046L5.64306 10.357L6.97961 10.4637Z'
			fill='currentColor'
		/>
		<path
			d='M14 2.4V13.6C14 13.8209 13.8209 14 13.6 14H2.4C2.17909 14 2 13.8209 2 13.6V2.4C2 2.17909 2.17909 2 2.4 2H13.6C13.8209 2 14 2.17909 14 2.4Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBrightness;
