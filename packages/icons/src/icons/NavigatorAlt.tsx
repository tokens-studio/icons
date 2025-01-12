import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNavigatorAlt = ({
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
			d='M7.99998 14.6667C11.6819 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6819 1.33337 7.99998 1.33337C4.31808 1.33337 1.33331 4.31814 1.33331 8.00004C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z'
			stroke='currentColor'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M9.28696 11.9127C9.07229 12.5325 8.19542 12.532 7.98142 11.9119L6.90162 8.7826L3.85527 7.48713C3.25158 7.2304 3.31224 6.35563 3.9456 6.1847L10.7665 4.34394C11.3018 4.19948 11.7805 4.71287 11.5991 5.23679L9.28696 11.9127Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgNavigatorAlt;
