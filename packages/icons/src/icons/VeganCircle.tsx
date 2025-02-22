import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVeganCircle = ({
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
			d='M9.66667 7.66675C8.5 8.92168 7.33333 12.0001 7.33333 12.0001C7.33333 12.0001 5.66667 7.66675 4 6.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.0103 5.15328L12.2081 7.20658C12.3363 8.53864 11.3376 9.72464 10.0055 9.85291C8.69855 9.97878 7.51455 9.02338 7.38868 7.71638C7.26281 6.40938 8.22035 5.24782 9.52735 5.12197L11.7166 4.91117C11.8646 4.89692 11.9961 5.00532 12.0103 5.15328Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99998 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6818 1.33325 7.99998 1.33325C4.31808 1.33325 1.33331 4.31802 1.33331 7.99992C1.33331 11.6818 4.31808 14.6666 7.99998 14.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgVeganCircle;
