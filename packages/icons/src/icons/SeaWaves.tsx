import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSeaWaves = ({
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
			d='M2 6.66663C3.65517 6.66663 4.89655 4.66663 4.89655 4.66663C4.89655 4.66663 6.13793 6.66663 7.79313 6.66663C9.44827 6.66663 11.1035 4.66663 11.1035 4.66663C11.1035 4.66663 12.7586 6.66663 14 6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 11.3334C3.65517 11.3334 4.89655 9.33337 4.89655 9.33337C4.89655 9.33337 6.13793 11.3334 7.79313 11.3334C9.44827 11.3334 11.1035 9.33337 11.1035 9.33337C11.1035 9.33337 12.7586 11.3334 14 11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSeaWaves;
