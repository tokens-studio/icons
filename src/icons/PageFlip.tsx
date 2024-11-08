import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPageFlip = ({
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
			d='M8 7.333h3.333M8 4.667h3.333M5.333 10V2.4c0-.22.18-.4.4-.4H13.6a.4.4 0 0 1 .4.4v8.933A2.667 2.667 0 0 1 11.333 14'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.333 10h4.934c.22 0 .402.178.42.398.081 1.012.5 3.602 2.646 3.602H4a2 2 0 0 1-2-2v-.667C2 10.597 2.597 10 3.333 10'
		/>
	</svg>
);
export default SvgPageFlip;
