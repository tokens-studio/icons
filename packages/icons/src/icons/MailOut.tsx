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
		<g clipPath='url(#clip0_1_3588)'>
			<path
				d='M3.33337 6L6.33337 8L9.33337 6'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M11.3333 12.6667H1.99996C1.26358 12.6667 0.666626 12.0698 0.666626 11.3334V4.66671C0.666626 3.93033 1.26358 3.33337 1.99996 3.33337H10.6666C11.403 3.33337 12 3.93033 12 4.66671V6.00004'
				stroke='currentColor'
				strokeLinecap='round'
			/>
			<path
				d='M11.3334 9.33337H15.3334M15.3334 9.33337L13.3334 7.33337M15.3334 9.33337L13.3334 11.3334'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_3588'>
				<rect width={16} height={16} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgMailOut;
