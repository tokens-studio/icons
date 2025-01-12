import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFireFlame = ({
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
			d='M5.33331 12C5.33331 13.6099 6.52722 14 7.99998 14C10.5058 14 11.3333 12.3333 9.66665 9C7.33331 12 6.99998 7.33333 7.33331 6C6.33331 8 5.33331 9.87847 5.33331 12Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00002 14C11.3664 14 13.3334 12.0637 13.3334 8.75C13.3334 5.43629 8.00002 2 8.00002 2C8.00002 2 2.66669 5.43629 2.66669 8.75C2.66669 12.0637 4.63371 14 8.00002 14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFireFlame;
