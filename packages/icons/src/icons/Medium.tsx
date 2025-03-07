import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMedium = ({
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
			d='M4.66667 10.6667C6.13943 10.6667 7.33333 9.47277 7.33333 8.00004C7.33333 6.52728 6.13943 5.33337 4.66667 5.33337C3.19391 5.33337 2 6.52728 2 8.00004C2 9.47277 3.19391 10.6667 4.66667 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 10.6667C10.7364 10.6667 11.3333 9.47277 11.3333 8.00004C11.3333 6.52728 10.7364 5.33337 10 5.33337C9.26361 5.33337 8.66667 6.52728 8.66667 8.00004C8.66667 9.47277 9.26361 10.6667 10 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3333 10.6667C13.7015 10.6667 14 9.47277 14 8.00004C14 6.52728 13.7015 5.33337 13.3333 5.33337C12.9651 5.33337 12.6667 6.52728 12.6667 8.00004C12.6667 9.47277 12.9651 10.6667 13.3333 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMedium;
