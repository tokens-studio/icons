import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLockSquare = ({
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
			d='M9.77772 7.99996H10.2666C10.4875 7.99996 10.6666 8.17903 10.6666 8.39996V10.9333C10.6666 11.1542 10.4875 11.3333 10.2666 11.3333H5.73325C5.51234 11.3333 5.33325 11.1542 5.33325 10.9333V8.39996C5.33325 8.17903 5.51234 7.99996 5.73325 7.99996H6.22214M9.77772 7.99996V6.33329C9.77772 5.77774 9.42212 4.66663 7.99992 4.66663C6.5777 4.66663 6.22214 5.77774 6.22214 6.33329V7.99996M9.77772 7.99996H6.22214'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2H12.6667C13.4031 2 14 2.59695 14 3.33333V12.6667C14 13.4031 13.4031 14 12.6667 14H3.33333C2.59695 14 2 13.4031 2 12.6667Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgLockSquare;
