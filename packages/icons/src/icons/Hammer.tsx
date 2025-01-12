import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHammer = ({
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
			d='M7.08925 7.37036L1.43237 13.0272L2.84659 14.4414L8.50345 8.78456'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.08915 7.37035L8.03194 6.42751C8.03194 6.42751 8.26768 4.30619 5.91064 1.94917L6.61775 1.24207L12.2746 5.0133L11.5675 5.7204L12.5103 6.66321L13.2174 5.9561L14.8673 7.60602L11.5675 10.9059L9.91761 9.25595L10.6247 8.54882L9.68188 7.60602L8.50334 8.78455L7.08915 7.37035Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHammer;
