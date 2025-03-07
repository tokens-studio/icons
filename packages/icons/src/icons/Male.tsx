import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMale = ({
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
			d='M9.48816 6.49801C8.76489 5.77818 7.76769 5.33329 6.66663 5.33329C4.45749 5.33329 2.66663 7.12416 2.66663 9.33329C2.66663 11.5424 4.45749 13.3333 6.66663 13.3333C8.87576 13.3333 10.6666 11.5424 10.6666 9.33329C10.6666 8.22523 10.2161 7.22243 9.48816 6.49801ZM9.48816 6.49801L13.3333 2.66663M13.3333 2.66663H10.6666M13.3333 2.66663V5.33329'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMale;
