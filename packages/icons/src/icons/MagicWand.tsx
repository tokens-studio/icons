import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMagicWand = ({
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
			d='M2 14L8.66667 7.33333M12 4L10.3333 5.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33333 1.33337L6.96353 3.03649L8.66667 3.66671L6.96353 4.29692L6.33333 6.00004L5.70312 4.29692L4 3.66671L5.70312 3.03649L6.33333 1.33337Z'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6666 6.66663L13.0268 7.63983L14 7.99996L13.0268 8.36009L12.6666 9.33329L12.3065 8.36009L11.3333 7.99996L12.3065 7.63983L12.6666 6.66663Z'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMagicWand;
