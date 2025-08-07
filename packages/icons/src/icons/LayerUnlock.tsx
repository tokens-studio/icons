import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLayerUnlock = ({
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
			d='M16 11V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6M7 20H17C18.1046 20 19 19.1046 19 18V13C19 11.8954 18.1046 11 17 11H7C5.89543 11 5 11.8954 5 13V18C5 19.1046 5.89543 20 7 20Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgLayerUnlock;
