import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMediaImageXmark = ({
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
			d='M2 10.6666L6.66667 8.66663L9.33333 9.87876'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 6.66667C9.93019 6.66667 9.33325 6.06971 9.33325 5.33333C9.33325 4.59695 9.93019 4 10.6666 4C11.403 4 11.9999 4.59695 11.9999 5.33333C11.9999 6.06971 11.403 6.66667 10.6666 6.66667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.2524 14.0808L12.6667 12.6666M12.6667 12.6666L14.0809 11.2524M12.6667 12.6666L11.2524 11.2524M12.6667 12.6666L14.0809 14.0808'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66667 14H2.4C2.17909 14 2 13.8209 2 13.6V2.4C2 2.17909 2.17909 2 2.4 2H13.6C13.8209 2 14 2.17909 14 2.4V8.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMediaImageXmark;
