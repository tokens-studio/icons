import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSwimming = ({
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
			d='M2 13.3333C3.65517 13.3333 4.89655 11.3333 4.89655 11.3333C4.89655 11.3333 6.13793 13.3333 7.79313 13.3333C9.44827 13.3333 11.1035 11.3333 11.1035 11.3333C11.1035 11.3333 12.7586 13.3333 14 13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33325 6.99996L5.99992 5.33329L5.20863 4.34418C4.91205 3.97345 4.98093 3.43087 5.36074 3.14601C5.71893 2.87737 6.22478 2.93646 6.51141 3.28042L9.33325 6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.9999 5.33333C11.9204 5.33333 12.6666 4.58714 12.6666 3.66667C12.6666 2.74619 11.9204 2 10.9999 2C10.0795 2 9.33325 2.74619 9.33325 3.66667C9.33325 4.58714 10.0795 5.33333 10.9999 5.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSwimming;
