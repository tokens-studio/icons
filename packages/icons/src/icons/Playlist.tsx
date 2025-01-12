import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPlaylist = ({
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
			d='M1.33325 7.33337H10.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33325 11.3334H8.66659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33325 3.33337H13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3333 12.3333C13.3333 12.8856 12.8855 13.3333 12.3333 13.3333C11.781 13.3333 11.3333 12.8856 11.3333 12.3333C11.3333 11.781 11.781 11.3333 12.3333 11.3333C12.8855 11.3333 13.3333 11.781 13.3333 12.3333ZM13.3333 12.3333V7.06663C13.3333 6.84569 13.5123 6.66663 13.7333 6.66663H14.6666'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgPlaylist;
