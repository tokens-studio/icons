import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDogecoinRotateOut = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14.112 5.333a6.668 6.668 0 0 0-12.746 2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12 5.333h2.267a.4.4 0 0 0 .4-.4V2.667M1.921 10.667a6.668 6.668 0 0 0 12.746-2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.033 10.667H1.766a.4.4 0 0 0-.4.4v2.266'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M6.667 10.935v-5.87c0-.22.178-.399.4-.402C8.726 4.639 11 4.615 11 8s-2.273 3.361-3.934 3.337a.404.404 0 0 1-.4-.402Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.333 8H8'
		/>
	</svg>
);
export default SvgDogecoinRotateOut;
