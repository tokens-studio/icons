import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgScissor = ({
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
			d='M4.82399 4.66671C5.14069 4.31287 5.33325 3.84561 5.33325 3.33337C5.33325 2.22881 4.43782 1.33337 3.33325 1.33337C2.22869 1.33337 1.33325 2.22881 1.33325 3.33337C1.33325 4.43794 2.22869 5.33337 3.33325 5.33337C3.92559 5.33337 4.45778 5.07587 4.82399 4.66671ZM4.82399 4.66671L13.3333 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.82399 11.3333C5.14069 11.6872 5.33325 12.1544 5.33325 12.6667C5.33325 13.7713 4.43782 14.6667 3.33325 14.6667C2.22869 14.6667 1.33325 13.7713 1.33325 12.6667C1.33325 11.5621 2.22869 10.6667 3.33325 10.6667C3.92559 10.6667 4.45778 10.9242 4.82399 11.3333ZM4.82399 11.3333L13.3333 4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgScissor;
