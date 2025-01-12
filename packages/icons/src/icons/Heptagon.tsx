import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHeptagon = ({
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
			d='M7.82641 1.08356C7.93607 1.03074 8.06381 1.03074 8.17347 1.08356L13.5598 3.67747C13.6695 3.73029 13.7491 3.83018 13.7762 3.94885L15.1065 9.77731C15.1336 9.89598 15.1052 10.0206 15.0293 10.1157L11.3019 14.7898C11.2259 14.885 11.1109 14.9404 10.9891 14.9404H5.01075C4.88903 14.9404 4.77392 14.885 4.69802 14.7898L0.970573 10.1157C0.894673 10.0206 0.866246 9.89598 0.893333 9.77731L2.22365 3.94885C2.25073 3.83018 2.33039 3.73029 2.44006 3.67747L7.82641 1.08356Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHeptagon;
