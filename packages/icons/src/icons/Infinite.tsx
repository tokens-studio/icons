import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgInfinite = ({
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
			d='M10.3334 5.99996L10.1667 6.24996M7.66669 5.99996C7.05855 5.19039 6.09051 4.66663 5.00002 4.66663C3.15907 4.66663 1.66669 6.15901 1.66669 7.99996C1.66669 9.84089 3.15907 11.3333 5.00002 11.3333C6.09057 11.3333 7.05879 10.8096 7.66695 9.99996L7.88915 9.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.66669 5.99996L10.3331 9.99996C10.9412 10.8096 11.9095 11.3333 13 11.3333C14.841 11.3333 16.3334 9.84089 16.3334 7.99996C16.3334 6.15901 14.841 4.66663 13 4.66663C11.9095 4.66663 10.9412 5.19033 10.3331 5.99996'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgInfinite;
