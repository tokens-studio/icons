import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFrameAlt = ({
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
			d='M4 2v12M12 2v12M2 4h12'
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M6.4 6h3.2c.22 0 .4.18.4.4v3.2a.4.4 0 0 1-.4.4H6.4a.4.4 0 0 1-.4-.4V6.4c0-.22.18-.4.4-.4'
			clipRule='evenodd'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2 12h12'
		/>
	</svg>
);
export default SvgFrameAlt;
