import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCardWallet = ({
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
			d='M12.6667 13.3333H3.33333C2.59695 13.3333 2 12.7364 2 12V5.99999C2 5.26361 2.59695 4.66666 3.33333 4.66666H12.6667C13.4031 4.66666 14 5.26361 14 5.99999V12C14 12.7364 13.4031 13.3333 12.6667 13.3333Z'
			stroke='currentColor'
		/>
		<path
			d='M4.66663 4.66667V2.4C4.66663 2.17909 4.84571 2 5.06663 2H10.9333C11.1542 2 11.3333 2.17909 11.3333 2.4V4.66667'
			stroke='currentColor'
		/>
		<path d='M6.66663 2V4.66667' stroke='currentColor' />
		<path d='M8 2V4.66667' stroke='currentColor' />
		<path
			d='M11 9.33332C10.8159 9.33332 10.6666 9.18406 10.6666 8.99999C10.6666 8.81592 10.8159 8.66666 11 8.66666C11.184 8.66666 11.3333 8.81592 11.3333 8.99999C11.3333 9.18406 11.184 9.33332 11 9.33332Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCardWallet;
