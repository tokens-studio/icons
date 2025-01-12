import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSlips = ({
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
			d='M1.66663 3.06675C1.66663 2.84583 1.84571 2.66675 2.06663 2.66675H15.9333C16.1542 2.66675 16.3333 2.84583 16.3333 3.06675V5.67458C16.3333 5.86416 16.2007 6.02802 16.0162 6.07139C15.3144 6.23631 13.5924 6.68055 12.3333 7.33341C10.0376 8.52381 9.71296 11.77 9.67116 12.9215C9.66296 13.1473 9.47956 13.3334 9.25363 13.3334H8.74629C8.52036 13.3334 8.33696 13.1473 8.32876 12.9215C8.28696 11.77 7.96236 8.52381 5.66663 7.33341C4.40753 6.68055 2.68558 6.23631 1.98377 6.07139C1.79921 6.02802 1.66663 5.86416 1.66663 5.67458V3.06675Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgSlips;
