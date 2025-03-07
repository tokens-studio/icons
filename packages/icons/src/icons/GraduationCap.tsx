import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGraduationCap = ({
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
			d='M1.7155 5.64221L7.48776 2.75609C7.60036 2.69979 7.73289 2.69979 7.84549 2.75609L13.6178 5.64221C13.9126 5.78963 13.9126 6.21035 13.6178 6.35776L7.84549 9.24385C7.73289 9.30019 7.60036 9.30019 7.48776 9.24385L1.7155 6.35776C1.42068 6.21035 1.42068 5.78963 1.7155 5.64221Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M15.0001 8.66663V6.33329L13.6667 5.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3 7V10.6081C3 11.1229 3.29639 11.5917 3.76147 11.8125L7.0948 13.3952C7.45667 13.567 7.87667 13.567 8.23853 13.3952L11.5719 11.8125C12.0369 11.5917 12.3333 11.1229 12.3333 10.6081V7'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGraduationCap;
