import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCursorPointer = ({
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
			fillRule='evenodd'
			clipRule='evenodd'
			d='M13.0018 6.64639C13.8049 6.97254 13.7436 8.1294 12.9105 8.36887L8.70699 9.5772L6.78712 13.5071C6.40663 14.2859 5.25665 14.1453 5.07492 13.2979L3.11783 4.17098C2.96424 3.4547 3.67472 2.85854 4.35345 3.13418L13.0018 6.64639Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgCursorPointer;
