import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMobileDevMode = ({
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
			d='M8 12.6733L8.00667 12.6659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 12V14.2667C12 14.4876 11.8209 14.6667 11.6 14.6667H4.4C4.17909 14.6667 4 14.4876 4 14.2667V12'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M12 4.00004V1.73337C12 1.51246 11.8209 1.33337 11.6 1.33337H4.4C4.17909 1.33337 4 1.51246 4 1.73337V4.00004'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M10.3334 5.66663L12.6667 7.99996L10.3334 10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66671 5.66663L3.33337 7.99996L5.66671 10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMobileDevMode;
