import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSeaAndSun = ({
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
			d='M2 10C3.65517 10 4.89655 8 4.89655 8C4.89655 8 6.13793 10 7.79313 10C9.44827 10 11.1035 8 11.1035 8C11.1035 8 12.7586 10 14 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 13.3334C3.65517 13.3334 4.89655 11.3334 4.89655 11.3334C4.89655 11.3334 6.13793 13.3334 7.79313 13.3334C9.44827 13.3334 11.1035 11.3334 11.1035 11.3334C11.1035 11.3334 12.7586 13.3334 14 13.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 6.66667C12.6667 4.08934 10.5773 2 8 2C5.42267 2 3.33333 4.08934 3.33333 6.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSeaAndSun;
