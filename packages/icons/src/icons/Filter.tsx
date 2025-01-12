import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFilter = ({
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
			d='M2.66642 2H13.3332C13.7014 2 13.9998 2.29843 13.9998 2.66658L13.9999 3.72379C14 3.90065 13.9297 4.07025 13.8047 4.1953L9.52835 8.4714C9.40335 8.5964 9.33308 8.766 9.33308 8.9428V13.1461C9.33308 13.5799 8.92548 13.8981 8.50475 13.7929L7.17142 13.4596C6.87462 13.3854 6.66642 13.1187 6.66642 12.8128V8.9428C6.66642 8.766 6.59618 8.5964 6.47116 8.4714L2.19502 4.19526C2.06999 4.07024 1.99976 3.90067 1.99976 3.72386V2.66667C1.99976 2.29848 2.29823 2 2.66642 2Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFilter;
