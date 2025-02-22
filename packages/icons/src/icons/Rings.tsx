import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRings = ({
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
			d='M5.33337 5.33333C3.12423 5.33333 1.33337 7.1242 1.33337 9.33333C1.33337 11.5425 3.12423 13.3333 5.33337 13.3333C7.54251 13.3333 9.33337 11.5425 9.33337 9.33333C9.33337 7.1242 7.54251 5.33333 5.33337 5.33333ZM5.33337 5.33333V2'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 5.33333C8.45749 5.33333 6.66663 7.1242 6.66663 9.33333C6.66663 11.5425 8.45749 13.3333 10.6666 13.3333C12.8758 13.3333 14.6666 11.5425 14.6666 9.33333C14.6666 7.1242 12.8758 5.33333 10.6666 5.33333ZM10.6666 5.33333V2'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgRings;
