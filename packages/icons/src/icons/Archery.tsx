import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArchery = ({
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
			d='M5.33331 8.00001H11.3333M5.33331 8.00001L3.99998 6.66667H1.33331L2.66665 8.00001L1.33331 9.33334H3.99998L5.33331 8.00001ZM11.3333 8.00001L9.99998 6.66667M11.3333 8.00001L9.99998 9.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 15C12.5076 15 14 11.866 14 8C14 4.13401 12.5076 1 10.6666 1C8.82571 1 7.33331 4.13401 7.33331 8C7.33331 11.866 8.82571 15 10.6666 15Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgArchery;
