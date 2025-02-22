import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCodeBracketsSquare = ({
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
			d='M6.66667 11.3334H6.22223C5.48585 11.3334 4.88889 10.7365 4.88889 10.0002C4.88889 9.55229 4.88889 9.08075 4.88889 8.74075C4.88889 8.37042 4 8.00002 4 8.00002C4 8.00002 4.88889 7.62962 4.88889 7.25929C4.88889 6.95729 4.88889 6.47059 4.88889 6.00001C4.88889 5.26363 5.48585 4.66669 6.22223 4.66669H6.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33325 11.3334H9.77772C10.5141 11.3334 11.1111 10.7365 11.1111 10.0002C11.1111 9.55229 11.1111 9.08075 11.1111 8.74075C11.1111 8.37042 11.9999 8.00002 11.9999 8.00002C11.9999 8.00002 11.1111 7.62962 11.1111 7.25929C11.1111 6.95729 11.1111 6.47059 11.1111 6.00001C11.1111 5.26363 10.5141 4.66669 9.77772 4.66669H9.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 2.4V13.6C14 13.8209 13.8209 14 13.6 14H2.4C2.17909 14 2 13.8209 2 13.6V2.4C2 2.17909 2.17909 2 2.4 2H13.6C13.8209 2 14 2.17909 14 2.4Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCodeBracketsSquare;
