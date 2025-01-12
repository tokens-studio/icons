import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMailOut = ({
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
			d='M4.33337 6L7.33337 8L10.3334 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.3333 12.6667H2.99996C2.26358 12.6667 1.66663 12.0698 1.66663 11.3334V4.66671C1.66663 3.93033 2.26358 3.33337 2.99996 3.33337H11.6666C12.403 3.33337 13 3.93033 13 4.66671V6.00004'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M12.3334 9.33337H16.3334M16.3334 9.33337L14.3334 7.33337M16.3334 9.33337L14.3334 11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMailOut;
