import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFavouriteBook = ({
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
			d='M2.66675 12.6667V3.33333C2.66675 2.59695 3.2637 2 4.00008 2H12.9334C13.1543 2 13.3334 2.17909 13.3334 2.4V11.1429'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M10.6666 5.85315C10.6666 6.2541 10.5083 6.6392 10.2255 6.92405C9.57452 7.58005 8.94325 8.26405 8.26798 8.89618C8.11325 9.03898 7.86772 9.03378 7.71959 8.88451L5.77425 6.92405C5.18625 6.33148 5.18625 5.37481 5.77425 4.78224C6.36804 4.18384 7.33539 4.18384 7.92912 4.78224L7.99985 4.85349L8.07052 4.78228C8.35525 4.49522 8.74299 4.33331 9.14799 4.33331C9.55305 4.33331 9.94078 4.49521 10.2255 4.78224C10.5083 5.06713 10.6666 5.45221 10.6666 5.85315Z'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path d='M4 11.3333H13.3333' stroke='currentColor' strokeLinecap='round' />
		<path d='M4 14H13.3333' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M4.00008 14C3.2637 14 2.66675 13.403 2.66675 12.6666C2.66675 11.9302 3.2637 11.3333 4.00008 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFavouriteBook;
