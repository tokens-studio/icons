import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPodcast = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={18}
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
			d='M4 13.667a6.667 6.667 0 1 1 8 0'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4 13.667a6.667 6.667 0 1 1 8 0'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.019 11a4 4 0 1 1 5.963 0'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 9.667A1.333 1.333 0 1 0 8 7a1.333 1.333 0 0 0 0 2.667M6.717 11.855l.543-.362a1.33 1.33 0 0 1 1.48 0l.543.362c.436.291.662.811.575 1.329l-.339 2.035a1.33 1.33 0 0 1-1.315 1.114h-.408a1.33 1.33 0 0 1-1.315-1.114l-.34-2.035a1.33 1.33 0 0 1 .576-1.329'
		/>
	</svg>
);
export default SvgPodcast;
