import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPantsPockets = ({
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
			d='M3.35683 2.42219C3.3441 2.19291 3.52658 2 3.75622 2H12.2438C12.4735 2 12.656 2.19291 12.6432 2.42219L12.021 13.6222C12.0092 13.8341 11.8339 14 11.6216 14H9.68904C9.48624 14 9.31551 13.8482 9.29184 13.6467L8.39731 6.04338C8.34191 5.57236 7.65818 5.57236 7.60278 6.04338L6.70824 13.6467C6.68458 13.8482 6.51384 14 6.31101 14H4.37844C4.16614 14 3.99083 13.8341 3.97906 13.6222L3.35683 2.42219Z'
			stroke='currentColor'
		/>
		<path
			d='M3.33325 5H4.33325C5.06963 5 5.66659 4.40305 5.66659 3.66667V2'
			stroke='currentColor'
		/>
		<path
			d='M12.3333 5H11.6666C10.9302 5 10.3333 4.40305 10.3333 3.66667V2'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgPantsPockets;
