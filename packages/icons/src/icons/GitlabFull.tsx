import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGitlabFull = ({
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
			d='M11.3715 1.69618C11.4105 1.57616 11.5789 1.5724 11.6231 1.69056L13.6991 7.23045L14.6311 9.71772C14.6521 9.77378 14.6331 9.83698 14.5847 9.87225L8.07841 14.6095C8.03168 14.6436 7.96821 14.6436 7.92148 14.6095L1.41521 9.87225C1.36679 9.83698 1.34782 9.77378 1.36884 9.71772L2.30058 7.23078L2.41183 6.93085L4.37494 1.69056C4.4192 1.5724 4.5876 1.57613 4.6266 1.69613L6.27296 6.76205C6.29081 6.81698 6.342 6.85418 6.39976 6.85418H9.60008C9.65781 6.85418 9.70908 6.81698 9.72688 6.76198L11.3715 1.69618Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgGitlabFull;
