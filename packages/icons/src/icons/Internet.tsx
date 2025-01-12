import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgInternet = ({
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
			d='M14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66663 1.36621C8.66663 1.36621 10.6666 3.99996 10.6666 7.99993'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33337 14.6337C7.33337 14.6337 5.33337 11.9999 5.33337 7.99993C5.33337 3.99996 7.33337 1.36621 7.33337 1.36621'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.75305 10.3334H7.99996'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.75305 5.66663H14.2469'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M14.5859 11.945C14.9151 12.1474 14.8948 12.6403 14.5557 12.6788L12.8447 12.8727L12.0772 14.4142C11.9251 14.7197 11.4551 14.5702 11.3773 14.1916L10.5405 10.1142C10.4748 9.79425 10.7624 9.59285 11.0406 9.76405L14.5859 11.945Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgInternet;
