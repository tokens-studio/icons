import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFolderFilled = ({
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
			d='M2.53125 1.875C2.12514 1.875 1.73566 2.03633 1.44849 2.32349C1.16133 2.61066 1 3.00014 1 3.40625L1 12.5937C1 13.439 1.686 14.125 2.53125 14.125H13.4688C13.8749 14.125 14.2643 13.9637 14.5515 13.6765C14.8387 13.3893 15 12.9999 15 12.5937V5.15625C15 4.75014 14.8387 4.36066 14.5515 4.07349C14.2643 3.78633 13.8749 3.625 13.4688 3.625H7.5625C7.52854 3.625 7.49505 3.61709 7.46467 3.60191C7.4343 3.58672 7.40788 3.56467 7.3875 3.5375L6.6 2.4875C6.31125 2.1025 5.85625 1.875 5.375 1.875H2.53125Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgFolderFilled;
