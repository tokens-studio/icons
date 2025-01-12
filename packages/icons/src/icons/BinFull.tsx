import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBinFull = ({
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
			d='M12.8412 11.3585L13.959 2.9753C13.9832 2.7938 13.881 2.61904 13.711 2.55104L10.6668 1.33334H7.00009L6.54554 2.33334L3.33342 1.33334L2.13986 2.5269C2.05176 2.615 2.00975 2.73912 2.02622 2.86261L3.15901 11.3585C3.26892 12.1829 3.75716 12.9088 4.47924 13.3214L4.6925 13.4433C6.74202 14.6145 9.25816 14.6145 11.3077 13.4433L11.521 13.3214C12.243 12.9088 12.7313 12.1829 12.8412 11.3585Z'
			stroke='currentColor'
		/>
		<path d='M10.6666 1.33334L9.33325 4.66668' stroke='currentColor' />
		<path d='M6 4.33334L6.54545 2.33334' stroke='currentColor' />
		<path
			d='M2 3.33334C3.71429 5.11112 12.2857 5.11109 14 3.33334'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgBinFull;
