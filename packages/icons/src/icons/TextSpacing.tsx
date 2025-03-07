import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTextSpacing = ({
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
			d='M3.48371 12.1611L12.5162 12.1611M3.48371 12.1611L5.15038 10.8277M3.48371 12.1611L5.15038 13.4944M12.5162 12.1611L11.1828 10.8277M12.5162 12.1611L11.1828 13.4944'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.99062 8.18562L7.65417 1.70563H9.08707L10.812 6.62494L12.537 1.70563H13.9699L11.6243 8.18562H9.99062Z'
			fill='currentColor'
		/>
		<path
			d='M2.03015 8.18562L4.3666 1.70563H6.00941L8.34586 8.18562H6.90383L6.42924 6.80748H3.93764L3.46305 8.18562H2.03015ZM4.33009 5.66663H6.04592L5.188 3.16591L4.33009 5.66663Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgTextSpacing;
