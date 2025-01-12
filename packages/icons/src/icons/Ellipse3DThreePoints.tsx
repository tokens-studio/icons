import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEllipse3DThreePoints = ({
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
			d='M3.33329 3.00002C3.70148 3.00002 3.99996 2.70154 3.99996 2.33335C3.99996 1.96517 3.70148 1.66669 3.33329 1.66669C2.96511 1.66669 2.66663 1.96517 2.66663 2.33335C2.66663 2.70154 2.96511 3.00002 3.33329 3.00002Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33337 15.6667H8.66671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33337 15.6666V2.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33329 16.3333C3.70148 16.3333 3.99996 16.0349 3.99996 15.6667C3.99996 15.2985 3.70148 15 3.33329 15C2.96511 15 2.66663 15.2985 2.66663 15.6667C2.66663 16.0349 2.96511 16.3333 3.33329 16.3333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33337 3.79551C6.24644 2.88058 7.40544 2.33331 8.66671 2.33331C11.6122 2.33331 14 5.31808 14 8.99998C14 11.1808 13.1624 13.117 11.8672 14.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeDasharray='3 3'
		/>
		<path
			d='M5.46607 14.3333C5.17506 14.06 4.90714 13.7503 4.66663 13.4097'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66667 16.3333C9.03487 16.3333 9.33333 16.0349 9.33333 15.6667C9.33333 15.2985 9.03487 15 8.66667 15C8.29847 15 8 15.2985 8 15.6667C8 16.0349 8.29847 16.3333 8.66667 16.3333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEllipse3DThreePoints;
