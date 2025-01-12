import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCommodity = ({
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
			d='M8.09782 12.1867L8.88695 8.32C8.92495 8.1338 9.08882 8 9.27888 8H13.3876C13.5776 8 13.7415 8.1338 13.7795 8.32L14.5686 12.1867C14.6192 12.4346 14.4298 12.6667 14.1767 12.6667H8.48975C8.23668 12.6667 8.04722 12.4346 8.09782 12.1867Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M4.76457 7.51998L5.55369 3.65333C5.59169 3.46709 5.75553 3.33331 5.94561 3.33331H10.0543C10.2443 3.33331 10.4082 3.46709 10.4462 3.65333L11.2353 7.51998C11.2859 7.76791 11.0965 7.99998 10.8434 7.99998H5.15649C4.90343 7.99998 4.71397 7.76791 4.76457 7.51998Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M1.43131 12.1867L2.22043 8.32C2.25844 8.1338 2.42227 8 2.61235 8H6.72103C6.91109 8 7.07496 8.1338 7.11296 8.32L7.90209 12.1867C7.95269 12.4346 7.76323 12.6667 7.51016 12.6667H1.82324C1.57018 12.6667 1.38071 12.4346 1.43131 12.1867Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgCommodity;
