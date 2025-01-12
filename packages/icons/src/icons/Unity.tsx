import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUnity = ({
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
			d='M2.66675 8.66675H9.00008M2.66675 8.66675L5.33341 11.6667M2.66675 8.66675L5.33341 5.66675M9.00008 8.66675L12.3334 2.66675M9.00008 8.66675L12.3334 13.3334M12.3334 2.66675L8.33341 3.33341M12.3334 2.66675L13.3334 6.33341M12.3334 13.3334L13.3334 9.66675M12.3334 13.3334L8.33341 13.0001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUnity;
