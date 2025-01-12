import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCurveArray = ({
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
			d='M3.4427 11.3333C3.63563 10.6341 3.88892 9.96567 4.19726 9.33334M7.66667 5.19632C8.18814 4.81853 8.74514 4.48409 9.33334 4.19727'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.99999 14.6666C2.07952 14.6666 1.33333 13.9204 1.33333 13C1.33333 12.0795 2.07952 11.3333 2.99999 11.3333C3.92047 11.3333 4.66666 12.0795 4.66666 13C4.66666 13.9204 3.92047 14.6666 2.99999 14.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33334 8.00002C5.41287 8.00002 4.66667 7.25382 4.66667 6.33335C4.66667 5.41288 5.41287 4.66669 6.33334 4.66669C7.2538 4.66669 8 5.41288 8 6.33335C8 7.25382 7.2538 8.00002 6.33334 8.00002Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13 4.66665C12.0795 4.66665 11.3333 3.92045 11.3333 2.99998C11.3333 2.07951 12.0795 1.33331 13 1.33331C13.9205 1.33331 14.6667 2.07951 14.6667 2.99998C14.6667 3.92045 13.9205 4.66665 13 4.66665Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCurveArray;
