import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOctagon = ({
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
			d='M8.84702 1.73003C8.94502 1.68943 9.05515 1.68943 9.15315 1.73003L14.0325 3.75111C14.1305 3.7917 14.2084 3.86957 14.249 3.96759L16.27 8.84689C16.3106 8.94489 16.3106 9.05503 16.27 9.15303L14.249 14.0324C14.2084 14.1304 14.1305 14.2082 14.0325 14.2488L9.15315 16.2699C9.05515 16.3105 8.94502 16.3105 8.84702 16.2699L3.96771 14.2488C3.8697 14.2082 3.79182 14.1304 3.75123 14.0324L1.73016 9.15303C1.68956 9.05503 1.68956 8.94489 1.73016 8.84689L3.75123 3.96759C3.79182 3.86957 3.8697 3.7917 3.96771 3.75111L8.84702 1.73003Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgOctagon;
