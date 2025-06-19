import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMailIn = ({
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
		<g clipPath='url(#clip0_1_3597)'>
			<path
				d='M3.33331 6L6.33331 8L9.33331 6'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M11.3334 12.6667H2.00002C1.26364 12.6667 0.666687 12.0698 0.666687 11.3334V4.66671C0.666687 3.93033 1.26364 3.33337 2.00002 3.33337H10.6667C11.4031 3.33337 12 3.93033 12 4.66671V6.00004'
				stroke='currentColor'
				strokeLinecap='round'
			/>
			<path
				d='M15.3333 9.33337H11.3333M11.3333 9.33337L13.3333 7.33337M11.3333 9.33337L13.3333 11.3334'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_3597'>
				<rect width={16} height={16} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgMailIn;
