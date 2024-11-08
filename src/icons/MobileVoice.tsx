import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMobileVoice = ({
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
			d='m5.333 11.34.007-.007M5.333 3.333H2.4a.4.4 0 0 0-.4.4V13.6c0 .221.18.4.4.4h5.867a.4.4 0 0 0 .4-.4v-2.933M10.667 2v6.667M8.667 3.333v4M14.667 4.667V6M6.667 4.667V6M12.667 2.667V8'
		/>
	</svg>
);
export default SvgMobileVoice;
