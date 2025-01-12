import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShuffle = ({
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
			d='M14.6666 4.66675C12.6666 4.66675 8.99998 4.66675 7.66665 8.33342C6.33331 12.0001 3.33331 12.0001 1.33331 12.0001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3333 3.33325C13.3333 3.33325 14.146 4.14589 14.6666 4.66659C14.146 5.18729 13.3333 5.99992 13.3333 5.99992'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6666 12.0001C12.6666 12.0001 8.99998 12.0001 7.66665 8.33341C6.33331 4.66674 3.33331 4.66675 1.33331 4.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3333 13.3334C13.3333 13.3334 14.146 12.5207 14.6666 12.0001C14.146 11.4794 13.3333 10.6667 13.3333 10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgShuffle;
