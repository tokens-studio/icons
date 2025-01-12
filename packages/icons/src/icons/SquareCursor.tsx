import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSquareCursor = ({
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
			d='M14 8V3.33333C14 2.59695 13.4031 2 12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.4031 2.59695 14 3.33333 14H8'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M13.9194 11.2782C14.2487 11.4808 14.228 11.9735 13.8894 12.0122L12.178 12.2062L11.4107 13.7475C11.2587 14.0535 10.7887 13.9035 10.7107 13.5248L9.87405 9.44751C9.80805 9.12751 10.096 8.92617 10.374 9.09751L13.9194 11.2782Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgSquareCursor;
