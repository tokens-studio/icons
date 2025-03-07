import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCollageFrame = ({
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
			d='M12.9334 13.3334H3.06675C2.84583 13.3334 2.66675 13.1543 2.66675 12.9334V3.06669C2.66675 2.84577 2.84583 2.66669 3.06675 2.66669H12.9334C13.1543 2.66669 13.3334 2.84577 13.3334 3.06669V12.9334C13.3334 13.1543 13.1543 13.3334 12.9334 13.3334Z'
			stroke='currentColor'
		/>
		<path d='M7.33325 8.00002V2.66669' stroke='currentColor' />
		<path d='M2.66675 8H13.3334' stroke='currentColor' />
	</svg>
);
export default SvgCollageFrame;
