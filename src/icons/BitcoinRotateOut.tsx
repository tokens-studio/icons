import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBitcoinRotateOut = ({
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
			d='M6 8v2.93c0 .22.18.4.4.4 1.977.012 3.6.051 3.6-1.663C10 7.837 8 8 6 8Zm0 0V5.07c0-.22.18-.4.4-.4 1.977-.012 3.6-.051 3.6 1.663C10 8.163 8 8 6 8Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 4.667v-1M8 12.333v-1'
		/>
	</svg>
);
export default SvgBitcoinRotateOut;
