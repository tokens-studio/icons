import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShieldDownload = ({
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
			d='M8 5.33337V10M8 10L10 8.00004M8 10L6 8.00004'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33326 12L2.08684 3.27501C2.03757 2.93015 2.26252 2.6083 2.60258 2.53273L7.71066 1.39759C7.9012 1.35526 8.09866 1.35526 8.2892 1.39759L13.3973 2.53273C13.7373 2.6083 13.9623 2.93015 13.913 3.275L12.6666 12C12.6195 12.33 12.3333 14.3333 7.99993 14.3333C3.6666 14.3333 3.3804 12.33 3.33326 12Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgShieldDownload;
