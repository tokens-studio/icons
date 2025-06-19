import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCloud = ({
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
		<g clipPath='url(#clip0_1_6583)'>
			<path
				d='M7.99996 2.66669C3.99996 2.66669 3.99996 5.33335 3.99996 6.66669C2.88885 6.66669 0.666626 7.33335 0.666626 10C0.666626 12.6667 2.88885 13.3334 3.99996 13.3334H12C13.1111 13.3334 15.3333 12.6667 15.3333 10C15.3333 7.33335 13.1111 6.66669 12 6.66669C12 5.33335 12 2.66669 7.99996 2.66669Z'
				stroke='currentColor'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_6583'>
				<rect width={16} height={16} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgCloud;
