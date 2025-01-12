import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNetwork = ({
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
			d='M6.26667 1.33337H2.4C2.17909 1.33337 2 1.51246 2 1.73337V4.26671C2 4.48762 2.17909 4.66671 2.4 4.66671H6.26667C6.48758 4.66671 6.66667 4.48762 6.66667 4.26671V1.73337C6.66667 1.51246 6.48758 1.33337 6.26667 1.33337Z'
			stroke='currentColor'
		/>
		<path
			d='M9.93329 11.3334H6.06663C5.84571 11.3334 5.66663 11.5125 5.66663 11.7334V14.2667C5.66663 14.4876 5.84571 14.6667 6.06663 14.6667H9.93329C10.1542 14.6667 10.3333 14.4876 10.3333 14.2667V11.7334C10.3333 11.5125 10.1542 11.3334 9.93329 11.3334Z'
			stroke='currentColor'
		/>
		<path
			d='M13.6 1.33337H9.73337C9.51246 1.33337 9.33337 1.51246 9.33337 1.73337V4.26671C9.33337 4.48762 9.51246 4.66671 9.73337 4.66671H13.6C13.821 4.66671 14 4.48762 14 4.26671V1.73337C14 1.51246 13.821 1.33337 13.6 1.33337Z'
			stroke='currentColor'
		/>
		<path
			d='M4.33337 4.66663V6.99996C4.33337 7.73636 4.93033 8.33329 5.66671 8.33329H10.3334C11.0698 8.33329 11.6667 7.73636 11.6667 6.99996V4.66663'
			stroke='currentColor'
		/>
		<path d='M8 8.33337V11.3334' stroke='currentColor' />
	</svg>
);
export default SvgNetwork;
