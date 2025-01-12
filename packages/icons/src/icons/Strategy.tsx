import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStrategy = ({
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
			d='M4 13.6667C4.66667 7.33333 7.66667 5.33333 13.3333 4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6057 2.53955L13.5964 3.93412L12.2018 6.92481'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33333 4.66667C4.06971 4.66667 4.66667 4.06971 4.66667 3.33333C4.66667 2.59695 4.06971 2 3.33333 2C2.59695 2 2 2.59695 2 3.33333C2 4.06971 2.59695 4.66667 3.33333 4.66667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 13.4951L12.0808 12.0809M12.0808 12.0809L13.495 10.6667M12.0808 12.0809L10.6666 10.6667M12.0808 12.0809L13.495 13.4951'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgStrategy;
