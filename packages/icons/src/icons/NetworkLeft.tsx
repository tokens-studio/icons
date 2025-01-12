import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNetworkLeft = ({
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
			d='M1.33337 9.73333L1.33337 13.6C1.33337 13.8209 1.51246 14 1.73337 14H4.26671C4.48762 14 4.66671 13.8209 4.66671 13.6V9.73333C4.66671 9.51242 4.48762 9.33333 4.26671 9.33333H1.73337C1.51246 9.33333 1.33337 9.51242 1.33337 9.73333Z'
			stroke='currentColor'
		/>
		<path
			d='M11.3334 6.06671V9.93337C11.3334 10.1543 11.5125 10.3334 11.7334 10.3334H14.2667C14.4876 10.3334 14.6667 10.1543 14.6667 9.93337V6.06671C14.6667 5.84579 14.4876 5.66671 14.2667 5.66671H11.7334C11.5125 5.66671 11.3334 5.84579 11.3334 6.06671Z'
			stroke='currentColor'
		/>
		<path
			d='M1.33337 2.39996L1.33337 6.26663C1.33337 6.48754 1.51246 6.66663 1.73337 6.66663H4.26671C4.48762 6.66663 4.66671 6.48754 4.66671 6.26663V2.39996C4.66671 2.17905 4.48762 1.99996 4.26671 1.99996H1.73337C1.51246 1.99996 1.33337 2.17905 1.33337 2.39996Z'
			stroke='currentColor'
		/>
		<path
			d='M4.66663 11.6667H6.99996C7.73636 11.6667 8.33329 11.0698 8.33329 10.3334V5.66671C8.33329 4.93033 7.73636 4.33337 6.99996 4.33337H4.66663'
			stroke='currentColor'
		/>
		<path d='M8.33337 8H11.3334' stroke='currentColor' />
	</svg>
);
export default SvgNetworkLeft;
