import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGitMerge = ({
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
			d='M12 13.3333C12.7364 13.3333 13.3334 12.7364 13.3334 12C13.3334 11.2636 12.7364 10.6666 12 10.6666C11.2636 10.6666 10.6667 11.2636 10.6667 12C10.6667 12.7364 11.2636 13.3333 12 13.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 14V4.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 4.66663V5.99996C4 8.33329 5.66667 12 9.66667 12H10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.00002 4.66667C4.7364 4.66667 5.33335 4.06971 5.33335 3.33333C5.33335 2.59695 4.7364 2 4.00002 2C3.26364 2 2.66669 2.59695 2.66669 3.33333C2.66669 4.06971 3.26364 4.66667 4.00002 4.66667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGitMerge;
