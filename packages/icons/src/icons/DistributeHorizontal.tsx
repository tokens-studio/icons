import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDistributeHorizontal = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			opacity={0.5}
			d='M4 21V3M20 21V3'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 6.25H12.5C12.9142 6.25 13.25 6.58579 13.25 7V17C13.25 17.4142 12.9142 17.75 12.5 17.75H12M12 6.25H11.5C11.0858 6.25 10.75 6.58579 10.75 7V17C10.75 17.4142 11.0858 17.75 11.5 17.75H12M12 6.25V17.75'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgDistributeHorizontal;
