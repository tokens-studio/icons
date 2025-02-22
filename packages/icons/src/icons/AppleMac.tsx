import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAppleMac = ({
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
			d='M10.6667 1.33333C10.9088 2.78613 9.39193 3.88722 8.54387 4.38094C8.29373 4.52658 8.01147 4.34113 8.0546 4.05489C8.19953 3.09251 8.7294 1.33338 10.6667 1.33333Z'
			stroke='currentColor'
		/>
		<path
			d='M5.99999 4.33333C6.59783 4.33333 7.12699 4.46627 7.52966 4.61341C8.03752 4.79903 8.62912 4.79902 9.13699 4.61341C9.53959 4.46626 10.0688 4.33333 10.6666 4.33333C11.3901 4.33333 12.3099 4.72592 12.9999 5.5111C10.6667 7.33333 11.3333 10.3333 13.5127 11.1277C12.8169 13.0395 11.4942 14.3333 10.3333 14.3333C9.33326 14.3333 9.33332 13.8667 8.33332 13.8667C7.33332 13.8667 7.33332 14.3333 6.33332 14.3333C4.66666 14.3333 2.66666 11.6667 2.66666 8.33333C2.66666 5.66666 4.66666 4.33333 5.99999 4.33333Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgAppleMac;
