import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBell = ({
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
			d='M12 5.60001C12 4.46842 11.5786 3.38318 10.8284 2.58302C10.0783 1.78286 9.06087 1.33334 8 1.33334C6.93913 1.33334 5.92172 1.78286 5.17157 2.58302C4.42143 3.38318 4 4.46842 4 5.60001C4 10.5778 2 12 2 12H14C14 12 12 10.5778 12 5.60001Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.15335 14C9.03615 14.2021 8.86795 14.3698 8.66548 14.4863C8.46308 14.6029 8.23361 14.6643 8.00001 14.6643C7.76641 14.6643 7.53695 14.6029 7.33455 14.4863C7.13215 14.3698 6.96388 14.2021 6.84668 14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBell;
